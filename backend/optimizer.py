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
    # Grid connection limits on the grid side (MW); None = unlimited. Export
    # above the limit is curtailed; import above it is reported, not cut.
    import_limit_mw: Optional[float] = None
    export_limit_mw: Optional[float] = None


@dataclass
class HeatSystem:
    """Heat side of a site (MW / MWh per step on the same timeline)."""

    heat_mw: np.ndarray               # heat demand
    hp_cap_mw: float = 0.0            # heat pump thermal output capacity
    hp_inv_cop: Optional[np.ndarray] = None  # electricity per unit heat (1 / COP)
    chp_el_mw: float = 0.0
    chp_th_mw: float = 0.0
    chp_eff_e: float = 0.38           # electricity per unit fuel
    ts_cap_mwh: float = 0.0           # thermal storage
    ts_loss_per_day: float = 0.0      # share of stored heat lost per day
    dh_cap_mw: float = 0.0            # district heating connection


class MeritOrderOptimizer:
    """Deterministic PV‑first dispatcher consistent with paper.txt scenarios.

    PV routing:  PV -> Load  >  PV -> DSM (pull flexible demand forward)  >  PV -> Battery
                 >  PV -> heat pump into thermal storage  >  PV -> Export (up to the export limit; rest curtailed)
    Release:     DSM dispatch  >  Battery -> Load  >  Grid Import
    Heat:        thermal storage  >  heat pump  >  CHP (heat-led)  >  district heating  >  external (not modelled)
    Heat pump electricity is demand of the step; CHP electricity is on-site
    generation. Battery discharge is never exported and the battery never
    charges from the grid (export only from on-site generation, no arbitrage).
    """

    def __init__(self, cfg: MeritOrderConfig):
        self.cfg = cfg

    def run(self, pv_mw: np.ndarray, load_mw: np.ndarray, flex_mw: Optional[np.ndarray] = None,
            heat: Optional[HeatSystem] = None) -> Dict[str, Any]:
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
        curtailed = np.zeros(n)

        pv_list = np.maximum(0.0, np.asarray(pv_mw, dtype=float) * dt).tolist()
        load_list = np.maximum(0.0, np.asarray(load_mw, dtype=float) * dt).tolist()

        # DSM as a lossless virtual demand store (paper, Scenario 5): PV surplus
        # pulls flexible demand forward from the next `max_shift_hours`. Only the
        # flexible part of a future step's load can be pulled, and only the part
        # PV would not cover then, so every shifted MWh is released inside the
        # window and charge == dispatch overall. The power limit is the peak of
        # the flexible load; outstanding energy therefore stays below
        # E_DSM = P_flex_peak * max_shift_hours.
        if flex_mw is None:
            flex = max(0.0, min(1.0, self.cfg.flexible_load_share))
            flex_e_all = np.asarray(load_mw, dtype=float) * flex * dt if flex > 0 else None
        else:
            flex_e_all = np.clip(np.asarray(flex_mw, dtype=float), 0.0, None) * dt
        max_power_mw = float(np.max(flex_e_all)) / dt if flex_e_all is not None and n else 0.0
        window = int(round(max(0.0, self.cfg.max_shift_hours) / dt)) if dt > 0 else 0
        dsm_on = max_power_mw > 1e-9 and window > 0
        if dsm_on:
            load_e_all = np.maximum(0.0, np.asarray(load_mw, dtype=float) * dt)
            pv_e_all = np.maximum(0.0, np.asarray(pv_mw, dtype=float) * dt)
            # Flexible demand at each step that PV would not serve directly
            dsm_room = np.minimum(np.minimum(flex_e_all, load_e_all), np.maximum(0.0, load_e_all - pv_e_all))
        dsm_soc = 0.0

        exp_cap = None
        if self.cfg.export_limit_mw is not None:
            # Limit applies to what reaches the grid (after export losses)
            exp_cap = max(0.0, float(self.cfg.export_limit_mw)) * dt / max(float(self.cfg.eta_export), 1e-9)

        # Heat side
        has_heat = heat is not None
        if has_heat:
            heat_list = np.maximum(0.0, np.asarray(heat.heat_mw, dtype=float) * dt).tolist()
            hp_cap_e = max(0.0, heat.hp_cap_mw) * dt
            inv_cop = (np.asarray(heat.hp_inv_cop, dtype=float).tolist() if heat.hp_inv_cop is not None and hp_cap_e > 0 else None)
            chp_th_e = max(0.0, heat.chp_th_mw) * dt
            chp_ratio = heat.chp_el_mw / heat.chp_th_mw if heat.chp_th_mw > 1e-12 else 0.0
            dh_cap_e = max(0.0, heat.dh_cap_mw) * dt
            ts_cap = max(0.0, heat.ts_cap_mwh)
            ts_keep = (1.0 - min(1.0, max(0.0, heat.ts_loss_per_day))) ** (dt / 24.0)
            ts_soc = 0.0
            ts_loss_total = 0.0
            hp_heat = np.zeros(n)
            hp_el = np.zeros(n)
            ts_charge = np.zeros(n)
            ts_discharge = np.zeros(n)
            ts_soc_trace = np.zeros(n)
            chp_heat = np.zeros(n)
            chp_el = np.zeros(n)
            dh_heat = np.zeros(n)
            ext_heat = np.zeros(n)

        for t in range(n):
            pv_e = pv_list[t]
            load_e = load_list[t]

            if has_heat:
                hd = heat_list[t]
                if ts_cap > 0:
                    lost = ts_soc * (1.0 - ts_keep)
                    ts_soc -= lost
                    ts_loss_total += lost
                    d = min(hd, ts_soc)
                    if d > 0:
                        ts_soc -= d
                        hd -= d
                        ts_discharge[t] = d
                if inv_cop is not None and hd > 0:
                    h = min(hd, hp_cap_e)
                    hp_heat[t] = h
                    hp_el[t] = h * inv_cop[t]
                    load_e += hp_el[t]
                    hd -= h
                if chp_th_e > 0 and hd > 0:
                    h = min(hd, chp_th_e)
                    chp_heat[t] = h
                    chp_el[t] = h * chp_ratio
                    pv_e += chp_el[t]
                    hd -= h
                if dh_cap_e > 0 and hd > 0:
                    h = min(hd, dh_cap_e)
                    dh_heat[t] = h
                    hd -= h
                ext_heat[t] = hd

            # DSM dispatch: demand already served earlier is removed now. It
            # never exceeds load - PV (see dsm_room), so releasing it before PV
            # serves the load equals the paper's order and stays correct when
            # CHP electricity adds to on-site generation.
            if dsm_discharge[t] > 0.0:
                load_e -= dsm_discharge[t]
                dsm_soc -= dsm_discharge[t]

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

            # 2b) PV -> heat pump spare capacity -> thermal storage
            if has_heat and ts_cap > 0 and inv_cop is not None and pv_e > 1e-12:
                h = min(hp_cap_e - hp_heat[t], ts_cap - ts_soc, pv_e / max(inv_cop[t], 1e-9))
                if h > 1e-12:
                    el = h * inv_cop[t]
                    ts_soc += h
                    ts_charge[t] = h
                    hp_heat[t] += h
                    hp_el[t] += el
                    pv_e -= el

            # 3) PV -> Export (remaining, up to the export limit)
            if pv_e > 1e-12:
                if exp_cap is not None and pv_e > exp_cap:
                    curtailed[t] = pv_e - exp_cap
                    pv_e = exp_cap
                pv_export[t] = pv_e
                pv_e = 0.0

            # 4) Battery -> Load
            if load_e > 1e-12 and soc - soc_lo > 1e-12 and p_cap > 1e-9:
                # output limited by power and energy above the SoC floor, after efficiency
                max_output = min(load_e, p_cap * dt, (soc - soc_lo) * eta_d)
                if max_output > 1e-12:
                    batt_to_load[t] = max_output
                    soc -= max_output / max(eta_d, 1e-9)
                    load_e -= max_output

            # 5) Grid Import for any residual load
            if load_e > 1e-12:
                grid_import[t] = load_e

            soc_trace[t] = soc
            if has_heat:
                ts_soc_trace[t] = ts_soc

        eta_tr = min(max(float(self.cfg.eta_transformer), 1e-9), 1.0)
        eta_ex = min(max(float(self.cfg.eta_export), 0.0), 1.0)
        grid_purchase = grid_import / eta_tr
        export_delivered = pv_export * eta_ex

        dt_sum = lambda a: float(np.sum(a) * dt)  # noqa: E731
        total_gen_mwh = dt_sum(pv_mw)  # renewable on-site generation
        hp_el_mwh = float(np.sum(hp_el)) if has_heat else 0.0
        chp_el_mwh = float(np.sum(chp_el)) if has_heat else 0.0
        total_demand_mwh = dt_sum(load_mw) + hp_el_mwh
        ped_abs = total_gen_mwh - total_demand_mwh
        ped_ratio = float(total_gen_mwh / (total_demand_mwh + 1e-9))
        onsite_mwh = total_gen_mwh + chp_el_mwh

        import_over = np.zeros(n)
        if self.cfg.import_limit_mw is not None:
            import_over = np.maximum(0.0, grid_purchase - max(0.0, float(self.cfg.import_limit_mw)) * dt)

        series = {
            'pv_to_load_mwh': pv_to_load,
            'pv_to_batt_mwh': pv_to_batt,
            'pv_export_mwh': pv_export,
            'batt_to_load_mwh': batt_to_load,
            'grid_import_mwh': grid_import,
            'dsm_charge_mwh': dsm_charge,
            'dsm_discharge_mwh': dsm_discharge,
            'grid_purchase_mwh': grid_purchase,
            'export_delivered_mwh': export_delivered,
        }
        if self.cfg.export_limit_mw is not None:
            series['curtailed_mwh'] = curtailed
        kpis = {
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
            # Share of on-site generation used locally (directly, via battery, DSM or thermal storage)
            'self_consumption_ratio': float((np.sum(pv_to_load) + np.sum(pv_to_batt) + np.sum(dsm_charge)
                                             + (float(np.sum(ts_charge * np.asarray(heat.hp_inv_cop))) if has_heat and inv_cop is not None else 0.0))
                                            / (onsite_mwh + 1e-9)),
            # Share of demand covered without grid import
            'self_sufficiency_ratio': float(1.0 - np.sum(grid_import) / (total_demand_mwh + 1e-9)),
            'curtailed_mwh': float(np.sum(curtailed)),
            'import_over_limit_mwh': float(np.sum(import_over)),
            'import_over_limit_hours': float(np.count_nonzero(import_over > 1e-9) * dt),
            'peak_grid_purchase_kw': float(np.max(grid_purchase) / dt * 1000) if n else 0.0,
        }

        dh_mwh = ext_mwh = chp_fuel_mwh = 0.0
        if has_heat:
            series.update({
                'heat_demand_mwh': np.asarray(heat_list),
                'hp_heat_mwh': hp_heat,
                'hp_el_mwh': hp_el,
                'ts_charge_mwh': ts_charge,
                'ts_discharge_mwh': ts_discharge,
                'chp_heat_mwh': chp_heat,
                'chp_el_mwh': chp_el,
                'dh_heat_mwh': dh_heat,
                'external_heat_mwh': ext_heat,
            })
            dh_mwh = float(np.sum(dh_heat))
            ext_mwh = float(np.sum(ext_heat))
            chp_fuel_mwh = chp_el_mwh / max(heat.chp_eff_e, 1e-9)
            kpis.update({
                'heat_demand_mwh': float(np.sum(heat_list)),
                'hp_heat_mwh': float(np.sum(hp_heat)),
                'hp_el_mwh': hp_el_mwh,
                'hp_spf': float(np.sum(hp_heat) / hp_el_mwh) if hp_el_mwh > 1e-9 else None,
                'ts_charge_mwh': float(np.sum(ts_charge)),
                'ts_discharge_mwh': float(np.sum(ts_discharge)),
                'ts_losses_mwh': ts_loss_total,
                'chp_heat_mwh': float(np.sum(chp_heat)),
                'chp_el_mwh': chp_el_mwh,
                'chp_fuel_mwh': chp_fuel_mwh,
                'dh_heat_mwh': dh_mwh,
                'external_heat_mwh': ext_mwh,
            })
        # Energy crossing the site boundary, all carriers (electricity, heat, fuel)
        imports = float(np.sum(grid_purchase)) + dh_mwh + ext_mwh + chp_fuel_mwh
        net_import = imports - float(np.sum(export_delivered))
        kpis['energy_import_mwh'] = imports
        kpis['net_energy_import_mwh'] = net_import
        kpis['total_energy_ped_ratio'] = float(total_gen_mwh / (total_gen_mwh + net_import)) if total_gen_mwh + net_import > 1e-9 else None

        return {
            'series_mwh': series,
            'kpis': kpis,
            'soc_mwh': soc_trace,
            'soc0_mwh': soc0,
            'ts_soc_mwh': ts_soc_trace if has_heat else None,
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
    for key, attr in (('grid_import_limit_mw', 'import_limit_mw'), ('grid_export_limit_mw', 'export_limit_mw')):
        if overrides.get(key) is not None:
            setattr(cfg, attr, float(overrides[key]))
    return cfg
