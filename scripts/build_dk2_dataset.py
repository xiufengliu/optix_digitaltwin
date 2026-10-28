#!/usr/bin/env python3
"""Build the simulation dataset from Energinet's public DK2 data (2015-2024).

Inputs (JSON downloads from https://api.energidataservice.dk, see --help):
  production.json  ProductionConsumptionSettlement, PriceArea DK2, hourly
  prices.json      Elspotprices, PriceArea DK2, hourly (DKK/MWh)
  capacity.json    CapacityPerMunicipality, monthly installed capacity

Output columns (10-minute steps, each hour's value held for its six steps):
  timestamp  Danish standard time (CET, UTC+1, no daylight saving) so steps are uniform
  wind, solar, hydro, load   regional DK2 MW (wind = onshore + offshore, load = gross consumption)
  price      DK2 day-ahead spot price, DKK/MWh
  solar_cf, wind_cf, hydro_cf  output per MW installed (0-1). wind_cf is onshore wind,
             the relevant technology for on-site turbines. DK2 has no hydro (hydro_cf = 0).

Capacity factors divide production by the DK2 installed capacity (sum over the
DK2 municipalities, interpolated between monthly values), so the fleet growth
over 2015-2024 does not distort yields.

Usage: python scripts/build_dk2_dataset.py RAW_DIR OUT_CSV
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

import numpy as np
import pandas as pd

START_UTC = pd.Timestamp("2014-12-31 23:00")  # 2015-01-01 00:00 CET
END_UTC = pd.Timestamp("2024-12-31 22:00")    # 2024-12-31 23:00 CET
EUR_DKK = 7.45  # fallback only, for hours with a EUR but no DKK price


def dk2_municipality(no: int) -> bool:
    """Capital Region, Region Zealand and Bornholm/Christiansø (price area DK2).
    Numbers 101-400 are all in those regions; 410 (Middelfart) is on Funen (DK1)."""
    return 101 <= no <= 400 or no == 411


def records(path: Path) -> pd.DataFrame:
    return pd.DataFrame(json.loads(path.read_text())["records"])


def main(raw: Path, out: Path) -> None:
    prod = records(raw / "production.json")
    prod["HourUTC"] = pd.to_datetime(prod["HourUTC"])
    prod = prod.set_index("HourUTC").sort_index().loc[START_UTC:END_UTC]
    hours = pd.date_range(START_UTC, END_UTC, freq="h")
    if len(prod) != len(hours) or not prod.index.equals(hours):
        raise SystemExit(f"production: expected {len(hours)} contiguous hours, got {len(prod)}")
    p = prod.fillna(0.0)

    # Before 2020 Energinet reports all solar as "self-consumption"; afterwards it is
    # split by plant size. The sum of the four columns is total solar production.
    solar = p[["SolarPowerLt10kW_MWh", "SolarPowerGe10Lt40kW_MWh", "SolarPowerGe40kW_MWh", "SolarPowerSelfConMWh"]].sum(axis=1)
    onshore = p[["OnshoreWindLt50kW_MWh", "OnshoreWindGe50kW_MWh"]].sum(axis=1)
    offshore = p[["OffshoreWindLt100MW_MWh", "OffshoreWindGe100MW_MWh"]].sum(axis=1)
    hydro = p["HydroPowerMWh"]
    load = p["GrossConsumptionMWh"]

    prices = records(raw / "prices.json")
    prices["HourUTC"] = pd.to_datetime(prices["HourUTC"])
    prices = prices.drop_duplicates("HourUTC").set_index("HourUTC").sort_index().reindex(hours)
    price = prices["SpotPriceDKK"].astype(float)
    filled_eur = price.isna() & prices["SpotPriceEUR"].notna()
    price = price.fillna(prices["SpotPriceEUR"].astype(float) * EUR_DKK)
    missing_price = int(price.isna().sum())
    price = price.interpolate(limit_direction="both")

    cap = records(raw / "capacity.json")
    cap["MunicipalityNo"] = cap["MunicipalityNo"].astype(int)
    cap = cap[cap["MunicipalityNo"].map(dk2_municipality)]
    cap["Month"] = pd.to_datetime(cap["Month"])
    monthly = cap.groupby("Month")[["SolarPowerCapacity", "OnshoreWindCapacity"]].sum().sort_index()
    # Treat each monthly value as the mid-month capacity and interpolate per hour
    mid = monthly.index + pd.Timedelta(days=15)
    hourly_cap = (
        monthly.set_axis(mid).reindex(mid.union(hours)).interpolate(method="time", limit_direction="both").reindex(hours)
    )
    solar_cf = (solar / hourly_cap["SolarPowerCapacity"]).clip(0, 1)
    wind_cf = (onshore / hourly_cap["OnshoreWindCapacity"]).clip(0, 1)

    hourly = pd.DataFrame({
        "timestamp": hours + pd.Timedelta(hours=1),  # CET
        "wind": (onshore + offshore).to_numpy(),
        "solar": solar.to_numpy(),
        "hydro": hydro.to_numpy(),
        "load": load.to_numpy(),
        "price": price.to_numpy(),
        "solar_cf": solar_cf.to_numpy(),
        "wind_cf": wind_cf.to_numpy(),
        "hydro_cf": 0.0,
    })

    # 10-minute steps: hold each hourly mean (MWh/h = MW) for six steps
    ten = hourly.loc[hourly.index.repeat(6)].reset_index(drop=True)
    ten["timestamp"] = ten["timestamp"] + pd.to_timedelta(np.tile(np.arange(6) * 10, len(hourly)), unit="min")
    ten["timestamp"] = ten["timestamp"].dt.strftime("%Y-%m-%d %H:%M:%S")
    ten.to_csv(out, index=False, float_format="%.6g")

    years = hourly["timestamp"].dt.year
    summary = pd.DataFrame({
        "solar_kWh_per_kWp": hourly.groupby(years)["solar_cf"].sum(),
        "onshore_wind_CF": hourly.groupby(years)["wind_cf"].mean(),
        "solar_cap_MW": hourly_cap["SolarPowerCapacity"].groupby(years.to_numpy()).mean(),
        "load_TWh": hourly.groupby(years)["load"].sum() / 1e6,
        "price_mean": hourly.groupby(years)["price"].mean(),
    })
    print(summary.round(3).to_string())
    print(f"rows {len(ten)}, price hours filled from EUR {int(filled_eur.sum())}, interpolated {missing_price}")
    print(f"load factor (mean/peak) {hourly['load'].mean() / hourly['load'].max():.3f}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit(__doc__)
    main(Path(sys.argv[1]), Path(sys.argv[2]))
