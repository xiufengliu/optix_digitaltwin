import { useCallback, useEffect, useMemo, useState } from 'react';
import { apiFetch } from '../lib/api';
import { formatDuration, formatEnergy } from '../lib/format';
import { PedGauge } from './AnalyticsPanels';
import { RunStatusBadge } from './RunList';
import type { CompareRunsResponse, Scenario, ScenarioCreate, SimulationRun } from '../types';
import type { DigitalTwinConfig } from './DigitalTwinBuilder';
import { formatTwinSummary, twinSummary } from '../lib/twin';

interface ScenarioListProps {
  apiBase: string;
  onRun: (runId: string) => void;
  /** Open a saved digital twin in the Twin Builder */
  onOpenTwin?: (twinId: string) => void;
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
const TWIN_KEYS = new Set(['owned_solar_capacity_mw', 'owned_wind_capacity_mw', 'owned_hydro_capacity_mw', 'owned_load_peak_mw', 'owned_battery_capacity_mwh', 'batt_power_c_rate', 'batt_eta_charge', 'batt_eta_discharge', 'flexible_load_share', 'max_shift_hours']);

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
  { key: 'investment_freq', label: 'Decision interval', unit: 'steps', scale: 1, step: 1, min: 1, hint: 'Lower = more responsive control.' },
];
const KNOWN_KEYS = new Set([...ASSET_FIELDS, ...STORAGE_FIELDS].map((f) => f.key));

const NEW_SCENARIO_OVERRIDES: Record<string, number> = {
  owned_solar_capacity_mw: 0.171,
  owned_wind_capacity_mw: 0,
  owned_hydro_capacity_mw: 0,
  owned_load_peak_mw: 0.15,
  owned_battery_capacity_mwh: 0.32,
  batt_power_c_rate: 0.25,
  investment_freq: 12,
};

type Draft = { name: string; description: string; details: string; overrides: Record<string, unknown>; twinId: string | null };
const newDraft = (): Draft => ({ name: 'My scenario', description: '', details: '', overrides: { ...NEW_SCENARIO_OVERRIDES }, twinId: null });
const draftFrom = (s: Scenario): Draft => ({ name: s.name, description: s.description ?? '', details: s.details ?? '', overrides: { ...(s.config_overrides || {}) }, twinId: s.digital_twin_id ?? null });

const savedDate = (t: SavedTwin) => new Date(t.updated_at || t.created_at).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });

type Notice = { tone: 'ok' | 'error'; text: string } | null;

export function ScenarioList({ apiBase, onRun, onOpenTwin }: ScenarioListProps) {
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

  useEffect(() => { load(); }, [load]);

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

  // Picking a twin shows its sizes right away; the backend derives the exact
  // settings (battery power, efficiency, flexibility) when the scenario is saved
  const chooseTwin = (id: string) => {
    if (!id) { update({ twinId: null }); return; }
    const t = twinById.get(id);
    const sum = twinSummary(t);
    const next: Record<string, unknown> = Object.fromEntries(Object.entries(draft.overrides).filter(([k]) => !TWIN_KEYS.has(k)));
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
    } catch (e) {
      setNotice({ tone: 'error', text: `Save failed: ${(e as Error).message}` });
    } finally { setBusy(null); }
  };

  const saveChanges = async () => {
    if (!selected) return;
    setBusy('save');
    try {
      await apiFetch<Scenario>(apiBase, `/scenarios/${selected.id}`, { method: 'PATCH', body: payload() });
      await load();
      setDirty(false);
      setNotice({ tone: 'ok', text: 'Changes saved.' });
    } catch (e) {
      setNotice({ tone: 'error', text: `Save failed: ${(e as Error).message}` });
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

  const unknownKeys = Object.keys(draft.overrides).filter((k) => !KNOWN_KEYS.has(k));

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
          {s.digital_twin_id && <span className="badge badge-accent" title={`Linked to twin “${twinById.get(s.digital_twin_id)?.name ?? 'unknown'}”`}>Twin</span>}
        </div>
        {s.description && <p className="muted small clamp-2">{s.description}</p>}
        <div className="spec-chips">
          <span className="spec-chip" style={{ ['--chip' as string]: 'var(--c-solar)' }}>PV {kw('owned_solar_capacity_mw')} kWp</span>
          {kw('owned_wind_capacity_mw') > 0 && <span className="spec-chip" style={{ ['--chip' as string]: 'var(--c-wind)' }}>Wind {kw('owned_wind_capacity_mw')} kW</span>}
          {kw('owned_battery_capacity_mwh') > 0 && <span className="spec-chip" style={{ ['--chip' as string]: 'var(--c-battery)' }}>Battery {kw('owned_battery_capacity_mwh')} kWh</span>}
          {Number(o.flexible_load_share ?? 0) > 0 && <span className="spec-chip" style={{ ['--chip' as string]: 'var(--c-dsm)' }}>DSM {Math.round(Number(o.flexible_load_share) * 100)}%</span>}
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
            <div className="row gap-xs wrap">
              {selected && (
                <button className="btn btn-secondary btn-sm" disabled={busy === `run:${selected.id}`} onClick={() => run(selected)}>▶ Run</button>
              )}
              {selected && !readOnly && (
                <button className="btn btn-primary btn-sm" disabled={!dirty || busy === 'save'} onClick={saveChanges}>Save changes</button>
              )}
              <button className={`btn btn-sm ${selected ? 'btn-secondary' : 'btn-primary'}`} disabled={busy === 'save'} onClick={saveNew}>
                {readOnly ? 'Duplicate' : selected ? 'Save as new' : 'Create scenario'}
              </button>
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
                  Sizes come from {draftTwin ? <b>{draftTwin.name}</b> : 'the linked twin'} and update whenever that twin is saved in Twin Builder.
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
              <p className="muted small twin-link-info">Link a design from Twin Builder to take its sizes from there, or enter them by hand below.</p>
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

          <h3 className="section-title">Generation & demand</h3>
          <div className="form-grid">{ASSET_FIELDS.map(renderField)}</div>
          <h3 className="section-title">Storage & flexibility</h3>
          <div className="form-grid">{STORAGE_FIELDS.map(renderField)}</div>

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
        </section>

        <section className={`card scenario-compare ${mobilePane === 'compare' ? 'is-mobile-visible' : ''}`}>
          <CompareRuns apiBase={apiBase} />
        </section>
      </div>
    </div>
  );
}

function CompareRuns({ apiBase }: { apiBase: string }) {
  const [runs, setRuns] = useState<SimulationRun[]>([]);
  const [chosen, setChosen] = useState<Set<string>>(new Set());
  const [commonHorizon, setCommonHorizon] = useState(true);
  const [result, setResult] = useState<CompareRunsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadRuns = useCallback(async () => {
    try {
      const all = await apiFetch<SimulationRun[]>(apiBase, '/runs');
      setRuns(all);
      // Default: most recent live run of each name
      setChosen((prev) => {
        if (prev.size) return new Set([...prev].filter((id) => all.some((r) => r.id === id && r.session_id)));
        const seen = new Set<string>();
        const pick = new Set<string>();
        for (const r of all) {
          if (!r.session_id || seen.has(r.name ?? r.id)) continue;
          seen.add(r.name ?? r.id);
          pick.add(r.id);
          if (pick.size >= 6) break;
        }
        return pick;
      });
    } catch (e) {
      setError((e as Error).message);
    }
  }, [apiBase]);

  useEffect(() => { loadRuns(); }, [loadRuns]);

  const compare = useCallback(async () => {
    if (chosen.size === 0) { setResult(null); return; }
    setLoading(true);
    try {
      setResult(await apiFetch<CompareRunsResponse>(apiBase, '/runs/compare', { method: 'POST', body: { run_ids: [...chosen], use_common_horizon: commonHorizon } }));
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    } finally { setLoading(false); }
  }, [apiBase, chosen, commonHorizon]);

  useEffect(() => { compare(); }, [compare]);

  const rows = (result?.rows ?? []).filter((r) => r.comparable);
  const maxEnergy = Math.max(1e-9, ...rows.flatMap((r) => [r.total_gen_mwh ?? 0, r.total_demand_mwh ?? 0]));
  const live = runs.filter((r) => r.session_id);

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
      {live.length === 0 ? (
        <p className="muted small">No live runs. Run a scenario (or restart an inactive run) and step it forward to compare results.</p>
      ) : (
        <>
          <div className="compare-picker">
            {live.map((r) => (
              <label key={r.id} className="check">
                <input type="checkbox" checked={chosen.has(r.id)} onChange={() => toggle(r.id)} />
                <span className="clamp-1">{r.name ?? r.id}</span>
                <RunStatusBadge run={r} />
              </label>
            ))}
          </div>
          <label className="check muted small">
            <input type="checkbox" checked={commonHorizon} onChange={(e) => setCommonHorizon(e.target.checked)} />
            Compare over a common horizon (fair totals)
          </label>
          {result?.common_steps != null && (
            <p className="muted small">
              Common horizon: {result.common_steps.toLocaleString()} steps ({formatDuration(result.common_period_hours)}).
              {result.common_steps <= 1 && ' Step every selected run forward first — one of them has not started.'}
            </p>
          )}
          {error && <div className="notice notice-error">{error}</div>}
          <div className="compare-rows">
            {rows.map((r) => (
              <div key={r.run_id} className="compare-row">
                <div className="compare-row-head">
                  <strong className="clamp-1">{r.name ?? r.run_id}</strong>
                  <span className={`stat-value sm ${(r.ped_ratio ?? 0) >= 1 ? 'tone-good' : 'tone-bad'}`}>{(r.ped_ratio ?? 0).toFixed(2)}</span>
                </div>
                <PedGauge ratio={r.ped_ratio} />
                <div className="bar-pair">
                  <div className="bar-line"><span>Gen</span><div className="bar"><div style={{ width: `${((r.total_gen_mwh ?? 0) / maxEnergy) * 100}%`, background: 'var(--c-gen)' }} /></div><span>{formatEnergy(r.total_gen_mwh)}</span></div>
                  <div className="bar-line"><span>Load</span><div className="bar"><div style={{ width: `${((r.total_demand_mwh ?? 0) / maxEnergy) * 100}%`, background: 'var(--c-load)' }} /></div><span>{formatEnergy(r.total_demand_mwh)}</span></div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
