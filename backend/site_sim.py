"""Simulate a design over the whole dataset horizon.

A design given as digital twin components (``twin_components`` in the config
overrides) is simulated component by component (``backend.components``) with
the user's uploaded data where present. Older configs that only carry
aggregate sizes (``owned_*`` keys) use ``backend.profiles``.

Results are cached and shared by sessions with the same design, which keeps
memory bounded when several runs of one scenario are open.
"""

from __future__ import annotations

import json
from collections import OrderedDict
from dataclasses import dataclass, field
from typing import Any, Dict, Optional

import numpy as np
import pandas as pd

from . import profile_store
from .components import CHANNELS, Channel, params_of, site_inputs, timeline
from .optimizer import HeatSystem, MeritOrderConfig, MeritOrderOptimizer, build_config_from_overrides
from .profiles import scale_profiles

TWIN_COMPONENT_KEYS = ("twin_id", "twin_components")


@dataclass
class SiteResult:
    dt_hours: float
    solar_mw: np.ndarray
    wind_mw: np.ndarray
    hydro_mw: np.ndarray
    load_mw: np.ndarray          # all electricity demand incl. heat pumps
    price: np.ndarray            # DKK/MWh
    config: MeritOrderConfig
    kpis: Dict[str, Any]
    series_mwh: Dict[str, np.ndarray]
    soc_mwh: np.ndarray
    ts_soc_mwh: Optional[np.ndarray] = None
    ev_mw: Optional[np.ndarray] = None
    has_heat: bool = False
    has_dsm: bool = False
    sources: Dict[str, str] = field(default_factory=dict)
    chp_eff_e: float = 0.38
    soc0_mwh: float = 0.0

    def kpis_upto(self, upto: Optional[int] = None) -> Dict[str, Any]:
        """KPIs of the first ``upto`` steps (all steps: the dispatcher's own KPIs).
        Dispatch is causal, so these equal a dispatch that stops at ``upto``."""
        n = len(self.soc_mwh)
        if upto is None or upto >= n:
            return self.kpis
        u = max(1, int(upto))
        dt = self.dt_hours
        s = {k: np.asarray(v[:u], dtype=float) for k, v in self.series_mwh.items()}
        tot = {k: float(v.sum()) for k, v in s.items()}
        g = lambda k: tot.get(k, 0.0)  # noqa: E731
        gen = float((self.solar_mw[:u].astype(float) + self.wind_mw[:u] + self.hydro_mw[:u]).sum() * dt)
        demand = float(self.load_mw[:u].astype(float).sum() * dt)
        chp_el = g("chp_el_mwh")
        # Electricity of heat pumps filling thermal storage = on-site supply not otherwise accounted for
        to_storage = max(0.0, gen + chp_el - g("pv_to_load_mwh") - g("pv_to_batt_mwh") - g("dsm_charge_mwh") - g("pv_export_mwh") - g("curtailed_mwh"))
        cfg = self.config
        over = np.zeros(u)
        if cfg.import_limit_mw is not None:
            over = np.maximum(0.0, s["grid_purchase_mwh"] - max(0.0, float(cfg.import_limit_mw)) * dt)
        k: Dict[str, Any] = {
            "total_gen_mwh": gen,
            "total_demand_mwh": demand,
            "ped_absolute_mwh": gen - demand,
            "ped_ratio": gen / (demand + 1e-9),
            "self_consumption_mwh": g("pv_to_load_mwh"),
            "export_mwh": g("pv_export_mwh"),
            "battery_throughput_mwh": g("pv_to_batt_mwh") + g("batt_to_load_mwh"),
            "grid_import_mwh": g("grid_import_mwh"),
            "grid_purchase_mwh": g("grid_purchase_mwh"),
            "export_delivered_mwh": g("export_delivered_mwh"),
            "grid_losses_mwh": g("grid_purchase_mwh") - g("grid_import_mwh") + g("pv_export_mwh") - g("export_delivered_mwh"),
            "battery_losses_mwh": g("pv_to_batt_mwh") - g("batt_to_load_mwh") - (float(self.soc_mwh[u - 1]) - self.soc0_mwh),
            "self_consumption_ratio": (g("pv_to_load_mwh") + g("pv_to_batt_mwh") + g("dsm_charge_mwh") + to_storage) / (gen + chp_el + 1e-9),
            "self_sufficiency_ratio": 1.0 - g("grid_import_mwh") / (demand + 1e-9),
            "curtailed_mwh": g("curtailed_mwh"),
            "import_over_limit_mwh": float(over.sum()),
            "import_over_limit_hours": float(np.count_nonzero(over > 1e-9) * dt),
            "peak_grid_purchase_kw": float(s["grid_purchase_mwh"].max() / dt * 1000),
        }
        dh = ext = fuel = 0.0
        if self.has_heat:
            hp_el = g("hp_el_mwh")
            dh, ext = g("dh_heat_mwh"), g("external_heat_mwh")
            fuel = chp_el / max(self.chp_eff_e, 1e-9)
            ts_end = float(self.ts_soc_mwh[u - 1]) if self.ts_soc_mwh is not None else 0.0
            k.update({
                "heat_demand_mwh": g("heat_demand_mwh"),
                "hp_heat_mwh": g("hp_heat_mwh"),
                "hp_el_mwh": hp_el,
                "hp_spf": g("hp_heat_mwh") / hp_el if hp_el > 1e-9 else None,
                "ts_charge_mwh": g("ts_charge_mwh"),
                "ts_discharge_mwh": g("ts_discharge_mwh"),
                "ts_losses_mwh": g("ts_charge_mwh") - g("ts_discharge_mwh") - ts_end,
                "chp_heat_mwh": g("chp_heat_mwh"),
                "chp_el_mwh": chp_el,
                "chp_fuel_mwh": fuel,
                "dh_heat_mwh": dh,
                "external_heat_mwh": ext,
            })
        imports = g("grid_purchase_mwh") + dh + ext + fuel
        net = imports - g("export_delivered_mwh")
        k["energy_import_mwh"] = imports
        k["net_energy_import_mwh"] = net
        k["total_energy_ped_ratio"] = gen / (gen + net) if gen + net > 1e-9 else None
        return k


_CACHE: "OrderedDict[tuple, SiteResult]" = OrderedDict()
_CACHE_SIZE = 6


def _f32(a: Optional[np.ndarray]) -> Optional[np.ndarray]:
    return None if a is None else np.asarray(a, dtype=np.float32)


def uploaded_series(twin_id: Optional[str], data: pd.DataFrame):
    """``channel_series`` callback for ``site_inputs``: the component's upload,
    rescaled to its current size, or None."""
    ts = data["timestamp"]

    def get(component: Dict[str, Any], channel: Channel) -> Optional[np.ndarray]:
        if not twin_id or not component.get("id"):
            return None
        meta = profile_store.load_meta(twin_id, str(component["id"]), channel.key)
        if meta is None:
            return None
        hit = profile_store.aligned(twin_id, str(component["id"]), channel.key, ts)
        if hit is None:
            return None
        values = hit[0]
        ref = meta.get("ref_size")
        if channel.size is not None and meta.get("scale", True) and ref:
            values = values * (channel.size(params_of(component)) / float(ref))
        return values

    return get


def simulate(data: pd.DataFrame, overrides: Optional[Dict[str, Any]]) -> SiteResult:
    overrides = dict(overrides or {})
    twin_id = overrides.get("twin_id")
    key = (id(data), len(data), json.dumps(overrides, sort_keys=True, default=str), profile_store.fingerprint(twin_id) if twin_id else "")
    hit = _CACHE.get(key)
    if hit is not None:
        _CACHE.move_to_end(key)
        return hit

    tl = timeline(data)
    dt = tl.dt_h
    cfg = build_config_from_overrides(overrides, dt)
    components = overrides.get("twin_components")

    if isinstance(components, list):
        si = site_inputs(data, components, uploaded_series(twin_id, data))
        if cfg.import_limit_mw is None:
            cfg.import_limit_mw = si.import_limit_mw
        if cfg.export_limit_mw is None:
            cfg.export_limit_mw = si.export_limit_mw
        if si.battery_soc_initial is not None:
            cfg.soc_initial_pu = si.battery_soc_initial
        heat = None
        if si.heat_mw.any() or si.hp_cap_mw or si.chp_th_mw or si.ts_cap_mwh or si.dh_cap_mw:
            heat = HeatSystem(
                heat_mw=si.heat_mw, hp_cap_mw=si.hp_cap_mw, hp_inv_cop=si.hp_inv_cop,
                chp_el_mw=si.chp_el_mw, chp_th_mw=si.chp_th_mw, chp_eff_e=si.chp_eff_e,
                ts_cap_mwh=si.ts_cap_mwh, ts_loss_per_day=si.ts_loss_per_day, dh_cap_mw=si.dh_cap_mw,
            )
        out = MeritOrderOptimizer(cfg).run(
            pv_mw=si.solar_mw + si.wind_mw + si.hydro_mw, load_mw=si.load_mw, flex_mw=si.flex_mw, heat=heat,
        )
        solar, wind, hydro, price = si.solar_mw, si.wind_mw, si.hydro_mw, si.price
        load = si.load_mw + (out["series_mwh"]["hp_el_mwh"] / dt if heat is not None else 0.0)
        ev = si.ev_mw if si.ev_mw.any() else None
        has_dsm = bool(si.flex_mw.any())
        sources = si.sources
        chp_eff = si.chp_eff_e
    else:
        prof = scale_profiles(data, overrides)
        solar, wind, hydro, load = prof["solar"], prof["wind"], prof["hydro"], prof["load"]
        price = data["price"].to_numpy(dtype=float) if "price" in data.columns else np.zeros(len(data))
        heat = None
        out = MeritOrderOptimizer(cfg).run(pv_mw=solar + wind + hydro, load_mw=load)
        ev = None
        has_dsm = cfg.flexible_load_share > 0
        sources = {}
        chp_eff = 0.38

    result = SiteResult(
        dt_hours=dt,
        solar_mw=_f32(solar), wind_mw=_f32(wind), hydro_mw=_f32(hydro), load_mw=_f32(load), price=_f32(price),
        config=cfg,
        kpis=out["kpis"],
        series_mwh={k: _f32(v) for k, v in out["series_mwh"].items()},
        soc_mwh=_f32(out["soc_mwh"]),
        ts_soc_mwh=_f32(out.get("ts_soc_mwh")),
        ev_mw=_f32(ev),
        has_heat=heat is not None,
        has_dsm=has_dsm,
        sources=sources,
        chp_eff_e=chp_eff,
        soc0_mwh=out["soc0_mwh"],
    )
    _CACHE[key] = result
    while len(_CACHE) > _CACHE_SIZE:
        _CACHE.popitem(last=False)
    return result
