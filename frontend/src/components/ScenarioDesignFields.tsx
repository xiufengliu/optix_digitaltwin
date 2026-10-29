import { COMPONENT_DEFS, type DigitalTwinConfig, type DTComponentType } from './DigitalTwinBuilder';
import { DeviceIcon, NumberField, paramMeta } from './builder/builderUi';

type Value = number | string | boolean;
/** A scenario's own parameter values: {component id: {param: value}} */
export type ComponentChanges = Record<string, Record<string, Value>>;

// Parameters the simulation uses, per component type (informational ones such as
// PV tilt or hub height are left out; backend/components.py is the reference)
const SIMULATED: Record<DTComponentType, string[]> = {
  smart_building: ['load_kw', 'load_profile', 'flexible_load_pct', 'area_m2', 'heat_demand_kwh_m2'],
  solar_pv: ['capacity_kwp'],
  wind_turbine: ['capacity_kw'],
  battery_storage: ['capacity_kwh', 'power_kw', 'efficiency', 'initial_soc'],
  heat_pump: ['capacity_kw', 'cop', 'type'],
  chp_unit: ['electrical_kw', 'thermal_kw', 'efficiency_e', 'fuel'],
  thermal_storage: ['capacity_kwh', 'loss_pct_day'],
  district_heating: ['capacity_kw'],
  smart_grid: ['import_limit_kw', 'export_limit_kw', 'tariff_type'],
  ev_charger: ['num_ports', 'power_per_port_kw', 'kwh_per_port_day', 'usage_profile', 'smart_charging'],
  load_center: ['base_load_kw', 'peak_load_kw', 'load_profile', 'dsm_enabled', 'flexible_load_pct'],
};

// Values the simulation uses when a design lacks a parameter (backend/components.py DEFAULTS)
const SIM_DEFAULTS: Partial<Record<DTComponentType, Record<string, Value>>> = {
  smart_building: { load_profile: 'dk2', heat_demand_kwh_m2: 70, flexible_load_pct: 0, area_m2: 0 },
  load_center: { load_profile: 'dk2', flexible_load_pct: 30, dsm_enabled: false },
  ev_charger: { usage_profile: 'workplace', kwh_per_port_day: 20, smart_charging: false },
  heat_pump: { cop: 3.5, type: 'air_source' },
  chp_unit: { efficiency_e: 0.38, fuel: 'biogas' },
  thermal_storage: { loss_pct_day: 2 },
  battery_storage: { efficiency: 0.9, initial_soc: 0.5 },
  smart_grid: { tariff_type: 'dynamic', import_limit_kw: 0, export_limit_kw: 0 },
};

const twinValue = (type: DTComponentType, params: Record<string, unknown>, key: string): Value =>
  (params[key] as Value | undefined) ?? SIM_DEFAULTS[type]?.[key] ?? 0;

export function countChanges(changes: ComponentChanges | undefined): number {
  return Object.values(changes ?? {}).reduce((n, c) => n + Object.keys(c).length, 0);
}

interface Props {
  twin: Pick<DigitalTwinConfig, 'components'>;
  changes: ComponentChanges;
  readOnly: boolean;
  onChange: (next: ComponentChanges) => void;
}

/** The linked twin's components with their simulated parameters; edits become this scenario's own values. */
export function ScenarioDesignFields({ twin, changes, readOnly, onChange }: Props) {
  const set = (id: string, key: string, value: Value, base: Value) => {
    const forComp = { ...(changes[id] ?? {}) };
    if (value === base) delete forComp[key]; else forComp[key] = value;
    const next = { ...changes };
    if (Object.keys(forComp).length) next[id] = forComp; else delete next[id];
    onChange(next);
  };

  return (
    <div className="scenario-design">
      {twin.components.map((c) => {
        const keys = SIMULATED[c.type] ?? [];
        if (!keys.length) return null;
        const def = COMPONENT_DEFS[c.type];
        const params = (c.params ?? {}) as Record<string, unknown>;
        return (
          <div key={c.id} className="sd-component">
            <div className="sd-head" style={{ ['--tc' as string]: def.color }}>
              <span className="bn-icon-tile"><DeviceIcon type={c.type} size={18} /></span>
              <div>
                <strong>{c.name}</strong>
                <div className="muted small">{def.label}</div>
              </div>
            </div>
            <div className="sd-fields">
              {keys.map((key) => {
                const meta = paramMeta(key);
                const base = twinValue(c.type, params, key);
                const changed = changes[c.id]?.[key] !== undefined;
                const value = changed ? changes[c.id][key] : base;
                const show = (v: Value) => (typeof v === 'boolean' ? (v ? 'on' : 'off') : meta.options?.find((o) => o.value === v)?.label ?? `${v}${meta.unit ? ` ${meta.unit}` : ''}`);
                return (
                  <label key={key} className={`field ${typeof base === 'boolean' ? 'field-inline' : ''} ${changed ? 'is-changed' : ''}`}>
                    <span className="field-label">
                      {meta.label}
                      {changed && (
                        <span className="sd-changed">
                          changed · twin: {show(base)}
                          {!readOnly && (
                            <button type="button" className="sd-reset" title="Use the twin's value" aria-label={`Reset ${meta.label} to the twin's value`}
                              onClick={(e) => { e.preventDefault(); set(c.id, key, base, base); }}>↺</button>
                          )}
                        </span>
                      )}
                    </span>
                    {typeof base === 'boolean' ? (
                      <span className="bn-switch">
                        <input type="checkbox" checked={Boolean(value)} disabled={readOnly} onChange={(e) => set(c.id, key, e.target.checked, base)} />
                        <span>{value ? 'On' : 'Off'}</span>
                      </span>
                    ) : meta.options ? (
                      <select value={String(value)} disabled={readOnly} onChange={(e) => set(c.id, key, e.target.value, base)}>
                        {meta.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                        {!meta.options.some((o) => o.value === value) && <option value={String(value)}>{String(value)}</option>}
                      </select>
                    ) : readOnly ? (
                      <input value={show(value)} disabled />
                    ) : (
                      <NumberField value={Number(value)} step={meta.step} min={meta.min} max={meta.max} unit={meta.unit} onChange={(v) => set(c.id, key, v, base)} />
                    )}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
