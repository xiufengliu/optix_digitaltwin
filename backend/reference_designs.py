"""Read-only reference twins of the paper scenarios S1-S5.

The paper scenarios are linked to these designs, so a paper scenario and its
design are one thing and every run uses the full component model. The twins
match paper.txt: a 150 kW-peak office (DK2 demand shape, 30 % of it flexible in
S5), rooftop PV, a 4-hour battery with 90 % round trip, 15-85 % state of charge
and a 50 % start, district heating for the building's heat and a grid
connection whose limits never bind. Electricity results therefore equal the
hand-entered presets; heat is added on top.

Called at startup after the presets are seeded (idempotent).
"""

from __future__ import annotations

from uuid import uuid4

from .db import session_scope
from .models import DigitalTwin, Scenario

# Description that marks these designs; the API refuses to change or delete them
REFERENCE_MARKER = "paper-reference"

# (paper scenario name, twin name, PV kWp, battery kWh, flexible %)
DESIGNS = [
    ("Scenario 1: Baseline", "S1 · Paper reference · 30 kWp PV", 30, 0, 0),
    ("Scenario 2: High PV Deployment", "S2 · Paper reference · 171 kWp PV", 171, 0, 0),
    ("Scenario 3: High PV + Battery (4h)", "S3 · Paper reference · PV + 320 kWh battery", 171, 320, 0),
    ("Scenario 4: High PV + Large Battery", "S4 · Paper reference · PV + 640 kWh battery", 171, 640, 0),
    ("Scenario 5: DSM (Flexible Demand)", "S5 · Paper reference · PV + battery + 30 % DSM", 171, 320, 30),
]


def design(pv_kwp: float, battery_kwh: float, flexible_pct: float) -> tuple[list, list]:
    comps = [
        {"id": "bld-1", "type": "smart_building", "name": "Office building", "x": 300, "y": 180,
         "params": {"floors": 5, "area_m2": 2000, "load_kw": 150, "flexible_load_pct": flexible_pct, "load_profile": "dk2", "heat_demand_kwh_m2": 70}},
        {"id": "pv-1", "type": "solar_pv", "name": "Rooftop PV", "x": 300, "y": 40,
         "params": {"capacity_kwp": pv_kwp, "tilt_deg": 15, "azimuth_deg": 180, "efficiency": 0.2}},
        {"id": "dh-1", "type": "district_heating", "name": "District heating", "x": 60, "y": 180,
         "params": {"supply_temp_c": 70, "return_temp_c": 40, "capacity_kw": 200}},
        {"id": "grid-1", "type": "smart_grid", "name": "Grid (DK2)", "x": 540, "y": 300,
         "params": {"import_limit_kw": 500, "export_limit_kw": 171, "tariff_type": "dynamic"}},
    ]
    conns = [
        {"id": "c1", "from": "pv-1", "to": "bld-1", "type": "electricity"},
        {"id": "c2", "from": "dh-1", "to": "bld-1", "type": "heat"},
        {"id": "c3", "from": "grid-1", "to": "bld-1", "type": "electricity"},
    ]
    if battery_kwh:
        comps.append({"id": "bat-1", "type": "battery_storage", "name": "Battery (4 h)", "x": 540, "y": 60,
                      "params": {"capacity_kwh": battery_kwh, "power_kw": battery_kwh / 4, "efficiency": 0.9, "initial_soc": 0.5}})
        conns += [{"id": "c4", "from": "pv-1", "to": "bat-1", "type": "electricity"},
                  {"id": "c5", "from": "bat-1", "to": "bld-1", "type": "electricity"}]
    return comps, conns


def ensure_reference_designs() -> None:
    """Create/refresh the reference twins and link the canonical paper scenarios to them."""
    from .routes import _overrides_with_twin

    with session_scope() as db:
        for scenario_name, twin_name, pv, batt, flex in DESIGNS:
            comps, conns = design(pv, batt, flex)
            twin = db.query(DigitalTwin).filter(DigitalTwin.name == twin_name, DigitalTwin.description == REFERENCE_MARKER).first()
            if twin is None:
                twin = DigitalTwin(id=str(uuid4()), name=twin_name, description=REFERENCE_MARKER)
            twin.components, twin.connections = comps, conns
            db.add(twin)
            db.flush()
            # The canonical preset is the oldest scenario with the paper name
            sc = db.query(Scenario).filter(Scenario.name == scenario_name).order_by(Scenario.created_at).first()
            if sc is None:
                    continue
            sc.digital_twin_id = twin.id
            sc.config_overrides = _overrides_with_twin(sc.config_overrides, twin)
            db.add(sc)


