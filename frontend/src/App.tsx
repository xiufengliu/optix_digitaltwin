import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { RunList, RunStatusBadge, runSource } from './components/RunList';
import { ScenarioList } from './components/ScenarioList';
import { DigitalTwinBuilder, type DigitalTwinConfig } from './components/DigitalTwinBuilder';
import { DigitalTwin3DView } from './components/DigitalTwin3DView';
import { DispatchPanel, EnergyPanel, exportSeriesCsv } from './components/AnalyticsPanels';
import { Copilot, type CopilotContext, type CopilotStatus, type ScenarioInfo } from './components/Copilot';
import { apiFetch, isAbort, resolveApiBase } from './lib/api';
import { formatCompact, formatDuration, formatPower, formatTimestamp } from './lib/format';
import { twinFromOverrides, twinSummary } from './lib/twin';
import { useRunAnalytics } from './lib/useRunAnalytics';
import type { ObservationValues, Scenario, SimulationRun, SimulationStatePayload } from './types';

type View = 'console' | 'scenarios' | 'builder';
type Workspace = 'twin' | 'energy' | 'dispatch';

const VIEWS: { id: View; label: string }[] = [
  { id: 'console', label: 'Console' },
  { id: 'scenarios', label: 'Scenarios' },
  { id: 'builder', label: 'Twin Builder' },
];

// Step sizes expressed in simulated time; converted with the data's step length
const STEP_PRESETS = [
  { label: '+1 h', hours: 1 },
  { label: '+1 day', hours: 24 },
  { label: '+1 week', hours: 24 * 7 },
];
const PLAY_SPEEDS = [
  { label: '1 h / tick', hours: 1 },
  { label: '6 h / tick', hours: 6 },
  { label: '1 day / tick', hours: 24 },
  { label: '1 week / tick', hours: 24 * 7 },
];
const RANGES = [
  { label: 'Last day', hours: 24 },
  { label: 'Last week', hours: 24 * 7 },
  { label: 'Last 30 days', hours: 24 * 30 },
  { label: 'Last year', hours: 24 * 365 },
  { label: 'All', hours: null },
];
const MAX_STEPS_PER_REQUEST = 10000;

function viewFromHash(): View {
  const h = window.location.hash.replace('#', '');
  return (VIEWS.find((v) => v.id === h)?.id ?? 'console');
}

export default function App() {
  const apiBase = useMemo(resolveApiBase, []);

  const [view, setViewState] = useState<View>(viewFromHash);
  const setView = useCallback((v: View) => {
    setViewState(v);
    if (window.location.hash !== `#${v}`) window.history.replaceState(null, '', `#${v}`);
  }, []);
  useEffect(() => {
    const onHash = () => setViewState(viewFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const [apiOnline, setApiOnline] = useState<boolean | null>(null);
  const [runs, setRuns] = useState<SimulationRun[]>([]);
  const [loadingRuns, setLoadingRuns] = useState(false);
  const [selectedRunId, setSelectedRunId] = useState<string | null>(null);
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [runTwin, setRunTwin] = useState<DigitalTwinConfig | null>(null);
  const [state, setState] = useState<SimulationStatePayload | null>(null);
  const [busyRunId, setBusyRunId] = useState<string | null>(null);
  const [stepping, setStepping] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playHours, setPlayHours] = useState(24);
  const [workspace, setWorkspace] = useState<Workspace>('twin');
  const [rangeHours, setRangeHours] = useState<number | null>(24 * 7);
  const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);
  const [logs, setLogs] = useState<{ time: string; text: string; tone: 'info' | 'error' }[]>([]);
  const [runsOpenMobile, setRunsOpenMobile] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [copilotRequest, setCopilotRequest] = useState<{ prompt: string; nonce: number } | null>(null);
  const [stateNonce, setStateNonce] = useState(0);

  // Builder edits its own copy so the console keeps showing the selected run's twin
  const [builderConfig, setBuilderConfig] = useState<DigitalTwinConfig | null>(null);
  const [builderKey, setBuilderKey] = useState(0);
  const [builderMode, setBuilderMode] = useState<'2d' | '3d'>('2d');

  const log = useCallback((text: string, tone: 'info' | 'error' = 'info') => {
    setLogs((prev) => [...prev.slice(-99), { time: new Date().toLocaleTimeString(), text, tone }]);
  }, []);

  const selectedRun = runs.find((r) => r.id === selectedRunId) ?? null;
  const live = Boolean(selectedRun?.session_id);

  // ---- API health -------------------------------------------------------
  useEffect(() => {
    const check = () => apiFetch(apiBase, '/health').then(() => setApiOnline(true), () => setApiOnline(false));
    check();
    const id = window.setInterval(check, 20000);
    return () => window.clearInterval(id);
  }, [apiBase]);

  // ---- Runs -------------------------------------------------------------
  const loadRuns = useCallback(async () => {
    setLoadingRuns(true);
    try {
      const data = await apiFetch<SimulationRun[]>(apiBase, '/runs');
      setRuns(data);
      setSelectedRunId((prev) => (prev && data.some((r) => r.id === prev) ? prev : data.find((r) => r.session_id)?.id ?? data[0]?.id ?? null));
    } catch (error) {
      log(`Could not load runs: ${(error as Error).message}`, 'error');
    } finally {
      setLoadingRuns(false);
    }
  }, [apiBase, log]);

  useEffect(() => {
    loadRuns();
    const id = window.setInterval(loadRuns, 15000);
    return () => window.clearInterval(id);
  }, [loadRuns]);

  const selectRun = useCallback((id: string) => {
    setPlaying(false);
    setSelectedRunId(id);
    setRunsOpenMobile(false);
  }, []);

  // ---- Selected run: state, scenario and twin ---------------------------
  useEffect(() => {
    setState(null);
    setScenario(null);
    setRunTwin(null);
    if (!selectedRunId) return;
    const ac = new AbortController();
    (async () => {
      try {
        const run = await apiFetch<SimulationRun>(apiBase, `/runs/${selectedRunId}`, { signal: ac.signal });
        let sc: Scenario | null = null;
        if (run.scenario_id) {
          sc = await apiFetch<Scenario>(apiBase, `/scenarios/${run.scenario_id}`, { signal: ac.signal }).catch(() => null);
          setScenario(sc);
        }
        // Prefer the design copy stored with the run: it is what was simulated,
        // even if the twin was edited or deleted afterwards
        const snapshot = run.config?.digital_twin_config as Partial<DigitalTwinConfig> | undefined;
        const twinId = run.digital_twin_id ?? sc?.digital_twin_id;
        let twin: DigitalTwinConfig | null = null;
        if (snapshot && Array.isArray(snapshot.components)) {
          twin = {
            id: run.digital_twin_id ?? `run-${run.id}`,
            name: snapshot.name ?? run.name ?? 'Run twin',
            components: snapshot.components,
            connections: Array.isArray(snapshot.connections) ? snapshot.connections : [],
            created_at: run.created_at,
          };
        } else if (twinId) {
          twin = await apiFetch<DigitalTwinConfig>(apiBase, `/digital-twins/${twinId}`, { signal: ac.signal }).catch(() => null);
        }
        if (!twin) {
          const overrides = ((run.config?.config_overrides as Record<string, unknown> | undefined) ?? sc?.config_overrides) || null;
          twin = twinFromOverrides(`gen-${run.id}`, sc?.name ?? run.name ?? 'Run twin', overrides, run.created_at);
        }
        setRunTwin(twin);
        if (run.session_id) {
          setState(await apiFetch<SimulationStatePayload>(apiBase, `/runs/${selectedRunId}/state`, { signal: ac.signal }));
        }
      } catch (error) {
        if (!isAbort(error)) log(`Could not load run: ${(error as Error).message}`, 'error');
      }
    })();
    return () => ac.abort();
  }, [apiBase, selectedRunId, selectedRun?.session_id, stateNonce, log]);

  const metrics = state?.metrics ?? {};
  const obs = (state?.observation?.manager ?? Object.values(state?.observation ?? {})[0] ?? {}) as ObservationValues;
  const done = Boolean(metrics.done);

  const analytics = useRunAnalytics({
    apiBase,
    runId: selectedRunId,
    live,
    timestep: metrics.timestep,
    rangeHours,
    includeDispatch: workspace === 'dispatch',
  });
  const dtHours = analytics.series?.dt_hours ?? 1 / 6;
  const hoursToSteps = (hours: number) => Math.max(1, Math.min(MAX_STEPS_PER_REQUEST, Math.round(hours / dtHours)));

  // ---- Simulation control ----------------------------------------------
  const step = useCallback(async (count: number): Promise<SimulationStatePayload | null> => {
    if (!selectedRunId) return null;
    try {
      const next = await apiFetch<SimulationStatePayload>(apiBase, `/runs/${selectedRunId}/step`, { method: 'POST', body: { steps: count } });
      setState(next);
      return next;
    } catch (error) {
      log(`Step failed: ${(error as Error).message}`, 'error');
      if ((error as { status?: number }).status === 410 || (error as { status?: number }).status === 409) loadRuns();
      return null;
    }
  }, [apiBase, selectedRunId, log, loadRuns]);

  const stepBy = async (hours: number) => {
    setStepping(true);
    const next = await step(hoursToSteps(hours));
    setStepping(false);
    if (next) log(`Advanced ${formatDuration(hours)} → ${formatTimestamp((next.observation?.manager as ObservationValues | undefined)?.timestamp)}`);
  };

  // Play loop: one request at a time, stops on completion, error or run change
  const playRef = useRef(false);
  useEffect(() => {
    playRef.current = playing;
    if (!playing) return;
    let cancelled = false;
    (async () => {
      log(`Playing at ${formatDuration(playHours)} per tick`);
      while (!cancelled && playRef.current) {
        const next = await step(hoursToSteps(playHours));
        if (!next || next.metrics?.done) {
          if (next?.metrics?.done) log('Reached the end of the dataset.');
          setPlaying(false);
          break;
        }
        await new Promise((r) => window.setTimeout(r, reduceMotion ? 900 : 450));
      }
    })();
    return () => { cancelled = true; };
    // hoursToSteps depends on dtHours only
  }, [playing, playHours, step, dtHours, reduceMotion, log]);

  const restartRun = async (runId: string) => {
    setBusyRunId(runId);
    try {
      await apiFetch<SimulationRun>(apiBase, `/runs/${runId}/restart`, { method: 'POST' });
      log('Run restarted from the beginning of the dataset.');
      setSelectedRunId(runId);
      await loadRuns();
    } catch (error) {
      log(`Restart failed: ${(error as Error).message}`, 'error');
    } finally {
      setBusyRunId(null);
    }
  };

  const deleteRun = async (runId: string) => {
    try {
      await apiFetch(apiBase, `/runs/${runId}`, { method: 'DELETE' });
      if (runId === selectedRunId) { setPlaying(false); setSelectedRunId(null); }
      await loadRuns();
    } catch (error) {
      log(`Delete failed: ${(error as Error).message}`, 'error');
    }
  };

  const openRun = (runId: string) => {
    setView('console');
    setSelectedRunId(runId);
    loadRuns();
    log('New run started.');
  };

  const askCopilot = (prompt: string) => {
    setCopilotRequest({ prompt, nonce: Date.now() });
    setCopilotOpen(true);
  };

  // What each page shows decides the copilot's role (see backend/assistant.py)
  const [builderMeta, setBuilderMeta] = useState<{ isReference: boolean; selected: string | null }>({ isReference: false, selected: null });
  const [scenarioPage, setScenarioPage] = useState<{ selected: ScenarioInfo | null; customCount: number } | null>(null);
  const selectedScenario = scenarioPage?.selected ?? null;
  const [dataNonce, setDataNonce] = useState(0);
  const copilotContext = useMemo<CopilotContext>(() => ({
    view,
    run_id: view === 'console' ? selectedRun?.id : null,
    run_name: view === 'console' ? selectedRun?.name : null,
    simulated_time: view === 'console' && live ? (obs.timestamp ?? null) : null,
    scenario_id: view === 'scenarios' ? selectedScenario?.id ?? null : null,
    scenario_name: view === 'scenarios' ? selectedScenario?.name ?? null : null,
    design: view === 'builder' && builderConfig ? {
      name: builderConfig.name,
      twin_id: builderConfig.id && !String(builderConfig.id).startsWith('dt-') ? String(builderConfig.id) : null,
      is_reference: builderMeta.isReference,
      selected_component: builderMeta.selected,
      components: builderConfig.components.map((c) => ({ id: c.id, type: c.type, name: c.name, params: c.params })),
      connections: builderConfig.connections.map((c) => ({ from: c.from, to: c.to, type: c.type })),
    } : null,
  }), [view, selectedRun?.id, selectedRun?.name, live, obs.timestamp, selectedScenario, builderConfig, builderMeta]);

  const onTwinChanged = useCallback((kind: 'run' | 'scenario' | 'twin') => {
    log(kind === 'run' ? 'Copilot started or advanced a simulation.' : 'Copilot saved a scenario.');
    loadRuns();
    setDataNonce((n) => n + 1);
    if (kind === 'run') setStateNonce((n) => n + 1);
  }, [log, loadRuns]);

  // A design the copilot proposed: open it on the builder canvas as a new, unsaved design
  const applyDesign = useCallback((design: Pick<DigitalTwinConfig, 'name' | 'components' | 'connections'>) => {
    setBuilderConfig({ id: `dt-ai-${Date.now()}`, name: design.name, components: design.components, connections: design.connections, created_at: '' });
    setBuilderKey((k) => k + 1);
    setBuilderMode('2d');
    setView('builder');
    log(`Copilot design “${design.name}” opened in Twin Builder (not saved yet).`);
  }, [log]);

  // Open a saved twin (e.g. the one linked to a scenario) in the builder
  const openTwin = async (twinId: string) => {
    try {
      const twin = await apiFetch<DigitalTwinConfig>(apiBase, `/digital-twins/${twinId}`);
      setBuilderConfig(twin);
      setBuilderKey((k) => k + 1);
      setBuilderMode('2d');
      setView('builder');
    } catch (error) {
      log(`Could not open twin: ${(error as Error).message}`, 'error');
    }
  };

  const editTwin = () => {
    setBuilderConfig(runTwin);
    setBuilderKey((k) => k + 1);
    setView('builder');
  };

  // ---- Render -----------------------------------------------------------
  const totalSteps = metrics.total_steps ?? 0;
  const timestep = metrics.timestep ?? 0;
  const progress = totalSteps ? Math.min(1, timestep / totalSteps) : 0;
  const genNow = (obs.solar ?? 0) + (obs.wind ?? 0) + (obs.hydro ?? 0) + (obs.chp ?? 0);
  // Grid exchange from the dispatch (battery, DSM, export limit), + = export
  const netNow = obs.grid_import != null || obs.grid_export != null
    ? (obs.grid_export ?? 0) - (obs.grid_import ?? 0)
    : genNow - (obs.load ?? 0);
  const controlsDisabled = !live || done || stepping || playing;

  // What the console shows, so the copilot can suggest prompts that fit it
  const copilotStatus = useMemo<CopilotStatus>(() => ({
    console: {
      runCount: runs.length,
      otherRunName: runs.find((r) => r.id !== selectedRunId)?.name ?? null,
      live,
      done,
      progress,
      simulatedHours: timestep * dtHours,
      pedRatio: analytics.ped?.ped_ratio ?? null,
      importing: netNow < 0,
      workspace,
      design: runTwin ? twinSummary(runTwin) : null,
      hasHeat: Boolean(runTwin?.components.some((c) => ['heat_pump', 'district_heating', 'chp_unit'].includes(c.type))),
    },
    scenarios: scenarioPage ?? undefined,
  }), [runs, selectedRunId, live, done, progress, timestep, dtHours, analytics.ped, netNow, workspace, runTwin, scenarioPage]);
  const twinLive = useMemo(
    () => (live && state ? {
      timestamp: obs.timestamp, solarMw: obs.solar, windMw: obs.wind, hydroMw: obs.hydro, loadMw: obs.load,
      chpMw: obs.chp, heatPumpMw: obs.heat_pump, gridImportMw: obs.grid_import, gridExportMw: obs.grid_export,
      batteryChargeMw: obs.battery_charge, batteryDischargeMw: obs.battery_discharge, curtailedMw: obs.curtailed,
    } : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [live, state],
  );

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden>◆</span>
          <div>
            <div className="brand-name">OptiX Digital Twin</div>
            <div className="brand-sub">Positive Energy District simulator</div>
          </div>
        </div>
        <nav className="nav" role="tablist" aria-label="Main views">
          {VIEWS.map((v) => (
            <button key={v.id} role="tab" aria-selected={view === v.id} className={`nav-tab ${view === v.id ? 'is-active' : ''}`} onClick={() => setView(v.id)}>
              {v.label}
            </button>
          ))}
        </nav>
        <div className="topbar-right">
          <div className={`api-pill ${apiOnline === false ? 'is-down' : apiOnline ? 'is-up' : ''}`} title={apiBase}>
            <span className="dot" /> <span className="api-pill-text">{apiOnline === false ? 'API offline' : apiOnline ? 'API online' : 'Connecting…'}</span>
          </div>
          <button className={`btn btn-sm copilot-toggle ${copilotOpen ? 'is-active' : ''}`} onClick={() => setCopilotOpen((o) => !o)} aria-pressed={copilotOpen}>
            <span aria-hidden>✦</span> Copilot
          </button>
        </div>
      </header>

      {view === 'console' && (
        <div className="console">
          <div className={`console-runs ${runsOpenMobile ? 'is-open' : ''}`}>
            <RunList
              runs={runs}
              selectedId={selectedRunId}
              onSelect={selectRun}
              onRefresh={loadRuns}
              onDelete={deleteRun}
              onRestart={restartRun}
              onNewRun={() => setView('scenarios')}
              isLoading={loadingRuns}
              busyId={busyRunId}
            />
          </div>

          <main className="console-main">
            <button className="btn btn-secondary btn-sm mobile-only runs-toggle" onClick={() => setRunsOpenMobile((v) => !v)}>
              {runsOpenMobile ? 'Hide runs' : `Runs (${runs.length})`}
            </button>

            {!selectedRun ? (
              <div className="card empty-hero">
                <h2>Start a simulation</h2>
                <p className="muted">Choose a reference scenario (baseline, high PV, battery, DSM) or design your own digital twin.</p>
                <div className="row gap-sm center">
                  <button className="btn btn-primary" onClick={() => setView('scenarios')}>Browse scenarios</button>
                  <button className="btn btn-secondary" onClick={() => setView('builder')}>Open twin builder</button>
                </div>
              </div>
            ) : (
              <>
                <section className="card run-header">
                  <div className="run-title">
                    <div>
                      <h1>{selectedRun.name ?? 'Untitled run'}</h1>
                      <div className="row gap-xs wrap muted small">
                        <RunStatusBadge run={selectedRun} />
                        <span className="tag">{runSource(selectedRun)}</span>
                        {scenario && <span>{scenario.description}</span>}
                      </div>
                    </div>
                    <div className="run-title-side">
                    <button className="btn btn-sm copilot-ask" onClick={() => askCopilot(`Explain how “${selectedRun.name ?? 'this run'}” is performing so far and what would most improve it.`)}>
                      ✦ Ask AI about this run
                    </button>
                    <div className="sim-clock">
                      <span className="stat-label">Simulated time</span>
                      <strong>{live ? formatTimestamp(obs.timestamp) : '—'}</strong>
                    </div>
                    </div>
                  </div>

                  {!live ? (
                    <div className="notice notice-warn">
                      <span>This run has no active session (sessions are kept in memory and end when the backend restarts).</span>
                      <button className="btn btn-primary btn-sm" disabled={busyRunId === selectedRun.id} onClick={() => restartRun(selectedRun.id)}>
                        {busyRunId === selectedRun.id ? 'Starting…' : 'Restart run'}
                      </button>
                    </div>
                  ) : !state ? (
                    <div className="row gap-sm muted small"><span className="spinner" aria-hidden /> Connecting to the simulation…</div>
                  ) : (
                    <>
                      <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={totalSteps} aria-valuenow={timestep}>
                        <div className={`progress-fill ${done ? 'is-done' : ''}`} style={{ width: `${progress * 100}%` }} />
                      </div>
                      <div className="row between wrap gap-sm">
                        <span className="muted small">
                          {formatDuration(timestep * dtHours)} of {formatDuration(totalSteps * dtHours)} simulated · step {timestep.toLocaleString()} / {totalSteps.toLocaleString()}
                          {done && ' · complete'}
                        </span>
                        <div className="controls">
                          {STEP_PRESETS.map((p) => (
                            <button key={p.label} className="btn btn-secondary btn-sm" disabled={controlsDisabled} onClick={() => stepBy(p.hours)}>{p.label}</button>
                          ))}
                          <span className="divider" />
                          <select className="select-sm" value={playHours} onChange={(e) => setPlayHours(Number(e.target.value))} aria-label="Playback speed">
                            {PLAY_SPEEDS.map((s) => <option key={s.hours} value={s.hours}>{s.label}</option>)}
                          </select>
                          <button className={`btn btn-sm ${playing ? 'btn-danger-solid' : 'btn-primary'}`} disabled={!live || done || stepping} onClick={() => setPlaying((p) => !p)}>
                            {playing ? '❚❚ Pause' : '▶ Play'}
                          </button>
                          <button className="btn btn-ghost btn-sm" disabled={busyRunId === selectedRun.id || playing} onClick={() => { if (confirm('Restart this run from the beginning?')) restartRun(selectedRun.id); }} title="Restart from t = 0">
                            ↺ Reset
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </section>

                <section className="kpis">
                  <Kpi label="Generation now" value={live ? formatPower(genNow) : '—'} color="var(--c-gen)" hint={obs.chp ? 'solar + wind + CHP on site' : 'solar + wind on site'} />
                  <Kpi label="Load now" value={live ? formatPower(obs.load) : '—'} color="var(--c-load)" hint={obs.heat_pump ? 'incl. heat pumps and EV charging' : 'district consumption'} />
                  <Kpi label={netNow >= 0 ? 'Exporting' : 'Importing'} value={live ? formatPower(Math.abs(netNow)) : '—'} color={netNow >= 0 ? 'var(--c-export)' : 'var(--c-grid)'} hint={netNow >= 0 ? 'after battery and export limit' : 'after battery and flexible demand'} />
                  <Kpi label="Spot price" value={live && obs.price != null ? `${obs.price.toFixed(0)} DKK/MWh` : '—'} color="var(--c-price)" hint="electricity market price" />
                  <Kpi
                    label="PED ratio (so far)"
                    value={analytics.ped ? analytics.ped.ped_ratio.toFixed(2) : '—'}
                    tone={analytics.ped ? (analytics.ped.ped_ratio >= 1 ? 'good' : 'bad') : undefined}
                    color="var(--accent)"
                    hint="generation ÷ use · 1.0+ = positive district"
                  />
                  <Kpi
                    label="Net grid value"
                    value={live && metrics.cumulative_revenue != null ? `${formatCompact(metrics.cumulative_revenue)} DKK` : '—'}
                    tone={metrics.cumulative_revenue != null ? (metrics.cumulative_revenue >= 0 ? 'good' : 'bad') : undefined}
                    hint="export value − import cost"
                    color="var(--c-battery)"
                  />
                </section>

                <section className="card workspace">
                  <div className="workspace-bar">
                    <div className="segmented" role="tablist" aria-label="Workspace view">
                      {([['twin', '3D twin'], ['energy', 'Energy'], ['dispatch', 'Dispatch']] as const).map(([id, label]) => (
                        <button key={id} role="tab" aria-selected={workspace === id} className={workspace === id ? 'is-active' : ''} onClick={() => setWorkspace(id)}>{label}</button>
                      ))}
                    </div>
                    <div className="row gap-xs wrap">
                      {workspace === 'twin' ? (
                        <>
                          <label className="check small muted"><input type="checkbox" checked={reduceMotion} onChange={(e) => setReduceMotion(e.target.checked)} /> Reduce motion</label>
                          <button className="btn btn-secondary btn-sm" onClick={editTwin} disabled={!runTwin}>Edit in builder</button>
                        </>
                      ) : (
                        <>
                          {analytics.loading && <span className="muted small">Updating…</span>}
                          <select className="select-sm" value={rangeHours ?? 'all'} onChange={(e) => setRangeHours(e.target.value === 'all' ? null : Number(e.target.value))} aria-label="Chart time range">
                            {RANGES.map((r) => <option key={r.label} value={r.hours ?? 'all'}>{r.label}</option>)}
                          </select>
                          <button className="btn btn-ghost btn-sm" disabled={!analytics.series} onClick={() => exportSeriesCsv(analytics.series, analytics.dispatch)}>Export CSV</button>
                        </>
                      )}
                    </div>
                  </div>
                  {analytics.error && workspace !== 'twin' && <div className="notice notice-error">{analytics.error}</div>}
                  <div className="workspace-body">
                    {workspace === 'twin' && (
                      <div className="viewer">
                        <DigitalTwin3DView config={runTwin} animate={!reduceMotion} live={twinLive} />
                        {!runTwin && <div className="viewer-empty muted">Loading twin…</div>}
                      </div>
                    )}
                    {workspace === 'energy' && (live ? <EnergyPanel ped={analytics.ped} series={analytics.series} /> : <InactiveHint />)}
                    {workspace === 'dispatch' && (live ? <DispatchPanel dispatch={analytics.dispatch} series={analytics.series} /> : <InactiveHint />)}
                  </div>
                </section>

                <section className="details-grid">
                  <div className="card">
                    <h3 className="section-title">Scenario</h3>
                    {scenario ? (
                      <>
                        <strong>{scenario.name}</strong>
                        {scenario.details && <p className="muted small prewrap">{scenario.details}</p>}
                        <div className="spec-chips">
                          {Object.entries(scenario.config_overrides || {}).map(([k, v]) => (
                            <span key={k} className="spec-chip"><code>{k}</code> {String(v)}</span>
                          ))}
                        </div>
                      </>
                    ) : (
                      <p className="muted small">{selectedRun.digital_twin_id ? 'Run created from a digital twin design.' : 'Custom run without a linked scenario.'}</p>
                    )}
                  </div>
                  <div className="card">
                    <div className="row between">
                      <h3 className="section-title">Activity</h3>
                      {logs.length > 0 && <button className="btn btn-ghost btn-sm" onClick={() => setLogs([])}>Clear</button>}
                    </div>
                    <div className="log" aria-live="polite">
                      {logs.length === 0 ? <span className="muted small">No activity yet.</span> : [...logs].reverse().map((l, i) => (
                        <div key={i} className={l.tone === 'error' ? 'log-error' : ''}><span className="log-time">{l.time}</span>{l.text}</div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}
          </main>
        </div>
      )}

      {view === 'scenarios' && (
        <main className="page">
          <ScenarioList apiBase={apiBase} onRun={openRun} onOpenTwin={openTwin} refreshKey={dataNonce} onSelectScenario={setScenarioPage} />
        </main>
      )}

      {view === 'builder' && (
        <main className="builder-page">
          <div className="builder-bar">
            <div>
              <h1>Digital twin builder</h1>
              <p className="muted small">Drag components onto the canvas, connect them, then save or run the design.</p>
            </div>
            <div className="segmented" role="tablist" aria-label="Builder mode">
              <button role="tab" aria-selected={builderMode === '2d'} className={builderMode === '2d' ? 'is-active' : ''} onClick={() => setBuilderMode('2d')}>2D editor</button>
              <button role="tab" aria-selected={builderMode === '3d'} className={builderMode === '3d' ? 'is-active' : ''} onClick={() => setBuilderMode('3d')}>3D preview</button>
            </div>
          </div>
          <div className="builder-body">
            {builderMode === '2d' ? (
              <DigitalTwinBuilder
                key={builderKey}
                onConfigChange={setBuilderConfig}
                onCopilotState={setBuilderMeta}
                initialConfig={builderConfig}
                apiBase={apiBase}
                onRunSimulation={openRun}
              />
            ) : (
              <DigitalTwin3DView
                config={builderConfig}
                animate={!reduceMotion}
                onComponentMove={(id, x, y) =>
                  setBuilderConfig((prev) => prev && { ...prev, components: prev.components.map((c) => (c.id === id ? { ...c, x, y } : c)) })
                }
              />
            )}
          </div>
        </main>
      )}

      <Copilot
        apiBase={apiBase}
        open={copilotOpen}
        onClose={() => setCopilotOpen(false)}
        context={copilotContext}
        request={copilotRequest}
        onTwinChanged={onTwinChanged}
        onApplyDesign={applyDesign}
        status={copilotStatus}
      />
    </div>
  );
}

function Kpi({ label, value, hint, tone, color }: { label: string; value: string; hint?: string; tone?: 'good' | 'bad'; color: string }) {
  return (
    <div className="kpi" style={{ ['--kpi-color' as string]: color }}>
      <div className="stat-label">{label}</div>
      <div className={`kpi-value ${tone ? `tone-${tone}` : ''}`}>{value}</div>
      {hint && <div className="stat-hint">{hint}</div>}
    </div>
  );
}

function InactiveHint() {
  return <div className="chart-empty tall">Restart this run to explore its energy data.</div>;
}
