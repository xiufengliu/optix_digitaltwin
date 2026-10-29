"""Uploaded measurement data of digital twin components.

An upload is a CSV with a timestamp column and a value column (for example an
Eloverblik meter export or an inverter log). It is stored, converted to kW
(price: DKK/MWh), as ``data/profiles/<twin id>/<component id>/<channel>.csv``
with a JSON sidecar holding its metadata.

At simulation time the series is aligned to the dataset timeline:

* where the upload covers a step, its value is used (finer data is averaged
  into the step, coarser data is held over it, like the dataset's hourly data);
* elsewhere the upload's typical value for the same ISO week, weekday and time
  of day is used, so one measured year can drive a multi-year simulation.
  Gaps fall back to the same month/weekday/time, then weekday/time, then time
  of day.

Uploads keep the component size they were recorded for (``ref_size``) and are
rescaled when the component is resized, unless scaling is switched off.
"""

from __future__ import annotations

import io
import json
import re
import shutil
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Optional

import numpy as np
import pandas as pd

ROOT = Path(__file__).resolve().parent.parent / "data" / "profiles"
MAX_ROWS = 2_000_000

POWER_UNITS = {"W": 1e-3, "kW": 1.0, "MW": 1e3}
ENERGY_UNITS = {"Wh": 1e-3, "kWh": 1.0, "MWh": 1e3}
PRICE_UNITS = {"DKK/MWh": 1.0, "DKK/kWh": 1e3, "EUR/MWh": 7.46, "EUR/kWh": 7460.0}
TIMEZONES = ("local", "cet", "utc")

_SAFE = re.compile(r"^[A-Za-z0-9_.-]{1,80}$")


class UploadError(ValueError):
    pass


def _safe(part: str) -> str:
    if not _SAFE.match(part or "") or part in (".", ".."):
        raise UploadError(f"Invalid identifier: {part!r}")
    return part


def _paths(twin_id: str, component_id: str, channel: str) -> tuple[Path, Path]:
    base = ROOT / _safe(twin_id) / _safe(component_id)
    return base / f"{_safe(channel)}.csv", base / f"{_safe(channel)}.json"


# ---------------------------------------------------------------------------
# Parsing
# ---------------------------------------------------------------------------


def _parse_time(col: pd.Series) -> tuple[pd.Series, bool]:
    """Parse timestamps, choosing day-first when it gives an ordered series.
    Returns the times (CET when the text carried a UTC offset) and whether it did."""
    col = col.astype(str).str.strip()
    # "...Z" or "...+02:00": parse as UTC (offsets differ in summer and winter)
    had_tz = bool(col.head(50).str.contains(r"(?:Z|[+-]\d{2}:?\d{2})$", regex=True).mean() > 0.5)
    best, best_score = None, None
    for dayfirst in (False, True):
        try:
            t = pd.to_datetime(col, errors="coerce", dayfirst=dayfirst, utc=had_tz, format="mixed")
        except (TypeError, ValueError):
            continue
        if had_tz:
            t = t.dt.tz_convert("Etc/GMT-1").dt.tz_localize(None)
        valid = t.dropna()
        if valid.empty:
            continue
        ordered = float((valid.diff().dropna() > pd.Timedelta(0)).mean()) if len(valid) > 1 else 1.0
        score = (float(t.notna().mean()), ordered)
        if best_score is None or score > best_score:
            best, best_score = t, score
    if best is None or best_score[0] < 0.9:
        raise UploadError("Could not read the time column as dates")
    return best, had_tz


def _to_number(col: pd.Series, decimal_comma: bool) -> pd.Series:
    s = col.astype(str).str.strip().str.replace(" ", "", regex=False).str.replace(" ", "", regex=False)
    if decimal_comma:
        s = s.str.replace(".", "", regex=False).str.replace(",", ".", regex=False)
    return pd.to_numeric(s, errors="coerce")


def read_table(text: str) -> tuple[pd.DataFrame, bool]:
    """CSV text -> string frame; detects ``,``/``;``/tab separators and decimal commas."""
    head = text[:5000]
    first = head.splitlines()[0] if head else ""
    sep = max((";", "\t", ","), key=first.count)
    if first.count(sep) == 0:
        raise UploadError("Expected a CSV with at least a time column and a value column")
    df = pd.read_csv(io.StringIO(text), sep=sep, dtype=str, skip_blank_lines=True, nrows=MAX_ROWS + 1)
    if len(df) > MAX_ROWS:
        raise UploadError(f"Too many rows (limit {MAX_ROWS:,})")
    df.columns = [str(c).strip() for c in df.columns]
    sample = df.head(200).astype(str)
    decimal_comma = sep != "," and sample.apply(lambda c: c.str.contains(r"^-?\d+,\d+$", regex=True)).any().any()
    return df, bool(decimal_comma)


def parse_upload(text: str, *, time_column: Optional[str], value_column: Optional[str], unit: str, tz: str, is_price: bool) -> tuple[pd.Series, Dict[str, Any]]:
    df, decimal_comma = read_table(text)
    if df.empty:
        raise UploadError("The file has no data rows")

    cols = list(df.columns)
    if time_column and time_column not in cols:
        raise UploadError(f"Column {time_column!r} not found; columns are {cols}")
    if value_column and value_column not in cols:
        raise UploadError(f"Column {value_column!r} not found; columns are {cols}")
    if not time_column:
        for c in cols:
            try:
                _parse_time(df[c].head(500))
                time_column = c
                break
            except UploadError:
                continue
        if not time_column:
            raise UploadError(f"No date/time column found; columns are {cols}")
    if not value_column:
        for c in cols:
            if c != time_column and _to_number(df[c].head(500), decimal_comma).notna().mean() > 0.9:
                value_column = c
                break
        if not value_column:
            raise UploadError(f"No numeric value column found; columns are {cols}")

    t, had_offset = _parse_time(df[time_column])
    v = _to_number(df[value_column], decimal_comma)
    s = pd.Series(v.to_numpy(dtype=float), index=pd.DatetimeIndex(t)).dropna()
    s = s[s.index.notna()]
    if len(s) < 2:
        raise UploadError("Fewer than two valid rows")
    s = s.groupby(level=0).mean().sort_index()

    if had_offset:
        pass  # already converted to CET
    elif tz == "local":
        # Danish wall-clock time (with daylight saving) -> CET like the dataset
        loc = s.index.tz_localize("Europe/Copenhagen", ambiguous="NaT", nonexistent="NaT")
        keep = ~loc.isna()
        s = pd.Series(s.to_numpy()[keep], index=loc[keep].tz_convert("Etc/GMT-1").tz_localize(None))
        s = s.groupby(level=0).mean().sort_index()
    elif tz == "utc":
        s.index = s.index + pd.Timedelta(hours=1)
    elif tz != "cet":
        raise UploadError(f"Unknown time zone option {tz!r}")

    step_h = float(pd.Series(s.index).diff().dropna().median().total_seconds() / 3600.0)
    if not step_h > 0:
        raise UploadError("Could not determine the time step")

    if is_price:
        if unit not in PRICE_UNITS:
            raise UploadError(f"Price unit must be one of {list(PRICE_UNITS)}")
        s = s * PRICE_UNITS[unit]
    elif unit in POWER_UNITS:
        s = s * POWER_UNITS[unit]
    elif unit in ENERGY_UNITS:
        s = s * ENERGY_UNITS[unit] / step_h  # energy per interval -> average power
    else:
        raise UploadError(f"Unit must be one of {list(POWER_UNITS) + list(ENERGY_UNITS)}")

    info = {
        "time_column": time_column,
        "value_column": value_column,
        "rows": int(len(s)),
        "start": str(s.index[0]),
        "end": str(s.index[-1]),
        "step_minutes": round(step_h * 60, 3),
        "decimal_comma": decimal_comma,
    }
    return s, info


# ---------------------------------------------------------------------------
# Storage
# ---------------------------------------------------------------------------


def save(twin_id: str, component_id: str, channel: str, series: pd.Series, meta: Dict[str, Any]) -> Dict[str, Any]:
    csv_path, meta_path = _paths(twin_id, component_id, channel)
    csv_path.parent.mkdir(parents=True, exist_ok=True)
    frame = pd.DataFrame({"timestamp": series.index.strftime("%Y-%m-%d %H:%M:%S"), "value": series.to_numpy()})
    frame.to_csv(csv_path, index=False, float_format="%.6g")
    meta = {**meta, "uploaded_at": datetime.now(timezone.utc).isoformat(timespec="seconds")}
    meta_path.write_text(json.dumps(meta, indent=1))
    _ALIGNED.clear()
    return meta


def load_meta(twin_id: str, component_id: str, channel: str) -> Optional[Dict[str, Any]]:
    try:
        _, meta_path = _paths(twin_id, component_id, channel)
    except UploadError:
        return None
    if not meta_path.is_file():
        return None
    try:
        return json.loads(meta_path.read_text())
    except (OSError, ValueError):
        return None


def update_meta(twin_id: str, component_id: str, channel: str, **changes: Any) -> Optional[Dict[str, Any]]:
    meta = load_meta(twin_id, component_id, channel)
    if meta is None:
        return None
    meta.update(changes)
    _paths(twin_id, component_id, channel)[1].write_text(json.dumps(meta, indent=1))
    return meta


def load_series(twin_id: str, component_id: str, channel: str) -> Optional[pd.Series]:
    csv_path, _ = _paths(twin_id, component_id, channel)
    if not csv_path.is_file():
        return None
    df = pd.read_csv(csv_path, parse_dates=["timestamp"])
    return pd.Series(df["value"].to_numpy(dtype=float), index=pd.DatetimeIndex(df["timestamp"]))


def delete(twin_id: str, component_id: str, channel: str) -> bool:
    csv_path, meta_path = _paths(twin_id, component_id, channel)
    found = csv_path.is_file() or meta_path.is_file()
    csv_path.unlink(missing_ok=True)
    meta_path.unlink(missing_ok=True)
    _ALIGNED.clear()
    return found


def delete_twin(twin_id: str) -> None:
    try:
        shutil.rmtree(ROOT / _safe(twin_id), ignore_errors=True)
    except UploadError:
        pass
    _ALIGNED.clear()


def list_twin(twin_id: str) -> Dict[str, Dict[str, Dict[str, Any]]]:
    """``{component id: {channel: meta}}`` of a twin's uploads."""
    out: Dict[str, Dict[str, Dict[str, Any]]] = {}
    try:
        base = ROOT / _safe(twin_id)
    except UploadError:
        return out
    if not base.is_dir():
        return out
    for meta_path in base.glob("*/*.json"):
        try:
            out.setdefault(meta_path.parent.name, {})[meta_path.stem] = json.loads(meta_path.read_text())
        except (OSError, ValueError):
            continue
    return out


def fingerprint(twin_id: str) -> str:
    """Changes whenever any upload of the twin changes (used in cache keys)."""
    try:
        base = ROOT / _safe(twin_id)
    except UploadError:
        return ""
    if not base.is_dir():
        return ""
    return "|".join(sorted(f"{p.relative_to(base)}:{p.stat().st_mtime_ns}" for p in base.glob("*/*")))


# ---------------------------------------------------------------------------
# Alignment to the simulation timeline
# ---------------------------------------------------------------------------

_ALIGNED: Dict[tuple, tuple] = {}


def align(series: pd.Series, ts: pd.Series) -> tuple[np.ndarray, float]:
    """Series on the timeline ``ts`` and the share of steps covered by measurements."""
    s = series.dropna().sort_index()
    step = ts.iloc[1] - ts.iloc[0] if len(ts) > 1 else pd.Timedelta(minutes=10)
    native = pd.Series(s.index).diff().dropna().median()
    if native < step:
        grid = s.resample(step).mean()
    else:
        # Hold each value over its interval (like the dataset's hourly values)
        grid = s.resample(step).ffill(limit=max(0, int(round(native / step)) - 1))
        grid = grid[grid.index <= s.index[-1] + native - step]
    grid = grid.dropna()

    tsi = pd.DatetimeIndex(ts)
    exact = grid.reindex(tsi).to_numpy(dtype=float)
    covered = float(np.isfinite(exact).mean()) if len(exact) else 0.0
    if covered == 1.0:
        return exact, covered

    def keys(idx: pd.DatetimeIndex) -> list[np.ndarray]:
        minute = (idx.hour * 60 + idx.minute).to_numpy()
        wd = idx.weekday.to_numpy()
        week = np.minimum(idx.isocalendar().week.to_numpy(dtype=int), 52)
        month = idx.month.to_numpy()
        return [(week * 7 + wd) * 1440 + minute, (month * 7 + wd) * 1440 + minute, wd * 1440 + minute, minute]

    src = keys(grid.index)
    dst = keys(tsi)
    values = grid.to_numpy(dtype=float)
    out = exact.copy()
    for k_src, k_dst in zip(src, dst):
        missing = ~np.isfinite(out)
        if not missing.any():
            break
        table = pd.Series(values).groupby(k_src).mean()
        out[missing] = table.reindex(k_dst[missing]).to_numpy(dtype=float)
    out[~np.isfinite(out)] = float(np.nanmean(values)) if values.size else 0.0
    return out, covered


def aligned(twin_id: str, component_id: str, channel: str, ts: pd.Series) -> Optional[tuple[np.ndarray, float]]:
    """Cached ``align`` of a stored upload (None when there is none)."""
    try:
        csv_path, _ = _paths(twin_id, component_id, channel)
    except UploadError:
        return None
    if not csv_path.is_file():
        return None
    key = (str(csv_path), csv_path.stat().st_mtime_ns, len(ts), str(ts.iloc[0]) if len(ts) else "")
    hit = _ALIGNED.get(key)
    if hit is None:
        series = load_series(twin_id, component_id, channel)
        values, covered = align(series, ts)
        hit = (values.astype(np.float32), covered)
        if len(_ALIGNED) > 32:
            _ALIGNED.clear()
        _ALIGNED[key] = hit
    return hit[0].astype(float), hit[1]
