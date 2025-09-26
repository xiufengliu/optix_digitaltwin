from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, Any, Optional

import numpy as np


@dataclass
class MeritOrderConfig:
    dt_hours: float = 1.0 / 6.0  # default 10‑minute steps
    battery_energy_mwh: float = 0.0
    battery_c_rate: float = 0.25  # 4h
    eta_charge: float = 0.95
    eta_discharge: float = 0.95
    export_only_from_pv: bool = True
    # DSM virtual store (lossless) parameters
    flexible_load_share: float = 0.0
    max_shift_hours: float = 3.0


class MeritOrderOptimizer:
    """Deterministic PV‑first dispatcher consistent with paper.txt scenarios.

    Order:
      PV -> Load  >  PV -> Battery  >  PV -> Export  >  Battery -> Load  >  Grid Import
    Battery discharge is never exported when export_only_from_pv=True (default).
    """

    def __init__(self, cfg: MeritOrderConfig):
        self.cfg = cfg

    def run(self, pv_mw: np.ndarray, load_mw: np.ndarray) -> Dict[str, Any]:
        if pv_mw.shape != load_mw.shape:
            raise ValueError("pv and load must have same length")

        n = len(pv_mw)
        dt = float(self.cfg.dt_hours)
        e_cap = float(max(0.0, self.cfg.battery_energy_mwh))
        p_cap = e_cap * float(max(0.0, self.cfg.battery_c_rate))  # MW
        eta_c = float(self.cfg.eta_charge)
        eta_d = float(self.cfg.eta_discharge)

        soc = 0.0  # MWh

        pv_to_load = np.zeros(n)
        pv_to_batt = np.zeros(n)
        pv_export = np.zeros(n)
        batt_to_load = np.zeros(n)
        grid_import = np.zeros(n)
        dsm_charge = np.zeros(n)    # increase demand now
        dsm_discharge = np.zeros(n) # reduce demand later

        # DSM capacities (simple approximation per paper narrative)
        flex = max(0.0, min(1.0, self.cfg.flexible_load_share))
        max_power_mw = float(np.max(load_mw) * flex) if flex > 0 else 0.0
        dsm_energy_cap = max_power_mw * float(max(0.0, self.cfg.max_shift_hours))  # MWh
        dsm_soc = 0.0

        for t in range(n):
            pv_e = max(0.0, float(pv_mw[t]) * dt)
            load_e = max(0.0, float(load_mw[t]) * dt)

            # 1) PV -> Load
            use = min(pv_e, load_e)
            pv_to_load[t] = use
            pv_e -= use
            load_e -= use

            # DSM charge from PV surplus before export (so it offsets future grid)
            if dsm_energy_cap > 1e-9 and pv_e > 1e-12 and max_power_mw > 1e-9:
                charge_cap = min(max_power_mw * dt, pv_e, max(0.0, dsm_energy_cap - dsm_soc))
                if charge_cap > 1e-12:
                    dsm_charge[t] = charge_cap
                    dsm_soc += charge_cap
                    pv_e -= charge_cap

            # 2) PV -> Battery (respect charge power and capacity)
            if e_cap > 1e-9 and p_cap > 1e-9 and pv_e > 1e-12:
                charge_input_max = min(p_cap * dt, pv_e)
                cap_room = max(0.0, e_cap - soc)
                # input limited by capacity increase / eta
                charge_input = min(charge_input_max, cap_room / max(eta_c, 1e-9))
                if charge_input > 1e-12:
                    soc += charge_input * eta_c
                    pv_to_batt[t] = charge_input
                    pv_e -= charge_input

            # 3) PV -> Export (remaining)
            if pv_e > 1e-12:
                pv_export[t] = pv_e
                pv_e = 0.0

            # 4) DSM dispatch to reduce remaining load (use stored flexible energy)
            if load_e > 1e-12 and dsm_soc > 1e-12 and max_power_mw > 1e-9:
                dispatch_cap = min(max_power_mw * dt, dsm_soc, load_e)
                if dispatch_cap > 1e-12:
                    dsm_discharge[t] = dispatch_cap
                    dsm_soc -= dispatch_cap
                    load_e -= dispatch_cap

            # 5) Battery -> Load
            if load_e > 1e-12 and soc > 1e-12 and p_cap > 1e-9:
                # output limited by power and available energy after efficiency
                max_output = min(load_e, p_cap * dt, soc * eta_d)
                if max_output > 1e-12:
                    batt_to_load[t] = max_output
                    soc -= max_output / max(eta_d, 1e-9)
                    load_e -= max_output

            # 6) Grid Import for any residual load
            if load_e > 1e-12:
                grid_import[t] = load_e

        total_gen_mwh = float(np.sum(pv_mw) * dt)
        total_demand_mwh = float(np.sum(load_mw) * dt)
        ped_abs = total_gen_mwh - total_demand_mwh
        ped_ratio = float(total_gen_mwh / (total_demand_mwh + 1e-9))

        return {
            'series_mwh': {
                'pv_to_load_mwh': pv_to_load,
                'pv_to_batt_mwh': pv_to_batt,
                'pv_export_mwh': pv_export,
                'batt_to_load_mwh': batt_to_load,
                'grid_import_mwh': grid_import,
                'dsm_charge_mwh': dsm_charge,
                'dsm_discharge_mwh': dsm_discharge,
            },
            'kpis': {
                'total_gen_mwh': total_gen_mwh,
                'total_demand_mwh': total_demand_mwh,
                'ped_absolute_mwh': ped_abs,
                'ped_ratio': ped_ratio,
                'self_consumption_mwh': float(np.sum(pv_to_load)),
                'export_mwh': float(np.sum(pv_export)),
                'battery_throughput_mwh': float(np.sum(pv_to_batt) + np.sum(batt_to_load)),
                'grid_import_mwh': float(np.sum(grid_import)),
            },
            'dt_hours': dt,
        }


def build_config_from_overrides(overrides: Optional[Dict[str, Any]], default_dt_hours: float) -> MeritOrderConfig:
    cfg = MeritOrderConfig(dt_hours=default_dt_hours)
    if not overrides:
        return cfg
    cfg.battery_energy_mwh = float(overrides.get('owned_battery_capacity_mwh', 0.0) or 0.0)
    cfg.battery_c_rate = float(overrides.get('batt_power_c_rate', 0.25) or 0.25)
    # try to pull efficiencies if present in config overrides
    if 'batt_eta_charge' in overrides:
        cfg.eta_charge = float(overrides['batt_eta_charge'])
    if 'batt_eta_discharge' in overrides:
        cfg.eta_discharge = float(overrides['batt_eta_discharge'])
    if 'flexible_load_share' in overrides:
        cfg.flexible_load_share = float(overrides['flexible_load_share'])
    if 'max_shift_hours' in overrides:
        cfg.max_shift_hours = float(overrides['max_shift_hours'])
    return cfg
