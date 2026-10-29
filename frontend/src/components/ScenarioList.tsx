import { useCallback, useEffect, useMemo, useState } from 'react';
import { apiFetch } from '../lib/api';
import { formatDuration, formatEnergy, formatPercent } from '../lib/format';
import { PedGauge } from './AnalyticsPanels';
import { RunStatusBadge, runDesign } from './RunList';
import type { CompareRunsResponse, Scenario, ScenarioCreate, SimulationRun } from '../types';
import type { DigitalTwinConfig } from './DigitalTwinBuilder';
import { formatTwinSummary, twinSummary } from '../lib/twin';
import type { ScenarioInfo } from './Copilot';
import { ScenarioDesignFields, countChanges, type ComponentChanges } from './ScenarioDesignFields';

interface ScenarioListProps {
  apiBase: string;
  onRun: (runId: string) => void;
  /** Open a saved digital twin in the Twin Builder */
  onOpenTwin?: (twinId: string) => void;
  /** Changes when scenarios or runs were changed elsewhere (e.g. by the copilot) */
  refreshKey?: number;
  /** Reports the selected scenario (copilot context and suggestions) */
  onSelectScenario?: (s: { selected: ScenarioInfo | null; customCount: number }) => void;
}

type SavedTwin = DigitalTwinConfig & { updated_at?: string };

const PAPER_SCENARIO_NAMES = [
  'Scenario 1: Baseline',
  'Scenario 2: High PV Deployment',
  'Scenario 3: High PV + Battery (4h)',
  'Scenario 4: High PV + Large Battery',
  'Scenario 5: DSM (Flexible Demand)',
];

/** Editable fields, shown in building-friendly units and stored in backend units. */
// Settings a linked digital twin owns (mirrors TWIN_ASSET_KEYS in backend/routes.py)
const TWIN_KEYS = new Set(['owned_solar_capacity_mw', 'owned_wind_capacity_mw', 'owned_hydro_capacity_mw', 'owned_load_peak_mw', 'owned_battery_capacity_mwh', 'batt_power_c_rate', 'batt_eta_charge', 'batt_eta_discharge', 'flexible_load_share', 'max_shift_hours', 'twin_id', 'twin_components']);
// The linked design itself (simulated component by component); not shown as an override
const DESIGN_KEYS = new Set(['twin_id', 'twin_components', 'component_overrides']);

type Field = { key: string; label: string; unit: string; scale: number; step: number; min?: number; max?: number; hint: string };
const ASSET_FIELDS: Field[] = [
  { key: 'owned_solar_capacity_mw', label: 'Solar PV', unit: 'kWp', scale: 1000, step: 1, min: 0, hint: 'Rooftop PV nameplate. ~171 kWp fits the reference roof.' },
  { key: 'owned_wind_capacity_mw', label: 'Wind', unit: 'kW', scale: 1000, step: 1, min: 0, hint: 'On-site wind; uses the DK2 onshore wind profile (≈ 2,200 kWh per kW per year).' },
  { key: 'owned_hydro_capacity_mw', label: 'Hydro', unit: 'kW', scale: 1000, step: 1, min: 0, hint: 'DK2 has no hydro production data, so this adds no energy.' },
  { key: 'owned_load_peak_mw', label: 'Peak electric load', unit: 'kW', scale: 1000, step: 1, min: 0, hint: 'The DK2 demand profile is scaled to this peak.' },
];
const STORAGE_FIELDS: Field[] = [
  { key: 'owned_battery_capacity_mwh', label: 'Battery energy', unit: 'kWh', scale: 1000, step: 1, min: 0, hint: 'Nominal capacity; 15–85 % is usable, 90 % round trip (as in the paper).' },
  { key: 'batt_power_c_rate', label: 'Battery C-rate', unit: '1/h', scale: 1, step: 0.05, min: 0.05, max: 4, hint: '0.25 = 4-hour battery (power = energy × C-rate).' },
  { key: 'flexible_load_share', label: 'Flexible load share', unit: '%', scale: 100, step: 1, min: 0, max: 100, hint: 'Share of demand that DSM may shift.' },
  { key: 'max_shift_hours', label: 'Max shift window', unit: 'h', scale: 1, step: 0.5, min: 0, hint: 'How far DSM may move demand in time.' },
];
const KNOWN_KEYS = new Set([...ASSET_FIELDS, ...STORAGE_FIELDS].map((f) => f.key));

const NEW_SCENARIO_OVERRIDES: Record<string, number> = {
  owned_solar_capacity_mw: 0.171,
  owned_wind_capacity_mw: 0,
  owned_hydro_capacity_mw: 0,
  owned_load_peak_mw: 0.15,
  owned_battery_capacity_mwh: 0.32,
  batt_power_c_rate: 0.25,
};

// Components beyond PV/wind/battery that a linked design adds to the simulation
const EXTRA_TYPES: [string, string][] = [['heat_pump', 'Heat pump'], ['chp_unit', 'CHP'], ['thermal_storage', 'Heat storage'], ['ev_charger', 'EV charging'], ['district_heating', 'District heating']];
function extraChips(twin: SavedTwin | undefined): string[] {
  if (!twin) return [];
  return EXTRA_TYPES.filter(([type]) => twin.components.some((c) => c.type === type)).map(([, label]) => label);
}

type Draft = { name: string; description: string; details: string; overrides: Record<string, unknown>; twinId: string | null };
const newDraft = (): Draft => ({ name: 'My scenario', description: '', details: '', overrides: { ...NEW_SCENARIO_OVERRIDES }, twinId: null });
const draftFrom = (s: Scenario): Draft => ({ name: s.name, description: s.description ?? '', details: s.details ?? '', overrides: { ...(s.config_overrides || {}) }, twinId: s.digital_twin_id ?? null });

const savedDate = (t: SavedTwin) => new Date(t.updated_at || t.created_at).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });

type Notice = { tone: 'ok' | 'error'; text: string } | null;

export function ScenarioList({ apiBase, onRun, onOpenTwin, refreshKey = 0, onSelectScenario }: ScenarioListProps) {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [twins, setTwins] = useState<SavedTwin[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft>(newDraft);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [notice, setNotice] = useState<Notice>(null);
  const [mobilePane, setMobilePane] = useState<'list' | 'edit' | 'compare'>('list');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [sc, tw] = await Promise.all([
        apiFetch<Scenario[]>(apiBase, '/scenarios'),
        apiFetch<SavedTwin[]>(apiBase, '/digital-twins').catch(() => [] as SavedTwin[]),
      ]);
      setScenarios(sc);
      setTwins([...tw].sort((a, b) => (b.updated_at || b.created_at).localeCompare(a.updated_at || a.created_at)));
    } catch (e) {
      setNotice({ tone: 'error', text: `Could not load scenarios: ${(e as Error).message}` });
    } finally {
      setLoading(false);
    }
  }, [apiBase]);

  useEffect(() => { load(); }, [load, refreshKey]);

  useEffect(() => {
    if (!notice || notice.tone === 'error') return;
    const t = window.setTimeout(() => setNotice(null), 3500);
    return () => window.clearTimeout(t);
  }, [notice]);

  // Only the oldest row with a paper name is the canonical, read-only preset;
  // later copies with the same name are ordinary (deletable) user scenarios.
  const paperIds = useMemo(() => {
    const ids = new Set<string>();
    const byAge = [...scenarios].sort((a, b) => a.created_at.localeCompare(b.created_at));
    for (const name of PAPER_SCENARIO_NAMES) {
      const first = byAge.find((s) => s.name === name);
      if (first) ids.add(first.id);
    }
    return ids;
  }, [scenarios]);

  const paper = PAPER_SCENARIO_NAMES.map((n) => scenarios.find((s) => s.name === n && paperIds.has(s.id))).filter(Boolean) as Scenario[];
  const custom = scenarios.filter((s) => !paperIds.has(s.id));
  const selected = scenarios.find((s) => s.id === selectedId) ?? null;

  const readOnly = Boolean(selected && paperIds.has(selected.id));
  // Asset sizes of a scenario linked to a twin come from the design (kept in sync by the backend)
  const linked = Boolean(draft.twinId);
  const twinById = useMemo(() => new Map(twins.map((t) => [t.id, t])), [twins]);
  const draftTwin = draft.twinId ? twinById.get(draft.twinId) ?? null : null;
  const designChanges = (draft.overrides.component_overrides ?? {}) as ComponentChanges;

  // The selected scenario as the editor shows it (incl. unsaved edits)
  const selectedInfo = useMemo<ScenarioInfo | null>(() => {
    if (!selected) return null;
    const o = draft.overrides;
    const n = (k: string) => (Number.isFinite(Number(o[k])) ? Number(o[k]) : 0);
    return {
      id: selected.id,
      name: selected.name,
      isPaper: readOnly,
      twinName: draftTwin?.name ?? null,
      summary: draftTwin
        ? twinSummary(draftTwin)
        : { ...twinSummary(null), pvKwp: n('owned_solar_capacity_mw') * 1000, windKw: n('owned_wind_capacity_mw') * 1000, batteryKwh: n('owned_battery_capacity_mwh') * 1000, loadKw: n('owned_load_peak_mw') * 1000 },
      flexiblePct: Math.round(n('flexible_load_share') * 100),
      dirty,
    };
  }, [selected, readOnly, draftTwin, draft.overrides, dirty]);
  useEffect(() => {
    onSelectScenario?.({ selected: selectedInfo, customCount: custom.length });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedInfo, custom.length]);

  // Picking a twin shows its sizes right away; the backend derives the exact
  // settings (battery power, efficiency, flexibility) when the scenario is saved
  const chooseTwin = (id: string) => {
    if (!id) { update({ twinId: null }); return; }
    const t = twinById.get(id);
    const sum = twinSummary(t);
    // Parameter changes belong to the previous twin's components
    const next: Record<string, unknown> = Object.fromEntries(Object.entries(draft.overrides).filter(([k]) => !TWIN_KEYS.has(k) && k !== 'component_overrides'));
    Object.assign(next, {
      owned_solar_capacity_mw: sum.pvKwp / 1000,
      owned_wind_capacity_mw: sum.windKw / 1000,
      owned_hydro_capacity_mw: 0,
      owned_load_peak_mw: sum.loadKw / 1000,
      ...(sum.batteryKwh > 0 ? { owned_battery_capacity_mwh: sum.batteryKwh / 1000 } : {}),
    });
    update({ twinId: id, overrides: next });
  };

  const select = (s: Scenario | null) => {
    if (dirty && !confirm('Discard unsaved changes?')) return;
    setSelectedId(s?.id ?? null);
    setDraft(s ? draftFrom(s) : newDraft());
    setDirty(false);
    setMobilePane('edit');
  };

  const update = (patch: Partial<Draft>) => { setDraft((d) => ({ ...d, ...patch })); setDirty(true); };
  const setOverride = (key: string, value: number | null) => {
    const next = { ...draft.overrides };
    if (value === null) delete next[key]; else next[key] = value;
    update({ overrides: next });
  };

  const payload = (name = draft.name): ScenarioCreate => ({
    name: name.trim() || 'Untitled scenario',
    description: draft.description,
    details: draft.details,
    config_overrides: draft.overrides,
    // "" unlinks on update; on create it means no twin
    digital_twin_id: draft.twinId ?? '',
  });

  const saveNew = async () => {
    setBusy('save');
    try {
      const name = readOnly ? `My ${draft.name.replace(/^Scenario \d+:\s*/, '')}` : draft.name;
      const created = await apiFetch<Scenario>(apiBase, '/scenarios', { method: 'POST', body: payload(name) });
      await load();
      setSelectedId(created.id);
      setDraft(draftFrom(created));
      setDirty(false);
      setNotice({ tone: 'ok', text: `Saved “${created.name}”.` });
      return created;
    } catch (e) {
      setNotice({ tone: 'error', text: `Save failed: ${(e as Error).message}` });
      return null;
    } finally { setBusy(null); }
  };

  const saveChanges = async (): Promise<boolean> => {
    if (!selected) return false;
    setBusy('save');
    try {
      await apiFetch<Scenario>(apiBase, `/scenarios/${selected.id}`, { method: 'PATCH', body: payload() });
      await load();
      setDirty(false);
      setNotice({ tone: 'ok', text: 'Changes saved.' });
      return true;
    } catch (e) {
      setNotice({ tone: 'error', text: `Save failed: ${(e as Error).message}` });
      return false;
    } finally { setBusy(null); }
  };

  // Run a scenario that was just saved (bypasses the unsaved-changes check)
  const startRun = async (scenarioId: string) => {
    setBusy(`run:${scenarioId}`);
    try {
      const created = await apiFetch<SimulationRun>(apiBase, `/scenarios/${scenarioId}/run`, { method: 'POST' });
      onRun(created.id);
    } catch (e) {
      setNotice({ tone: 'error', text: `Run failed: ${(e as Error).message}` });
    } finally { setBusy(null); }
  };

  const remove = async (s: Scenario) => {
    if (!confirm(`Delete “${s.name}”? This cannot be undone.`)) return;
    try {
      await apiFetch(apiBase, `/scenarios/${s.id}`, { method: 'DELETE' });
      if (selectedId === s.id) { setSelectedId(null); setDraft(newDraft()); setDirty(false); }
      await load();
    } catch (e) {
      setNotice({ tone: 'error', text: `Delete failed: ${(e as Error).message}` });
    }
  };

  const run = async (s: Scenario) => {
    if (s.id === selectedId && dirty) {
      setNotice({ tone: 'error', text: 'Save your changes first — runs use the saved scenario.' });
      return;
    }
    setBusy(`run:${s.id}`);
    try {
      const created = await apiFetch<SimulationRun>(apiBase, `/scenarios/${s.id}/run`, { method: 'POST' });
      onRun(created.id);
    } catch (e) {
      setNotice({ tone: 'error', text: `Run failed: ${(e as Error).message}` });
    } finally { setBusy(null); }
  };

  const unknownKeys = Object.keys(draft.overrides).filter((k) => !KNOWN_KEYS.has(k) && !DESIGN_KEYS.has(k));

  const renderCard = (s: Scenario) => {
    const isPaper = paperIds.has(s.id);
    const o = s.config_overrides || {};
    const kw = (k: string) => Math.round(Number(o[k] ?? 0) * 1000);
    return (
      <div
        key={s.id}
        className={`scenario-card ${selectedId === s.id ? 'is-active' : ''}`}
        role="button"
        tabIndex={0}
        onClick={() => select(s)}
        onKeyDown={(e) => { if (e.key === 'Enter') select(s); }}
      >
        <div className="scenario-card-top">
          <strong>{s.name}</strong>
          {isPaper && <span className="badge badge-accent">Paper</span>}
          {s.digital_twin_id
            ? <span className="badge badge-good" title={`Every component of “${twinById.get(s.digital_twin_id)?.name ?? 'the linked twin'}” is simulated, incl. heat and uploaded data`}>Full design</span>
            : <span className="badge" title="Hand-entered sizes: electricity only (PV, wind, battery, building load, DSM). Link a twin for heat, EV, CHP, grid limits and measured data.">Electricity only</span>}
        </div>
        {s.digital_twin_id && <p className="muted small">Design: {twinById.get(s.digital_twin_id)?.name ?? 'missing twin'}</p>}
        {s.description && <p className="muted small clamp-2">{s.description}</p>}
        <div className="spec-chips">
          <span className="spec-chip" style={{ ['--chip' as string]: 'var(--c-solar)' }}>PV {kw('owned_solar_capacity_mw')} kWp</span>
          {kw('owned_wind_capacity_mw') > 0 && <span className="spec-chip" style={{ ['--chip' as string]: 'var(--c-wind)' }}>Wind {kw('owned_wind_capacity_mw')} kW</span>}
          {kw('owned_battery_capacity_mwh') > 0 && <span className="spec-chip" style={{ ['--chip' as string]: 'var(--c-battery)' }}>Battery {kw('owned_battery_capacity_mwh')} kWh</span>}
          {Number(o.flexible_load_share ?? 0) > 0 && <span className="spec-chip" style={{ ['--chip' as string]: 'var(--c-dsm)' }}>DSM {Math.round(Number(o.flexible_load_share) * 100)}%</span>}
          {extraChips(s.digital_twin_id ? twinById.get(s.digital_twin_id) : undefined).map((label) => <span key={label} className="spec-chip">{label}</span>)}
          {countChanges(o.component_overrides as ComponentChanges | undefined) > 0 && (
            <span className="spec-chip" title="Parameters this scenario changes compared with its twin">{countChanges(o.component_overrides as ComponentChanges | undefined)} changed vs twin</span>
          )}
        </div>
        <div className="scenario-card-actions">
          <button className="btn btn-primary btn-sm" disabled={busy === `run:${s.id}`} onClick={(e) => { e.stopPropagation(); run(s); }}>
            {busy === `run:${s.id}` ? 'Starting…' : '▶ Run'}
          </button>
          {!isPaper && (
            <button className="btn btn-ghost btn-sm btn-danger" onClick={(e) => { e.stopPropagation(); remove(s); }} aria-label={`Delete ${s.name}`}>
              Delete
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderField = (f: Field) => {
    const raw = draft.overrides[f.key];
    const value = raw === undefined || raw === null || raw === '' ? '' : Number((Number(raw) * f.scale).toFixed(4));
    return (
      <label key={f.key} className="field">
        <span className="field-label">{f.label}</span>
        <span className="input-unit">
          <input
            type="number"
            inputMode="decimal"
            step={f.step}
            min={f.min}
            max={f.max}
            value={value}
            disabled={readOnly || (linked && TWIN_KEYS.has(f.key))}
            title={linked && TWIN_KEYS.has(f.key) ? 'Set by the linked twin — change it in Twin Builder' : undefined}
            placeholder="not set"
            onChange={(e) => {
              const v = e.target.value;
              setOverride(f.key, v === '' ? null : Number(v) / f.scale);
            }}
          />
          <span className="unit">{f.unit}</span>
        </span>
        <span className="field-hint">{f.hint}</span>
      </label>
    );
  };

  return (
    <div className="scenarios">
      <div className="segmented mobile-only" role="tablist">
        {(['list', 'edit', 'compare'] as const).map((p) => (
          <button key={p} role="tab" aria-selected={mobilePane === p} className={mobilePane === p ? 'is-active' : ''} onClick={() => setMobilePane(p)}>
            {p === 'list' ? 'Scenarios' : p === 'edit' ? 'Editor' : 'Compare'}
          </button>
        ))}
      </div>

      {notice && (
        <div className={`notice notice-${notice.tone}`} role={notice.tone === 'error' ? 'alert' : 'status'}>
          <span>{notice.text}</span>
          <button className="btn btn-ghost btn-sm" onClick={() => setNotice(null)} aria-label="Dismiss">✕</button>
        </div>
      )}

      <div className="scenarios-grid">
        <section className={`card scenarios-list ${mobilePane === 'list' ? 'is-mobile-visible' : ''}`}>
          <div className="panel-header">
            <h2>Scenarios</h2>
            <div className="row gap-xs">
              <button className="btn btn-ghost btn-icon" onClick={load} disabled={loading} aria-label="Refresh scenarios" title="Refresh"><span className={loading ? 'spin' : ''}>↻</span></button>
              <button className="btn btn-primary btn-sm" onClick={() => select(null)}>+ New</button>
            </div>
          </div>
          <h3 className="section-title">Reference scenarios (paper)</h3>
          <div className="scenario-cards">{paper.map(renderCard)}</div>
          <h3 className="section-title">Your scenarios</h3>
          <div className="scenario-cards">
            {custom.length === 0 ? <p className="muted small">None yet. Open a reference scenario and “Duplicate”, or create a new one.</p> : custom.map(renderCard)}
          </div>
        </section>

        <section className={`card scenario-editor ${mobilePane === 'edit' ? 'is-mobile-visible' : ''}`}>
          <div className="panel-header">
            <div>
              <h2>{selected ? (readOnly ? 'Reference scenario' : 'Edit scenario') : 'New scenario'}</h2>
              {readOnly && <p className="muted small">Read-only. Duplicate it to experiment with your own values.</p>}

            </div>
          </div>

          <div className="twin-link">
            <label className="field">
              <span className="field-label">Digital twin</span>
              <select value={draft.twinId ?? ''} disabled={readOnly} onChange={(e) => chooseTwin(e.target.value)}>
                <option value="">None — enter sizes below</option>
                {draft.twinId && !draftTwin && <option value={draft.twinId}>Missing twin ({draft.twinId.slice(0, 8)})</option>}
                {twins.map((t) => (
                  <option key={t.id} value={t.id}>{t.name} — {formatTwinSummary(twinSummary(t))} · saved {savedDate(t)}</option>
                ))}
              </select>
            </label>
            {linked ? (
              <div className="twin-link-info">
                <p className="muted small">
                  Every component of {draftTwin ? <b>{draftTwin.name}</b> : 'the linked twin'} is simulated — with the measured data uploaded in Twin Builder where available, synthetic profiles otherwise.
                  The values below follow the twin whenever it is saved, except those you change for this scenario.
                  {dirty && ' Save the scenario to apply the link.'}
                </p>
                {draftTwin && onOpenTwin && (
                  <button className="btn btn-secondary btn-sm" onClick={() => {
                    if (dirty && !confirm('Leave without saving this scenario?')) return;
                    onOpenTwin(draftTwin.id);
                  }}>Open in Twin Builder</button>
                )}
              </div>
            ) : (
              <div className="twin-link-info">
                <p className="muted small">
                  Electricity only: hand-entered sizes simulate PV, wind, battery, the building's electricity and DSM — no heat, EV charging, CHP, grid limits or uploaded data.
                  Link a design from Twin Builder to simulate every component.
                </p>
              </div>
            )}
          </div>

          <div className="form-grid">
            <label className="field span-2">
              <span className="field-label">Name</span>
              <input value={draft.name} disabled={readOnly} onChange={(e) => update({ name: e.target.value })} />
            </label>
            <label className="field span-2">
              <span className="field-label">Summary</span>
              <input value={draft.description} disabled={readOnly} placeholder="One line shown in lists" onChange={(e) => update({ description: e.target.value })} />
            </label>
            <label className="field span-2">
              <span className="field-label">Details</span>
              <textarea rows={3} value={draft.details} disabled={readOnly} placeholder="Assumptions, purpose, expected effects…" onChange={(e) => update({ details: e.target.value })} />
            </label>
          </div>

          {linked && draftTwin ? (
            <>
              <h3 className="section-title">
                Design · {draftTwin.components.length} components
                {countChanges(designChanges) > 0 && <span className="badge badge-accent">{countChanges(designChanges)} changed for this scenario</span>}
              </h3>
              <p className="muted small">
                {readOnly
                  ? 'The paper design. Duplicate this scenario to try other values.'
                  : 'Values you change here apply only to this scenario — the twin stays as it is. Unchanged values keep following the twin.'}
              </p>
              <ScenarioDesignFields
                twin={draftTwin}
                changes={designChanges}
                readOnly={readOnly}
                onChange={(next) => {
                  const overrides = { ...draft.overrides };
                  if (Object.keys(next).length) overrides.component_overrides = next; else delete overrides.component_overrides;
                  update({ overrides });
                }}
              />
            </>
          ) : linked ? (
            <p className="notice notice-error">The linked twin no longer exists. Choose another twin or “None”.</p>
          ) : (
            <>
              <h3 className="section-title">Generation & demand</h3>
              <div className="form-grid">{ASSET_FIELDS.map(renderField)}</div>
              <h3 className="section-title">Storage & flexibility</h3>
              <div className="form-grid">{STORAGE_FIELDS.map(renderField)}</div>
            </>
          )}

          {unknownKeys.length > 0 && (
            <>
              <h3 className="section-title">Other overrides</h3>
              <div className="spec-chips">
                {unknownKeys.map((k) => (
                  <span key={k} className="spec-chip">
                    <code>{k}</code> = {String(draft.overrides[k])}
                    {!readOnly && !(linked && TWIN_KEYS.has(k)) && <button className="chip-remove" onClick={() => setOverride(k, null)} aria-label={`Remove ${k}`}>✕</button>}
                  </span>
                ))}
              </div>
            </>
          )}

          <details className="guide">
            <summary>How to design a Positive Energy District scenario</summary>
            <p>A PED generates at least as much renewable energy on site as it consumes over a year (PED ratio ≥ 1.0).</p>
            <ul>
              <li><b>Solar PV</b> raises mid-day generation; surplus is exported.</li>
              <li><b>Battery</b> shifts surplus PV into the evening: more self-consumption, less import and export.</li>
              <li><b>Flexible load</b> (DSM) moves demand towards PV hours without changing annual energy.</li>
            </ul>
            <p>Iterate: run → step through a year → compare PED ratio and self-sufficiency below.</p>
          </details>

          {/* Pinned to the bottom of the editor so saving is always in reach */}
          <div className="editor-actions">
            <span className="muted small">
              {readOnly ? 'Read-only reference — duplicate it to change values.'
                : !selected ? 'New scenario — not saved yet.'
                : dirty ? 'Unsaved changes.' : 'All changes saved.'}
            </span>
            <div className="row gap-xs wrap">
              {selected && !readOnly && (
                <button className="btn btn-secondary btn-sm" disabled={busy === 'save'} onClick={() => saveNew()}>Save as new</button>
              )}
              {selected && (
                <button className="btn btn-secondary btn-sm" disabled={busy !== null} onClick={async () => {
                  if (dirty && !readOnly) { if (await saveChanges()) startRun(selected.id); } else run(selected);
                }}>{dirty && !readOnly ? 'Save & run' : '▶ Run'}</button>
              )}
              {!selected && (
                <button className="btn btn-secondary btn-sm" disabled={busy !== null} onClick={async () => { const c = await saveNew(); if (c) startRun(c.id); }}>Create & run</button>
              )}
              {selected && !readOnly ? (
                <button className="btn btn-primary btn-sm" disabled={!dirty || busy === 'save'} onClick={() => saveChanges()}>{busy === 'save' ? 'Saving…' : 'Save changes'}</button>
              ) : (
                <button className="btn btn-primary btn-sm" disabled={busy === 'save'} onClick={() => saveNew()}>
                  {busy === 'save' ? 'Saving…' : readOnly ? 'Duplicate' : 'Create scenario'}
                </button>
              )}
            </div>
          </div>
        </section>

        <section className={`card scenario-compare ${mobilePane === 'compare' ? 'is-mobile-visible' : ''}`}>
          <CompareRuns apiBase={apiBase} refreshKey={refreshKey} />
        </section>
      </div>
    </div>
  );
}

function CompareRuns({ apiBase, refreshKey }: { apiBase: string; refreshKey: number }) {
  const [runs, setRuns] = useState<SimulationRun[]>([]);
  const [chosen, setChosen] = useState<Set<string>>(new Set());
  // Whole period: every run's design over 2015-2024 (no live session needed).
  // So far: only the steps each live run has simulated.
  const [mode, setMode] = useState<'full' | 'so_far'>('full');
  const [result, setResult] = useState<CompareRunsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadRuns = useCallback(async () => {
    try {
      setRuns(await apiFetch<SimulationRun[]>(apiBase, '/runs'));
    } catch (e) {
      setError((e as Error).message);
    }
  }, [apiBase]);

  useEffect(() => { loadRuns(); }, [loadRuns, refreshKey]);

  const candidates = useMemo(() => (mode === 'full' ? runs : runs.filter((r) => r.session_id)), [runs, mode]);

  // Default selection: the most recent run of each name (up to 6); drop runs that left the list
  useEffect(() => {
    setChosen((prev) => {
      const ids = new Set(candidates.map((r) => r.id));
      const kept = [...prev].filter((id) => ids.has(id));
      if (kept.length) return new Set(kept);
      const seen = new Set<string>();
      const pick = new Set<string>();
      for (const r of candidates) {
        if (seen.has(r.name ?? r.id)) continue;
        seen.add(r.name ?? r.id);
        pick.add(r.id);
        if (pick.size >= 6) break;
      }
      return pick;
    });
  }, [candidates]);

  const compare = useCallback(async () => {
    if (chosen.size === 0) { setResult(null); return; }
    setLoading(true);
    try {
      setResult(await apiFetch<CompareRunsResponse>(apiBase, '/runs/compare', {
        method: 'POST',
        body: { run_ids: [...chosen], use_common_horizon: true, full_period: mode === 'full' },
      }));
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    } finally { setLoading(false); }
  }, [apiBase, chosen, mode]);

  useEffect(() => { compare(); }, [compare]);

  const rows = (result?.rows ?? []).filter((r) => r.comparable);
  const maxEnergy = Math.max(1e-9, ...rows.flatMap((r) => [r.total_gen_mwh ?? 0, r.total_demand_mwh ?? 0]));
  const years = mode === 'full' && result?.common_period_hours ? result.common_period_hours / 8760 : null;
  const perYear = (v?: number | null) => (v == null ? undefined : years ? v / years : v);

  const toggle = (id: string) => setChosen((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  return (
    <>
      <div className="panel-header">
        <h2>Compare runs</h2>
        <button className="btn btn-ghost btn-icon" onClick={() => { loadRuns(); compare(); }} aria-label="Refresh comparison" title="Refresh"><span className={loading ? 'spin' : ''}>↻</span></button>
      </div>
      <div className="segmented" role="tablist" aria-label="Comparison period">
        <button role="tab" aria-selected={mode === 'full'} className={mode === 'full' ? 'is-active' : ''} onClick={() => setMode('full')}>Whole period 2015–2024</button>
        <button role="tab" aria-selected={mode === 'so_far'} className={mode === 'so_far' ? 'is-active' : ''} onClick={() => setMode('so_far')}>Simulated so far</button>
      </div>
      <p className="muted small">
        {mode === 'full'
          ? 'Each run’s design over the full dataset, as yearly averages. Works for every run, live or not.'
          : 'Live runs only, cut to the shortest simulated period so totals are fair.'}
      </p>
      {candidates.length === 0 ? (
        <p className="muted small">{mode === 'full' ? 'No runs yet. Run a scenario first.' : 'No live runs. Run a scenario or restart one and step it forward.'}</p>
      ) : (
        <>
          <div className="compare-picker">
            {candidates.map((r) => (
              <label key={r.id} className="check">
                <input type="checkbox" checked={chosen.has(r.id)} onChange={() => toggle(r.id)} />
                <span className="clamp-1" title={`${r.name ?? r.id} · ${runDesign(r).summary}`}>{r.name ?? r.id}</span>
                <span className="muted small">{new Date(r.created_at).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}</span>
                {mode === 'so_far' && <RunStatusBadge run={r} />}
              </label>
            ))}
          </div>
          {mode === 'so_far' && result?.common_steps != null && (
            <p className="muted small">
              Common horizon: {result.common_steps.toLocaleString()} steps ({formatDuration(result.common_period_hours)}).
              {result.common_steps <= 1 && ' Step every selected run forward first — one of them has not started.'}
            </p>
          )}
          {loading && mode === 'full' && <p className="muted small">Simulating the selected designs…</p>}
          {error && <div className="notice notice-error">{error}</div>}
          <div className="compare-rows">
            {rows.map((r) => (
              <div key={r.run_id} className="compare-row">
                <div className="compare-row-head">
                  <strong className="clamp-1">{r.name ?? r.run_id}</strong>
                  <span className={`stat-value sm ${(r.ped_ratio ?? 0) >= 1 ? 'tone-good' : 'tone-bad'}`} title="PED ratio (electricity)">{(r.ped_ratio ?? 0).toFixed(2)}</span>
                </div>
                <PedGauge ratio={r.ped_ratio} />
                <div className="bar-pair">
                  <div className="bar-line"><span>Gen</span><div className="bar"><div style={{ width: `${((r.total_gen_mwh ?? 0) / maxEnergy) * 100}%`, background: 'var(--c-gen)' }} /></div><span>{formatEnergy(perYear(r.total_gen_mwh))}{years ? '/y' : ''}</span></div>
                  <div className="bar-line"><span>Load</span><div className="bar"><div style={{ width: `${((r.total_demand_mwh ?? 0) / maxEnergy) * 100}%`, background: 'var(--c-load)' }} /></div><span>{formatEnergy(perYear(r.total_demand_mwh))}{years ? '/y' : ''}</span></div>
                </div>
                {mode === 'full' && (
                  <div className="compare-kv muted small">
                    <span>Self-sufficiency <b>{formatPercent(r.self_sufficiency_ratio)}</b></span>
                    <span>Grid import <b>{formatEnergy(perYear(r.grid_purchase_mwh))}/y</b></span>
                    <span>Export <b>{formatEnergy(perYear(r.export_delivered_mwh))}/y</b></span>
                    {(r.heat_demand_mwh ?? 0) > 0 && <span>Heat <b>{formatEnergy(perYear(r.heat_demand_mwh))}/y</b></span>}
                    {r.total_energy_ped_ratio != null && <span>PED all energy <b>{r.total_energy_ped_ratio.toFixed(2)}</b></span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
