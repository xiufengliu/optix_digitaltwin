"""API route declarations for the digital twin backend."""

from __future__ import annotations

from typing import List
from uuid import uuid4

from fastapi import APIRouter, HTTPException, WebSocket, WebSocketDisconnect, status

from .db import session_scope
from .models import SimulationRun, SimulationSnapshot, SimulationStatus, Scenario, DigitalTwin
from .optimizer import MeritOrderOptimizer, build_config_from_overrides
from .schemas import (
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
        "status": getattr(getattr(run, "status", None), "value", None) or str(getattr(run, "status", None) or ""),
        "created_at": getattr(run, "created_at", None),
        "updated_at": getattr(run, "updated_at", None),
        "config": getattr(run, "config", {}) or {},
        "notes": getattr(run, "notes", None),
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
    try:
        session = manager.get_session(session_id)
    except KeyError:
        raise HTTPException(status_code=status.HTTP_410_GONE, detail="Simulation session expired")

    env = session.wrapper or session.env
    try:
        t = int(getattr(env, 't', 0))
        # access raw arrays; fall back to DataFrame if needed
        wind = getattr(env, '_wind', None)
        solar = getattr(env, '_solar', None)
        hydro = getattr(env, '_hydro', None)
        load = getattr(env, '_load', None)
        if any(x is None for x in (wind, solar, hydro, load)):
            raise AttributeError('Missing arrays for PED computation')

        import numpy as np  # local import
        upto = max(1, min(t, len(load)))
        gen = np.array(wind[:upto]) + np.array(solar[:upto]) + np.array(hydro[:upto])
        demand = np.array(load[:upto])
        # Assume values are MW at 10-minute intervals → convert to MWh: MW * (10/60) h
        step_hours = 10.0 / 60.0
        total_gen_mwh = float(gen.sum() * step_hours)
        total_demand_mwh = float(demand.sum() * step_hours)
        ped_abs = total_gen_mwh - total_demand_mwh
        ped_ratio = float(total_gen_mwh / (total_demand_mwh + 1e-9))
        return {
            'steps': upto,
            'period_hours': upto * step_hours,
            'total_gen_mwh': total_gen_mwh,
            'total_demand_mwh': total_demand_mwh,
            'ped_absolute_mwh': ped_abs,
            'ped_ratio': ped_ratio,
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"PED calculation failed: {exc}")


@router.get("/runs/{run_id}/energy_series", tags=["runs"])
async def get_energy_series(run_id: str, limit: int = 2000) -> dict:
    """Return generation and load series up to the current step.

    Values are in MW per step; include optional timestamps if present in env.data.
    """
    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        if not run.session_id:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Run has no active session")
        session_id = run.session_id

    try:
        session = manager.get_session(session_id)
    except KeyError:
        raise HTTPException(status_code=status.HTTP_410_GONE, detail="Simulation session expired")

    env = session.wrapper or session.env
    try:
        t = int(getattr(env, 't', 0))
        upto = max(1, t)
        start = max(0, upto - int(max(1, min(limit, 50000))))
        wind = getattr(env, '_wind')[start:upto]
        solar = getattr(env, '_solar')[start:upto]
        hydro = getattr(env, '_hydro')[start:upto]
        load = getattr(env, '_load')[start:upto]

        import numpy as np
        gen = (np.array(wind) + np.array(solar) + np.array(hydro)).tolist()
        demand = np.array(load).tolist()

        timestamps = None
        try:
            df = getattr(env, 'data', None)
            if df is not None and 'timestamp' in df.columns:
                timestamps = [str(x) for x in df['timestamp'].iloc[start:upto].tolist()]
        except Exception:
            timestamps = None

        return {
            'start': start,
            'end': upto,
            'steps': list(range(start, upto)),
            'timestamps': timestamps,
            'gen_mw': gen,
            'load_mw': demand,
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Series calculation failed: {exc}")


@router.get("/runs/{run_id}/optimize", tags=["runs"])
async def optimize_run_merit_order(run_id: str) -> dict:
    """Run a deterministic merit‑order dispatcher consistent with paper.txt.

    Returns series (MWh per step) and KPIs including PED.
    """
    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        run = _refresh_run_status_if_needed(db, run)
        scenario_overrides = None
        if run.scenario_id:
            sc = db.get(Scenario, run.scenario_id)
            if sc is not None:
                scenario_overrides = sc.config_overrides
    try:
        session = manager.get_session(run.session_id) if run.session_id else None
    except KeyError:
        session = None

    if session is None:
        raise HTTPException(status_code=410, detail="Simulation session expired")

    env = session.wrapper or session.env
    try:
        # get arrays
        pv = getattr(env, '_solar', None)
        load = getattr(env, '_load', None)
        if pv is None or load is None:
            raise AttributeError('solar or load arrays not found')

        import numpy as np
        pv = np.asarray(pv, dtype=float)
        load = np.asarray(load, dtype=float)
        t = int(getattr(env, 't', len(load)))
        pv = pv[:t]
        load = load[:t]

        # timestep inference: prefer timestamp spacing, else assume 10‑min
        dt_hours = 1.0 / 6.0
        try:
            df = getattr(env, 'data', None)
            if df is not None and 'timestamp' in df.columns and t > 1:
                ts = df['timestamp'].iloc[:t]
                delta = (ts.iloc[1] - ts.iloc[0]).total_seconds() / 3600.0
                if delta > 0:
                    dt_hours = float(delta)
        except Exception:
            pass

        cfg = build_config_from_overrides(scenario_overrides, dt_hours)
        opt = MeritOrderOptimizer(cfg)
        out = opt.run(pv_mw=pv, load_mw=load)

        # Persist a snapshot for charting convenience
        try:
            with session_scope() as db:
                row = SimulationSnapshot(
                    run_id=run_id,
                    timestep=int(getattr(env, 't', 0)),
                    payload={
                        'type': 'optimizer_merit_order',
                        'config': cfg.__dict__,
                        'kpis': out['kpis'],
                    },
                )
                db.add(row)
        except Exception:
            pass

        series_mwh = {k: v.tolist() for k, v in out['series_mwh'].items()}
        dt_h = float(out.get('dt_hours', dt_hours))
        series_mw = {k.replace('_mwh', '_mw'): (np.array(v) / max(dt_h, 1e-9)).tolist() for k, v in series_mwh.items()}
        return {
            'config': cfg.__dict__,
            'kpis': out['kpis'],
            'series_mwh': series_mwh,
            'series_mw': series_mw,
            'dt_hours': dt_h,
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Optimization failed: {exc}")


# ------------------ Scenarios ------------------

@router.post('/scenarios', response_model=ScenarioRead, tags=['scenarios'])
async def create_scenario(payload: ScenarioCreate) -> ScenarioRead:
    with session_scope() as db:
        # If linked to a digital twin, merge its config
        config = payload.config_overrides or {}
        if payload.digital_twin_id:
            dt = db.get(DigitalTwin, payload.digital_twin_id)
            if dt:
                dt_config = _dt_to_config_overrides(dt.components or [], dt.connections or [])
                config = {**dt_config, **config}
        
        scenario = Scenario(
            id=str(uuid4()),
            name=payload.name,
            description=payload.description,
            details=payload.details,
            config_overrides=config,
            digital_twin_id=payload.digital_twin_id,
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
            sc.digital_twin_id = payload.digital_twin_id
            # Optionally merge DT config into overrides
            dt = db.get(DigitalTwin, payload.digital_twin_id)
            if dt:
                dt_config = _dt_to_config_overrides(dt.components or [], dt.connections or [])
                sc.config_overrides = {**dt_config, **(sc.config_overrides or {})}
        db.add(sc); db.flush(); db.refresh(sc)
        return ScenarioRead.from_orm(sc)


@router.post('/scenarios/{scenario_id}/run', response_model=SimulationRunRead, tags=['scenarios'])
async def run_scenario(scenario_id: str) -> SimulationRunRead:
    manager = SimulationManager.get_global()
    with session_scope() as db:
        sc = db.get(Scenario, scenario_id)
        if sc is None:
            raise HTTPException(status_code=404, detail='Scenario not found')
        # Build session using scenario overrides
        try:
            sim_session = manager.create_session(config_overrides=sc.config_overrides)
        except Exception as exc:
            raise HTTPException(status_code=400, detail=str(exc))

        run = SimulationRun(
            id=str(uuid4()),
            name=f"Run of {sc.name}",
            notes=None,
            config={
                'data_path': str(manager.settings.data_path),
                'investment_freq': manager.settings.investment_freq,
                'enable_forecasts': manager.settings.enable_forecasts,
                'model_dir': str(manager.settings.model_dir),
                'scaler_dir': str(manager.settings.scaler_dir),
            },
            status=SimulationStatus.RUNNING,
            session_id=sim_session.session_id,
            scenario_id=sc.id,
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
        db.delete(sc)
        return {"status": "deleted", "id": scenario_id}


@router.websocket("/runs/{run_id}/ws")
async def run_stream(websocket: WebSocket, run_id: str) -> None:
    """Interactive WebSocket channel for stepping and monitoring a run."""
    await websocket.accept()

    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = _get_run_or_404(db, run_id)
        session_id = run.session_id
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
                steps = int(message.get("steps", 1))
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
        await websocket.send_json({"type": "error", "message": str(exc)})
        await websocket.close(code=1011)


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
        if payload.name is not None:
            dt.name = payload.name
        if payload.description is not None:
            dt.description = payload.description
        if payload.components is not None:
            dt.components = [c.model_dump() for c in payload.components]
        if payload.connections is not None:
            dt.connections = [c.model_dump(by_alias=True) for c in payload.connections]
        db.add(dt)
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
        db.delete(dt)
        return {"status": "deleted", "id": dt_id}


@router.post('/digital-twins/{dt_id}/run', response_model=SimulationRunRead, tags=['digital-twins'])
async def run_digital_twin(dt_id: str) -> SimulationRunRead:
    """Create and start a simulation run from a digital twin configuration."""
    manager = SimulationManager.get_global()
    with session_scope() as db:
        dt = db.get(DigitalTwin, dt_id)
        if dt is None:
            raise HTTPException(status_code=404, detail='Digital twin not found')

        # Convert digital twin components to simulation config overrides
        config_overrides = _dt_to_config_overrides(dt.components or [], dt.connections or [])

        try:
            sim_session = manager.create_session(config_overrides=config_overrides)
        except Exception as exc:
            raise HTTPException(status_code=400, detail=str(exc))

        run = SimulationRun(
            id=str(uuid4()),
            name=f"Run of {dt.name}",
            notes=None,
            config={
                'data_path': str(manager.settings.data_path),
                'investment_freq': manager.settings.investment_freq,
                'enable_forecasts': manager.settings.enable_forecasts,
                'model_dir': str(manager.settings.model_dir),
                'scaler_dir': str(manager.settings.scaler_dir),
                'digital_twin_config': {'components': dt.components, 'connections': dt.connections},
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

        ratio = gen_kw / load_kw if load_kw > 0 else 0
        is_ped = ratio >= 1.0

        return {
            'generation_kw': gen_kw,
            'load_kw': load_kw,
            'storage_kwh': storage_kwh,
            'heat_capacity_kw': heat_kw,
            'ped_ratio': ratio,
            'is_ped_achievable': is_ped,
            'recommendations': _get_ped_recommendations(gen_kw, load_kw, storage_kwh, ratio),
        }


def _dt_to_config_overrides(components: list, connections: list) -> dict:
    """Convert digital twin components to simulation config overrides."""
    overrides = {}
    total_pv = 0.0
    total_battery = 0.0
    total_load = 0.0

    for c in components:
        ctype = c.get('type', '')
        params = c.get('params', {})

        if ctype == 'solar_pv':
            total_pv += float(params.get('capacity_kwp', 0)) / 1000  # kW to MW
        elif ctype == 'battery_storage':
            total_battery += float(params.get('capacity_kwh', 0)) / 1000  # kWh to MWh
        elif ctype == 'smart_building':
            total_load += float(params.get('load_kw', 0)) / 1000
        elif ctype == 'load_center':
            total_load += float(params.get('base_load_kw', 0)) / 1000

    if total_pv > 0:
        overrides['owned_solar_capacity_mw'] = total_pv
    if total_battery > 0:
        overrides['owned_battery_capacity_mwh'] = total_battery

    return overrides


def _get_ped_recommendations(gen_kw: float, load_kw: float, storage_kwh: float, ratio: float) -> list:
    """Generate recommendations to achieve PED status."""
    recs = []
    if ratio < 1.0:
        deficit = load_kw - gen_kw
        recs.append(f"Add {deficit:.0f} kW of generation capacity to achieve PED")
        if storage_kwh < load_kw * 4:
            recs.append(f"Consider adding {(load_kw * 4 - storage_kwh):.0f} kWh storage for 4h autonomy")
    else:
        recs.append("PED target achievable with current configuration")
        if storage_kwh < gen_kw * 2:
            recs.append("Consider more storage to maximize self-consumption")
    return recs
