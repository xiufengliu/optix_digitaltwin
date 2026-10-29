"""Component catalog for designs built outside Twin Builder (the AI copilot).

Mirrors COMPONENT_DEFS / PARAM_META in the frontend: default parameters, valid
values, canvas layout and links, so a generated design opens in Twin Builder
exactly like one drawn by hand.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional, Tuple

# Default parameters of a new component (frontend COMPONENT_DEFS.defaultParams)
DEFAULT_PARAMS: Dict[str, Dict[str, Any]] = {
    "smart_building": {"floors": 5, "area_m2": 2000, "load_kw": 150, "flexible_load_pct": 0, "load_profile": "dk2", "heat_demand_kwh_m2": 70},
    "solar_pv": {"capacity_kwp": 100, "tilt_deg": 15, "azimuth_deg": 180, "efficiency": 0.2},
    "battery_storage": {"capacity_kwh": 200, "power_kw": 50, "efficiency": 0.9, "initial_soc": 0.5},
    "wind_turbine": {"capacity_kw": 500, "hub_height_m": 80, "rotor_diameter_m": 50},
    "district_heating": {"supply_temp_c": 70, "return_temp_c": 40, "capacity_kw": 500},
    "smart_grid": {"import_limit_kw": 0, "export_limit_kw": 0, "tariff_type": "dynamic"},
    "ev_charger": {"num_ports": 4, "power_per_port_kw": 22, "kwh_per_port_day": 20, "usage_profile": "workplace", "smart_charging": False, "v2g_enabled": False},
    "heat_pump": {"capacity_kw": 50, "cop": 3.5, "type": "air_source"},
    "chp_unit": {"electrical_kw": 100, "thermal_kw": 150, "efficiency_e": 0.38, "fuel": "biogas"},
    "thermal_storage": {"capacity_kwh": 500, "max_temp_c": 95, "loss_pct_day": 2},
    "load_center": {"base_load_kw": 100, "peak_load_kw": 300, "load_profile": "dk2", "dsm_enabled": True, "flexible_load_pct": 30},
}

LABELS = {
    "smart_building": "Building", "solar_pv": "Solar PV", "battery_storage": "Battery", "wind_turbine": "Wind turbine",
    "district_heating": "District heating", "smart_grid": "Grid", "ev_charger": "EV charging", "heat_pump": "Heat pump",
    "chp_unit": "CHP", "thermal_storage": "Heat storage", "load_center": "Load centre",
}

OPTIONS = {
    "load_profile": {"dk2", "office", "residential", "commercial", "industrial"},
    "usage_profile": {"workplace", "residential", "public"},
    "type": {"air_source", "ground_source", "water_source"},
    "fuel": {"biogas", "natural_gas", "biomass", "hydrogen"},
    "tariff_type": {"dynamic", "time_of_use", "fixed"},
}
FRACTIONS = {"efficiency", "initial_soc", "efficiency_e"}
PERCENTS = {"flexible_load_pct"}

# Canvas rows by role
ROW = {
    "solar_pv": 0, "wind_turbine": 0, "chp_unit": 0,
    "smart_building": 1, "load_center": 1, "ev_charger": 1, "heat_pump": 1,
    "battery_storage": 2, "thermal_storage": 2,
    "smart_grid": 3, "district_heating": 3,
}
ELECTRIC_SUPPLY = {"solar_pv", "wind_turbine", "battery_storage", "smart_grid", "chp_unit"}
HEAT_SUPPLY = {"heat_pump", "district_heating", "thermal_storage", "chp_unit"}


class DesignError(ValueError):
    pass


def _clean_params(ctype: str, given: Dict[str, Any]) -> Dict[str, Any]:
    return {**DEFAULT_PARAMS[ctype], **clean_values(ctype, given)}


def clean_values(ctype: str, given: Dict[str, Any]) -> Dict[str, Any]:
    """Validate and normalise parameter values of a component type (only the given keys)."""
    if ctype not in DEFAULT_PARAMS:
        raise DesignError(f"Unknown component type {ctype!r}")
    params = dict(DEFAULT_PARAMS[ctype])
    unknown = sorted(set(given) - set(params))
    if unknown:
        raise DesignError(f"{ctype}: unknown parameter(s) {unknown}; allowed: {sorted(params)}")
    out: Dict[str, Any] = {}
    for key, value in given.items():
        default = params[key]
        if isinstance(default, bool):
            if not isinstance(value, bool):
                raise DesignError(f"{ctype}.{key} must be true or false")
        elif isinstance(default, str):
            if str(value) not in OPTIONS.get(key, {default}):
                raise DesignError(f"{ctype}.{key} must be one of {sorted(OPTIONS.get(key, {default}))}")
            value = str(value)
        else:
            try:
                value = float(value)
            except (TypeError, ValueError):
                raise DesignError(f"{ctype}.{key} must be a number")
            if value < 0:
                raise DesignError(f"{ctype}.{key} must not be negative")
            if key in FRACTIONS and value > 1:
                raise DesignError(f"{ctype}.{key} is a fraction between 0 and 1")
            if key in PERCENTS and value > 100:
                raise DesignError(f"{ctype}.{key} is a percentage (0-100)")
            if value == int(value) and key not in FRACTIONS:
                value = int(value)
        out[key] = value
    return out


def apply_overrides(components: List[Dict[str, Any]], overrides: Optional[Dict[str, Dict[str, Any]]]) -> List[Dict[str, Any]]:
    """Components with a scenario's parameter changes applied ({component id: {param: value}})."""
    if not overrides:
        return [dict(c) for c in components]
    out = []
    for c in components:
        change = overrides.get(str(c.get("id")))
        out.append({**c, "params": {**(c.get("params") or {}), **change}} if change else dict(c))
    return out


def build_design(components: List[Dict[str, Any]], connections: Optional[List[Dict[str, Any]]] = None) -> Tuple[list, list]:
    """Validated components with ids, names and canvas positions, plus links.
    Without explicit links, every electricity source is linked to the first
    electricity consumer and every heat source to the first building."""
    if not components:
        raise DesignError("A design needs at least one component")
    if len(components) > 40:
        raise DesignError("At most 40 components")
    out: list = []
    per_row: Dict[int, int] = {}
    counts: Dict[str, int] = {}
    for c in components:
        ctype = c.get("type")
        if ctype not in DEFAULT_PARAMS:
            raise DesignError(f"Unknown component type {ctype!r}; types: {sorted(DEFAULT_PARAMS)}")
        counts[ctype] = counts.get(ctype, 0) + 1
        row = ROW[ctype]
        col = per_row.get(row, 0)
        per_row[row] = col + 1
        out.append({
            "id": f"{ctype.replace('_', '-')}-{counts[ctype]}",
            "type": ctype,
            "name": str(c.get("name") or (f"{LABELS[ctype]} {counts[ctype]}" if counts[ctype] > 1 else LABELS[ctype]))[:80],
            "x": 60 + col * 220,
            "y": 40 + row * 150,
            "params": _clean_params(ctype, c.get("params") or {}),
        })

    ids = {c["id"] for c in out}
    by_name = {c["name"]: c["id"] for c in out}
    links: list = []
    if connections:
        for i, link in enumerate(connections, 1):
            a, b = by_name.get(link.get("from"), link.get("from")), by_name.get(link.get("to"), link.get("to"))
            if a not in ids or b not in ids:
                raise DesignError(f"Link {link.get('from')!r} -> {link.get('to')!r} names an unknown component (use component names)")
            carrier = link.get("carrier", "electricity")
            if carrier not in ("electricity", "heat", "both"):
                raise DesignError("Link carrier must be electricity, heat or both")
            links.append({"id": f"c{i}", "from": a, "to": b, "type": carrier})
    else:
        consumers = [c for c in out if c["type"] in ("smart_building", "load_center")]
        buildings = [c for c in out if c["type"] == "smart_building"]
        hub = consumers[0]["id"] if consumers else None
        heat_hub = buildings[0]["id"] if buildings else None
        n = 0
        for c in out:
            if c["type"] in HEAT_SUPPLY and heat_hub:
                n += 1
                links.append({"id": f"c{n}", "from": c["id"], "to": heat_hub, "type": "both" if c["type"] == "chp_unit" else "heat"})
            elif c["type"] in ELECTRIC_SUPPLY and hub:
                n += 1
                links.append({"id": f"c{n}", "from": c["id"], "to": hub, "type": "electricity"})
            elif c["type"] == "ev_charger" and hub:
                n += 1
                links.append({"id": f"c{n}", "from": hub, "to": c["id"], "type": "electricity"})
            elif c["type"] in ("smart_building", "load_center") and hub and c["id"] != hub:
                n += 1
                links.append({"id": f"c{n}", "from": hub, "to": c["id"], "type": "electricity"})
    return out, links


def catalog_text() -> str:
    """Compact catalog for tool descriptions."""
    lines = []
    for ctype, params in DEFAULT_PARAMS.items():
        lines.append(f"- {ctype}: " + ", ".join(f"{k}={v}" for k, v in params.items()))
    return "\n".join(lines)
