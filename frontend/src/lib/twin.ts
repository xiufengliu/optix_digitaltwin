import type { DigitalTwinConfig } from '../components/DigitalTwinBuilder';

type Overrides = Record<string, unknown>;

function mw(overrides: Overrides, key: string): number {
  const value = Number(overrides[key]);
  return Number.isFinite(value) ? value : 0;
}

/**
 * Twin equivalent to hand-entered scenario sizes (MW units), so "Edit in builder"
 * starts from exactly what was simulated: electricity only (the building's heat
 * demand is 0 and no grid limits or heat supply are added).
 */
export function twinFromOverrides(id: string, name: string, overrides: Overrides | null | undefined, createdAt = ''): DigitalTwinConfig {
  const cfg = overrides || {};
  const pvKw = mw(cfg, 'owned_solar_capacity_mw') * 1000;
  const windKw = mw(cfg, 'owned_wind_capacity_mw') * 1000;
  const batteryKwh = mw(cfg, 'owned_battery_capacity_mwh') * 1000;
  const loadKw = mw(cfg, 'owned_load_peak_mw') * 1000;
  const cRate = mw(cfg, 'batt_power_c_rate') || 0.25;
  const etaCharge = mw(cfg, 'batt_eta_charge');
  const roundTrip = etaCharge > 0 ? etaCharge * (mw(cfg, 'batt_eta_discharge') || etaCharge) : 0.9;
  const flexiblePct = Math.round(mw(cfg, 'flexible_load_share') * 100);

  const components: DigitalTwinConfig['components'] = [];
  const connections: DigitalTwinConfig['connections'] = [];
  let connId = 1;
  const connect = (from: string, to: string) => connections.push({ id: `c${connId++}`, from, to, type: 'electricity' });

  components.push({ id: 'bld-1', type: 'smart_building', name: 'Building', x: 300, y: 180, params: { floors: 5, area_m2: 2000, heat_demand_kwh_m2: 0, load_kw: Math.round(loadKw), flexible_load_pct: flexiblePct, load_profile: 'dk2' } });
  if (pvKw > 0) {
    components.push({ id: 'pv-1', type: 'solar_pv', name: `Solar PV (${pvKw.toFixed(0)} kWp)`, x: 300, y: 40, params: { capacity_kwp: pvKw } });
    connect('pv-1', 'bld-1');
  }
  if (batteryKwh > 0) {
    components.push({ id: 'bat-1', type: 'battery_storage', name: `Battery (${batteryKwh.toFixed(0)} kWh)`, x: 540, y: 60, params: { capacity_kwh: batteryKwh, power_kw: batteryKwh * cRate, efficiency: Number(roundTrip.toFixed(3)), initial_soc: 0.5 } });
    connect('bat-1', 'bld-1');
    if (pvKw > 0) connect('pv-1', 'bat-1');
  }
  if (windKw > 0) {
    components.push({ id: 'wind-1', type: 'wind_turbine', name: `Wind (${windKw.toFixed(0)} kW)`, x: 60, y: 40, params: { capacity_kw: windKw } });
    connect('wind-1', 'bld-1');
  }
  // Grid connection without limits, like the hand-entered scenario
  components.push({ id: 'grid-1', type: 'smart_grid', name: 'Grid', x: 540, y: 300, params: { import_limit_kw: 0, export_limit_kw: 0, tariff_type: 'dynamic' } });
  connect('grid-1', 'bld-1');

  return { id, name: name.replace(/^(Run of\s+)+/, ''), components, connections, created_at: createdAt };
}

export interface TwinSummary {
  pvKwp: number; windKw: number; batteryKwh: number; loadKw: number; components: number;
  heatPumpKw: number; chpKw: number; thermalKwh: number; evKw: number;
}

/** Key sizes of a design, counted the way the simulation counts them. */
export function twinSummary(config: Pick<DigitalTwinConfig, 'components'> | null | undefined): TwinSummary {
  const out: TwinSummary = { pvKwp: 0, windKw: 0, batteryKwh: 0, loadKw: 0, components: 0, heatPumpKw: 0, chpKw: 0, thermalKwh: 0, evKw: 0 };
  for (const c of config?.components ?? []) {
    const p = (c.params ?? {}) as Record<string, unknown>;
    const n = (k: string) => (Number.isFinite(Number(p[k])) ? Number(p[k]) : 0);
    out.components += 1;
    if (c.type === 'solar_pv') out.pvKwp += n('capacity_kwp');
    else if (c.type === 'wind_turbine') out.windKw += n('capacity_kw');
    else if (c.type === 'battery_storage') out.batteryKwh += n('capacity_kwh');
    else if (c.type === 'smart_building') out.loadKw += n('load_kw');
    else if (c.type === 'load_center') out.loadKw += n('peak_load_kw') || n('base_load_kw');
    else if (c.type === 'heat_pump') out.heatPumpKw += n('capacity_kw');
    else if (c.type === 'chp_unit') out.chpKw += n('electrical_kw');
    else if (c.type === 'thermal_storage') out.thermalKwh += n('capacity_kwh');
    else if (c.type === 'ev_charger') out.evKw += n('num_ports') * n('power_per_port_kw');
  }
  return out;
}

export function formatTwinSummary(s: TwinSummary): string {
  const parts = [`${Math.round(s.loadKw)} kW load`, `${Math.round(s.pvKwp)} kWp PV`];
  if (s.windKw > 0) parts.push(`${Math.round(s.windKw)} kW wind`);
  if (s.batteryKwh > 0) parts.push(`${Math.round(s.batteryKwh)} kWh battery`);
  if (s.heatPumpKw > 0) parts.push(`${Math.round(s.heatPumpKw)} kW heat pump`);
  if (s.chpKw > 0) parts.push(`${Math.round(s.chpKw)} kWe CHP`);
  if (s.thermalKwh > 0) parts.push(`${Math.round(s.thermalKwh)} kWh heat storage`);
  if (s.evKw > 0) parts.push(`${Math.round(s.evKw)} kW EV charging`);
  return parts.join(' · ');
}
