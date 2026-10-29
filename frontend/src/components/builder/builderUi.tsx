import { useEffect, useState } from 'react';
import type { DTComponentType } from '../DigitalTwinBuilder';

// ---------------------------------------------------------------------------
// Line icons for each component type (24×24, stroke = currentColor)
// ---------------------------------------------------------------------------

const ICON_PATHS: Record<DTComponentType, JSX.Element> = {
  smart_building: (
    <>
      <path d="M4 21V5.5L12 3v18M12 8.5l8 2.2V21M2.5 21h19" />
      <path d="M7 8h2M7 11.5h2M7 15h2M15 13h2M15 16.5h2" />
    </>
  ),
  solar_pv: (
    <>
      <path d="M3.5 19.5 6 11h14l-2.5 8.5z" />
      <path d="M8.3 11l-1.7 8.5M13 11v8.5M17.7 11l1.7 8.5M4.8 15.2h16.4" />
      <circle cx="7" cy="5" r="1.8" />
      <path d="M7 1.5v.7M3.5 5h.7M9.8 5h.7M4.6 2.6l.5.5M9 2.6l-.5.5" />
    </>
  ),
  battery_storage: (
    <>
      <rect x="3" y="6.5" width="16" height="11" rx="2" />
      <path d="M21 10.2v3.6" />
      <path d="M11.8 8.8 9 12.4h3.4l-2.6 3.3" />
    </>
  ),
  wind_turbine: (
    <>
      <path d="M12 9.5 11 21h2l-1-11.5" />
      <circle cx="12" cy="8" r="1.3" />
      <path d="M12 6.7c-.3-2.4.3-4.3 1.2-5.2.6 1.6.2 3.6-1.2 5.2zM13.2 8.6c2.2 1 3.4 2.6 3.6 3.8-1.7.2-3.5-.8-3.6-3.8zM10.8 8.7c-2 1.4-3.9 1.7-5.1 1.3.8-1.5 2.7-2.3 5.1-1.3z" />
    </>
  ),
  district_heating: (
    <>
      <path d="M2.5 15h19M2.5 19h19" />
      <path d="M8 11.5c-1.3-1.4-1.3-3 0-4.4 1.3-1.4 1.3-3 0-4.4M12 11.5c-1.3-1.4-1.3-3 0-4.4 1.3-1.4 1.3-3 0-4.4M16 11.5c-1.3-1.4-1.3-3 0-4.4 1.3-1.4 1.3-3 0-4.4" />
    </>
  ),
  smart_grid: (
    <>
      <path d="M8.5 21 12 3l3.5 18M9.6 15.5h4.8M10.5 10h3" />
      <path d="M5 7h14M6 10.5h12" />
      <path d="M5 7v1.6M19 7v1.6M6 10.5v1.6M18 10.5v1.6" />
    </>
  ),
  ev_charger: (
    <>
      <rect x="3.5" y="3" width="9" height="18" rx="1.5" />
      <path d="M2 21h12M5.8 6.5h4.4v4H5.8z" />
      <path d="M12.5 12h2.5a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0V9l-2-2.5" />
      <path d="M8.6 13.6 7.4 15.6h1.6l-1.2 2" />
    </>
  ),
  heat_pump: (
    <>
      <rect x="2.5" y="5" width="19" height="13" rx="2" />
      <circle cx="9" cy="11.5" r="4" />
      <path d="M9 7.5v8M5 11.5h8M6.2 8.7l5.6 5.6M11.8 8.7l-5.6 5.6" />
      <path d="M16 8.5h3M16 11.5h3M16 14.5h3M5 18v2M19 18v2" />
    </>
  ),
  chp_unit: (
    <>
      <rect x="2.5" y="9" width="15" height="11" rx="1.5" />
      <path d="M19.5 20V5.5h-2.5V9" />
      <circle cx="8" cy="14.5" r="2.6" />
      <path d="M8 11.9v-1M8 18.1v-1M5.4 14.5h-1M11.6 14.5h-1M13.8 12.5h1.7M13.8 15h1.7" />
      <path d="M18.3 3.4c.6-.7.6-1.4 0-1.9" />
    </>
  ),
  thermal_storage: (
    <>
      <path d="M6 5.5C6 3.6 18 3.6 18 5.5V19c0 1.9-12 1.9-12 0z" />
      <path d="M6 5.5c0 1.9 12 1.9 12 0" />
      <path d="M12 9.5v6.2" />
      <circle cx="12" cy="16.5" r="1.4" />
    </>
  ),
  load_center: (
    <>
      <rect x="3.5" y="3" width="17" height="18" rx="1.5" />
      <path d="M12 3v18M6.5 7h3M6.5 10.5h3M6.5 14h3M14.5 7h3M14.5 10.5h3" />
      <circle cx="16" cy="16" r="1.6" />
    </>
  ),
};

export function DeviceIcon({ type, size = 22, color = 'currentColor' }: { type: DTComponentType; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICON_PATHS[type]}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Palette grouping
// ---------------------------------------------------------------------------

export const PALETTE_GROUPS: { title: string; types: DTComponentType[] }[] = [
  { title: 'Generation', types: ['solar_pv', 'wind_turbine', 'chp_unit'] },
  { title: 'Storage', types: ['battery_storage', 'thermal_storage'] },
  { title: 'Demand', types: ['smart_building', 'load_center', 'ev_charger', 'heat_pump'] },
  { title: 'Networks', types: ['smart_grid', 'district_heating'] },
];

// ---------------------------------------------------------------------------
// Parameter metadata (labels, units, input hints)
// ---------------------------------------------------------------------------

type ParamMeta = { label: string; unit?: string; step?: number; min?: number; max?: number; hint?: string; options?: { value: string; label: string }[] };

export const PARAM_META: Record<string, ParamMeta> = {
  floors: { label: 'Floors', step: 1, min: 1, max: 30, hint: 'Informational (not used in the simulation)' },
  area_m2: { label: 'Heated floor area', unit: 'm²', step: 50, min: 0, hint: 'Annual heat demand = area × specific heat demand' },
  heat_demand_kwh_m2: { label: 'Specific heat demand', unit: 'kWh/m²·yr', step: 5, min: 0, hint: 'Space heating + hot water; follows outdoor temperature (degree hours, base 17 °C)' },
  load_profile: { label: 'Demand profile', options: [{ value: 'dk2', label: 'DK2 regional shape' }, { value: 'office', label: 'Office' }, { value: 'residential', label: 'Residential' }, { value: 'commercial', label: 'Commercial / retail' }, { value: 'industrial', label: 'Industrial (two shifts)' }], hint: 'Shape of the synthetic profile when no meter data is uploaded' },
  load_kw: { label: 'Peak electric load', unit: 'kW', step: 5, min: 0, hint: 'Electricity demand excluding heating; the profile is scaled to this peak' },
  flexible_load_pct: { label: 'Flexible load', unit: '%', step: 5, min: 0, max: 100, hint: 'Share of demand that can be shifted (DSM)' },
  capacity_kwp: { label: 'Capacity', unit: 'kWp', step: 5, min: 0 },
  tilt_deg: { label: 'Tilt', unit: '°', step: 1, min: 0, max: 90, hint: 'Informational: synthetic output follows the measured DK2 PV fleet; upload inverter data for this exact array' },
  azimuth_deg: { label: 'Azimuth', unit: '°', step: 5, min: 0, max: 360, hint: '180° = facing south (informational, like tilt)' },
  efficiency: { label: 'Efficiency', unit: '0–1', step: 0.01, min: 0, max: 1, hint: 'Battery: round trip. PV: module efficiency (informational; output is set by kWp)' },
  capacity_kwh: { label: 'Energy capacity', unit: 'kWh', step: 10, min: 0 },
  power_kw: { label: 'Power rating', unit: 'kW', step: 5, min: 0 },
  initial_soc: { label: 'Initial state of charge', unit: '0–1', step: 0.05, min: 0, max: 1 },
  capacity_kw: { label: 'Capacity', unit: 'kW', step: 5, min: 0, hint: 'Heat pump / district heating: heat output. Wind: rated power' },
  hub_height_m: { label: 'Hub height', unit: 'm', step: 1, min: 0, hint: 'Informational: synthetic output follows the measured DK2 onshore wind fleet' },
  rotor_diameter_m: { label: 'Rotor diameter', unit: 'm', step: 1, min: 0, hint: 'Informational (like hub height)' },
  cut_in_speed: { label: 'Cut-in speed', unit: 'm/s', step: 0.5, min: 0, hint: 'Informational (like hub height)' },
  supply_temp_c: { label: 'Supply temperature', unit: '°C', step: 1, hint: 'Informational (not used in the simulation)' },
  return_temp_c: { label: 'Return temperature', unit: '°C', step: 1, hint: 'Informational (not used in the simulation)' },
  import_limit_kw: { label: 'Import limit', unit: 'kW', step: 10, min: 0, hint: '0 = no limit. Hours above the limit are reported' },
  export_limit_kw: { label: 'Export limit', unit: 'kW', step: 10, min: 0, hint: '0 = no limit. Surplus above the limit is curtailed' },
  tariff_type: { label: 'Tariff', options: [{ value: 'dynamic', label: 'Dynamic (spot)' }, { value: 'time_of_use', label: 'Time of use' }, { value: 'tou', label: 'Time of use' }, { value: 'fixed', label: 'Fixed' }], hint: 'Price of the synthetic profile: DK2 spot, yearly average, or average with a 17–21 h peak' },
  num_ports: { label: 'Charging ports', step: 1, min: 1 },
  power_per_port_kw: { label: 'Power per port', unit: 'kW', step: 1, min: 0 },
  kwh_per_port_day: { label: 'Energy per port', unit: 'kWh/day', step: 1, min: 0, hint: 'Average energy charged per port on a weekday' },
  usage_profile: { label: 'Usage', options: [{ value: 'workplace', label: 'Workplace (morning arrivals)' }, { value: 'residential', label: 'Residential (evening arrivals)' }, { value: 'public', label: 'Public (all day)' }] },
  smart_charging: { label: 'Smart charging', hint: 'Charging may move up to the DSM window to use on-site surplus' },
  v2g_enabled: { label: 'Vehicle-to-grid', hint: 'Not simulated yet (cars do not discharge)' },
  cop: { label: 'COP (rated)', step: 0.1, min: 1, hint: 'At A7/W35 (air), B0/W35 (ground), W10/W35 (water); air-source COP varies with outdoor temperature' },
  type: { label: 'Source', options: [{ value: 'air_source', label: 'Air source' }, { value: 'ground_source', label: 'Ground source' }, { value: 'water_source', label: 'Water source' }] },
  electrical_kw: { label: 'Electrical output', unit: 'kWe', step: 5, min: 0 },
  thermal_kw: { label: 'Thermal output', unit: 'kWth', step: 5, min: 0, hint: 'Heat-led: runs to cover heat demand; electricity follows the kWe/kWth ratio' },
  efficiency_e: { label: 'Electrical efficiency', unit: '0–1', step: 0.01, min: 0.05, max: 1, hint: 'Sets the fuel use (fuel = electricity ÷ efficiency)' },
  efficiency_th: { label: 'Thermal efficiency', unit: '0–1', step: 0.01, min: 0, max: 1, hint: 'Informational; the heat/power ratio comes from the outputs' },
  fuel: { label: 'Fuel', options: [{ value: 'biogas', label: 'Biogas' }, { value: 'natural_gas', label: 'Natural gas' }, { value: 'biomass', label: 'Biomass' }, { value: 'hydrogen', label: 'Hydrogen' }], hint: 'Fuel is counted as imported energy' },
  max_temp_c: { label: 'Max temperature', unit: '°C', step: 1, hint: 'Informational; capacity is given in kWh' },
  loss_pct_day: { label: 'Standing loss', unit: '%/day', step: 0.1, min: 0 },
  base_load_kw: { label: 'Base load', unit: 'kW', step: 5, min: 0, hint: 'Lowest demand; the profile runs between base and peak' },
  peak_load_kw: { label: 'Peak load', unit: 'kW', step: 5, min: 0 },
  dsm_enabled: { label: 'Demand-side management', hint: 'Makes the flexible share shiftable' },
};

export function paramMeta(key: string): ParamMeta {
  return PARAM_META[key] ?? { label: key.replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase()) };
}

const n = (v: unknown) => {
  const x = Number(v);
  return Number.isFinite(x) ? x.toLocaleString(undefined, { maximumFractionDigits: 1 }) : '–';
};

/** One-line key specification shown on a canvas card. */
export function specLine(type: DTComponentType, p: Record<string, unknown>): string {
  switch (type) {
    case 'smart_building': return `${n(p.load_kw)} kW · ${n(p.floors)} floors`;
    case 'solar_pv': return `${n(p.capacity_kwp)} kWp · ${n(p.tilt_deg)}° tilt`;
    case 'battery_storage': return `${n(p.capacity_kwh)} kWh · ${n(p.power_kw)} kW`;
    case 'wind_turbine': return `${n(p.capacity_kw)} kW · ${n(p.hub_height_m)} m hub`;
    case 'district_heating': return `${n(p.capacity_kw)} kW · ${n(p.supply_temp_c)}/${n(p.return_temp_c)} °C`;
    case 'smart_grid': {
      const lim = (v: unknown) => (Number(v) > 0 ? `${n(v)} kW` : 'no limit');
      return `↓ ${lim(p.import_limit_kw)} · ↑ ${lim(p.export_limit_kw)}`;
    }
    case 'ev_charger': return `${n(p.num_ports)} × ${n(p.power_per_port_kw)} kW${p.v2g_enabled ? ' · V2G' : ''}`;
    case 'heat_pump': return `${n(p.capacity_kw)} kW · COP ${n(p.cop)}`;
    case 'chp_unit': return `${n(p.electrical_kw)} kWe · ${n(p.thermal_kw)} kWth`;
    case 'thermal_storage': return `${n(p.capacity_kwh)} kWh · ${n(p.max_temp_c)} °C`;
    case 'load_center': return `${n(p.base_load_kw)}–${n(p.peak_load_kw)} kW`;
    default: return '';
  }
}

/** Number input that lets people type freely (empty, "-", "0.") and commits valid numbers. */
export function NumberField({ value, onChange, step, min, max, unit, id }: { value: number; onChange: (v: number) => void; step?: number; min?: number; max?: number; unit?: string; id?: string }) {
  const [text, setText] = useState(String(value));
  useEffect(() => {
    if (Number(text) !== value) setText(String(value));
    // only resync when the committed value changes from outside
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const input = (
    <input
      id={id}
      type="number"
      inputMode="decimal"
      value={text}
      step={step}
      min={min}
      max={max}
      onChange={(e) => {
        setText(e.target.value);
        const v = parseFloat(e.target.value);
        if (Number.isFinite(v)) onChange(v);
      }}
      onBlur={() => { if (!Number.isFinite(parseFloat(text))) setText(String(value)); }}
    />
  );
  return unit ? <span className="input-unit">{input}<span className="unit">{unit}</span></span> : input;
}
