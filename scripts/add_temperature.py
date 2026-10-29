#!/usr/bin/env python3
"""Add outdoor air temperature (temp_c) to the simulation dataset.

Source: Open-Meteo historical weather API (ERA5 reanalysis, hourly 2 m air
temperature) for Copenhagen (55.68 N, 12.57 E), the DK2 load centre. The API is
queried in UTC and shifted to Danish standard time (CET, UTC+1, no daylight
saving) to match the dataset timestamps; each hour is held over its six
10-minute steps like the other columns.

Heat demand (degree hours) and heat pump COP in the simulation use this column.

Usage: python scripts/add_temperature.py DATASET_CSV
"""

from __future__ import annotations

import json
import sys
import urllib.request
from pathlib import Path

import pandas as pd

URL = (
    "https://archive-api.open-meteo.com/v1/archive?latitude=55.68&longitude=12.57"
    "&start_date={start}&end_date={end}&hourly=temperature_2m&timezone=GMT"
)


def fetch(start: str, end: str) -> pd.Series:
    with urllib.request.urlopen(URL.format(start=start, end=end), timeout=120) as resp:
        body = json.loads(resp.read())
    hourly = body["hourly"]
    utc = pd.to_datetime(hourly["time"])
    return pd.Series(hourly["temperature_2m"], index=utc + pd.Timedelta(hours=1), dtype=float)  # UTC -> CET


def main(path: Path) -> None:
    df = pd.read_csv(path, parse_dates=["timestamp"])
    first, last = df["timestamp"].min(), df["timestamp"].max()
    # One extra day on each side covers the UTC/CET shift
    temp = fetch((first - pd.Timedelta(days=1)).strftime("%Y-%m-%d"), (last + pd.Timedelta(days=1)).strftime("%Y-%m-%d"))
    temp = temp[~temp.index.duplicated()].sort_index().interpolate(limit=6)
    hour = df["timestamp"].dt.floor("h")
    df["temp_c"] = temp.reindex(hour).to_numpy()
    missing = int(df["temp_c"].isna().sum())
    if missing:
        raise SystemExit(f"{missing} steps without temperature")
    df.to_csv(path, index=False, float_format="%.6g")
    yearly = df.groupby(df["timestamp"].dt.year)["temp_c"].mean().round(2)
    print("Mean temperature per year (deg C):")
    print(yearly.to_string())


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    main(Path(sys.argv[1]))
