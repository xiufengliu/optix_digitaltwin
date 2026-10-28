import type { DigitalTwinConfig } from '../components/DigitalTwinBuilder';

type Overrides = Record<string, unknown>;

function mw(overrides: Overrides, key: string): number {
  const value = Number(overrides[key]);
  return Number.isFinite(value) ? value : 0;
}

/** Build an illustrative twin layout from scenario/run config overrides (MW units). */
export function twinFromOverrides(id: string, name: string, overrides: Overrides | null | undefined, createdAt = ''): DigitalTwinConfig {
  const cfg = overrides || {};
  const pvKw = mw(cfg, 'owned_solar_capacity_mw') * 1000;
  const windKw = mw(cfg, 'owned_wind_capacity_mw') * 1000;
  const batteryKwh = mw(cfg, 'owned_battery_capacity_mwh') * 1000;
  const loadKw = mw(cfg, 'owned_load_peak_mw') * 1000 || 150;

  const components: DigitalTwinConfig['components'] = [];
  const connections: DigitalTwinConfig['connections'] = [];
  let connId = 1;
  const connect = (from: string, to: string, type: 'electricity' | 'heat' = 'electricity') =>
    connections.push({ id: `c${connId++}`, from, to, type });

  components.push({ id: 'bld-1', type: 'smart_building', name: 'Building', x: 300, y: 180, params: { floors: 5, area_m2: 2000, load_kw: Math.round(loadKw) } });

  if (pvKw > 0) {
    components.push({ id: 'pv-1', type: 'solar_pv', name: `Solar PV (${pvKw.toFixed(0)} kWp)`, x: 300, y: 60, params: { capacity_kwp: pvKw } });
    connect('pv-1', 'bld-1');
  }
  if (batteryKwh > 0) {
    components.push({ id: 'bat-1', type: 'battery_storage', name: `Battery (${batteryKwh.toFixed(0)} kWh)`, x: 450, y: 120, params: { capacity_kwh: batteryKwh } });
    connect('bat-1', 'bld-1');
    if (pvKw > 0) connect('pv-1', 'bat-1');
  }
  if (windKw > 0) {
    components.push({ id: 'wind-1', type: 'wind_turbine', name: `Wind (${windKw.toFixed(0)} kW)`, x: 150, y: 60, params: { capacity_kw: windKw } });
    connect('wind-1', 'bld-1');
  }

  components.push({ id: 'grid-1', type: 'smart_grid', name: 'Grid', x: 450, y: 260, params: { import_limit_kw: 500, export_limit_kw: 200 } });
  connect('grid-1', 'bld-1');
  components.push({ id: 'dh-1', type: 'district_heating', name: 'District Heating', x: 150, y: 260, params: { capacity_kw: 200 } });
  connect('dh-1', 'bld-1', 'heat');

  return { id, name, components, connections, created_at: createdAt };
}
