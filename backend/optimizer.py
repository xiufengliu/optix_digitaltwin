from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, Any, Optional

import numpy as np


@dataclass
class MeritOrderConfig:
    dt_hours: float = 1.0 / 6.0  # default 10‑minute steps
    battery_energy_mwh: float = 0.0
    battery_c_rate: float = 0.25  # 4h; power = nominal energy x C-rate
    # Paper (Scenario 3): round-trip 0.90 split evenly, SoC window 15-85 %,
    # starting at 50 % of the nominal capacity
    eta_charge: float = 0.90 ** 0.5
    eta_discharge: float = 0.90 ** 0.5
    soc_min_pu: float = 0.15
    soc_max_pu: float = 0.85
    soc_initial_pu: float = 0.5
    export_only_from_pv: bool = True
    # Paper: grid transformer efficiency on imports, link efficiency on exports.
    # Reported import is building-side and export PV-side; costs use the
    # grid-side energy (purchased = import / eta_transformer, delivered =
    # export * eta_export).
    eta_transformer: float = 0.94
    eta_export: float = 0.95
    # DSM virtual store (lossless) parameters
    flexible_load_share: float = 0.0
    max_shift_hours: float = 3.0


class MeritOrderOptimizer:
    """Deterministic PV‑first dispatcher consistent with paper.txt scenarios.

    PV routing:  PV -> Load  >  PV -> DSM (pull flexible demand forward)  >  PV -> Battery  >  PV -> Export
    Release:     DSM dispatch  >  Battery -> Load  >  Grid Import
    Battery discharge is never exported and the battery never charges from the
    grid (export only from PV, no arbitrage).
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
        soc_lo = e_cap * min(max(self.cfg.soc_min_pu, 0.0), 1.0)
        soc_hi = max(soc_lo, e_cap * min(max(self.cfg.soc_max_pu, 0.0), 1.0))
        soc0 = min(max(e_cap * self.cfg.soc_initial_pu, soc_lo), soc_hi)
        soc = soc0  # MWh

        pv_to_load = np.zeros(n)
        pv_to_batt = np.zeros(n)
        pv_export = np.zeros(n)
        batt_to_load = np.zeros(n)
        grid_import = np.zeros(n)
        dsm_charge = np.zeros(n)    # increase demand now
        dsm_discharge = np.zeros(n) # reduce demand later
        soc_trace = np.zeros(n)     # battery state of charge at end of step (MWh)

        # DSM as a lossless virtual demand store (paper, Scenario 5): PV surplus
        # pulls flexible demand forward from the next `max_shift_hours`. Only the
        # flexible share of a future step's load can be pulled, and only the part
        # PV would not cover then, so every shifted MWh is released inside the
        # window and charge == dispatch overall. The power limit is the flexible
        # share of peak load; outstanding energy therefore stays below
        # E_DSM = P_flex_peak * max_shift_hours.
        flex = max(0.0, min(1.0, self.cfg.flexible_load_share))
        max_power_mw = float(np.max(load_mw) * flex) if flex > 0 and n else 0.0
        window = int(round(max(0.0, self.cfg.max_shift_hours) / dt)) if dt > 0 else 0
        dsm_on = max_power_mw > 1e-9 and window > 0
        if dsm_on:
            load_e_all = np.maximum(0.0, np.asarray(load_mw, dtype=float) * dt)
            pv_e_all = np.maximum(0.0, np.asarray(pv_mw, dtype=float) * dt)
            # Flexible demand at each step that PV would not serve directly
            dsm_room = np.minimum(flex * load_e_all, np.maximum(0.0, load_e_all - pv_e_all))
        dsm_soc = 0.0

        for t in range(n):
            pv_e = max(0.0, float(pv_mw[t]) * dt)
            load_e = max(0.0, float(load_mw[t]) * dt)

            # 1) PV -> Load
            use = min(pv_e, load_e)
            pv_to_load[t] = use
            pv_e -= use
            load_e -= use

            # DSM charge from PV surplus before storage/export (paper priority)
            if dsm_on and pv_e > 1e-12:
                want = min(max_power_mw * dt, pv_e)
                for tau in range(t + 1, min(n, t + window + 1)):  # nearest first
                    if want <= 1e-12:
                        break
                    take = min(want, dsm_room[tau])
                    if take > 1e-12:
                        dsm_room[tau] -= take
                        dsm_discharge[tau] += take
                        dsm_charge[t] += take
                        want -= take
                dsm_soc += dsm_charge[t]
                pv_e -= dsm_charge[t]

            # 2) PV -> Battery (respect charge power and capacity)
            if e_cap > 1e-9 and p_cap > 1e-9 and pv_e > 1e-12:
                charge_input_max = min(p_cap * dt, pv_e)
                cap_room = max(0.0, soc_hi - soc)
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

            # 4) DSM dispatch: demand already served earlier is removed now
            if dsm_discharge[t] > 0.0:
                load_e -= dsm_discharge[t]
                dsm_soc -= dsm_discharge[t]

            # 5) Battery -> Load
            if load_e > 1e-12 and soc - soc_lo > 1e-12 and p_cap > 1e-9:
                # output limited by power and energy above the SoC floor, after efficiency
                max_output = min(load_e, p_cap * dt, (soc - soc_lo) * eta_d)
                if max_output > 1e-12:
                    batt_to_load[t] = max_output
                    soc -= max_output / max(eta_d, 1e-9)
                    load_e -= max_output

            # 6) Grid Import for any residual load
            if load_e > 1e-12:
                grid_import[t] = load_e

            soc_trace[t] = soc

        eta_tr = min(max(float(self.cfg.eta_transformer), 1e-9), 1.0)
        eta_ex = min(max(float(self.cfg.eta_export), 0.0), 1.0)
        grid_purchase = grid_import / eta_tr
        export_delivered = pv_export * eta_ex

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
                'grid_purchase_mwh': grid_purchase,
                'export_delivered_mwh': export_delivered,
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
                'grid_purchase_mwh': float(np.sum(grid_purchase)),
                'export_delivered_mwh': float(np.sum(export_delivered)),
                'grid_losses_mwh': float(np.sum(grid_purchase - grid_import) + np.sum(pv_export - export_delivered)),
                'battery_losses_mwh': float(np.sum(pv_to_batt) - np.sum(batt_to_load) - (soc - soc0)),
                # Share of on-site generation used locally (directly, via battery or DSM)
                'self_consumption_ratio': float((np.sum(pv_to_load) + np.sum(pv_to_batt) + np.sum(dsm_charge)) / (np.sum(pv_mw) * dt + 1e-9)),
                # Share of demand covered without grid import
                'self_sufficiency_ratio': float(1.0 - np.sum(grid_import) / (np.sum(load_mw) * dt + 1e-9)),
            },
            'soc_mwh': soc_trace,
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
    for key, attr in (('batt_soc_min', 'soc_min_pu'), ('batt_soc_max', 'soc_max_pu'), ('batt_soc_initial', 'soc_initial_pu'),
                      ('grid_transformer_efficiency', 'eta_transformer'), ('export_efficiency', 'eta_export')):
        if key in overrides:
            setattr(cfg, attr, float(overrides[key]))
    if 'flexible_load_share' in overrides:
        cfg.flexible_load_share = float(overrides['flexible_load_share'])
    if 'max_shift_hours' in overrides:
        cfg.max_shift_hours = float(overrides['max_shift_hours'])
    return cfg
