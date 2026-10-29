"""Tools the AI copilot uses to inspect and reason about the digital twin.

Each tool is a pydantic input model plus an async handler returning a
JSON-serialisable dict. Handlers reuse the REST route logic so the copilot
sees exactly the numbers the UI shows.
"""

from __future__ import annotations

import asyncio
import contextvars
from dataclasses import dataclass
from typing import Any, Awaitable, Callable, Literal, Optional

import numpy as np
import pandas as pd
from pydantic import BaseModel, ConfigDict, Field

from . import routes
from .db import session_scope
from .models import DigitalTwin, Scenario, SimulationRun
from .design_catalog import DesignError, build_design, catalog_text
from .optimizer import MeritOrderConfig, MeritOrderOptimizer, build_config_from_overrides
from .profiles import scale_profiles
from .schemas import DigitalTwinCreate, RunCompareRequest, ScenarioCreate, SimulationStepRequest
from .simulation_manager import SimulationManager


class _Input(BaseModel):
    model_config = ConfigDict(extra="forbid")


# What the user's page shows, set by the agent loop for the current turn
# (e.g. the design on the Twin Builder canvas)
UI_CONTEXT: contextvars.ContextVar[dict] = contextvars.ContextVar("copilot_ui_context", default={})


def _annual(site, years: float) -> dict:
    """Yearly averages of a whole-period simulation (all components)."""
    k = site.kpis
    per_year = lambda key: _r((k.get(key) or 0.0) / years * 1000, 0)  # noqa: E731  MWh -> kWh/year
    out = {
        "generation_kwh_per_year": per_year("total_gen_mwh"),
        "electricity_demand_kwh_per_year": per_year("total_demand_mwh"),
        "grid_import_kwh_per_year": per_year("grid_purchase_mwh"),
        "export_kwh_per_year": per_year("export_delivered_mwh"),
        "curtailed_kwh_per_year": per_year("curtailed_mwh"),
        "ped_ratio_electricity": _r(k.get("ped_ratio"), 3),
        "ped_ratio_all_energy": _r(k.get("total_energy_ped_ratio"), 3),
        "self_sufficiency": _r(k.get("self_sufficiency_ratio"), 3),
        "self_consumption": _r(k.get("self_consumption_ratio"), 3),
        "peak_grid_import_kw": _r(k.get("peak_grid_purchase_kw"), 1),
        "hours_above_import_limit_per_year": _r((k.get("import_over_limit_hours") or 0) / years, 1),
    }
    if site.has_heat:
        out.update({
            "heat_demand_kwh_per_year": per_year("heat_demand_mwh"),
            "heat_pump_heat_kwh_per_year": per_year("hp_heat_mwh"),
            "heat_pump_electricity_kwh_per_year": per_year("hp_el_mwh"),
            "heat_pump_spf": _r(k.get("hp_spf"), 2),
            "chp_heat_kwh_per_year": per_year("chp_heat_mwh"),
            "chp_electricity_kwh_per_year": per_year("chp_el_mwh"),
            "chp_fuel_kwh_per_year": per_year("chp_fuel_mwh"),
            "district_heat_kwh_per_year": per_year("dh_heat_mwh"),
            "heat_not_covered_kwh_per_year": per_year("external_heat_mwh"),
        })
    return out


def _simulate_components(components: list, twin_id: Optional[str] = None) -> dict:
    """Simulate a component design over the whole dataset; yearly averages."""
    from .site_sim import simulate

    overrides = routes._dt_to_config_overrides(components, [])
    for key in ("owned_solar_capacity_mw", "owned_wind_capacity_mw", "owned_hydro_capacity_mw", "owned_load_peak_mw"):
        overrides.setdefault(key, 0.0)
    if twin_id:
        overrides["twin_id"] = twin_id
    df = _dataset()
    site = simulate(df, overrides)
    years = max(1e-9, len(df) * site.dt_hours / 8760)
    uploaded = sorted(k for k, v in site.sources.items() if v == "uploaded")
    return {"period": "2015-2024, yearly averages", "results": _annual(site, years), "measured_data_series": uploaded}


@dataclass
class Tool:
    name: str
    description: str
    input_model: type[_Input]
    handler: Callable[[Any], Awaitable[dict]]
    # Tools that change persisted twin state; the UI refreshes after these
    mutates: Optional[Literal["run", "scenario", "twin"]] = None
    # Event sent to the browser with the tool result (e.g. a design to apply)
    client_event: Optional[str] = None

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
        twins = db.query(DigitalTwin).order_by(DigitalTwin.created_at.asc()).all()
        twin_names = {t.id: t.name for t in twins}
        scenarios_out = [
            {
                "scenario_id": s.id, "name": s.name, "description": s.description,
                "linked_twin": twin_names.get(s.digital_twin_id) if s.digital_twin_id else None,
                "model": "full design" if s.digital_twin_id else "electricity only",
                "assets": _overrides_in_kw(s.config_overrides),
            }
            for s in scenarios
        ]
        twins_out = [
            {
                "twin_id": t.id, "name": t.name,
                "read_only_paper_reference": t.description == routes.REFERENCE_MARKER,
                "components": [f"{c.get('type')}: {c.get('name')}" for c in (t.components or [])],
            }
            for t in twins
        ]
    return {"dataset": _dataset_info(df), "runs": runs_out, "scenarios": scenarios_out, "digital_twins": twins_out}


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
        site = routes._site_of(env, overrides)
        # Dispatch of every component over the steps simulated so far
        k = site.kpis_upto(max(1, int(getattr(env, "t", 0) or 0)))
        t = int(getattr(env, "t", 0))
        ts = getattr(env, "_timestamps", None)
        return {
            "name": name,
            "assets": _overrides_in_kw(overrides),
            "components": [f"{c.get('type')}: {c.get('name') or c.get('id')}" for c in overrides.get("twin_components") or []],
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
            "ped_ratio_all_energy": _r(k.get("total_energy_ped_ratio"), 3),
            "self_sufficiency": _r(k.get("self_sufficiency_ratio"), 3),
            "self_consumption": _r(k.get("self_consumption_ratio"), 3),
            "curtailed_mwh": _r(k.get("curtailed_mwh")),
            "hours_above_import_limit": _r(k.get("import_over_limit_hours"), 1),
            "heat_mwh": {key: _r(k.get(f"{key}_mwh")) for key in ("heat_demand", "hp_heat", "hp_el", "chp_heat", "chp_el", "chp_fuel", "dh_heat", "external_heat")} if site.has_heat else None,
            "model": "full design" if site.sources else "electricity only",
            "input_data": routes._data_source_details(site.sources, overrides),
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


class DesignComponent(_Input):
    type: Literal["smart_building", "solar_pv", "battery_storage", "wind_turbine", "district_heating", "smart_grid",
                  "ev_charger", "heat_pump", "chp_unit", "thermal_storage", "load_center"]
    name: str = Field("", max_length=80, description="Short display name, unique within the design")
    params: dict[str, Any] = Field(default_factory=dict, description="Parameters to set; unset ones take the defaults")


class DesignLink(_Input):
    from_: str = Field(alias="from", description="Component name")
    to: str = Field(description="Component name")
    carrier: Literal["electricity", "heat", "both"] = "electricity"


class ProposeDesignInput(_Input):
    name: str = Field(min_length=1, max_length=120, description="Design name, e.g. 'Campus · 600 kWp PV + heat pumps'")
    summary: str = Field("", max_length=600, description="One or two sentences: what the design is and why")
    components: list[DesignComponent] = Field(min_length=1, max_length=40)
    links: list[DesignLink] = Field(default_factory=list, description="Optional; omitted links are drawn automatically")


async def propose_twin_design(inp: ProposeDesignInput) -> dict:
    try:
        components, links = build_design(
            [c.model_dump() for c in inp.components],
            [{"from": l.from_, "to": l.to, "carrier": l.carrier} for l in inp.links] or None,
        )
    except DesignError as exc:
        raise ValueError(str(exc))
    sim = await asyncio.to_thread(_simulate_components, components)
    return {
        "design": {"name": inp.name, "summary": inp.summary, "components": components, "connections": links},
        **sim,
        "note": "Shown to the user as a proposal card with 'Apply to canvas'. Nothing is saved until the user applies and saves it.",
    }


async def get_current_design(_: "NoInput") -> dict:
    ui = UI_CONTEXT.get()
    design = ui.get("design") or {}
    components = design.get("components") or []
    if ui.get("view") != "builder":
        raise ValueError("The user is not in Twin Builder; ask them to open it, or use get_twin_overview for saved twins.")
    if not components:
        return {"design": {"name": design.get("name"), "components": []}, "note": "The canvas is empty."}
    sim = await asyncio.to_thread(_simulate_components, components, design.get("twin_id"))
    return {
        "design": {
            "name": design.get("name"),
            "saved_twin_id": design.get("twin_id"),
            "read_only_paper_reference": bool(design.get("is_reference")),
            "selected_component": design.get("selected_component"),
            "components": [{"name": c.get("name"), "type": c.get("type"), "params": c.get("params")} for c in components],
            "links": len(design.get("connections") or []),
        },
        **sim,
    }


class CreateScenarioInput(_Input):
    name: str = Field(min_length=1, max_length=120)
    description: str = Field("", max_length=300, description="One-line summary")
    details: str = Field("", max_length=4000, description="Rationale, assumptions and expected effects")
    twin_id: Optional[str] = Field(None, description="Existing digital twin to link (from get_twin_overview)")
    design: Optional[ProposeDesignInput] = Field(None, description="Or a new design: it is saved as a twin and linked")
    component_changes: dict[str, dict[str, Any]] = Field(
        default_factory=dict,
        description="With twin_id: this scenario's own parameter values, {component name or id: {param: value}}, "
                    "e.g. {'Rooftop PV (171 kWp)': {'capacity_kwp': 300}}. The twin itself is not changed - use this for what-if variants of one twin.",
    )


async def create_scenario(inp: CreateScenarioInput) -> dict:
    if bool(inp.twin_id) == bool(inp.design):
        raise ValueError("Give either twin_id or design")
    twin_id = inp.twin_id
    twin_name = None
    if inp.design:
        try:
            components, links = build_design(
                [c.model_dump() for c in inp.design.components],
                [{"from": l.from_, "to": l.to, "carrier": l.carrier} for l in inp.design.links] or None,
            )
        except DesignError as exc:
            raise ValueError(str(exc))
        created = await routes.create_digital_twin(DigitalTwinCreate(
            name=inp.design.name, description=f"Digital twin with {len(components)} components",
            components=components, connections=links,
        ))
        twin_id, twin_name = created.id, created.name
    changes: dict = {}
    if inp.design is None:
        with session_scope() as db:
            twin = db.get(DigitalTwin, twin_id)
            if twin is None:
                raise ValueError(f"Twin {twin_id} not found")
            twin_name = twin.name
            comps = list(twin.components or [])
        for key, values in inp.component_changes.items():
            comp = next((c for c in comps if c.get("id") == key or c.get("name") == key), None)
            if comp is None:
                raise ValueError(f"No component {key!r} in twin '{twin_name}'; components: {[c.get('name') for c in comps]}")
            changes[str(comp["id"])] = values
    elif inp.component_changes:
        raise ValueError("component_changes only applies with twin_id; put the values into the design instead")
    try:
        sc = await routes.create_scenario(ScenarioCreate(
            name=inp.name, description=inp.description or None, details=inp.details or None,
            config_overrides={"component_overrides": changes} if changes else {}, digital_twin_id=twin_id,
        ))
    except routes.HTTPException as exc:
        raise ValueError(exc.detail)
    return {"scenario_id": sc.id, "name": sc.name, "linked_twin": twin_name, "twin_id": twin_id,
            "parameter_changes_vs_twin": changes or None,
            "note": "Saved as a full-design scenario; it appears on the Scenarios page."}


class CompareScenariosInput(_Input):
    scenario_ids: list[str] = Field(default_factory=list, max_length=10, description="Scenario ids; empty = all scenarios")


async def compare_scenarios(inp: CompareScenariosInput) -> dict:
    """Whole-period results of each scenario's design, without creating runs."""
    from .site_sim import simulate

    with session_scope() as db:
        q = db.query(Scenario).order_by(Scenario.created_at.asc())
        rows = [s for s in q.all() if not inp.scenario_ids or s.id in inp.scenario_ids]
        items = [(s.id, s.name, "full design" if s.digital_twin_id else "electricity only", dict(s.config_overrides or {})) for s in rows]
    if not items:
        raise ValueError("No matching scenarios")

    def work() -> list:
        df = _dataset()
        out = []
        for sid, name, model, overrides in items:
            site = simulate(df, overrides)
            years = max(1e-9, len(df) * site.dt_hours / 8760)
            out.append({"scenario_id": sid, "name": name, "model": model, "results": _annual(site, years)})
        return out

    return {"period": "2015-2024, yearly averages", "scenarios": await asyncio.to_thread(work)}


class RunScenarioInput(_Input):
    scenario_id: str


async def run_scenario(inp: RunScenarioInput) -> dict:
    run = await routes.run_scenario(inp.scenario_id)
    return {"run_id": run.id, "name": run.name, "note": "Started at 2015-01-01; it appears in the Console run list."}


TOOLS: list[Tool] = [
    Tool("get_twin_overview", "List the dataset coverage, all simulation runs (live or not, how far simulated), all scenarios (with their linked twin and whether they are full designs or electricity only) and all saved digital twins. Call this first when you need ids or an overview.", NoInput, get_twin_overview),
    Tool("get_run_details", "Current KPIs of a live run over what has been simulated so far, from the full component dispatch: generation, demand, PED ratios, self-sufficiency, grid import/export, curtailment, heat supply and which inputs are measured or synthetic.", RunInput, get_run_details),
    Tool("get_energy_profile", "Aggregated generation/demand/peaks/prices of a live run by hour, day, week or month over the most recent simulated days. Use to explain patterns (e.g. winter deficit, midday surplus).", ProfileInput, get_energy_profile),
    Tool("compare_runs", "Compare PED metrics of several runs on a common simulated horizon.", CompareInput, compare_runs),
    Tool("compare_scenarios", "Simulate scenarios' designs over the whole dataset (2015-2024) without creating runs and return yearly averages: energy, PED ratios, self-sufficiency, grid exchange, heat. Best for comparing or ranking scenarios.", CompareScenariosInput, compare_scenarios),
    Tool("evaluate_design", "Fast electricity-only what-if (PV, wind, battery, building load, DSM) over any period of the dataset, without creating a run. Returns energy, PED ratio, self-sufficiency, peak import, DKK costs and a monthly breakdown. For designs with heat pumps, EV, CHP or heat use propose_twin_design instead.", DesignInput, evaluate_design),
    Tool("sweep_designs", "Electricity-only grid of PV and/or battery sizes (up to 60 combinations) for sizing questions, e.g. the smallest PV that reaches PED or the battery size where extra storage stops paying off.", SweepInput, sweep_designs),
    Tool("get_current_design", "Read the design on the user's Twin Builder canvas (components and parameters, incl. unsaved edits) and simulate it over 2015-2024 (yearly averages, every component). Only works while the user is in Twin Builder.", NoInput, get_current_design),
    Tool("propose_twin_design",
         "Build a complete digital twin design from components and simulate it over 2015-2024 (yearly averages). "
         "The user sees it as a card with an 'Apply to canvas' button - nothing is saved. Use it to generate a twin from a description "
         "or to propose a modified version of the current design (then include all components, changed and unchanged). "
         "Sizes are in kW / kWp / kWh / m2. Parameters per type (defaults shown):\n" + catalog_text() +
         "\nNotes: smart_building load_kw is the peak electricity demand excluding heating; heat demand = area_m2 x heat_demand_kwh_m2. "
         "heat_pump capacity_kw is heat output. Grid limits 0 = no limit. A building needs a heat source (heat_pump, district_heating or chp_unit) or its heat is reported as not covered. thermal_storage is charged only by heat pumps from on-site surplus electricity (useless without a heat pump). CHP electricity is not counted as renewable generation in the electricity PED ratio.",
         ProposeDesignInput, propose_twin_design, client_event="design_proposal"),
    Tool("create_scenario", "Save a scenario linked to an existing twin (twin_id, optionally with its own parameter values in component_changes - the twin stays unchanged) or to a new design (saved as a twin first). Every scenario created this way simulates all components. Only when the user asks to save or create a scenario.", CreateScenarioInput, create_scenario, mutates="scenario"),
    Tool("run_scenario", "Start a new simulation run of a scenario. Only when the user asks to run it.", RunScenarioInput, run_scenario, mutates="run"),
    Tool("step_simulation", "Advance a live run by a number of simulated hours. Changes the run the user is looking at - only do this when the user asks to simulate further.", StepInput, step_simulation, mutates="run"),
]

TOOLS_BY_NAME = {t.name: t for t in TOOLS}
