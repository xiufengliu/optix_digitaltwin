"""Turn the dataset's time series into the MW profiles of a design.

The dataset holds regional DK2 series in MW (``wind``, ``solar``, ``hydro``,
``load``) and, for generation, per-unit capacity factors (``wind_cf``,
``solar_cf``, ``hydro_cf``: output / installed capacity). A design with local
asset sizes ("owned_*" overrides) gets:

* generation = capacity factor x owned capacity, so 1 kWp of PV yields what
  1 kWp of the DK2 fleet actually produced in that hour;
* demand = the regional load shape scaled to the owned peak load.

Without local sizes the regional DK2 series are used as they are. This module
is the single place where that scaling happens (simulation steps, PED/chart
endpoints and the assistant all use it).
"""

from __future__ import annotations

from typing import Any, Dict, Optional

import numpy as np

LOCAL_KEYS = ("owned_solar_capacity_mw", "owned_wind_capacity_mw", "owned_hydro_capacity_mw", "owned_load_peak_mw")
_GEN = (("wind", "owned_wind_capacity_mw"), ("solar", "owned_solar_capacity_mw"), ("hydro", "owned_hydro_capacity_mw"))


def _as_float(overrides: Optional[Dict[str, Any]], key: str) -> Optional[float]:
    if not overrides or overrides.get(key) is None:
        return None
    try:
        value = float(overrides[key])
    except (TypeError, ValueError):
        return None
    return value if np.isfinite(value) else None


def is_local(overrides: Optional[Dict[str, Any]]) -> bool:
    return bool(overrides) and any(key in overrides for key in LOCAL_KEYS)


def _column(data, name: str) -> Optional[np.ndarray]:
    if hasattr(data, "columns"):
        return data[name].to_numpy(dtype=float) if name in data.columns else None
    value = data.get(name)
    return None if value is None else np.asarray(value, dtype=float)


def unit_profile(data, kind: str) -> np.ndarray:
    """Output of 1 MW of ``kind`` capacity (MW). Falls back to peak scaling when the
    dataset has no capacity-factor column."""
    cf = _column(data, f"{kind}_cf")
    if cf is not None:
        return np.clip(np.nan_to_num(cf), 0.0, None)
    raw = _column(data, kind)
    if raw is None:
        return np.zeros(len(data))
    peak = float(np.max(raw)) if raw.size else 0.0
    return raw / peak if peak > 1e-9 else np.zeros_like(raw)


def scale_profiles(data, overrides: Optional[Dict[str, Any]] = None) -> Dict[str, np.ndarray]:
    """Return ``{"wind", "solar", "hydro", "load"}`` in MW for a design."""
    n = len(data)
    regional = {k: (_column(data, k) if _column(data, k) is not None else np.zeros(n)) for k in ("wind", "solar", "hydro", "load")}
    if not is_local(overrides):
        return {k: v.astype(float, copy=True) for k, v in regional.items()}

    out: Dict[str, np.ndarray] = {}
    for kind, key in _GEN:
        # Local-asset mode: unspecified generators are absent (0 MW)
        capacity = max(0.0, _as_float(overrides, key) or 0.0)
        out[kind] = unit_profile(data, kind) * capacity if capacity > 0 else np.zeros(n)

    load = regional["load"]
    peak_mw = _as_float(overrides, "owned_load_peak_mw")
    load_peak = float(np.max(load)) if load.size else 0.0
    if peak_mw is None:
        out["load"] = load.astype(float, copy=True)
    elif peak_mw <= 0 or load_peak <= 1e-9:
        out["load"] = np.zeros(n)
    else:
        out["load"] = load / load_peak * peak_mw
    return out


def full_load_hours(data, step_hours: float) -> Dict[str, float]:
    """Average annual energy per MW of capacity (solar, wind) and per MW of peak load."""
    years = max(1e-9, len(data) * step_hours / 8760.0)
    unit = scale_profiles(data, {"owned_solar_capacity_mw": 1.0, "owned_wind_capacity_mw": 1.0, "owned_load_peak_mw": 1.0})
    return {k: float(unit[k].sum()) * step_hours / years for k in ("solar", "wind", "load")}
