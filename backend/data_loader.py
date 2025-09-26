"""Lightweight data loading utilities mirroring the training pipeline needs."""

from __future__ import annotations

from pathlib import Path
from typing import Iterable

import pandas as pd


_REQUIRED_COLUMNS = ["wind", "solar", "hydro", "price", "load"]


def _is_capacity_factor_data(df: pd.DataFrame) -> bool:
    for column in ("wind", "solar", "hydro", "load"):
        if column in df.columns and df[column].max() > 2.0:
            return False
    return True


def _convert_to_raw_mw(df: pd.DataFrame) -> pd.DataFrame:
    capacity_mw = {
        "wind": 1103,
        "solar": 100,
        "hydro": 534,
        "load": 2999,
    }
    result = df.copy()
    for column, capacity in capacity_mw.items():
        if column in result.columns:
            result[column] = result[column] * capacity
    return result


def load_energy_dataframe(path: Path, convert_to_raw_units: bool = True) -> pd.DataFrame:
    """Load the energy CSV used by the environment without importing training CLI modules."""
    if not path.is_file():
        raise FileNotFoundError(f"Data file not found: {path}")

    df = pd.read_csv(path)

    if "timestamp" in df.columns:
        df["timestamp"] = pd.to_datetime(df["timestamp"], errors="coerce")
    elif {"date", "time"}.issubset(df.columns):
        df["timestamp"] = pd.to_datetime(df["date"].astype(str) + " " + df["time"].astype(str), errors="coerce")

    missing = [col for col in _REQUIRED_COLUMNS if col not in df.columns]
    if missing:
        raise ValueError(f"Missing required columns: {missing}")

    numeric_candidates = [
        "wind",
        "solar",
        "hydro",
        "price",
        "load",
        "risk",
        "revenue",
        "battery_energy",
        "npv",
    ]

    for column in numeric_candidates:
        if column in df.columns:
            df[column] = pd.to_numeric(df[column], errors="coerce")

    df = df.dropna(subset=_REQUIRED_COLUMNS).reset_index(drop=True)

    if convert_to_raw_units and _is_capacity_factor_data(df):
        df = _convert_to_raw_mw(df)

    return df
