"""Tools the AI copilot uses to inspect and reason about the digital twin.

Each tool is a pydantic input model plus an async handler returning a
JSON-serialisable dict. Handlers reuse the REST route logic so the copilot
sees exactly the numbers the UI shows.
"""

from __future__ import annotations

import asyncio
from dataclasses import dataclass
from typing import Any, Awaitable, Callable, Literal, Optional

import numpy as np
import pandas as pd
from pydantic import BaseModel, ConfigDict, Field

from . import routes
from .db import session_scope
from .models import Scenario, SimulationRun
from .optimizer import MeritOrderConfig, MeritOrderOptimizer, build_config_from_overrides
from .profiles import scale_profiles
from .schemas import RunCompareRequest, ScenarioCreate, SimulationStepRequest
from .simulation_manager import SimulationManager


class _Input(BaseModel):
    model_config = ConfigDict(extra="forbid")


@dataclass
class Tool:
    name: str
    description: str
    input_model: type[_Input]
    handler: Callable[[Any], Awaitable[dict]]
    # Tools that change persisted twin state; the UI refreshes after these
    mutates: Optional[Literal["run", "scenario"]] = None

    def definition(self) -> dict:
        schema = _inline_refs(self.input_model.model_json_schema())
        return {
            "name": self.name,
            "description": self.description,
            "input_schema": schema,
            # Inputs are small, but streaming them keeps tool-call progress visible
            "eager_input_streaming": True,
        }


def _inline_refs(schema: dict) -> dict:
    """Resolve pydantic's $defs/$ref so each tool schema is self-contained."""
    defs = schema.pop("$defs", {})

    def resolve(node: Any) -> Any:
        if isinstance(node, dict):
            if "$ref" in node:
                target = resolve(dict(defs[node["$ref"].split("/")[-1]]))
                extra = {k: v for k, v in node.items() if k != "$ref"}
                return {**target, **extra}
            return {k: resolve(v) for k, v in node.items() if k != "title"}
        if isinstance(node, list):
            return [resolve(v) for v in node]
        return node

    return resolve(schema)


def _r(value: float | None, digits: int = 2) -> float | None:
    if value is None or not np.isfinite(value):
        return None
    return round(float(value), digits)


def _overrides_in_kw(overrides: dict | None) -> dict:
    """Present MW-based overrides in the kW/kWh units people reason in."""
    o = overrides or {}
    out: dict[str, Any] = {}
    for key, label in (
        ("owned_solar_capacity_mw", "pv_kwp"),
        ("owned_wind_capacity_mw", "wind_kw"),
        ("owned_hydro_capacity_mw", "hydro_kw"),
        ("owned_load_peak_mw", "load_peak_kw"),
        ("owned_battery_capacity_mwh", "battery_kwh"),
    ):
        if key in o and o[key] is not None:
            out[label] = _r(float(o[key]) * 1000, 1)
    for key in ("batt_power_c_rate", "flexible_load_share", "max_shift_hours", "investment_freq"):
        if key in o:
            out[key] = o[key]
    return out


# ---------------------------------------------------------------------------
# Dataset access (shared, cached by the simulation manager)
# ---------------------------------------------------------------------------

def _dataset() -> pd.DataFrame:
    manager = SimulationManager.get_global()
    return manager._load_data(manager.settings.data_path)


def _dataset_info(df: pd.DataFrame) -> dict:
    ts = df["timestamp"]
    step_min = (ts.iloc[1] - ts.iloc[0]).total_seconds() / 60 if len(ts) > 1 else None
    return {
        "start": str(ts.iloc[0]),
        "end": str(ts.iloc[-1]),
        "step_minutes": step_min,
        "rows": int(len(df)),
        "source": "Energinet DK2 (eastern Denmark) 2015-2024: solar and onshore-wind capacity factors, gross demand and day-ahead spot prices in DKK/MWh; hourly values held over 10-minute steps; times in CET (no DST)",
    }


# ---------------------------------------------------------------------------
# Design evaluation (fast, side-effect free what-if)
# ---------------------------------------------------------------------------

class DesignInput(_Input):
    pv_kwp: float = Field(171.0, ge=0, le=100000, description="Rooftop/on-site PV nameplate in kWp")
    wind_kw: float = Field(0.0, ge=0, le=100000, description="On-site wind capacity in kW")
    battery_kwh: float = Field(0.0, ge=0, le=500000, description="Nominal battery energy in kWh (15-85 % state-of-charge window is usable, as in the paper)")
    battery_c_rate: float = Field(0.25, gt=0, le=4, description="Battery power = energy x C-rate (0.25 = 4-hour battery)")
    load_peak_kw: float = Field(150.0, gt=0, le=100000, description="Peak electric demand in kW; the demand profile is scaled to it")
    flexible_load_share: float = Field(0.0, ge=0, le=1, description="Share of demand that demand-side management may shift (0-1)")
    max_shift_hours: float = Field(3.0, ge=0, le=24, description="Maximum DSM shifting window in hours")
    start_date: str = Field("2015-01-01", description="Start of the evaluation period (YYYY-MM-DD), within the dataset")
    days: int = Field(365, ge=1, le=3660, description="Length of the evaluation period in days (365 = one year)")


def _evaluate(design: DesignInput, df: pd.DataFrame, monthly: bool) -> dict:
    ts = df["timestamp"]
    start = pd.Timestamp(design.start_date)
    end = start + pd.Timedelta(days=design.days)
    i0, i1 = int(ts.searchsorted(start)), int(ts.searchsorted(end))
    if i1 - i0 < 2:
        raise ValueError(f"No data between {start.date()} and {end.date()}; dataset covers {ts.iloc[0].date()} to {ts.iloc[-1].date()}")
    dt_h = (ts.iloc[1] - ts.iloc[0]).total_seconds() / 3600.0

    # Same scaling as simulation runs (backend.profiles), then the window
    prof = scale_profiles(df, {
        "owned_solar_capacity_mw": design.pv_kwp / 1000,
        "owned_wind_capacity_mw": design.wind_kw / 1000,
        "owned_load_peak_mw": design.load_peak_kw / 1000,
    })
    gen_mw = prof["solar"][i0:i1] + prof["wind"][i0:i1]
    load_mw = prof["load"][i0:i1]
    price = df["price"].to_numpy(dtype=float)[i0:i1]

    cfg = MeritOrderConfig(
        dt_hours=dt_h,
        battery_energy_mwh=design.battery_kwh / 1000,
        battery_c_rate=design.battery_c_rate,
        flexible_load_share=design.flexible_load_share,
        max_shift_hours=design.max_shift_hours,
    )
    out = MeritOrderOptimizer(cfg).run(pv_mw=gen_mw, load_mw=load_mw)
    k, s = out["kpis"], out["series_mwh"]

    # Grid-side energy (after transformer/export losses) is what is bought and sold
    import_cost = float(np.sum(s["grid_purchase_mwh"] * price))
    export_value = float(np.sum(s["export_delivered_mwh"] * price))
    no_asset_cost = float(np.sum(load_mw * dt_h / cfg.eta_transformer * price))
    result = {
        "period": {"start": str(ts.iloc[i0]), "end": str(ts.iloc[i1 - 1]), "days": _r((i1 - i0) * dt_h / 24, 1)},
        "design": design.model_dump(exclude={"start_date", "days"}),
        "energy_mwh": {
            "generation": _r(k["total_gen_mwh"]),
            "demand": _r(k["total_demand_mwh"]),
            "balance": _r(k["ped_absolute_mwh"]),
            "grid_import": _r(k["grid_import_mwh"]),
            "export": _r(k["export_mwh"]),
            "grid_losses": _r(k["grid_losses_mwh"]),
            "battery_losses": _r(k["battery_losses_mwh"]),
            "battery_throughput": _r(k["battery_throughput_mwh"]),
        },
        "ped_ratio": _r(k["ped_ratio"], 3),
        "is_ped": bool(k["ped_ratio"] >= 1.0),
        "self_sufficiency": _r(k.get("self_sufficiency_ratio"), 3),
        "self_consumption": _r(k.get("self_consumption_ratio"), 3),
        "peak_grid_import_kw": _r(float(np.max(s["grid_purchase_mwh"])) / dt_h * 1000, 1),
        "cost_dkk": {
            "grid_import_cost": _r(import_cost, 0),
            "export_value": _r(export_value, 0),
            "net_energy_cost": _r(import_cost - export_value, 0),
            "cost_without_any_assets": _r(no_asset_cost, 0),
            "savings_vs_no_assets": _r(no_asset_cost - (import_cost - export_value), 0),
        },
    }
    if monthly:
        frame = pd.DataFrame({
            "month": ts.iloc[i0:i1].dt.strftime("%Y-%m").to_numpy(),
            "gen": gen_mw * dt_h,
            "demand": load_mw * dt_h,
            "imp": s["grid_import_mwh"],
            "exp": s["pv_export_mwh"],
        })
        g = frame.groupby("month").sum()
        result["monthly_mwh"] = [
            {"month": m, "generation": _r(r.gen), "demand": _r(r.demand), "import": _r(r.imp), "export": _r(r.exp)}
            for m, r in g.iterrows()
        ]
    return result


async def evaluate_design(inp: DesignInput) -> dict:
    df = await asyncio.to_thread(_dataset)
    return await asyncio.to_thread(_evaluate, inp, df, True)


class SweepInput(_Input):
    base: DesignInput = Field(default_factory=DesignInput, description="Fixed design parameters and evaluation period")
    pv_kwp_values: list[float] = Field(default_factory=list, max_length=12, description="PV sizes to try (kWp); empty = keep base.pv_kwp")
    battery_kwh_values: list[float] = Field(default_factory=list, max_length=12, description="Battery sizes to try (kWh); empty = keep base.battery_kwh")


async def sweep_designs(inp: SweepInput) -> dict:
    pvs = inp.pv_kwp_values or [inp.base.pv_kwp]
    bats = inp.battery_kwh_values or [inp.base.battery_kwh]
    if len(pvs) * len(bats) > 60:
        raise ValueError("At most 60 combinations per sweep")
    df = await asyncio.to_thread(_dataset)

    def run() -> list[dict]:
        rows = []
        for pv in pvs:
            for bat in bats:
                design = inp.base.model_copy(update={"pv_kwp": pv, "battery_kwh": bat})
                r = _evaluate(design, df, monthly=False)
                rows.append({
                    "pv_kwp": pv,
                    "battery_kwh": bat,
                    "ped_ratio": r["ped_ratio"],
                    "self_sufficiency": r["self_sufficiency"],
                    "grid_import_mwh": r["energy_mwh"]["grid_import"],
                    "export_mwh": r["energy_mwh"]["export"],
                    "net_energy_cost_dkk": r["cost_dkk"]["net_energy_cost"],
                })
        return rows

    rows = await asyncio.to_thread(run)
    return {"period": {"start_date": inp.base.start_date, "days": inp.base.days}, "fixed": inp.base.model_dump(exclude={"pv_kwp", "battery_kwh"}), "results": rows}


# ---------------------------------------------------------------------------
# Twin state tools
# ---------------------------------------------------------------------------

class NoInput(_Input):
    pass


async def get_twin_overview(_: NoInput) -> dict:
    manager = SimulationManager.get_global()
    df = await asyncio.to_thread(_dataset)
    with session_scope() as db:
        scenarios = db.query(Scenario).order_by(Scenario.created_at.asc()).all()
        scenario_names = {s.id: s.name for s in scenarios}
        runs_out = []
        for run in db.query(SimulationRun).order_by(SimulationRun.created_at.desc()).limit(30).all():
            run = routes._refresh_run_status_if_needed(db, run)
            entry: dict[str, Any] = {
                "run_id": run.id,
                "name": run.name,
                "live": manager.has_session(run.session_id),
                "scenario": scenario_names.get(run.scenario_id) if run.scenario_id else None,
            }
            if entry["live"]:
                env = manager.get_session(run.session_id).env
                t = int(getattr(env, "t", 0))
                entry["simulated_steps"] = t
                ts = getattr(env, "_timestamps", None)
                if ts is not None and t < len(ts):
                    entry["simulated_time"] = str(ts.iloc[t])
            runs_out.append(entry)
        scenarios_out = [
            {"scenario_id": s.id, "name": s.name, "description": s.description, "assets": _overrides_in_kw(s.config_overrides)}
            for s in scenarios
        ]
    return {"dataset": _dataset_info(df), "runs": runs_out, "scenarios": scenarios_out}


class RunInput(_Input):
    run_id: str = Field(description="Run id from get_twin_overview")


def _live_env(run_id: str):
    manager = SimulationManager.get_global()
    with session_scope() as db:
        run = db.get(SimulationRun, run_id)
        if run is None:
            raise ValueError(f"Run {run_id} not found")
        run = routes._refresh_run_status_if_needed(db, run)
        overrides = routes._resolve_run_overrides(db, run)
        name, session_id = run.name, run.session_id
    if not manager.has_session(session_id):
        raise ValueError(f"Run '{name}' has no live session (backend restarted). The user can press Restart on it.")
    session = manager.get_session(session_id)
    return name, session.wrapper or session.env, overrides


async def get_run_details(inp: RunInput) -> dict:
    name, env, overrides = _live_env(inp.run_id)

    def compute() -> dict:
        ped = routes._compute_ped_metrics(env, overrides=overrides)
        series = routes._extract_metric_series(env, overrides=overrides)
        gen = np.asarray(series["solar_mw"]) + np.asarray(series["wind_mw"]) + np.asarray(series["hydro_mw"])
        cfg = build_config_from_overrides(overrides, float(series["dt_hours"]))
        k = MeritOrderOptimizer(cfg).run(pv_mw=gen, load_mw=np.asarray(series["load_mw"], dtype=float))["kpis"]
        t = int(getattr(env, "t", 0))
        ts = getattr(env, "_timestamps", None)
        return {
            "name": name,
            "assets": _overrides_in_kw(overrides),
            "simulated_steps": t,
            "simulated_until": str(ts.iloc[min(t, len(ts) - 1)]) if ts is not None and len(ts) else None,
            "simulated_hours": _r(ped["period_hours"], 1),
            "energy_mwh": {
                "generation": _r(ped["total_gen_mwh"]),
                "demand": _r(ped["total_demand_mwh"]),
                "balance": _r(ped["ped_absolute_mwh"]),
                "grid_import": _r(k["grid_import_mwh"]),
                "export": _r(k["export_mwh"]),
            "grid_losses": _r(k["grid_losses_mwh"]),
            "battery_losses": _r(k["battery_losses_mwh"]),
            },
            "ped_ratio": _r(ped["ped_ratio"], 3),
            "self_sufficiency": _r(k.get("self_sufficiency_ratio"), 3),
            "self_consumption": _r(k.get("self_consumption_ratio"), 3),
            "net_grid_value_dkk": _r(getattr(env, "cumulative_revenue", None), 0),
        }

    return await asyncio.to_thread(compute)


class ProfileInput(_Input):
    run_id: str = Field(description="Run id from get_twin_overview")
    resolution: Literal["hour", "day", "week", "month"] = Field("day", description="Aggregation bucket")
    last_days: float = Field(14, gt=0, le=3660, description="How many simulated days back from the current time to include")


async def get_energy_profile(inp: ProfileInput) -> dict:
    _, env, overrides = _live_env(inp.run_id)

    def compute() -> dict:
        series = routes._extract_metric_series(env, overrides=overrides)
        dt_h = float(series["dt_hours"])
        n = int(series["steps"])
        start = max(0, n - int(inp.last_days * 24 / dt_h))
        ts = env._timestamps.iloc[start:n] if getattr(env, "_timestamps", None) is not None else None
        if ts is None or n - start < 1:
            raise ValueError("No simulated data yet - advance the run first")
        gen = (np.asarray(series["solar_mw"]) + np.asarray(series["wind_mw"]) + np.asarray(series["hydro_mw"]))[start:n]
        load = np.asarray(series["load_mw"])[start:n]
        price = np.asarray(env._price, dtype=float)[start:n]
        frame = pd.DataFrame({"gen": gen, "load": load, "price": price}, index=pd.DatetimeIndex(ts.to_numpy()))
        rule = {"hour": "h", "day": "D", "week": "W-MON", "month": "MS"}[inp.resolution]
        # Label every bucket by its start (pandas labels weeks by their end otherwise)
        agg = frame.resample(rule, label="left", closed="left")
        energy = (agg[["gen", "load"]].sum() * dt_h * 1000)  # kWh
        peaks = agg[["gen", "load"]].max() * 1000  # kW
        prices = agg["price"].mean()
        rows = [
            {
                "period": str(idx),
                "generation_kwh": _r(energy.loc[idx, "gen"], 1),
                "demand_kwh": _r(energy.loc[idx, "load"], 1),
                "net_kwh": _r(energy.loc[idx, "gen"] - energy.loc[idx, "load"], 1),
                "peak_load_kw": _r(peaks.loc[idx, "load"], 1),
                "peak_generation_kw": _r(peaks.loc[idx, "gen"], 1),
                "avg_price_dkk_mwh": _r(prices.loc[idx], 0),
            }
            for idx in energy.index
        ]
        if len(rows) > 120:
            rows = rows[-120:]
        return {"resolution": inp.resolution, "rows": rows}

    return await asyncio.to_thread(compute)


class CompareInput(_Input):
    run_ids: list[str] = Field(min_length=1, max_length=10, description="Run ids to compare")
    common_horizon: bool = Field(True, description="Truncate every run to the shortest simulated horizon so totals are comparable")


async def compare_runs(inp: CompareInput) -> dict:
    res = await routes.compare_runs(RunCompareRequest(run_ids=inp.run_ids, use_common_horizon=inp.common_horizon))
    return res.model_dump()


class StepInput(_Input):
    run_id: str = Field(description="Live run id")
    hours: float = Field(gt=0, le=24 * 366, description="Simulated time to advance, in hours (max one year)")


async def step_simulation(inp: StepInput) -> dict:
    name, env, _ = _live_env(inp.run_id)
    dt_h = getattr(env, "dt_hours", 1 / 6)
    remaining = max(1, round(inp.hours / dt_h))
    state = None
    while remaining > 0:
        chunk = min(remaining, 10000)
        state = await routes.step_run(inp.run_id, SimulationStepRequest(steps=chunk))
        remaining -= chunk
        if state.metrics.get("done"):
            break
    obs = next(iter(state.observation.values()), {}) if state else {}
    return {
        "run": name,
        "timestep": state.metrics.get("timestep") if state else None,
        "simulated_time": obs.get("timestamp") if isinstance(obs, dict) else None,
        "reached_end_of_data": bool(state and state.metrics.get("done")),
    }


class SaveScenarioInput(_Input):
    name: str = Field(min_length=1, max_length=120)
    description: str = Field("", max_length=300, description="One-line summary")
    details: str = Field("", max_length=4000, description="Rationale, assumptions and expected effects")
    pv_kwp: float = Field(ge=0, le=100000)
    wind_kw: float = Field(0.0, ge=0, le=100000)
    battery_kwh: float = Field(0.0, ge=0, le=500000)
    battery_c_rate: float = Field(0.25, gt=0, le=4)
    load_peak_kw: float = Field(150.0, gt=0, le=100000)
    flexible_load_share: float = Field(0.0, ge=0, le=1)
    max_shift_hours: float = Field(3.0, ge=0, le=24)


async def save_scenario(inp: SaveScenarioInput) -> dict:
    overrides = {
        "owned_solar_capacity_mw": inp.pv_kwp / 1000,
        "owned_wind_capacity_mw": inp.wind_kw / 1000,
        "owned_hydro_capacity_mw": 0.0,
        "owned_load_peak_mw": inp.load_peak_kw / 1000,
        "owned_battery_capacity_mwh": inp.battery_kwh / 1000,
        "batt_power_c_rate": inp.battery_c_rate,
        "investment_freq": 12,
    }
    if inp.flexible_load_share > 0:
        overrides["flexible_load_share"] = inp.flexible_load_share
        overrides["max_shift_hours"] = inp.max_shift_hours
    created = await routes.create_scenario(ScenarioCreate(
        name=inp.name, description=inp.description or None, details=inp.details or None, config_overrides=overrides,
    ))
    return {"scenario_id": created.id, "name": created.name, "note": "Saved. The user can run it from the Scenarios page."}


TOOLS: list[Tool] = [
    Tool("get_twin_overview", "List the dataset coverage, all simulation runs (live or not, how far simulated) and all saved scenarios with their assets in kW/kWh. Call this first when you need ids or an overview.", NoInput, get_twin_overview),
    Tool("get_run_details", "Current KPIs of a live run over what has been simulated so far: generation, demand, PED ratio, self-sufficiency, grid import/export, net grid value.", RunInput, get_run_details),
    Tool("get_energy_profile", "Aggregated generation/demand/peaks/prices of a live run by hour, day, week or month over the most recent simulated days. Use to explain patterns (e.g. winter deficit, midday surplus).", ProfileInput, get_energy_profile),
    Tool("compare_runs", "Compare PED metrics of several runs on a common horizon.", CompareInput, compare_runs),
    Tool("evaluate_design", "Fast what-if: simulate a building design (PV, wind, battery, load, DSM) over any period of the dataset with the PV-first merit-order dispatch, without creating a run. Returns energy, PED ratio, self-sufficiency, peak import, DKK costs and a monthly breakdown. Takes well under a second for a year.", DesignInput, evaluate_design),
    Tool("sweep_designs", "Evaluate a grid of PV and/or battery sizes (up to 60 combinations) for sizing questions, e.g. the smallest PV that reaches PED or the battery size where extra storage stops paying off.", SweepInput, sweep_designs),
    Tool("step_simulation", "Advance a live run by a number of simulated hours. Changes the run the user is looking at - only do this when the user asks to simulate further.", StepInput, step_simulation, mutates="run"),
    Tool("save_scenario", "Save a design as a new user scenario so it can be run from the Scenarios page. Only when the user asks to save or create a scenario.", SaveScenarioInput, save_scenario, mutates="scenario"),
]

TOOLS_BY_NAME = {t.name: t for t in TOOLS}
