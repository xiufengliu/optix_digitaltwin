"""AI review of uploaded component data.

Every upload is parsed deterministically (``profile_store.parse_upload``) and
then summarised (statistics, gaps, daily and seasonal shape, extreme rows, and
the synthetic profile of the same component for comparison). Claude reads the
summary and returns a cleaning *plan* - unit or time zone corrections, meter
register readings to difference, valid value range, periods to drop. The plan
is applied here in code: Claude never writes data values, and every value it
removes becomes a gap that the timeline alignment fills from the upload's
typical week. Without an API key, or when the call fails, the upload goes
through unchanged with a note saying the review did not run.
"""

from __future__ import annotations

import json
import logging
from typing import Any, Dict, List, Literal, Optional

import anthropic
import numpy as np
import pandas as pd
from pydantic import BaseModel, ValidationError

from . import profile_store
from .assistant import MODEL, _get_client

log = logging.getLogger(__name__)

TIMEOUT_S = 120.0


class Issue(BaseModel):
    severity: Literal["error", "warning", "info"]
    message: str


class TimeRange(BaseModel):
    start: str
    end: str
    reason: str


class Plan(BaseModel):
    summary: str
    issues: List[Issue]
    reject: bool
    unit: Optional[str]
    timezone: Optional[Literal["local", "cet", "utc"]]
    cumulative: bool
    negate: bool
    valid_min: Optional[float]
    valid_max: Optional[float]
    remove_ranges: List[TimeRange]
    remove_constant_runs_hours: Optional[float]


def _nullable(schema: Dict[str, Any]) -> Dict[str, Any]:
    return {"anyOf": [schema, {"type": "null"}]}


def _schema(units: List[str]) -> Dict[str, Any]:
    return {
        "type": "object",
        "properties": {
            "summary": {"type": "string", "description": "Two or three sentences for the user: what the data is and what was done to it."},
            "issues": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "severity": {"type": "string", "enum": ["error", "warning", "info"]},
                        "message": {"type": "string"},
                    },
                    "required": ["severity", "message"],
                    "additionalProperties": False,
                },
            },
            "reject": {"type": "boolean", "description": "True only when the data cannot represent this channel at all."},
            "unit": _nullable({"type": "string", "enum": units}),
            "timezone": _nullable({"type": "string", "enum": ["local", "cet", "utc"]}),
            "cumulative": {"type": "boolean"},
            "negate": {"type": "boolean"},
            "valid_min": _nullable({"type": "number"}),
            "valid_max": _nullable({"type": "number"}),
            "remove_ranges": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "start": {"type": "string"},
                        "end": {"type": "string"},
                        "reason": {"type": "string"},
                    },
                    "required": ["start", "end", "reason"],
                    "additionalProperties": False,
                },
            },
            "remove_constant_runs_hours": _nullable({"type": "number"}),
        },
        "required": [
            "summary", "issues", "reject", "unit", "timezone", "cumulative", "negate",
            "valid_min", "valid_max", "remove_ranges", "remove_constant_runs_hours",
        ],
        "additionalProperties": False,
    }


SYSTEM_PROMPT = """You check measured time series that users upload for components of a digital twin of a Danish energy district, and decide how to clean them.

The simulation runs on 10-minute steps over 2015-2024 with timestamps in Danish standard time (CET, UTC+1, no daylight saving). An upload is stored as average power in kW (prices: DKK/MWh) per timestamp, where the value at a timestamp covers the interval that starts there. Steps the upload does not cover are filled from its typical value for the same week, weekday and time of day, so removing bad values is safe: they become gaps that are filled from the rest of the data.

You get a summary of one upload, already converted with the unit and time zone the user picked, and the synthetic profile the model would use for the same component instead. You do not see or write the data itself; you return a plan that code applies in this order:
1. unit / timezone: re-read the file with a different unit or time zone (null keeps the user's choice). Energy units (Wh, kWh, MWh) mean energy per interval and are divided by the interval length; power units are average power.
2. cumulative: the values are a meter register (monotonically rising energy totals); they are differenced into average power per interval. Set unit to the energy unit of the register when you set this.
3. negate: flip the sign (e.g. generation logged as negative export).
4. remove_ranges: drop values in these periods (ISO timestamps in the converted CET time shown in the summary), e.g. an obviously broken logger period.
5. remove_constant_runs_hours: drop runs of identical non-zero values lasting at least this many hours (a stuck sensor). Zeros are kept, since PV is zero at night and loads can be off.
6. valid_min / valid_max: drop values outside this range, in the stored unit (kW or DKK/MWh) after steps 1-3 and before the series is scaled to the component size.

Be conservative. Only change something when the summary gives clear evidence, and leave plausible data alone; measured data is supposed to differ from the synthetic profile. Typical evidence:
- unit: values about 1000x or 1/1000x the plausible magnitude for the component's size, or energy-per-interval values mistaken for power (off by the number of intervals per hour).
- time zone: the daily shape is shifted against physics (PV must peak around 12:00-13:00 CET; a one-hour shift in summer only points to daylight saving handled wrongly).
- outliers: isolated values far beyond the component's physical limit (PV above about 1.1x kWp, a load far above its peak), sentinel values like -999 or 99999. Prices in DK2 can legitimately be negative or spike to several thousand DKK/MWh.
- generation channels are never negative; demand channels are not negative either.
Set reject only when the data cannot be this channel (e.g. a temperature series uploaded as PV generation); otherwise clean what you can and report the rest as warnings, including issues you cannot fix (short coverage, a different year than the simulation, large gaps). Name concrete numbers in messages. Write for an energy engineer, briefly, without jargon about this tool's internals."""


# ---------------------------------------------------------------------------
# Summary of an upload
# ---------------------------------------------------------------------------


def _r(x: float, nd: int = 4) -> Optional[float]:
    x = float(x)
    return float(f"{x:.{nd}g}") if np.isfinite(x) else None


def _rows(s: pd.Series) -> List[List[Any]]:
    return [[str(t), _r(v)] for t, v in s.items()]


def summarize(series: pd.Series, info: Dict[str, Any], synthetic: np.ndarray, ts: pd.Series) -> Dict[str, Any]:
    s = series.sort_index()
    v = s.to_numpy(dtype=float)
    step = pd.Timedelta(minutes=float(info["step_minutes"]))
    dt = pd.Series(s.index).diff().dropna()
    gaps = dt[dt > step * 2]
    gap_list = sorted(((d, s.index[i - 1]) for i, d in gaps.items()), reverse=True)[:5]

    # Longest run of one repeated non-zero value
    change = np.r_[True, v[1:] != v[:-1]]
    run_id = np.cumsum(change)
    runs = pd.DataFrame({"id": run_id, "t": s.index, "v": v}).groupby("id").agg(start=("t", "first"), end=("t", "last"), v=("v", "first"))
    runs = runs[runs["v"] != 0]
    runs["hours"] = (runs["end"] - runs["start"]).dt.total_seconds() / 3600 + step.total_seconds() / 3600
    longest = runs.sort_values("hours", ascending=False).head(3)

    d = np.diff(v)
    syn = pd.Series(np.asarray(synthetic, dtype=float), index=pd.DatetimeIndex(ts))
    pct = np.percentile(v, [0, 1, 5, 25, 50, 75, 95, 99, 100])

    return {
        "rows": int(len(s)),
        "start": str(s.index[0]),
        "end": str(s.index[-1]),
        "median_step_minutes": info["step_minutes"],
        "irregular_step_share": _r((dt != step).mean()) if len(dt) else 0.0,
        "rows_skipped_unreadable": info.get("skipped_rows", 0),
        "rows_non_finite": info.get("non_finite_rows", 0),
        "duplicate_timestamps_averaged": info.get("duplicate_timestamps", 0),
        "percentiles_0_1_5_25_50_75_95_99_100": [_r(x) for x in pct],
        "mean": _r(v.mean()),
        "share_zero": _r((v == 0).mean()),
        "share_negative": _r((v < 0).mean()),
        "share_rising_steps": _r((d > 0).mean()) if len(d) else None,
        "share_falling_steps": _r((d < 0).mean()) if len(d) else None,
        "gaps_longer_than_two_steps": int(len(gaps)),
        "largest_gaps": [{"after": str(t), "hours": _r(g.total_seconds() / 3600)} for g, t in gap_list],
        "longest_constant_nonzero_runs": [
            {"start": str(r.start), "end": str(r.end), "hours": _r(r.hours), "value": _r(r.v)} for r in longest.itertuples()
        ],
        "mean_by_hour_of_day": [_r(x) for x in s.groupby(s.index.hour).mean().reindex(range(24)).to_numpy()],
        "mean_by_month": [_r(x) for x in s.groupby(s.index.month).mean().reindex(range(1, 13)).to_numpy()],
        "first_rows": _rows(s.head(10)),
        "last_rows": _rows(s.tail(5)),
        "largest_values": _rows(s.nlargest(8)),
        "smallest_values": _rows(s.nsmallest(8)),
        "synthetic_profile_for_comparison": {
            "mean": _r(syn.mean()),
            "max": _r(syn.max()),
            "mean_by_hour_of_day": [_r(x) for x in syn.groupby(syn.index.hour).mean().reindex(range(24)).to_numpy()],
            "mean_by_month": [_r(x) for x in syn.groupby(syn.index.month).mean().reindex(range(1, 13)).to_numpy()],
        },
    }


# ---------------------------------------------------------------------------
# Claude
# ---------------------------------------------------------------------------


async def review(context: Dict[str, Any], units: List[str]) -> tuple[Optional[Plan], Optional[str]]:
    """The cleaning plan for an upload, or (None, reason) when no review ran."""
    client = _get_client()
    if client is None:
        return None, "AI data check is not configured (no Claude API key)."
    try:
        # Streamed like the copilot (non-streamed responses arrive brotli-compressed,
        # which the installed Brotli is too old to decode)
        async with client.with_options(timeout=TIMEOUT_S, max_retries=1).beta.messages.stream(
            model=MODEL,
            max_tokens=16000,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": "Upload summary (JSON):\n" + json.dumps(context, default=str)}],
            output_config={"effort": "medium", "format": {"type": "json_schema", "schema": _schema(units)}},
            # Re-run declined requests on a fallback model inside the same call
            betas=["server-side-fallback-2026-07-01"],
            fallbacks="default",
        ) as stream:
            message = await stream.get_final_message()
    except anthropic.APITimeoutError:
        return None, "AI data check timed out; the data was imported without it."
    except anthropic.APIStatusError as exc:
        log.warning("Data review failed: %s", exc)
        return None, f"AI data check failed (HTTP {exc.status_code}); the data was imported without it."
    except anthropic.APIConnectionError:
        return None, "AI data check could not reach the Claude API; the data was imported without it."

    if message.stop_reason != "end_turn":
        return None, f"AI data check gave no answer ({message.stop_reason}); the data was imported without it."
    text = next((b.text for b in message.content if b.type == "text"), "")
    try:
        return Plan.model_validate_json(text), None
    except ValidationError:
        log.warning("Unreadable data review: %s", text[:500])
        return None, "AI data check returned an unreadable answer; the data was imported without it."


# ---------------------------------------------------------------------------
# Applying a plan
# ---------------------------------------------------------------------------


def apply(series: pd.Series, info: Dict[str, Any], plan: Plan, reparse) -> tuple[pd.Series, Dict[str, Any], List[str]]:
    """Clean ``series`` by the plan. ``reparse(unit, tz)`` re-reads the file.
    Returns the series, its (possibly re-read) info and what was done."""
    done: List[str] = []
    if plan.unit or plan.timezone:
        series, info = reparse(plan.unit, plan.timezone)
        if plan.unit:
            done.append(f"Read the values as {plan.unit}")
        if plan.timezone:
            done.append(f"Read the timestamps as {dict(local='Danish local time', cet='CET', utc='UTC')[plan.timezone]}")
    s = series.sort_index()

    if plan.cumulative:
        step_h = float(info["step_minutes"]) / 60.0
        kwh = s * step_h  # undo the per-interval division of energy units
        hours = pd.Series(s.index, index=s.index).diff().shift(-1).dt.total_seconds() / 3600.0
        s = ((kwh.shift(-1) - kwh) / hours).dropna()
        resets = int((s < 0).sum())
        s = s[s >= 0]
        done.append("Converted meter register readings to power per interval" + (f" ({resets} meter resets dropped)" if resets else ""))

    if plan.negate:
        s = -s
        done.append("Flipped the sign of the values")

    for r in plan.remove_ranges:
        try:
            a, b = pd.Timestamp(r.start), pd.Timestamp(r.end)
        except (TypeError, ValueError):
            continue
        hit = (s.index >= a) & (s.index <= b)
        if hit.any():
            s = s[~hit]
            done.append(f"Removed {int(hit.sum())} values from {a} to {b}: {r.reason}")

    if plan.remove_constant_runs_hours and plan.remove_constant_runs_hours > 0:
        v = s.to_numpy()
        run_id = np.cumsum(np.r_[True, v[1:] != v[:-1]])
        g = pd.Series(s.index, index=s.index).groupby(run_id)
        span_h = (g.transform("max") - g.transform("min")).dt.total_seconds() / 3600 + float(info["step_minutes"]) / 60
        stuck = (span_h.to_numpy() >= plan.remove_constant_runs_hours) & (v != 0)
        if stuck.any():
            s = s[~stuck]
            done.append(f"Removed {int(stuck.sum())} values stuck at a constant level for {plan.remove_constant_runs_hours:g} h or longer")

    lo = plan.valid_min if plan.valid_min is not None else -np.inf
    hi = plan.valid_max if plan.valid_max is not None else np.inf
    out = (s < lo) | (s > hi)
    if out.any():
        s = s[~out]
        bounds = " to ".join(f"{x:g}" for x in (plan.valid_min, plan.valid_max) if x is not None)
        done.append(f"Removed {int(out.sum())} values outside the valid range ({bounds})")

    if len(s) < 2:
        raise profile_store.UploadError("Cleaning left fewer than two valid rows")
    info = {**info, "rows": int(len(s)), "start": str(s.index[0]), "end": str(s.index[-1])}
    return s, info, done
