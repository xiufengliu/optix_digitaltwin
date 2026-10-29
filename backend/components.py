"""Per-component time series of a digital twin.

Every component that has a time-varying input gets one or more *channels*
(e.g. a building has an electricity and a heat demand channel). A channel's
series comes from data the user uploaded for that component (see
``backend.profile_store``) or, without an upload, from the synthetic model
below. Synthetic models are driven by the dataset: DK2 solar/wind capacity
factors, the DK2 regional load shape, the DK2 spot price and the outdoor air
temperature (``temp_c``).

Dispatched components (battery, heat pump, CHP, thermal storage, district
heating) have no input series; ``site_inputs`` turns their parameters into the
settings of the dispatcher in ``backend.optimizer``.

All series are in kW (price: DKK/MWh) on the dataset timeline.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Callable, Dict, List, Optional

import numpy as np
import pandas as pd

# ---------------------------------------------------------------------------
# Channel catalogue
# ---------------------------------------------------------------------------


@dataclass(frozen=True)
class Channel:
    key: str
    label: str
    unit: str  # unit of the stored/aligned series
    # Component size the series scales with (uploads keep the size they were
    # recorded for and are rescaled when the component is resized)
    size: Optional[Callable[[Dict[str, Any]], float]] = None
    size_label: str = ""


def _num(params: Dict[str, Any], key: str, default: float = 0.0) -> float:
    try:
        v = float(params.get(key, default))
    except (TypeError, ValueError):
        return default
    return v if np.isfinite(v) else default


CHANNELS: Dict[str, List[Channel]] = {
    "solar_pv": [Channel("generation", "PV generation", "kW", lambda p: _num(p, "capacity_kwp"), "kWp")],
    "wind_turbine": [Channel("generation", "Wind generation", "kW", lambda p: _num(p, "capacity_kw"), "kW")],
    "smart_building": [
        Channel("electricity", "Electricity demand", "kW", lambda p: _num(p, "load_kw"), "kW peak"),
        Channel("heat", "Heat demand", "kW", lambda p: _num(p, "area_m2"), "m²"),
    ],
    "load_center": [Channel("electricity", "Electricity demand", "kW", lambda p: _num(p, "peak_load_kw", _num(p, "base_load_kw")), "kW peak")],
    "ev_charger": [Channel("charging", "Charging demand", "kW", lambda p: _num(p, "num_ports") * _num(p, "power_per_port_kw"), "kW installed")],
    "smart_grid": [Channel("price", "Electricity price", "DKK/MWh")],
}

# Components whose operation the dispatcher computes (no input series)
DISPATCHED = {
    "battery_storage": "Charged from on-site surplus and discharged to cover demand; follows the battery parameters.",
    "heat_pump": "Runs to cover heat demand (and to fill thermal storage from on-site surplus); COP varies with outdoor temperature.",
    "chp_unit": "Heat-led: covers heat demand left after heat pumps; co-produces electricity.",
    "thermal_storage": "Filled by heat pumps from on-site electricity surplus; discharged first to cover heat demand.",
    "district_heating": "Covers the heat demand left after on-site heat sources, up to its capacity.",
}

# Defaults for parameters older designs may not have
DEFAULTS: Dict[str, Dict[str, Any]] = {
    "smart_building": {"load_profile": "dk2", "heat_demand_kwh_m2": 70.0, "flexible_load_pct": 0.0, "area_m2": 0.0},
    "load_center": {"load_profile": "dk2", "flexible_load_pct": 30.0},
    "ev_charger": {"usage_profile": "workplace", "kwh_per_port_day": 20.0, "smart_charging": False},
    "heat_pump": {"cop": 3.5, "type": "air_source"},
    "chp_unit": {"efficiency_e": 0.38, "fuel": "biogas"},
    "thermal_storage": {"loss_pct_day": 2.0},
    "battery_storage": {"efficiency": 0.9, "initial_soc": 0.5},
    "smart_grid": {"tariff_type": "dynamic"},
}

HEATING_BASE_C = 17.0  # Danish degree-day base temperature
DHW_SHARE = 0.15       # share of a building's annual heat used for hot water


def params_of(component: Dict[str, Any]) -> Dict[str, Any]:
    return {**DEFAULTS.get(component.get("type", ""), {}), **(component.get("params") or {})}


# ---------------------------------------------------------------------------
# Dataset context (calendar, temperature, normalised shapes); cached per frame
# ---------------------------------------------------------------------------


@dataclass
class Timeline:
    ts: pd.Series
    dt_h: float
    hour: np.ndarray       # hour of day (float)
    weekday: np.ndarray    # 0 = Monday
    doy: np.ndarray        # day of year 1..366
    year: np.ndarray
    temp_c: np.ndarray
    years: float           # horizon length in years
    cache: Dict[str, np.ndarray] = field(default_factory=dict)

    @property
    def n(self) -> int:
        return len(self.ts)


_TIMELINES: Dict[int, tuple] = {}


def timeline(data: pd.DataFrame) -> Timeline:
    key = id(data)
    hit = _TIMELINES.get(key)
    if hit is not None and hit[0] is data:
        return hit[1]
    ts = data["timestamp"]
    dt_h = (ts.iloc[1] - ts.iloc[0]).total_seconds() / 3600.0 if len(ts) > 1 else 1 / 6
    if "temp_c" in data.columns:
        temp = data["temp_c"].to_numpy(dtype=float)
    else:
        # Fallback climate (Copenhagen normals): annual mean 8.7 C, coldest mid-February
        doy = ts.dt.dayofyear.to_numpy()
        hr = (ts.dt.hour + ts.dt.minute / 60).to_numpy()
        temp = 8.7 - 8.3 * np.cos(2 * np.pi * (doy - 30) / 365.25) - 2.5 * np.cos(2 * np.pi * (hr - 3) / 24)
    tl = Timeline(
        ts=ts,
        dt_h=float(dt_h),
        hour=(ts.dt.hour + ts.dt.minute / 60).to_numpy(dtype=float),
        weekday=ts.dt.weekday.to_numpy(),
        doy=ts.dt.dayofyear.to_numpy(),
        year=ts.dt.year.to_numpy(),
        temp_c=np.nan_to_num(temp, nan=8.7),
        years=max(1e-9, len(ts) * dt_h / 8760.0),
    )
    _TIMELINES.clear()  # one dataset at a time
    _TIMELINES[key] = (data, tl)
    return tl


def _col(data: pd.DataFrame, name: str) -> Optional[np.ndarray]:
    return data[name].to_numpy(dtype=float) if name in data.columns else None


def _hourly(tl: Timeline, table: List[float]) -> np.ndarray:
    """Interpolate a 24-value daily pattern onto the timeline."""
    x = np.arange(25)
    y = np.asarray(list(table) + [table[0]], dtype=float)
    return np.interp(tl.hour, x, y)


def _load_shape(data: pd.DataFrame, tl: Timeline, profile: str) -> np.ndarray:
    """Normalised electricity demand shape (peak = 1)."""
    profile = (profile or "dk2").lower()
    if profile in tl.cache:
        return tl.cache[profile]
    weekend = tl.weekday >= 5
    season = 1.0 + 0.10 * np.cos(2 * np.pi * (tl.doy - 15) / 365.25)  # winter lighting
    if profile == "office":
        day = _hourly(tl, [.30, .30, .30, .30, .30, .32, .45, .70, .92, 1., 1., .98, .95, .97, .97, .93, .85, .65, .48, .40, .36, .33, .31, .30])
        shape = np.where(weekend, 0.32, day) * season
    elif profile == "residential":
        day = _hourly(tl, [.45, .40, .38, .37, .38, .45, .65, .80, .75, .65, .60, .60, .60, .58, .58, .62, .75, .95, 1., .95, .85, .75, .65, .52])
        wkd = _hourly(tl, [.50, .45, .40, .38, .38, .40, .48, .62, .78, .82, .78, .74, .72, .68, .66, .68, .78, .95, 1., .95, .86, .76, .66, .56])
        shape = np.where(weekend, wkd, day) * (1.0 + 0.15 * np.cos(2 * np.pi * (tl.doy - 15) / 365.25))
    elif profile == "industrial":
        day = _hourly(tl, [.40, .40, .40, .40, .40, .55, .85, .97, 1., 1., 1., .98, .95, .98, 1., 1., .97, .92, .85, .80, .75, .60, .45, .40])
        shape = np.where(weekend, 0.40, day)
    elif profile == "commercial":
        day = _hourly(tl, [.35, .33, .32, .32, .33, .38, .50, .70, .88, .97, 1., 1., 1., 1., 1., .98, .95, .90, .80, .65, .50, .42, .38, .36])
        shape = np.where(tl.weekday == 6, 0.45, np.where(weekend, 0.85 * day, day)) * season
    else:
        load = _col(data, "load")
        shape = load if load is not None else np.ones(tl.n)
    shape = np.asarray(shape, dtype=float)
    peak = float(np.max(shape)) if shape.size else 0.0
    shape = shape / peak if peak > 1e-9 else np.zeros(tl.n)
    tl.cache[profile] = shape
    return shape


def _unit_cf(data: pd.DataFrame, kind: str) -> np.ndarray:
    cf = _col(data, f"{kind}_cf")
    if cf is not None:
        return np.clip(np.nan_to_num(cf), 0.0, None)
    raw = _col(data, kind)
    if raw is None or not raw.size or np.max(raw) <= 1e-9:
        return np.zeros(len(data))
    return raw / np.max(raw)


def heating_degree_hours(tl: Timeline) -> tuple[np.ndarray, float]:
    """Degree hours per step (K h) and their mean per year."""
    hdh = np.maximum(0.0, HEATING_BASE_C - tl.temp_c) * tl.dt_h
    return hdh, float(hdh.sum()) / tl.years


def cop_series(tl: Timeline, cop_nominal: float, source: str) -> np.ndarray:
    """Heat pump COP over time. Rated at EN 14511 conditions with a 35 C sink
    (air A7/W35, brine B0/W35, water W10/W35); the COP follows the Carnot ratio
    of the actual source temperature. Ground and water sources are taken as
    constant-temperature sources."""
    sink = 35.0
    source = (source or "air_source").lower()
    rated_src = {"air_source": 7.0, "ground_source": 0.0, "water_source": 10.0}.get(source, 7.0)
    if source != "air_source":
        return np.full(tl.n, max(1.0, cop_nominal))
    lift = np.maximum(5.0, sink - tl.temp_c)
    cop = cop_nominal * (sink - rated_src) / lift
    return np.clip(cop, 1.0, 2.0 * cop_nominal)


def _ev_shape(tl: Timeline, usage: str, session_hours: float) -> np.ndarray:
    """Expected charging power per kWh of daily demand (1/h), mean over a day = 1/24."""
    usage = (usage or "workplace").lower()
    if usage == "residential":
        mu, sigma, weekend = 18.0, 1.8, 1.0
    elif usage == "public":
        mu, sigma, weekend = 13.5, 3.5, 0.8
    else:
        mu, sigma, weekend = 8.5, 1.0, 0.2
    hours = np.arange(0, 24, 0.25)
    arrivals = np.zeros_like(hours)
    for shift in (-24, 0, 24):  # wrap around midnight
        arrivals += np.exp(-0.5 * ((hours - mu + shift) / sigma) ** 2)
    # A car arriving at h draws power from h to h + session length (wraps past midnight)
    width = max(1, int(round(session_hours / 0.25)))
    power = sum(np.roll(arrivals, k) for k in range(width))
    power = power / (power.sum() * 0.25)  # integrates to 1 over the day
    day = np.interp(tl.hour, np.append(hours, 24), np.append(power, power[0]))
    factor = np.where(tl.weekday >= 5, weekend, 1.0)
    return day * factor


# ---------------------------------------------------------------------------
# Synthetic channel models
# ---------------------------------------------------------------------------


def synthetic(data: pd.DataFrame, ctype: str, channel: str, params: Dict[str, Any]) -> np.ndarray:
    """Model series of one channel in kW (price channel: DKK/MWh)."""
    tl = timeline(data)
    p = {**DEFAULTS.get(ctype, {}), **(params or {})}
    if ctype == "solar_pv" and channel == "generation":
        return _unit_cf(data, "solar") * max(0.0, _num(p, "capacity_kwp"))
    if ctype == "wind_turbine" and channel == "generation":
        return _unit_cf(data, "wind") * max(0.0, _num(p, "capacity_kw"))
    if ctype == "smart_building" and channel == "electricity":
        return _load_shape(data, tl, str(p.get("load_profile"))) * max(0.0, _num(p, "load_kw"))
    if ctype == "smart_building" and channel == "heat":
        annual = max(0.0, _num(p, "area_m2")) * max(0.0, _num(p, "heat_demand_kwh_m2"))
        if annual <= 0:
            return np.zeros(tl.n)
        hdh, hdh_year = heating_degree_hours(tl)
        space = annual * (1 - DHW_SHARE) * hdh / max(hdh_year, 1e-9) / tl.dt_h
        # Hot water follows occupancy (the electricity shape), scaled to its annual share
        occ = _load_shape(data, tl, str(p.get("load_profile")))
        dhw = annual * DHW_SHARE / 8760.0 * occ / max(float(occ.mean()), 1e-9)
        return space + dhw
    if ctype == "load_center" and channel == "electricity":
        base = max(0.0, _num(p, "base_load_kw"))
        peak = max(base, _num(p, "peak_load_kw", base))
        shape = _load_shape(data, tl, str(p.get("load_profile")))
        lo = float(np.min(shape)) if shape.size else 0.0
        shape01 = (shape - lo) / max(1.0 - lo, 1e-9)
        return base + (peak - base) * shape01
    if ctype == "ev_charger" and channel == "charging":
        ports = max(0.0, _num(p, "num_ports"))
        port_kw = max(0.0, _num(p, "power_per_port_kw"))
        daily = ports * max(0.0, _num(p, "kwh_per_port_day"))
        if ports <= 0 or port_kw <= 0 or daily <= 0:
            return np.zeros(tl.n)
        session_h = min(12.0, max(0.25, _num(p, "kwh_per_port_day") / port_kw))
        return np.minimum(daily * _ev_shape(tl, str(p.get("usage_profile")), session_h), ports * port_kw)
    if ctype == "smart_grid" and channel == "price":
        spot = _col(data, "price")
        spot = np.zeros(tl.n) if spot is None else np.nan_to_num(spot)
        tariff = str(p.get("tariff_type") or "dynamic").lower()
        if tariff == "dynamic":
            return spot
        yearly = pd.Series(spot).groupby(tl.year).transform("mean").to_numpy()
        if tariff == "fixed":
            return yearly
        # Time of use (Danish DSO pattern): low 0-6, peak 17-21; mean factor 1
        h = tl.hour
        factor = np.where(h < 6, 0.65, np.where((h >= 17) & (h < 21), 1.6, 1.0))
        return yearly * factor / float(factor.mean())
    return np.zeros(tl.n)


# ---------------------------------------------------------------------------
# Site aggregation
# ---------------------------------------------------------------------------


@dataclass
class SiteInputs:
    """Everything the dispatcher needs, in MW / MWh on the dataset timeline."""

    solar_mw: np.ndarray
    wind_mw: np.ndarray
    hydro_mw: np.ndarray
    load_mw: np.ndarray        # electricity demand before heat pumps (buildings, load centres, EV)
    flex_mw: np.ndarray        # part of load_mw that DSM may shift
    ev_mw: np.ndarray
    heat_mw: np.ndarray        # building heat demand
    price: np.ndarray          # DKK/MWh
    temp_c: np.ndarray
    hp_cap_mw: float = 0.0
    hp_inv_cop: Optional[np.ndarray] = None  # 1 / COP (capacity weighted)
    chp_el_mw: float = 0.0
    chp_th_mw: float = 0.0
    chp_eff_e: float = 0.38
    ts_cap_mwh: float = 0.0
    ts_loss_per_day: float = 0.0
    dh_cap_mw: float = 0.0
    import_limit_mw: Optional[float] = None
    export_limit_mw: Optional[float] = None
    battery_soc_initial: Optional[float] = None
    sources: Dict[str, str] = field(default_factory=dict)  # "<component id>/<channel>" -> "uploaded" | "synthetic"


def site_inputs(data: pd.DataFrame, components: List[Dict[str, Any]], channel_series: Callable[[Dict[str, Any], Channel], Optional[np.ndarray]]) -> SiteInputs:
    """Aggregate the components of a design. ``channel_series(component, channel)``
    returns an uploaded series (kW, already rescaled) or None for the model."""
    tl = timeline(data)
    n = tl.n
    zeros = lambda: np.zeros(n)  # noqa: E731
    solar, wind, load, flex, ev, heat = zeros(), zeros(), zeros(), zeros(), zeros(), zeros()
    price: Optional[np.ndarray] = None
    sources: Dict[str, str] = {}
    hp_cap = 0.0
    hp_inv = zeros()
    chp_el = chp_th = chp_fuel_per_el = 0.0
    ts_cap = ts_loss_weighted = 0.0
    dh_cap = 0.0
    imp_lim: Optional[float] = None
    exp_lim: Optional[float] = None
    batt_kwh = batt_soc_weighted = 0.0
    grids = 0

    def series(c: Dict[str, Any], key: str) -> np.ndarray:
        ch = next(ch for ch in CHANNELS[c["type"]] if ch.key == key)
        up = channel_series(c, ch)
        sources[f"{c.get('id')}/{key}"] = "uploaded" if up is not None else "synthetic"
        return up if up is not None else synthetic(data, c["type"], key, params_of(c))

    for c in components:
        ctype = c.get("type", "")
        p = params_of(c)
        if ctype == "solar_pv":
            solar += series(c, "generation")
        elif ctype == "wind_turbine":
            wind += series(c, "generation")
        elif ctype in ("smart_building", "load_center"):
            el = series(c, "electricity")
            load += el
            pct = _num(p, "flexible_load_pct")
            if ctype == "load_center" and not p.get("dsm_enabled", False):
                pct = 0.0
            flex += el * min(100.0, max(0.0, pct)) / 100.0
            if ctype == "smart_building":
                heat += series(c, "heat")
        elif ctype == "ev_charger":
            e = series(c, "charging")
            ev += e
            load += e
            if p.get("smart_charging"):
                flex += e
        elif ctype == "smart_grid":
            if price is None:
                price = series(c, "price")
            # Several grid connections add up their limits; a missing or 0 kW
            # limit means "no limit", which makes the total unlimited too
            grids += 1
            imp_kw, exp_kw = _num(p, "import_limit_kw"), _num(p, "export_limit_kw")
            imp_lim = None if imp_kw <= 0 or (grids > 1 and imp_lim is None) else (imp_lim or 0.0) + imp_kw / 1000
            exp_lim = None if exp_kw <= 0 or (grids > 1 and exp_lim is None) else (exp_lim or 0.0) + exp_kw / 1000
        elif ctype == "heat_pump":
            cap = max(0.0, _num(p, "capacity_kw")) / 1000
            if cap > 0:
                hp_inv += cap / cop_series(tl, max(1.0, _num(p, "cop", 3.5)), str(p.get("type")))
                hp_cap += cap
        elif ctype == "chp_unit":
            el_kw, th_kw = max(0.0, _num(p, "electrical_kw")), max(0.0, _num(p, "thermal_kw"))
            if el_kw > 0 and th_kw > 0:
                chp_el += el_kw / 1000
                chp_th += th_kw / 1000
                chp_fuel_per_el += el_kw / 1000 / max(0.05, min(1.0, _num(p, "efficiency_e", 0.38)))
        elif ctype == "thermal_storage":
            cap = max(0.0, _num(p, "capacity_kwh")) / 1000
            ts_cap += cap
            ts_loss_weighted += cap * max(0.0, _num(p, "loss_pct_day")) / 100
        elif ctype == "district_heating":
            dh_cap += max(0.0, _num(p, "capacity_kw")) / 1000
        elif ctype == "battery_storage":
            kwh = max(0.0, _num(p, "capacity_kwh"))
            batt_kwh += kwh
            batt_soc_weighted += kwh * min(1.0, max(0.0, _num(p, "initial_soc", 0.5)))

    if price is None:
        spot = _col(data, "price")
        price = np.zeros(n) if spot is None else np.nan_to_num(spot)
    hydro = zeros()  # no on-site hydro component

    return SiteInputs(
        solar_mw=solar / 1000,
        wind_mw=wind / 1000,
        hydro_mw=hydro,
        load_mw=load / 1000,
        flex_mw=flex / 1000,
        ev_mw=ev / 1000,
        heat_mw=heat / 1000,
        price=price,
        temp_c=tl.temp_c,
        hp_cap_mw=hp_cap,
        hp_inv_cop=(hp_inv / hp_cap) if hp_cap > 0 else None,
        chp_el_mw=chp_el,
        chp_th_mw=chp_th,
        chp_eff_e=(chp_el / chp_fuel_per_el) if chp_fuel_per_el > 0 else 0.38,
        ts_cap_mwh=ts_cap,
        ts_loss_per_day=(ts_loss_weighted / ts_cap) if ts_cap > 0 else 0.0,
        dh_cap_mw=dh_cap,
        import_limit_mw=imp_lim,
        export_limit_mw=exp_lim,
        battery_soc_initial=(batt_soc_weighted / batt_kwh) if batt_kwh > 0 else None,
        sources=sources,
    )
