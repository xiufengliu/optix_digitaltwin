"""FastAPI application bootstrap for the digital twin backend."""

from __future__ import annotations

from contextlib import asynccontextmanager
from typing import AsyncIterator

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import routes
from .db import create_all, session_scope
from .simulation_manager import SimulationManager
from .models import Scenario


@asynccontextmanager
async def lifespan(_: FastAPI) -> AsyncIterator[None]:
    """Initialize and tear down shared backend resources."""
    SimulationManager.initialize_global()
    create_all()
    _seed_predefined_scenarios()
    try:
        yield
    finally:
        SimulationManager.shutdown_global()


def create_app() -> FastAPI:
    """Create and configure the FastAPI application instance."""
    app = FastAPI(
        title="Digital Twin Backend",
        description="REST API for controlling the energy portfolio simulation.",
        lifespan=lifespan,
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(routes.router)
    return app


app = create_app()


def _seed_predefined_scenarios() -> None:
    """Insert five predefined scenarios from paper.txt if they don't exist.

    The overrides map to EnhancedConfig attributes when available; they are
    intentionally light‑touch so they remain compatible with the current env.
    """
    predefined = [
        {
            "name": "Scenario 1: Baseline",
            "description": "Reference case with existing rooftop PV only, no battery.",
            "details": (
                "Purpose: establish a reference for energy consumption, costs, grid "
                "interaction and emissions. Thermal demand fully covered by district "
                "heating (DH). No additional flexibility (no battery/DSM). Prices and "
                "profiles use DK2 inputs. The scenario is used as baseline to compare "
                "improvements in scenarios 2–5."
            ),
            "config_overrides": {
                # Minimal PV placeholder at building scale (MW)
                "owned_solar_capacity_mw": 0.03,
                "owned_battery_capacity_mwh": 0.0,
                "investment_freq": 12,
            },
        },
        {
            "name": "Scenario 2: High PV Deployment",
            "description": "Rooftop PV maximised per Danish regulatory constraints (~171 kWp).",
            "details": (
                "Description: fully exploit rooftop PV considering BR18, DBI 024, EN 516. "
                "Net usable area ≈ 684 m² → ≈ 171 kWp using 600 Wp modules. Battery absent; "
                "surplus exported to grid. Expected effects: higher renewable fraction, "
                "more mid‑day export, reduced grid imports and emissions."
            ),
            "config_overrides": {
                "owned_solar_capacity_mw": 0.171,
                "owned_battery_capacity_mwh": 0.0,
                "investment_freq": 12,
            },
        },
        {
            "name": "Scenario 3: High PV + Battery (4h)",
            "description": "PV as S2 with 4‑hour battery (0.32 MWh) and export‑only‑from‑PV.",
            "details": (
                "Purpose: increase self‑consumption and reduce peak imports by adding a "
                "four‑hour battery (C‑rate 0.25 h⁻¹). Operating notes: PV‑first dispatch, "
                "export permitted only from PV bus (no arbitrage), neutral SoC policy. "
                "Expected effects: lower imports, lower emissions and costs vs S2."
            ),
            "config_overrides": {
                "owned_solar_capacity_mw": 0.171,
                "owned_battery_capacity_mwh": 0.32,
                "batt_power_c_rate": 0.25,  # 4h
                "investment_freq": 12,
            },
        },
        {
            "name": "Scenario 4: High PV + Large Battery",
            "description": "PV as S2 with larger battery (0.64 MWh) to enhance self‑consumption.",
            "details": (
                "Description: same PV as S2, battery sized at 0.64 MWh (4 h autonomy). "
                "Used to quantify marginal benefits of doubling storage energy: further "
                "evening peak shaving, reduced export and imports."
            ),
            "config_overrides": {
                "owned_solar_capacity_mw": 0.171,
                "owned_battery_capacity_mwh": 0.64,
                "batt_power_c_rate": 0.25,
                "investment_freq": 12,
            },
        },
        {
            "name": "Scenario 5: DSM (Flexible Demand)",
            "description": "Demand‑side management (DSM) with PV + battery; faster decisions.",
            "details": (
                "Purpose: emulate flexible loads (≈30% share, 3‑hour shifting window) that "
                "align demand to PV or price signals. We approximate responsiveness by a "
                "higher decision frequency. Expected effects: higher self‑consumption, "
                "lower imports/exports, no annual energy change."
            ),
            "config_overrides": {
                "owned_solar_capacity_mw": 0.171,
                "owned_battery_capacity_mwh": 0.32,
                "batt_power_c_rate": 0.25,
                # Use tighter investment frequency to emulate DSM reactivity
                "investment_freq": 6,
            },
        },
    ]

    with session_scope() as db:
        # Map existing scenarios by name for idempotent seeding + upgrades
        existing_rows = db.query(Scenario).all()
        existing_by_name = {row.name: row for row in existing_rows}

        from uuid import uuid4
        # Known short descriptions from earlier seed (to be upgraded)
        old_shorts = {
            "Scenario 1: Baseline": "Baseline building: existing PV only, no battery; DH as-is.",
            "Scenario 2: High PV Deployment": "Rooftop maximised per regulatory constraints (~171 kWp).",
            "Scenario 3: High PV + Battery (4h)": "PV as Scenario 2, battery 0.32 MWh (4h autonomy), export-only-from-PV.",
            "Scenario 4: High PV + Large Battery": "PV as Scenario 2, larger battery 0.64 MWh to enhance self-consumption.",
            "Scenario 5: DSM (Flexible Demand)": "Demand-side management: higher decision frequency as proxy for flexibility.",
        }

        for p in predefined:
            row = existing_by_name.get(p["name"])
            if row is None:
                db.add(Scenario(id=str(uuid4()), name=p["name"], description=p["description"], details=p.get("details"), config_overrides=p["config_overrides"]))
            else:
                updated = False
                # Upgrade details if missing
                if not getattr(row, 'details', None):
                    row.details = p.get("details")
                    updated = True
                # Upgrade description if it matches an older short string
                try:
                    if row.description and old_shorts.get(p["name"]) and row.description.strip() == old_shorts[p["name"]]:
                        row.description = p["description"]
                        updated = True
                except Exception:
                    pass
                if updated:
                    db.add(row)
