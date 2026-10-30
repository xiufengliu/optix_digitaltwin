"""API route declarations for the digital twin backend."""

from __future__ import annotations

import re
from pathlib import Path
from typing import List
from uuid import uuid4

from fastapi import APIRouter, HTTPException, WebSocket, WebSocketDisconnect, status

from .db import session_scope
from .models import SimulationRun, SimulationSnapshot, SimulationStatus, Scenario, DigitalTwin
from .optimizer import MeritOrderOptimizer, build_config_from_overrides
from .schemas import (
    RunCompareRequest,
    RunCompareResponse,
    RunCompareRow,
    SimulationRunCreate,
    SimulationRunRead,
    SimulationState,
    SimulationStepRequest,
    ScenarioCreate,
    ScenarioRead,
    ScenarioUpdate,
    DigitalTwinCreate,
    DigitalTwinRead,
    DigitalTwinUpdate,
    ProfileSettings,
    ProfileUpload,
    SyntheticPreviewRequest,
    TwinEvaluateRequest,
)
from .simulation_manager import SimulationManager

router = APIRouter()


@router.get("/health", tags=["system"])
async def health_check() -> dict[str, str]:
    """Lightweight health probe for local development."""
    return {"status": "ok"}


def _serialize_config(settings) -> dict:
    return {
        "data_path": str(settings.data_path),
        "investment_freq": settings.investment_freq,
        "enable_forecasts": settings.enable_forecasts,
        "model_dir": str(settings.model_dir),
        "scaler_dir": str(settings.scaler_dir),
    }


def _get_run_or_404(db, run_id: str) -> SimulationRun:
    run = db.get(SimulationRun, run_id)
    if run is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Run not found")
    return run


def _refresh_run_status_if_needed(db, run: SimulationRun) -> SimulationRun:
    """If a run references a non-existing session (e.g., after server restart),
    mark it as COMPLETED and clear the session_id so the UI shows it correctly.
    """
    try:
        manager = SimulationManager.get_global()
        if run.session_id and run.session_id not in manager._sessions:  # type: ignore[attr-defined]
            run.status = SimulationStatus.COMPLETED
            run.session_id = None
            db.add(run)
            db.flush()
    except Exception:
        pass
    return run


def _run_to_read_dict(run: SimulationRun) -> dict:
    """Serialize a SimulationRun into plain types for Pydantic v2.

    Avoids ORM adapter edge-cases by projecting Enum/date/json values.
    """
    return {
        "id": getattr(run, "id", None),
        "name": getattr(run, "name", None),
        "session_id": getattr(run, "session_id", None),
        "scenario_id": getattr(run, "scenario_id", None),
        "digital_twin_id": getattr(run, "digital_twin_id", None),
        "status": getattr(getattr(run, "status", None), "value", None) or str(getattr(run, "status", None) or ""),
        "created_at": getattr(run, "created_at", None),
        "updated_at": getattr(run, "updated_at", None),
        "config": getattr(run, "config", {}) or {},
        "notes": getattr(run, "notes", None),
    }


def _resolve_run_overrides(db, run: SimulationRun) -> dict:
    """Resolve run-specific local asset overrides for scenario-aware metrics."""
    run_config = getattr(run, "config", None) or {}
    stored = run_config.get("config_overrides")
    if isinstance(stored, dict) and stored:
        return stored

    if run.scenario_id:
        sc = db.get(Scenario, run.scenario_id)
        if sc is not None and isinstance(sc.config_overrides, dict):
            return sc.config_overrides or {}

    if run.digital_twin_id:
        dt = db.get(DigitalTwin, run.digital_twin_id)
        if dt is not None:
            return _overrides_with_twin(None, dt)

    dt_config = run_config.get("digital_twin_config")
    if isinstance(dt_config, dict):
        return _dt_to_config_overrides(
            dt_config.get("components") or [],
            dt_config.get("connections") or [],
        )

    return {}


def _infer_step_hours(env, upto_steps: int | None = None) -> float:
    dt_hours = 1.0 / 6.0
    try:
        df = getattr(env, "data", None)
        if df is not None and "timestamp" in df.columns:
            upto = int(upto_steps or getattr(env, "t", 0) or len(df))
            if upto > 1:
                ts = df["timestamp"].iloc[:upto]
                delta = (ts.iloc[1] - ts.iloc[0]).total_seconds() / 3600.0
                if delta > 0:
                    dt_hours = float(delta)
    except Exception:
        pass
    return dt_hours


def _extract_metric_series(env, overrides: dict | None = None, upto_steps: int | None = None) -> dict:
    """Return scenario-aware generation/load arrays for PED and chart endpoints."""
    t = int(getattr(env, "t", 0))
    wind = getattr(env, "_wind", None)
    solar = getattr(env, "_solar", None)
    hydro = getattr(env, "_hydro", None)
    load = getattr(env, "_load", None)
    if any(x is None for x in (wind, solar, hydro, load)):
        raise AttributeError("Missing arrays for PED computation")

    available_steps = max(1, min(t, len(load)))
    if upto_steps is None:
        upto = available_steps
    else:
        upto = max(1, min(int(upto_steps), available_steps))

    # The env scaled the dataset to the run's design when the session was
    # created (backend.profiles), so its arrays are the run's MW profiles.
    import numpy as np

    wind_series, solar_series, hydro_series, load_series = (np.asarray(x, dtype=float) for x in (wind, solar, hydro, load))

    return {
        "available_steps": available_steps,
        "steps": upto,
        "wind_mw": wind_series[:upto],
        "solar_mw": solar_series[:upto],
        "hydro_mw": hydro_series[:upto],
        "load_mw": load_series[:upto],
        "dt_hours": _infer_step_hours(env, upto),
    }


def _window_bounds(t: int, limit: int) -> tuple[int, int]:
    upto = max(1, int(t))
    start = max(0, upto - int(max(1, min(limit, 600000))))
    return start, upto


def _downsample(values, start: int, end: int, max_points: int | None):
    """Slice [start:end] and average into at most ``max_points`` buckets.

    Returns (bucket_start_indices, values). Bucketing is anchored at ``start``
    so every series windowed with the same bounds stays aligned.
    """
    import numpy as np

    arr = np.asarray(values, dtype=float)[start:end]
    n = len(arr)
    if not max_points or max_points <= 0 or n <= max_points:
        return list(range(start, end)), arr.tolist()
    bucket = int(np.ceil(n / max_points))
    pad = (-n) % bucket
    padded = np.concatenate([arr, np.full(pad, np.nan)]) if pad else arr
    means = np.nanmean(padded.reshape(-1, bucket), axis=1)
    return list(range(start, end, bucket)), means.tolist()


def _compute_ped_metrics(env, overrides: dict | None = None, upto_steps: int | None = None) -> dict:
    """Compute cumulative PED metrics from scenario-aware local series."""
    import numpy as np

    series = _extract_metric_series(env, overrides=overrides, upto_steps=upto_steps)
    gen = np.array(series["wind_mw"]) + np.array(series["solar_mw"]) + np.array(series["hydro_mw"])
    demand = np.array(series["load_mw"])
    step_hours = float(series["dt_hours"])
    total_gen_mwh = float(gen.sum() * step_hours)
    total_demand_mwh = float(demand.sum() * step_hours)
    ped_abs = total_gen_mwh - total_demand_mwh
    ped_ratio = float(total_gen_mwh / (total_demand_mwh + 1e-9))
    return {
        "available_steps": int(series["available_steps"]),
        "steps": int(series["steps"]),
        "period_hours": float(series["steps"]) * step_hours,
        "total_gen_mwh": total_gen_mwh,
        "total_demand_mwh": total_demand_mwh,
        "ped_absolute_mwh": ped_abs,
        "ped_ratio": ped_ratio,
    }


@router.post("/runs", response_model=SimulationRunRead, status_code=status.HTTP_201_CREATED, tags=["runs"])
async def create_run(payload: SimulationRunCreate) -> SimulationRunRead:
    """Persist a simulation run record and optionally spin up an environment session."""
    settings = payload.config.to_settings()
    config_dict = _serialize_config(settings)

    manager = SimulationManager.get_global()
    try:
        sim_session = manager.create_session(settings)
    except Exception as exc:  # pragma: no cover - convert to a user facing error
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc)) from exc
    session_id = sim_session.session_id

    with session_scope() as db:
        run = SimulationRun(
            id=str(uuid4()),
            name=payload.name,
            notes=payload.notes,
            config=config_dict,
            status=SimulationStatus.RUNNING,
            session_id=session_id,
        )
        db.add(run)
        db.flush()

        snapshot = SimulationState.model_validate(manager.build_state_snapshot(sim_session))
        snapshot_row = SimulationSnapshot(
            run_id=run.id,
            timestep=snapshot.metrics.get("timestep") if snapshot.metrics else None,
            payload=snapshot.model_dump(),
        )
        db.add(snapshot_row)
        db.refresh(run)
        return SimulationRunRead.model_validate(_run_to_read_dict(run))


@router.get("/runs", response_model=List[SimulationRunRead], tags=["runs"])
async def list_runs() -> List[SimulationRunRead]:
    """Return every stored simulation run sorted by creation time."""
    with session_scope() as db:
        rows = db.query(SimulationRun).order_by(SimulationRun.created_at.desc()).all()
        refreshed = [_refresh_run_status_if_needed(db, r) for r in rows]
        return [SimulationRunRead.model_validate(_run_to_read_dict(row)) for row in refreshed]


@router.get("/runs/{run_id}", response_model=SimulationRunRead, tags=["runs"])
async def get_run(run_id: str) -> SimulationRunRead:
    """Retrieve a specific simulation run by identifier."""
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        run = _refresh_run_status_if_needed(db, run)
        return SimulationRunRead.model_validate(_run_to_read_dict(run))


@router.delete("/runs/{run_id}", tags=["runs"])
async def delete_run(run_id: str) -> dict:
    """Delete a simulation run and free its session if present."""
    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        session_id = run.session_id
        # Manually delete snapshots (SQLite may not honor ON DELETE CASCADE by default)
        db.query(SimulationSnapshot).filter(SimulationSnapshot.run_id == run_id).delete()
        db.delete(run)
    if session_id:
        try:
            manager.close_session(session_id)
        except Exception:
            pass
    return {"status": "deleted", "id": run_id}


@router.post("/runs/{run_id}/restart", response_model=SimulationRunRead, tags=["runs"])
async def restart_run(run_id: str) -> SimulationRunRead:
    """Start a fresh session (t=0) for a run, reusing its stored configuration.

    Sessions live in memory, so every backend restart leaves existing runs
    without one; this makes them usable again instead of dead entries.
    """
    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        overrides = _resolve_run_overrides(db, run)
        old_session_id = run.session_id
        stored = run.config or {}

    if old_session_id:
        manager.close_session(old_session_id)

    from pathlib import Path
    from .simulation_manager import SimulationSettings

    defaults = manager.settings
    settings = SimulationSettings(
        data_path=Path(stored.get("data_path") or defaults.data_path),
        investment_freq=int(stored.get("investment_freq") or defaults.investment_freq),
        enable_forecasts=bool(stored.get("enable_forecasts", False)),
        model_dir=Path(stored.get("model_dir") or defaults.model_dir),
        scaler_dir=Path(stored.get("scaler_dir") or defaults.scaler_dir),
    )
    try:
        sim_session = manager.create_session(settings, config_overrides=overrides or None)
    except Exception as exc:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc)) from exc

    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        run.session_id = sim_session.session_id
        run.status = SimulationStatus.RUNNING
        db.add(run)
        db.flush(); db.refresh(run)
        return SimulationRunRead.model_validate(_run_to_read_dict(run))


@router.get("/runs/{run_id}/state", response_model=SimulationState, tags=["runs"])
async def get_run_state(run_id: str) -> SimulationState:
    """Return the latest cached simulation state for a given run."""
    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        if not run.session_id:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Run has no active session")
        session_id = run.session_id
    try:
        session = manager.get_session(session_id)
    except KeyError as exc:
        raise HTTPException(status_code=status.HTTP_410_GONE, detail="Simulation session expired") from exc
    snapshot = manager.build_state_snapshot(session)
    return SimulationState.model_validate(snapshot)


@router.post("/runs/{run_id}/step", response_model=SimulationState, tags=["runs"])
async def step_run(run_id: str, payload: SimulationStepRequest) -> SimulationState:
    """Advance the simulation run and return the resulting state."""
    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        if not run.session_id:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Run has no active session")
        session_id = run.session_id

    try:
        snapshot = SimulationState.model_validate(manager.step_session(session_id, payload.steps))
    except KeyError as exc:
        raise HTTPException(status_code=status.HTTP_410_GONE, detail="Simulation session expired") from exc

    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        run.status = SimulationStatus.RUNNING
        db.add(run)
        snapshot_row = SimulationSnapshot(
            run_id=run_id,
            timestep=snapshot.metrics.get("timestep") if snapshot.metrics else None,
            payload=snapshot.model_dump(),
        )
        db.add(snapshot_row)

    return snapshot


@router.get("/runs/{run_id}/history", tags=["runs"])
async def get_run_history(run_id: str, limit: int = 100) -> List[dict]:
    """Return persisted simulation snapshots for a run."""
    limit = max(1, min(limit, 1000))
    with session_scope() as db:
        _get_run_or_404(db, run_id)
        rows = (
            db.query(SimulationSnapshot)
            .filter(SimulationSnapshot.run_id == run_id)
            .order_by(SimulationSnapshot.created_at.desc())
            .limit(limit)
            .all()
        )
        return [row.payload for row in rows]


# ------------------ PED computation ------------------

@router.get("/runs/{run_id}/ped", tags=["runs"])
async def get_run_ped(run_id: str) -> dict:
    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        if not run.session_id:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Run has no active session")
        session_id = run.session_id
        scenario_overrides = _resolve_run_overrides(db, run)
    try:
        session = manager.get_session(session_id)
    except KeyError:
        raise HTTPException(status_code=status.HTTP_410_GONE, detail="Simulation session expired")

    env = session.wrapper or session.env
    try:
        metrics = _compute_ped_metrics(env, overrides=scenario_overrides)
        return {
            "steps": metrics["steps"],
            "period_hours": metrics["period_hours"],
            "total_gen_mwh": metrics["total_gen_mwh"],
            "total_demand_mwh": metrics["total_demand_mwh"],
            "ped_absolute_mwh": metrics["ped_absolute_mwh"],
            "ped_ratio": metrics["ped_ratio"],
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"PED calculation failed: {exc}")


@router.post("/runs/compare", response_model=RunCompareResponse, tags=["runs"])
async def compare_runs(payload: RunCompareRequest) -> RunCompareResponse:
    """Compare runs on a common horizon so totals are directly comparable."""
    if not payload.run_ids:
        return RunCompareResponse(common_steps=None, common_period_hours=None, rows=[])

    manager = SimulationManager.get_global()
    run_ids = list(dict.fromkeys(payload.run_ids))

    with session_scope() as db:
        runs = []
        overrides_by_run_id: dict[str, dict] = {}
        for run_id in run_ids:
            run = db.get(SimulationRun, run_id)
            if run is None:
                continue
            run = _refresh_run_status_if_needed(db, run)
            runs.append(run)
            overrides_by_run_id[run.id] = _resolve_run_overrides(db, run)

    if payload.full_period:
        return await _compare_full_period(runs, overrides_by_run_id)

    session_envs: dict[str, tuple[object, int, dict]] = {}
    common_steps: int | None = None

    for run in runs:
        if not run.session_id:
            continue
        try:
            session = manager.get_session(run.session_id)
        except KeyError:
            continue

        env = session.wrapper or session.env
        overrides = overrides_by_run_id.get(run.id) or {}
        try:
            available_steps = int(_compute_ped_metrics(env, overrides=overrides)["available_steps"])
        except Exception:
            continue

        session_envs[run.id] = (env, available_steps, overrides)
        if payload.use_common_horizon:
            common_steps = available_steps if common_steps is None else min(common_steps, available_steps)

    rows: list[RunCompareRow] = []
    for run in runs:
        row = RunCompareRow(
            run_id=run.id,
            name=run.name,
            status=getattr(getattr(run, "status", None), "value", None) or str(getattr(run, "status", None) or ""),
            comparable=False,
        )

        env_info = session_envs.get(run.id)
        if env_info is None:
            rows.append(row)
            continue

        env, available_steps, overrides = env_info
        compare_steps = common_steps if payload.use_common_horizon and common_steps is not None else available_steps
        metrics = _compute_ped_metrics(env, overrides=overrides, upto_steps=compare_steps)
        row.comparable = True
        row.available_steps = available_steps
        row.compared_steps = int(metrics["steps"])
        row.period_hours = float(metrics["period_hours"])
        row.total_gen_mwh = float(metrics["total_gen_mwh"])
        row.total_demand_mwh = float(metrics["total_demand_mwh"])
        row.ped_absolute_mwh = float(metrics["ped_absolute_mwh"])
        row.ped_ratio = float(metrics["ped_ratio"])
        rows.append(row)

    common_period_hours = None
    if payload.use_common_horizon and common_steps is not None:
        any_env = next(iter(session_envs.values()), None)
        step_hours = _infer_step_hours(any_env[0], common_steps) if any_env else 1.0 / 6.0
        common_period_hours = common_steps * step_hours

    return RunCompareResponse(
        common_steps=common_steps if payload.use_common_horizon else None,
        common_period_hours=common_period_hours,
        rows=rows,
    )


async def _compare_full_period(runs: list, overrides_by_run_id: dict) -> RunCompareResponse:
    """Whole-period KPIs of each run's design; the dispatch is deterministic, so
    no live session is needed (inactive runs compare too)."""
    import asyncio

    from .site_sim import simulate

    def work():
        df = _dataset_frame()
        rows: list[RunCompareRow] = []
        hours = None
        for run in runs:
            overrides = overrides_by_run_id.get(run.id) or {}
            site = simulate(df, overrides)
            k = site.kpis
            n = len(site.soc_mwh)
            hours = n * site.dt_hours
            rows.append(RunCompareRow(
                run_id=run.id,
                name=run.name,
                status=getattr(getattr(run, "status", None), "value", None) or str(getattr(run, "status", None) or ""),
                comparable=True,
                available_steps=n,
                compared_steps=n,
                period_hours=hours,
                total_gen_mwh=k["total_gen_mwh"],
                total_demand_mwh=k["total_demand_mwh"],
                ped_absolute_mwh=k["ped_absolute_mwh"],
                ped_ratio=k["ped_ratio"],
                total_energy_ped_ratio=k.get("total_energy_ped_ratio"),
                self_sufficiency_ratio=k.get("self_sufficiency_ratio"),
                grid_purchase_mwh=k.get("grid_purchase_mwh"),
                export_delivered_mwh=k.get("export_delivered_mwh"),
                heat_demand_mwh=k.get("heat_demand_mwh"),
            ))
        return RunCompareResponse(common_steps=None, common_period_hours=hours, rows=rows)

    return await asyncio.to_thread(work)


def _site_of(env, overrides: dict | None):
    """Simulation result of a session (computed once per design, see backend.site_sim)."""
    site = getattr(env, "site", None)
    if site is None:
        from .site_sim import simulate

        site = simulate(env.data, overrides)
    return site


def _data_source_details(sources: dict, overrides: dict | None) -> list[dict]:
    """``[{component, type, channel, label, source}]`` for the run's input series."""
    from .components import CHANNELS

    comps = {c.get('id'): c for c in (overrides or {}).get('twin_components') or []}
    out = []
    for key, source in sources.items():
        cid, _, channel = key.rpartition('/')
        comp = comps.get(cid) or {}
        ctype = comp.get('type', '')
        label = next((ch.label for ch in CHANNELS.get(ctype, []) if ch.key == channel), channel)
        out.append({'component': comp.get('name') or cid, 'type': ctype, 'channel': channel, 'label': label, 'source': source})
    return out


def _session_env_or_error(run_id: str):
    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        run = _refresh_run_status_if_needed(db, run)
        session_id = run.session_id
        overrides = _resolve_run_overrides(db, run)
    if not session_id:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Run has no active session")
    try:
        session = manager.get_session(session_id)
    except KeyError:
        raise HTTPException(status_code=status.HTTP_410_GONE, detail="Simulation session expired")
    return session.wrapper or session.env, overrides


@router.get("/runs/{run_id}/energy_series", tags=["runs"])
async def get_energy_series(run_id: str, limit: int = 2000, max_points: int = 0) -> dict:
    """Return generation and load series for the last ``limit`` steps.

    Values are in MW per step; include optional timestamps if present in env.data.
    With ``max_points`` > 0 the window is bucket-averaged to at most that many
    points (``/optimize`` accepts the same parameters and stays aligned).
    ``load_mw`` is all electricity demand including heat pumps and EV charging.
    """
    env, scenario_overrides = _session_env_or_error(run_id)
    try:
        import numpy as np

        series = _extract_metric_series(env, overrides=scenario_overrides)
        site = _site_of(env, scenario_overrides)
        start, upto = _window_bounds(series['steps'], limit)
        upto = min(upto, series['steps'])
        start = min(start, upto)
        gen_full = np.asarray(series['wind_mw']) + np.asarray(series['solar_mw']) + np.asarray(series['hydro_mw'])

        steps, gen = _downsample(gen_full, start, upto, max_points)
        _, demand = _downsample(series['load_mw'], start, upto, max_points)
        _, solar = _downsample(series['solar_mw'], start, upto, max_points)
        _, wind = _downsample(series['wind_mw'], start, upto, max_points)
        _, hydro = _downsample(series['hydro_mw'], start, upto, max_points)
        extra: dict[str, list] = {}
        dt_h = float(series['dt_hours'])
        if site.has_heat:
            for key, name in (('chp_el_mwh', 'chp_mw'), ('hp_el_mwh', 'heat_pump_mw'), ('heat_demand_mwh', 'heat_demand_mw')):
                _, vals = _downsample(np.asarray(site.series_mwh[key], dtype=float) / dt_h, start, upto, max_points)
                extra[name] = vals
        if site.ev_mw is not None:
            _, extra['ev_mw'] = _downsample(site.ev_mw, start, upto, max_points)

        timestamps = None
        try:
            df = getattr(env, 'data', None)
            if df is not None and 'timestamp' in df.columns:
                ts = df['timestamp']
                timestamps = [str(ts.iloc[i]) for i in steps]
        except Exception:
            timestamps = None

        return {
            'start': start,
            'end': upto,
            'steps': steps,
            'timestamps': timestamps,
            'dt_hours': dt_h,
            'gen_mw': gen,
            'load_mw': demand,
            'solar_mw': solar,
            'wind_mw': wind,
            'hydro_mw': hydro,
            **extra,
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Series calculation failed: {exc}")


@router.get("/runs/{run_id}/optimize", tags=["runs"])
async def optimize_run_merit_order(run_id: str, limit: int = 0, max_points: int = 0, persist: bool = False) -> dict:
    """Merit-order dispatch of the run's design (consistent with paper.txt).

    Dispatch is simulated from step 0 over the whole horizon when the session
    starts (battery and storage states carry over); series and KPIs cover the
    steps simulated so far. With ``limit`` > 0 the returned series are
    restricted to the same window/buckets as ``/energy_series``.
    """
    try:
        env, scenario_overrides = _session_env_or_error(run_id)
    except HTTPException as exc:
        if exc.status_code == status.HTTP_409_CONFLICT:
            raise HTTPException(status_code=410, detail="Simulation session expired")
        raise
    try:
        import numpy as np

        site = _site_of(env, scenario_overrides)
        cfg = site.config
        config = {**cfg.__dict__, 'has_dsm': site.has_dsm, 'has_heat': site.has_heat}

        # Persist a snapshot only on explicit request; the UI polls this endpoint
        if persist:
            try:
                with session_scope() as db:
                    db.add(SimulationSnapshot(
                        run_id=run_id,
                        timestep=int(getattr(env, 't', 0)),
                        payload={'type': 'optimizer_merit_order', 'config': config, 'kpis': site.kpis_upto(int(getattr(env, 't', 0) or 0) or None)},
                    ))
            except Exception:
                pass

        dt_h = float(site.dt_hours)
        # Like the other run endpoints: the steps simulated so far
        n = max(1, min(int(getattr(env, 't', 0) or 0), len(site.soc_mwh)))
        kpis = site.kpis_upto(n)
        if limit and limit > 0:
            start, end = _window_bounds(n, limit)
            end = min(end, n)
        else:
            start, end = 0, n
        series_mwh: dict[str, list] = {}
        series_mw: dict[str, list] = {}
        steps: list[int] = []
        for k, v in site.series_mwh.items():
            steps, windowed = _downsample(v, start, end, max_points)
            series_mwh[k] = windowed
            series_mw[k.replace('_mwh', '_mw')] = (np.asarray(windowed) / max(dt_h, 1e-9)).tolist()
        _, soc = _downsample(site.soc_mwh, start, end, max_points)
        result = {
            'config': config,
            'kpis': kpis,
            'start': start,
            'end': end,
            'steps': steps,
            'series_mwh': series_mwh,
            'series_mw': series_mw,
            'soc_mwh': soc,
            'dt_hours': dt_h,
            'data_sources': site.sources,
            'data_source_details': _data_source_details(site.sources, scenario_overrides),
        }
        if site.ts_soc_mwh is not None:
            _, result['thermal_soc_mwh'] = _downsample(site.ts_soc_mwh, start, end, max_points)
        return result
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Optimization failed: {exc}")


# ------------------ Scenarios ------------------

@router.post('/scenarios', response_model=ScenarioRead, tags=['scenarios'])
async def create_scenario(payload: ScenarioCreate) -> ScenarioRead:
    with session_scope() as db:
        # A scenario linked to a digital twin takes its asset sizes from the design
        config = payload.config_overrides or {}
        if payload.digital_twin_id:
            dt = db.get(DigitalTwin, payload.digital_twin_id)
            if dt is None:
                raise HTTPException(status_code=404, detail='Digital twin not found')
            config = _overrides_with_twin(config, dt)
        else:
            config = _without_twin_design(config)

        scenario = Scenario(
            id=str(uuid4()),
            name=payload.name,
            description=payload.description,
            details=payload.details,
            config_overrides=config,
            digital_twin_id=payload.digital_twin_id or None,
        )
        db.add(scenario)
        db.flush(); db.refresh(scenario)
        return ScenarioRead.from_orm(scenario)


@router.get('/scenarios', response_model=List[ScenarioRead], tags=['scenarios'])
async def list_scenarios() -> List[ScenarioRead]:
    with session_scope() as db:
        rows = db.query(Scenario).order_by(Scenario.created_at.desc()).all()
        return [ScenarioRead.from_orm(r) for r in rows]


@router.get('/scenarios/{scenario_id}', response_model=ScenarioRead, tags=['scenarios'])
async def get_scenario(scenario_id: str) -> ScenarioRead:
    with session_scope() as db:
        sc = db.get(Scenario, scenario_id)
        if sc is None:
            raise HTTPException(status_code=404, detail='Scenario not found')
        return ScenarioRead.from_orm(sc)


@router.patch('/scenarios/{scenario_id}', response_model=ScenarioRead, tags=['scenarios'])
async def update_scenario(scenario_id: str, payload: ScenarioUpdate) -> ScenarioRead:
    with session_scope() as db:
        sc = db.get(Scenario, scenario_id)
        if sc is None:
            raise HTTPException(status_code=404, detail='Scenario not found')
        if payload.name is not None:
            sc.name = payload.name
        if payload.description is not None:
            sc.description = payload.description
        if payload.details is not None:
            sc.details = payload.details
        if payload.config_overrides is not None:
            sc.config_overrides = payload.config_overrides
        if payload.digital_twin_id is not None:
            # "" unlinks; the scenario keeps its current sizes as manual values
            if payload.digital_twin_id and db.get(DigitalTwin, payload.digital_twin_id) is None:
                raise HTTPException(status_code=404, detail='Digital twin not found')
            sc.digital_twin_id = payload.digital_twin_id or None
        if sc.digital_twin_id:
            dt = db.get(DigitalTwin, sc.digital_twin_id)
            if dt is not None:
                sc.config_overrides = _overrides_with_twin(sc.config_overrides, dt)
        else:
            sc.config_overrides = _without_twin_design(sc.config_overrides)
        db.add(sc); db.flush(); db.refresh(sc)
        return ScenarioRead.from_orm(sc)


@router.post('/scenarios/{scenario_id}/run', response_model=SimulationRunRead, tags=['scenarios'])
async def run_scenario(scenario_id: str) -> SimulationRunRead:
    manager = SimulationManager.get_global()
    with session_scope() as db:
        sc = db.get(Scenario, scenario_id)
        if sc is None:
            raise HTTPException(status_code=404, detail='Scenario not found')
        # Keep a copy of the linked design so the run shows what was simulated
        twin = db.get(DigitalTwin, sc.digital_twin_id) if sc.digital_twin_id else None
        # Build session using scenario overrides
        try:
            sim_session = manager.create_session(config_overrides=sc.config_overrides)
        except Exception as exc:
            raise HTTPException(status_code=400, detail=str(exc))

        run = SimulationRun(
            id=str(uuid4()),
            name=_run_name(sc.name),
            notes=None,
            config={
                'data_path': str(manager.settings.data_path),
                'investment_freq': manager.settings.investment_freq,
                'enable_forecasts': manager.settings.enable_forecasts,
                'model_dir': str(manager.settings.model_dir),
                'scaler_dir': str(manager.settings.scaler_dir),
                'config_overrides': sc.config_overrides or {},
                **({'digital_twin_config': {'name': twin.name, 'components': _scenario_components(twin, sc.config_overrides), 'connections': twin.connections}} if twin else {}),
            },
            status=SimulationStatus.RUNNING,
            session_id=sim_session.session_id,
            scenario_id=sc.id,
            digital_twin_id=twin.id if twin else None,
        )
        db.add(run)
        db.flush(); db.refresh(run)
        return SimulationRunRead.model_validate(_run_to_read_dict(run))


@router.delete('/scenarios/{scenario_id}', tags=['scenarios'])
async def delete_scenario(scenario_id: str) -> dict:
    with session_scope() as db:
        sc = db.get(Scenario, scenario_id)
        if sc is None:
            raise HTTPException(status_code=404, detail='Scenario not found')
        # SQLite does not enforce ON DELETE SET NULL; runs keep their own copy of the settings
        for run in db.query(SimulationRun).filter(SimulationRun.scenario_id == scenario_id).all():
            run.scenario_id = None
            db.add(run)
        db.delete(sc)
        return {"status": "deleted", "id": scenario_id}


@router.websocket("/runs/{run_id}/ws")
async def run_stream(websocket: WebSocket, run_id: str) -> None:
    """Interactive WebSocket channel for stepping and monitoring a run."""
    await websocket.accept()

    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = db.get(SimulationRun, run_id)
        session_id = run.session_id if run is not None else None
    if run is None:
        await websocket.send_json({"type": "error", "message": "Run not found"})
        await websocket.close(code=4404)
        return
    if not session_id:
        await websocket.send_json({"type": "error", "message": "Run has no active session"})
        await websocket.close(code=4400)
        return

    try:
        session = manager.get_session(session_id)
    except KeyError:
        await websocket.send_json({"type": "error", "message": "Simulation session expired"})
        await websocket.close(code=4404)
        return

    initial = SimulationState.model_validate(manager.build_state_snapshot(session))
    await websocket.send_json({"type": "state", "payload": initial.model_dump()})

    try:
        while True:
            message = await websocket.receive_json()
            command = str(message.get("command", "")).lower()

            if command == "ping":
                await websocket.send_json({"type": "pong"})
                continue

            if command == "step":
                steps = max(1, min(int(message.get("steps", 1)), 10000))
                snapshot = SimulationState.model_validate(manager.step_session(session_id, steps))
                await websocket.send_json({"type": "state", "payload": snapshot.model_dump()})
                continue

            if command == "state":
                session = manager.get_session(session_id)
                snapshot = SimulationState.model_validate(manager.build_state_snapshot(session))
                await websocket.send_json({"type": "state", "payload": snapshot.model_dump()})
                continue

            await websocket.send_json({"type": "error", "message": "Unknown command"})

    except WebSocketDisconnect:
        return
    except Exception as exc:  # pragma: no cover - defensive handler
        try:
            message = "Simulation session expired" if isinstance(exc, KeyError) else str(exc)
            await websocket.send_json({"type": "error", "message": message})
            await websocket.close(code=1011)
        except Exception:
            pass


# ------------------ Digital Twins ------------------

def _dt_to_read_dict(dt: DigitalTwin) -> dict:
    return {
        "id": dt.id,
        "name": dt.name,
        "description": dt.description,
        "created_at": dt.created_at,
        "updated_at": dt.updated_at,
        "components": dt.components or [],
        "connections": dt.connections or [],
    }


@router.post('/digital-twins', response_model=DigitalTwinRead, tags=['digital-twins'])
async def create_digital_twin(payload: DigitalTwinCreate) -> DigitalTwinRead:
    """Create a new digital twin configuration."""
    with session_scope() as db:
        dt = DigitalTwin(
            id=str(uuid4()),
            name=payload.name,
            description=payload.description,
            components=[c.model_dump() for c in payload.components],
            connections=[c.model_dump(by_alias=True) for c in payload.connections],
        )
        db.add(dt)
        db.flush()
        db.refresh(dt)
        return DigitalTwinRead.model_validate(_dt_to_read_dict(dt))


@router.get('/digital-twins', response_model=List[DigitalTwinRead], tags=['digital-twins'])
async def list_digital_twins() -> List[DigitalTwinRead]:
    """List all digital twin configurations."""
    with session_scope() as db:
        rows = db.query(DigitalTwin).order_by(DigitalTwin.created_at.desc()).all()
        return [DigitalTwinRead.model_validate(_dt_to_read_dict(r)) for r in rows]


# ------------------ Component data (uploads / synthetic profiles) ------------------

def _dataset_frame():
    manager = SimulationManager.get_global()
    return manager._load_data(manager.settings.resolve(Path.cwd()).data_path)


def _channel_or_400(ctype: str, channel: str):
    from .components import CHANNELS

    for ch in CHANNELS.get(ctype, []):
        if ch.key == channel:
            return ch
    raise HTTPException(status_code=400, detail=f"A {ctype or 'component'} has no '{channel}' data channel")


def _profile_preview(df, values, channel, year: int | None) -> dict:
    """Hourly values of one year plus whole-horizon statistics of a channel series."""
    import numpy as np
    import pandas as pd

    ts = df['timestamp']
    years = sorted(int(y) for y in ts.dt.year.unique())
    year = year if year in years else years[-1]
    frame = pd.DataFrame({'v': np.asarray(values, dtype=float)}, index=pd.DatetimeIndex(ts))
    hourly = frame.loc[str(year)].resample('h').mean()['v']
    step_h = (ts.iloc[1] - ts.iloc[0]).total_seconds() / 3600 if len(ts) > 1 else 1 / 6
    n_years = max(1e-9, len(ts) * step_h / 8760)
    arr = np.asarray(values, dtype=float)
    if channel.unit == 'DKK/MWh':
        stats = {'mean': float(arr.mean()), 'min': float(arr.min()), 'max': float(arr.max())}
    else:
        year_vals = hourly.to_numpy()
        stats = {
            'annual_kwh': float(arr.sum() * step_h / n_years),
            'year_kwh': float(np.nansum(year_vals)),
            'peak_kw': float(arr.max()),
            'mean_kw': float(arr.mean()),
        }
    return {
        'year': year,
        'years': years,
        'unit': channel.unit,
        'start': str(hourly.index[0]) if len(hourly) else None,
        'hourly': [round(float(v), 4) for v in hourly.to_numpy()],
        'stats': stats,
    }


@router.post('/digital-twins/synthetic-preview', tags=['digital-twins'])
async def synthetic_profile_preview(payload: SyntheticPreviewRequest) -> dict:
    """Synthetic (model) series of a component channel: one year hourly + statistics."""
    import asyncio

    from .components import synthetic

    ch = _channel_or_400(payload.component.type, payload.channel)

    def work():
        df = _dataset_frame()
        values = synthetic(df, payload.component.type, payload.channel, payload.component.params)
        return _profile_preview(df, values, ch, payload.year)

    return await asyncio.to_thread(work)


@router.post('/digital-twins/evaluate', tags=['digital-twins'])
async def evaluate_twin_design(payload: TwinEvaluateRequest) -> dict:
    """Annual averages of a design simulated over the whole dataset (same model
    and data as a run), for the live summary while a twin is being edited."""
    import asyncio

    from .site_sim import simulate

    components = [c for c in payload.components if isinstance(c, dict) and c.get('type')]
    overrides = _dt_to_config_overrides(components, [])
    for key in ('owned_solar_capacity_mw', 'owned_wind_capacity_mw', 'owned_hydro_capacity_mw', 'owned_load_peak_mw'):
        overrides.setdefault(key, 0.0)
    if payload.twin_id:
        overrides['twin_id'] = payload.twin_id

    def work():
        df = _dataset_frame()
        site = simulate(df, overrides)
        years = max(1e-9, len(df) * site.dt_hours / 8760)
        k = site.kpis
        per_year = {key: v / years for key, v in k.items() if key.endswith('_mwh') and isinstance(v, (int, float))}
        flh = _dataset_full_load_hours()
        return {
            'years': years,
            'annual_mwh': per_year,
            'ped_ratio': k['ped_ratio'],
            'total_energy_ped_ratio': k.get('total_energy_ped_ratio'),
            'self_sufficiency_ratio': k.get('self_sufficiency_ratio'),
            'self_consumption_ratio': k.get('self_consumption_ratio'),
            'import_over_limit_hours_per_year': k.get('import_over_limit_hours', 0.0) / years,
            'solar_kwh_per_kwp': flh['solar'],
            'uploaded_series': sum(1 for v in site.sources.values() if v == 'uploaded'),
        }

    return await asyncio.to_thread(work)


def _twin_component(db, dt_id: str, component_id: str) -> dict | None:
    dt = db.get(DigitalTwin, dt_id)
    if dt is None:
        raise HTTPException(status_code=404, detail='Digital twin not found')
    _refuse_reference(dt)
    return next((c for c in (dt.components or []) if c.get('id') == component_id), None)


@router.get('/digital-twins/{dt_id}/data', tags=['digital-twins'])
async def list_component_data(dt_id: str) -> dict:
    """Uploaded data of a twin: ``{component id: {channel: metadata}}``."""
    from . import profile_store

    with session_scope() as db:
        if db.get(DigitalTwin, dt_id) is None:
            raise HTTPException(status_code=404, detail='Digital twin not found')
    return profile_store.list_twin(dt_id)


@router.post('/digital-twins/{dt_id}/components/{component_id}/data/{channel}', tags=['digital-twins'])
async def upload_component_data(dt_id: str, component_id: str, channel: str, payload: ProfileUpload) -> dict:
    """Upload measured data (CSV: time + value) for one channel of a component."""
    import asyncio
    import base64
    import gzip

    from . import data_review, profile_store
    from .components import params_of

    with session_scope() as db:
        saved = _twin_component(db, dt_id, component_id)
    comp = payload.component.model_dump() if payload.component else saved
    if comp is None:
        raise HTTPException(status_code=400, detail='Unknown component; send its type and parameters')
    ch = _channel_or_400(comp.get('type', ''), channel)

    if payload.csv_gzip_b64:
        try:
            text = gzip.decompress(base64.b64decode(payload.csv_gzip_b64)).decode('utf-8-sig', errors='replace')
        except Exception:
            raise HTTPException(status_code=400, detail='Could not decompress the upload')
    elif payload.csv_text:
        text = payload.csv_text.lstrip('\ufeff')
    else:
        raise HTTPException(status_code=400, detail='The upload is empty')

    is_price = ch.unit == 'DKK/MWh'
    units = list(profile_store.PRICE_UNITS) if is_price else list(profile_store.POWER_UNITS) + list(profile_store.ENERGY_UNITS)

    def parse(unit: str, tz: str):
        return profile_store.parse_upload(
            text, time_column=payload.time_column, value_column=payload.value_column,
            unit=unit, tz=tz, is_price=is_price,
        )

    def prepare():
        series, info = parse(payload.unit, payload.timezone)
        df = _dataset_frame()
        context = None
        if payload.ai_review:
            from .components import synthetic

            size = ch.size(params_of(comp)) if ch.size else None
            context = {
                'component_type': comp.get('type'),
                'component_parameters': params_of(comp),
                'channel': ch.label,
                'stored_unit': ch.unit,
                'component_size': f'{size:g} {ch.size_label}' if size else None,
                'filename': (payload.filename or '')[:100],
                'unit_chosen_by_user': payload.unit,
                'timezone_chosen_by_user': payload.timezone,
                'upload': data_review.summarize(series, info, synthetic(df, comp['type'], channel, params_of(comp)), df['timestamp']),
            }
        return series, info, df, context

    def finish(series, info, df, unit: str, tz: str, review: dict | None):
        if not is_price and float(series.min()) < -1e-6:
            raise profile_store.UploadError('Values must not be negative (power in kW)')
        ref = ch.size(params_of(comp)) if ch.size else None
        meta = {
            **info,
            'channel': channel,
            'component_type': comp.get('type'),
            'filename': payload.filename,
            'unit_uploaded': unit,
            'unit': ch.unit,
            'timezone': tz,
            'ref_size': ref if ref and ref > 0 else None,
            'size_label': ch.size_label,
            'scale': bool(payload.scale),
            'mean': float(series.mean()),
            'max': float(series.max()),
            'review': review,
        }
        values, covered = profile_store.align(series, df['timestamp'])
        meta['coverage'] = covered
        meta = profile_store.save(dt_id, component_id, channel, series, meta)
        return {'meta': meta, 'preview': _profile_preview(df, values, ch, None)}

    try:
        series, info, df, context = await asyncio.to_thread(prepare)
        unit, tz, review = payload.unit, payload.timezone, None
        if context is not None:
            plan, note = await data_review.review(context, units)
            if plan is None:
                review = {'status': 'skipped', 'note': note}
            elif plan.reject:
                problems = ' '.join(i.message for i in plan.issues if i.severity == 'error')
                raise HTTPException(status_code=400, detail=f'AI data check rejected the file: {plan.summary} {problems}'.strip())
            else:
                reparse = lambda u, t, unit=unit, tz=tz: parse(u or unit, t or tz)  # noqa: E731
                series, info, actions = await asyncio.to_thread(data_review.apply, series, info, plan, reparse)
                unit, tz = plan.unit or unit, plan.timezone or tz
                review = {
                    'status': 'checked',
                    'model': data_review.MODEL,
                    'summary': plan.summary,
                    'issues': [i.model_dump() for i in plan.issues],
                    'actions': actions,
                }
        return await asyncio.to_thread(finish, series, info, df, unit, tz, review)
    except profile_store.UploadError as exc:
        raise HTTPException(status_code=400, detail=str(exc))


@router.get('/digital-twins/{dt_id}/components/{component_id}/data/{channel}', tags=['digital-twins'])
async def get_component_data(dt_id: str, component_id: str, channel: str, year: int | None = None) -> dict:
    """Uploaded series of a channel on the simulation timeline (before size scaling)."""
    import asyncio

    from . import profile_store

    meta = profile_store.load_meta(dt_id, component_id, channel)
    if meta is None:
        raise HTTPException(status_code=404, detail='No uploaded data for this channel')
    ch = _channel_or_400(meta.get('component_type', ''), channel)

    def work():
        df = _dataset_frame()
        hit = profile_store.aligned(dt_id, component_id, channel, df['timestamp'])
        if hit is None:
            raise HTTPException(status_code=404, detail='No uploaded data for this channel')
        return {'meta': meta, 'preview': _profile_preview(df, hit[0], ch, year)}

    return await asyncio.to_thread(work)


@router.patch('/digital-twins/{dt_id}/components/{component_id}/data/{channel}', tags=['digital-twins'])
async def update_component_data(dt_id: str, component_id: str, channel: str, payload: ProfileSettings) -> dict:
    from . import profile_store

    changes = {k: v for k, v in payload.model_dump().items() if v is not None}
    meta = profile_store.update_meta(dt_id, component_id, channel, **changes)
    if meta is None:
        raise HTTPException(status_code=404, detail='No uploaded data for this channel')
    return {'meta': meta}


@router.delete('/digital-twins/{dt_id}/components/{component_id}/data/{channel}', tags=['digital-twins'])
async def delete_component_data(dt_id: str, component_id: str, channel: str) -> dict:
    from . import profile_store

    if not profile_store.delete(dt_id, component_id, channel):
        raise HTTPException(status_code=404, detail='No uploaded data for this channel')
    return {'status': 'deleted'}


@router.get('/digital-twins/{dt_id}', response_model=DigitalTwinRead, tags=['digital-twins'])
async def get_digital_twin(dt_id: str) -> DigitalTwinRead:
    """Get a specific digital twin configuration."""
    with session_scope() as db:
        dt = db.get(DigitalTwin, dt_id)
        if dt is None:
            raise HTTPException(status_code=404, detail='Digital twin not found')
        return DigitalTwinRead.model_validate(_dt_to_read_dict(dt))


@router.patch('/digital-twins/{dt_id}', response_model=DigitalTwinRead, tags=['digital-twins'])
async def update_digital_twin(dt_id: str, payload: DigitalTwinUpdate) -> DigitalTwinRead:
    """Update a digital twin configuration."""
    with session_scope() as db:
        dt = db.get(DigitalTwin, dt_id)
        if dt is None:
            raise HTTPException(status_code=404, detail='Digital twin not found')
        _refuse_reference(dt)
        if payload.name is not None:
            dt.name = payload.name
        if payload.description is not None:
            dt.description = payload.description
        if payload.components is not None:
            dt.components = [c.model_dump() for c in payload.components]
            # Drop uploads of removed components
            from . import profile_store

            keep = {c.get('id') for c in dt.components}
            for component_id, channels in profile_store.list_twin(dt.id).items():
                if component_id not in keep:
                    for channel in channels:
                        profile_store.delete(dt.id, component_id, channel)
        if payload.connections is not None:
            dt.connections = [c.model_dump(by_alias=True) for c in payload.connections]
        db.add(dt)
        # Linked scenarios follow the design (existing runs keep the settings they started with)
        for sc in db.query(Scenario).filter(Scenario.digital_twin_id == dt.id).all():
            sc.config_overrides = _overrides_with_twin(sc.config_overrides, dt)
            db.add(sc)
        db.flush()
        db.refresh(dt)
        return DigitalTwinRead.model_validate(_dt_to_read_dict(dt))


@router.delete('/digital-twins/{dt_id}', tags=['digital-twins'])
async def delete_digital_twin(dt_id: str) -> dict:
    """Delete a digital twin configuration."""
    with session_scope() as db:
        dt = db.get(DigitalTwin, dt_id)
        if dt is None:
            raise HTTPException(status_code=404, detail='Digital twin not found')
        _refuse_reference(dt)
        # SQLite does not enforce the ON DELETE SET NULL foreign keys: unlink by
        # hand. Scenarios keep their current sizes as manual values; runs keep the
        # design copy stored in their config.
        unlinked = 0
        for sc in db.query(Scenario).filter(Scenario.digital_twin_id == dt_id).all():
            sc.digital_twin_id = None
            sc.config_overrides = _without_twin_design(sc.config_overrides)
            db.add(sc)
            unlinked += 1
        for run in db.query(SimulationRun).filter(SimulationRun.digital_twin_id == dt_id).all():
            run.digital_twin_id = None
            db.add(run)
        db.delete(dt)
    from . import profile_store

    profile_store.delete_twin(dt_id)
    return {"status": "deleted", "id": dt_id, "unlinked_scenarios": unlinked}


@router.post('/digital-twins/{dt_id}/run', response_model=SimulationRunRead, tags=['digital-twins'])
async def run_digital_twin(dt_id: str) -> SimulationRunRead:
    """Create and start a simulation run from a digital twin configuration."""
    manager = SimulationManager.get_global()
    with session_scope() as db:
        dt = db.get(DigitalTwin, dt_id)
        if dt is None:
            raise HTTPException(status_code=404, detail='Digital twin not found')

        # Convert digital twin components to simulation config overrides
        config_overrides = _overrides_with_twin(None, dt)

        try:
            sim_session = manager.create_session(config_overrides=config_overrides)
        except Exception as exc:
            raise HTTPException(status_code=400, detail=str(exc))

        run = SimulationRun(
            id=str(uuid4()),
            name=_run_name(dt.name),
            notes=None,
            config={
                'data_path': str(manager.settings.data_path),
                'investment_freq': manager.settings.investment_freq,
                'enable_forecasts': manager.settings.enable_forecasts,
                'model_dir': str(manager.settings.model_dir),
                'scaler_dir': str(manager.settings.scaler_dir),
                'config_overrides': config_overrides,
                'digital_twin_config': {'name': dt.name, 'components': dt.components, 'connections': dt.connections},
            },
            status=SimulationStatus.RUNNING,
            session_id=sim_session.session_id,
            digital_twin_id=dt.id,
        )
        db.add(run)
        db.flush()
        db.refresh(run)
        return SimulationRunRead.model_validate(_run_to_read_dict(run))


@router.get('/digital-twins/{dt_id}/ped-analysis', tags=['digital-twins'])
async def analyze_digital_twin_ped(dt_id: str) -> dict:
    """Analyze PED potential of a digital twin configuration."""
    with session_scope() as db:
        dt = db.get(DigitalTwin, dt_id)
        if dt is None:
            raise HTTPException(status_code=404, detail='Digital twin not found')

        components = dt.components or []
        gen_kw = 0.0
        load_kw = 0.0
        storage_kwh = 0.0
        heat_kw = 0.0

        for c in components:
            ctype = c.get('type', '')
            params = c.get('params', {})

            if ctype == 'solar_pv':
                gen_kw += float(params.get('capacity_kwp', 0))
            elif ctype == 'wind_turbine':
                gen_kw += float(params.get('capacity_kw', 0))
            elif ctype == 'chp_unit':
                gen_kw += float(params.get('electrical_kw', 0))
                heat_kw += float(params.get('thermal_kw', 0))
            elif ctype == 'smart_building':
                load_kw += float(params.get('load_kw', 0))
            elif ctype == 'load_center':
                load_kw += float(params.get('base_load_kw', 0))
            elif ctype == 'battery_storage':
                storage_kwh += float(params.get('capacity_kwh', 0))
            elif ctype == 'thermal_storage':
                storage_kwh += float(params.get('capacity_kwh', 0))
            elif ctype == 'heat_pump':
                heat_kw += float(params.get('capacity_kw', 0))
            elif ctype == 'district_heating':
                heat_kw += float(params.get('capacity_kw', 0))

        # PED is an annual *energy* balance: simulate the design (all components,
        # uploaded data where present) and average over the dataset years
        from .site_sim import simulate

        overrides = _overrides_with_twin(None, dt)
    df = _dataset_frame()
    site = simulate(df, overrides)
    years = max(1e-9, len(df) * site.dt_hours / 8760)
    k = site.kpis
    flh = _dataset_full_load_hours()
    peak_load_kw = float(overrides.get('owned_load_peak_mw', 0.0)) * 1000
    gen_mwh = k['total_gen_mwh'] / years
    load_mwh = k['total_demand_mwh'] / years
    ratio = gen_mwh / load_mwh if load_mwh > 0 else 0
    is_ped = load_mwh > 0 and ratio >= 1.0
    return {
        'generation_kw': gen_kw,
        'load_kw': load_kw,
        'storage_kwh': storage_kwh,
        'heat_capacity_kw': heat_kw,
        'annual_generation_mwh': gen_mwh,
        'annual_demand_mwh': load_mwh,
        'ped_ratio': ratio,
        'is_ped_achievable': is_ped,
        'recommendations': _get_ped_recommendations(gen_mwh, load_mwh, storage_kwh, peak_load_kw, flh['solar']),
        'annual_heat_demand_mwh': k.get('heat_demand_mwh', 0.0) / years,
        'total_energy_ped_ratio': k.get('total_energy_ped_ratio'),
    }


def _dataset_full_load_hours() -> dict:
    """Average annual full-load hours of 1 MW solar / wind / peak load in the dataset."""
    from .profiles import full_load_hours

    manager = SimulationManager.get_global()
    df = manager._load_data(manager.settings.resolve(Path.cwd()).data_path)
    step_h = (df['timestamp'].iloc[1] - df['timestamp'].iloc[0]).total_seconds() / 3600 if len(df) > 1 else 1 / 6
    return full_load_hours(df, step_h)


from .reference_designs import REFERENCE_MARKER  # noqa: E402  (read-only paper reference designs)


def _refuse_reference(dt: DigitalTwin) -> None:
    if dt.description == REFERENCE_MARKER:
        raise HTTPException(status_code=409, detail='This is a read-only paper reference design; save a copy to change it.')


# Settings that a linked digital twin owns; everything else (e.g. investment_freq) is kept
TWIN_ASSET_KEYS = (
    'owned_solar_capacity_mw', 'owned_wind_capacity_mw', 'owned_hydro_capacity_mw', 'owned_load_peak_mw',
    'owned_battery_capacity_mwh', 'batt_power_c_rate', 'batt_eta_charge', 'batt_eta_discharge',
    'flexible_load_share', 'max_shift_hours', 'twin_id', 'twin_components',
)


def _run_name(source: str | None) -> str:
    base = re.sub(r'^(Run of\s+)+', '', (source or '').strip()) or 'design'
    return f"Run of {base}"


def _without_twin_design(overrides: dict | None) -> dict:
    """Drop the component list (and its per-scenario changes) of a former twin
    link so the manual sizes are simulated."""
    return {k: v for k, v in (overrides or {}).items() if k not in ('twin_id', 'twin_components', 'component_overrides')}


def _clean_component_overrides(overrides: dict | None, dt: DigitalTwin) -> dict:
    """Validate a scenario's parameter changes ({component id: {param: value}})
    against the twin; changes of components the twin no longer has are dropped."""
    from .design_catalog import DesignError, clean_values

    changes = (overrides or {}).get('component_overrides') or {}
    if not isinstance(changes, dict):
        raise HTTPException(status_code=400, detail='component_overrides must map component ids to parameter values')
    by_id = {str(c.get('id')): c for c in (dt.components or [])}
    cleaned = {}
    for cid, values in changes.items():
        comp = by_id.get(str(cid))
        if comp is None or not isinstance(values, dict) or not values:
            continue
        try:
            cleaned[str(cid)] = clean_values(comp.get('type', ''), values)
        except DesignError as exc:
            raise HTTPException(status_code=400, detail=f"{comp.get('name') or cid}: {exc}")
    return cleaned


def _scenario_components(dt: DigitalTwin, overrides: dict | None) -> list:
    """The twin's components with the scenario's parameter changes applied."""
    from .design_catalog import apply_overrides

    return apply_overrides(dt.components or [], (overrides or {}).get('component_overrides'))


def _overrides_with_twin(overrides: dict | None, dt: DigitalTwin) -> dict:
    """Replace the asset settings in ``overrides`` with those derived from the
    twin, with the scenario's own parameter changes (``component_overrides``) applied."""
    kept = {k: v for k, v in (overrides or {}).items() if k not in TWIN_ASSET_KEYS}
    if kept.get('component_overrides'):
        kept['component_overrides'] = _clean_component_overrides(kept, dt)
        if not kept['component_overrides']:
            del kept['component_overrides']
    twin = _dt_to_config_overrides(_scenario_components(dt, kept), dt.connections or [])
    # Uploaded component data is stored under the twin's id
    twin['twin_id'] = dt.id
    # Local-asset mode needs explicit zeros, otherwise a design without PV would fall
    # back to the regional DK2 series
    for key in ('owned_solar_capacity_mw', 'owned_wind_capacity_mw', 'owned_hydro_capacity_mw', 'owned_load_peak_mw'):
        twin.setdefault(key, 0.0)
    return {**kept, **twin}


def _dt_to_config_overrides(components: list, connections: list) -> dict:
    """Convert digital twin components to simulation config overrides.

    ``twin_components`` carries every component to the simulation. The
    aggregate sizes (PV, wind, battery, peak load as the sum of building and
    load-centre peaks, DSM share) summarise the design for scenario forms.
    """
    def num(params: dict, key: str, default: float = 0.0) -> float:
        try:
            v = float(params.get(key, default))
        except (TypeError, ValueError):
            return default
        return v if v == v else default  # NaN guard

    overrides = {}
    total_pv = 0.0
    total_wind = 0.0
    total_battery = 0.0
    total_battery_power = 0.0
    battery_eta_weighted = 0.0
    total_load = 0.0
    flexible_load = 0.0

    for c in components:
        ctype = c.get('type', '')
        params = c.get('params', {}) or {}

        if ctype == 'solar_pv':
            total_pv += num(params, 'capacity_kwp') / 1000  # kW to MW
        elif ctype == 'wind_turbine':
            total_wind += num(params, 'capacity_kw') / 1000
        elif ctype == 'battery_storage':
            kwh = num(params, 'capacity_kwh')
            total_battery += kwh / 1000  # kWh to MWh
            total_battery_power += num(params, 'power_kw', kwh * 0.25) / 1000
            battery_eta_weighted += kwh * min(1.0, max(0.5, num(params, 'efficiency', 0.9)))
        elif ctype == 'smart_building':
            kw = num(params, 'load_kw') / 1000
            total_load += kw
            flexible_load += kw * min(100.0, max(0.0, num(params, 'flexible_load_pct'))) / 100
        elif ctype == 'load_center':
            total_load += num(params, 'peak_load_kw', num(params, 'base_load_kw')) / 1000

    if total_pv > 0:
        overrides['owned_solar_capacity_mw'] = total_pv
    if total_wind > 0:
        overrides['owned_wind_capacity_mw'] = total_wind
    if total_battery > 0:
        overrides['owned_battery_capacity_mwh'] = total_battery
        if total_battery_power > 0:
            overrides['batt_power_c_rate'] = total_battery_power / total_battery
        # Component efficiency is round-trip; split evenly between charge and discharge
        eta_rt = battery_eta_weighted / (total_battery * 1000)
        overrides['batt_eta_charge'] = overrides['batt_eta_discharge'] = eta_rt ** 0.5
    if total_load > 0:
        overrides['owned_load_peak_mw'] = total_load
        if flexible_load > 0:
            overrides['flexible_load_share'] = flexible_load / total_load
            overrides['max_shift_hours'] = 3.0

    # The simulation models every component from this list (backend/components.py);
    # the aggregate keys above are summaries for scenario forms and older code paths
    overrides['twin_components'] = [
        {'id': c.get('id'), 'type': c.get('type'), 'name': c.get('name'), 'params': dict(c.get('params') or {})} for c in components
    ]
    return overrides


def _get_ped_recommendations(gen_mwh: float, load_mwh: float, storage_kwh: float, peak_load_kw: float, pv_flh: float) -> list:
    """Generate recommendations to achieve PED status (annual energy balance)."""
    recs = []
    if load_mwh <= 0:
        return ["Add a building or load centre to evaluate the energy balance"]
    if gen_mwh < load_mwh:
        deficit_mwh = load_mwh - gen_mwh
        recs.append(f"Add about {deficit_mwh * 1000 / max(pv_flh, 1e-9):.0f} kWp of PV ({deficit_mwh:.0f} MWh/year) to reach a positive annual balance")
        if storage_kwh < peak_load_kw * 4:
            recs.append(f"Consider adding {(peak_load_kw * 4 - storage_kwh):.0f} kWh storage for 4h autonomy at peak load")
    else:
        recs.append("PED target achievable with current configuration")
        if storage_kwh < peak_load_kw * 2:
            recs.append("Consider more storage to maximize self-consumption")
    return recs
