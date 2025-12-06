import React, { useEffect, useState } from 'react';
import type { Scenario, ScenarioCreate } from '../types';

interface ScenarioListProps {
  apiBase: string;
  onRun: (runId: string) => void;
}

const defaultOverrides = {
  owned_wind_capacity_mw: 270,
  owned_solar_capacity_mw: 100,
  owned_hydro_capacity_mw: 40,
  owned_battery_capacity_mwh: 10,
  physical_allocation: 0.88,
  financial_allocation: 0.12,
  investment_freq: 12,
};

export function ScenarioList({ apiBase, onRun }: ScenarioListProps) {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('My Scenario');
  const [desc, setDesc] = useState('');
  const [details, setDetails] = useState('');
  const [overrides, setOverrides] = useState<Record<string, any>>(defaultOverrides);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState(true);
  const [runBusyId, setRunBusyId] = useState<string | null>(null);
  const [runError, setRunError] = useState<string | null>(null);
  const [compareRows, setCompareRows] = useState<any[]>([]);

  const join = (p: string) => {
    const base = apiBase.endsWith('/') ? apiBase : apiBase + '/';
    const clean = p.replace(/^\/+/, '');
    return new URL(clean, base).toString();
  };

  const load = async () => {
    setLoading(true);
    try {
      const r = await fetch(join('/scenarios'));
      const data = (await r.json()) as Scenario[];
      setScenarios(data);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const saveScenario = async () => {
    const payload: ScenarioCreate = { name, description: desc, details, config_overrides: overrides };
    const r = await fetch(join('/scenarios'), {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
    });
    if (r.ok) { await load(); }
  };

  const runScenario = async (id: string) => {
    setRunError(null); setRunBusyId(id);
    // Also select + populate the form before running so details are visible
    const s = scenarios.find((x) => x.id === id);
    if (s) {
      setSelectedId(s.id);
      setName(s.name);
      setDesc(s.description ?? '');
      setDetails(s.details ?? '');
      setOverrides({ ...defaultOverrides, ...(s.config_overrides || {}) });
    }
    try {
      const r = await fetch(join(`/scenarios/${id}/run`), { method: 'POST' });
      if (r.ok) {
        const body = await r.json();
        onRun(body.id);
      } else {
        const txt = await r.text();
        setRunError(`Run failed (${r.status}): ${txt}`);
      }
    } catch (e: any) {
      setRunError(e?.message ?? String(e));
    } finally { setRunBusyId(null); }
  };

  const deleteScenario = async (id: string) => {
    if (!confirm('Delete this scenario? This cannot be undone.')) return;
    const r = await fetch(join(`/scenarios/${id}`), { method: 'DELETE' });
    if (r.ok) { await load(); }
  };

  const onChange = (key: string, value: number) => setOverrides({ ...overrides, [key]: value });

  // duplicateScenario removed per request

  const loadCompare = async () => {
    try {
      const r = await fetch(join('/runs'));
      if (!r.ok) return;
      const runs = await r.json();
      const top = runs.slice(0, 8);
      const rows: any[] = [];
      for (const run of top) {
        try {
          const pr = await fetch(join(`/runs/${run.id}/ped`));
          if (!pr.ok) { rows.push({ name: run.name, status: run.status, ped_ratio: '-', total_gen_mwh: '-', total_demand_mwh: '-' }); continue; }
          const ped = await pr.json();
          rows.push({ name: run.name, status: run.status, ped_ratio: Number(ped.ped_ratio).toFixed(3), total_gen_mwh: Number(ped.total_gen_mwh).toFixed(1), total_demand_mwh: Number(ped.total_demand_mwh).toFixed(1) });
        } catch {
          rows.push({ name: run.name, status: run.status, ped_ratio: '-', total_gen_mwh: '-', total_demand_mwh: '-' });
        }
      }
      setCompareRows(rows);
    } catch {}
  };

  useEffect(() => { loadCompare(); }, []);

  // Paper scenarios (S1-S5) - exact names only, not copies
  const PAPER_SCENARIO_NAMES = [
    'Scenario 1: Baseline',
    'Scenario 2: High PV Deployment', 
    'Scenario 3: High PV + Battery (4h)',
    'Scenario 4: High PV + Large Battery',
    'Scenario 5: DSM (Flexible Demand)',
  ];
  const isPaperScenario = (name: string) => PAPER_SCENARIO_NAMES.includes(name);
  
  // Sort: paper scenarios first (S1-S5 in order), then user scenarios
  const sortedScenarios = [...scenarios].sort((a, b) => {
    const aIsPaper = isPaperScenario(a.name);
    const bIsPaper = isPaperScenario(b.name);
    if (aIsPaper && bIsPaper) {
      // Extract scenario number and sort ascending
      const aNum = parseInt(a.name.match(/Scenario (\d)/)?.[1] || '0');
      const bNum = parseInt(b.name.match(/Scenario (\d)/)?.[1] || '0');
      return aNum - bNum;
    }
    if (aIsPaper) return -1; // Paper scenarios first
    if (bIsPaper) return 1;
    return 0; // Keep original order for user scenarios
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '1rem', height: '100%', minHeight: 0 }}>
      <div className="sidebar" style={{ height: '100%', overflowY: 'auto', minHeight: 0 }}>
        <div className="header" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <h2 style={{ flex: 1 }}>Scenarios</h2>
          <button className="button" onClick={() => { setSelectedId(null); setName('My Scenario'); setDesc(''); setDetails(''); setOverrides({ ...defaultOverrides }); setShowGuide(true); }}>New</button>
          <button className="button" onClick={load} disabled={loading}>Refresh</button>
        </div>
        <div style={{ marginTop: '1rem' }}>
          {sortedScenarios.map((s) => {
            const isPaper = isPaperScenario(s.name);
            return (
            <div 
              key={s.id} 
              className={`run-item run-item--with-icon ${selectedId === s.id ? 'active' : ''}`} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                background: isPaper ? 'linear-gradient(135deg, #1e3a5f 0%, #1e293b 100%)' : undefined,
                borderLeft: isPaper ? '3px solid #3b82f6' : undefined,
              }} 
              onClick={() => { setSelectedId(s.id); setName(s.name); setDesc(s.description ?? ''); setDetails(s.details ?? ''); setOverrides({ ...defaultOverrides, ...(s.config_overrides || {}) }); }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <strong>{s.name}</strong>
                  {isPaper && <span style={{ fontSize: 9, padding: '2px 5px', background: '#3b82f6', borderRadius: 3, color: '#fff' }}>PAPER</span>}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{s.description ?? ''}</div>
                {s.details && (
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: 4 }}>
                    {String(s.details).slice(0, 120)}{String(s.details).length > 120 ? '…' : ''}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button className="button" onClick={() => runScenario(s.id)} aria-busy={runBusyId===s.id} aria-label={`Run ${s.name}`}>
                  {runBusyId === s.id ? 'Running…' : 'Run'}
                </button>
              </div>
              {!isPaper && (
                <button
                  className="icon-btn"
                  title="Delete scenario"
                  aria-label="Delete scenario"
                  onClick={(e) => { e.stopPropagation(); deleteScenario(s.id); }}
                >
                  🗑
                </button>
              )}
            </div>
            );
          })}
        </div>
      </div>
      <div className="main-content" style={{ height: '100%', overflowY: 'auto', minHeight: 0, padding: 0 }}>
        <div className="header"><h2>Create / Edit Scenario</h2></div>
        {runError && (
          <div className="metric-card" style={{ color: '#fecaca' }}>{runError}</div>
        )}
        <div className="metric-card">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <label>Name<input style={{ width: '100%' }} value={name} onChange={e => setName(e.target.value)} /></label>
            <label>Description<input style={{ width: '100%' }} value={desc} onChange={e => setDesc(e.target.value)} /></label>
            <label style={{ gridColumn: '1 / -1' }}>Details
              <textarea style={{ width: '100%', minHeight: 90 }} value={details} onChange={e => setDetails(e.target.value)} />
            </label>
            <label>Wind (MW)<input type="number" value={overrides.owned_wind_capacity_mw} onChange={e => onChange('owned_wind_capacity_mw', Number(e.target.value))} /></label>
            <label>Solar (MW)<input type="number" value={overrides.owned_solar_capacity_mw} onChange={e => onChange('owned_solar_capacity_mw', Number(e.target.value))} /></label>
            <label>Hydro (MW)<input type="number" value={overrides.owned_hydro_capacity_mw} onChange={e => onChange('owned_hydro_capacity_mw', Number(e.target.value))} /></label>
            <label>Battery (MWh)<input type="number" value={overrides.owned_battery_capacity_mwh} onChange={e => onChange('owned_battery_capacity_mwh', Number(e.target.value))} /></label>
            <label>Physical Allocation<input type="number" step="0.01" value={overrides.physical_allocation} onChange={e => onChange('physical_allocation', Number(e.target.value))} /></label>
            <label>Financial Allocation<input type="number" step="0.01" value={overrides.financial_allocation} onChange={e => onChange('financial_allocation', Number(e.target.value))} /></label>
            <label>Investment Freq (steps)<input type="number" value={overrides.investment_freq} onChange={e => onChange('investment_freq', Number(e.target.value))} /></label>
          </div>
          <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {selectedId && isPaperScenario(scenarios.find(s => s.id === selectedId)?.name || '') ? (
              <>
                <button className="button" onClick={async () => {
                  // Save As: create a new user scenario - remove "Scenario X:" prefix
                  const baseName = name.replace(/^Scenario \d+:\s*/, '');
                  const copyName = `My ${baseName}`;
                  const payload = { name: copyName, description: desc, details, config_overrides: overrides };
                  const r = await fetch(join('/scenarios'), {
                    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
                  });
                  if (r.ok) { 
                    const newScenario = await r.json();
                    await load(); 
                    setSelectedId(newScenario.id);
                    setName(copyName);
                    alert('New user scenario created!');
                  }
                }}>Save As New</button>
                <span style={{ fontSize: 11, color: '#94a3b8' }}>Paper scenarios are read-only. Changes apply to this session only.</span>
              </>
            ) : (
              <>
                <button className="button" onClick={saveScenario}>Save Scenario</button>
                {selectedId && (
                  <button className="button" onClick={async () => {
                    const url = join(`/scenarios/${selectedId}`);
                    const r = await fetch(url, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, description: desc, details, config_overrides: overrides }) });
                    if (r.ok) { await load(); }
                  }}>Save Changes</button>
                )}
              </>
            )}
          </div>
        </div>

        {/* PED design guideline (always visible for New; toggle for edits) */}
        <div className="metric-card" style={{ whiteSpace: 'pre-wrap' }}>
          <div className="header" style={{ justifyContent: 'space-between' }}>
            <h3 style={{ margin: 0 }}>Guideline: Designing a Scenario for PED</h3>
            <button className="button" onClick={() => setShowGuide(v => !v)}>{showGuide ? 'Hide' : 'Show'}</button>
          </div>
          {showGuide && (
            <div>
              <p>
                PED (Positive Energy District) targets annual on‑site renewable generation
                ≥ annual demand. Tune parameters below; then check Runs → Charts → PED to
                monitor total generation, total demand, balance and ratio (≥ 1.0 for PED).
              </p>
              <ul>
                <li>
                  <b>Solar (MW)</b>: rooftop PV nameplate. Increasing this primarily raises mid‑day
                  generation. Current: {String(overrides.owned_solar_capacity_mw ?? '—')} MW.
                </li>
                <li>
                  <b>Battery (MWh)</b>: storage energy. Shifts PV from mid‑day to evenings; reduces imports
                  and exports; increases self‑consumption. Current: {String(overrides.owned_battery_capacity_mwh ?? '—')} MWh.
                </li>
                <li>
                  <b>Investment Freq (steps)</b>: decision cadence (lower = more responsive). Use 6 for DSM‑like
                  responsiveness; 12 for baseline. Current: {String(overrides.investment_freq ?? '—')}.
                </li>
                <li>
                  <b>Physical / Financial Allocation</b>: budget split that influences physical assets vs trading.
                  Keep sensible totals (≈1.0). Current: {String(overrides.physical_allocation ?? '—')} / {String(overrides.financial_allocation ?? '—')}.
                </li>
              </ul>
              <p>
                <b>Suggested recipes</b>:
                <br/>– Baseline: modest PV, no battery; observe import/export baseline.
                <br/>– High PV: maximize PV; expect high mid‑day export.
                <br/>– PV + Battery (4 h): add 0.32–0.64 MWh storage to boost self‑consumption.
                <br/>– DSM‑like: keep PV+Battery and set investment_freq=6 to react faster.
              </p>
              <p>
                Iterate: create → run → check PED ratio → adjust PV/battery/decisions until
                balance ≥ 0 and ratio ≥ 1.0. Use multiple saved scenarios to compare results.
              </p>
            </div>
          )}
        </div>

        {/* Compare runs */}
        <div className="metric-card">
          <div className="header" style={{ justifyContent: 'space-between' }}>
            <h3 style={{ margin: 0 }}>Compare Runs (latest)</h3>
            <button className="button" onClick={loadCompare}>Refresh</button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '6px 8px' }}>Name</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px' }}>Status</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px' }}>PED Ratio</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px' }}>Gen (MWh)</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px' }}>Demand (MWh)</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '6px 8px' }}>{r.name}</td>
                    <td style={{ padding: '6px 8px', color: '#94a3b8' }}>{r.status}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>{r.ped_ratio}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>{r.total_gen_mwh}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>{r.total_demand_mwh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
