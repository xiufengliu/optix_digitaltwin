import { useCallback, useEffect, useMemo, useState } from 'react';
import { RunList } from './components/RunList';
import { ThreeScene } from './components/ThreeScene';
import { PedPanel } from './components/PedPanel';
import { ScenarioList } from './components/ScenarioList';
import type { SimulationRun, SimulationStatePayload, WebSocketMessage } from './types';

const DEFAULT_API_BASE = 'http://localhost:8000';

const buildHttpUrl = (path: string, base: string) => new URL(path, base).toString();
const buildWsUrl = (path: string, base: string) => {
  const url = new URL(path, base);
  url.protocol = url.protocol.startsWith('https') ? 'wss:' : 'ws:';
  return url.toString();
};

function formatCurrency(value?: number | null): string {
  if (value === undefined || value === null) return '—';
  return new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 2 }).format(value);
}

function formatNumber(value?: number | null): string {
  if (value === undefined || value === null) return '—';
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

export default function App() {
  const apiBase = useMemo(
    () => (import.meta.env?.VITE_API_BASE as string | undefined) ?? DEFAULT_API_BASE,
    [],
  );
  const wsBase = useMemo(() => buildWsUrl('/', apiBase), [apiBase]);

  const [runs, setRuns] = useState<SimulationRun[]>([]);
  const [loadingRuns, setLoadingRuns] = useState(false);
  const [selectedRunId, setSelectedRunId] = useState<string | null>(null);
  const [selectedRun, setSelectedRun] = useState<SimulationRun | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<any | null>(null);
  const [currentState, setCurrentState] = useState<SimulationStatePayload | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [wsStatus, setWsStatus] = useState<'idle' | 'connecting' | 'open' | 'closed'>('idle');
  const [tab, setTab] = useState<'runs' | 'scenarios'>('runs');
  const [viewTab, setViewTab] = useState<'3d' | 'charts'>('3d');
  const [autoRun, setAutoRun] = useState(false);
  const [autoSteps, setAutoSteps] = useState(12);
  const [autoIntervalMs, setAutoIntervalMs] = useState(800);
  const [bottomSplit, setBottomSplit] = useState(0.5); // 0..1 left width ratio
  const [draggingSplit, setDraggingSplit] = useState(false);
  const splitRef = useState<HTMLDivElement | null>(null)[0];
  const [centerSplit, setCenterSplit] = useState(0.58); // 0..1 top height ratio
  const [draggingVSplit, setDraggingVSplit] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(320);
  const [draggingSidebar, setDraggingSidebar] = useState(false);
  const [bottomCollapsed, setBottomCollapsed] = useState(false);

  const appendLog = useCallback((entry: string) => {
    setLogs((prev) => {
      const next = [...prev, `${new Date().toLocaleTimeString()} ${entry}`];
      return next.slice(-50);
    });
  }, []);

  const loadRuns = useCallback(async () => {
    setLoadingRuns(true);
    try {
      const response = await fetch(buildHttpUrl('/runs', apiBase));
      if (!response.ok) throw new Error(`Failed to load runs (${response.status})`);
      const data: SimulationRun[] = await response.json();
      setRuns(data);

      if (data.length === 0) {
        setSelectedRunId(null);
        return;
      }

      const currentExists = selectedRunId ? data.some((run) => run.id === selectedRunId) : false;
      if (!currentExists) {
        setSelectedRunId(data[0].id);
      } else if (!selectedRunId) {
        setSelectedRunId(data[0].id);
      }
    } catch (error) {
      console.error(error);
      appendLog(`Error loading runs: ${(error as Error).message}`);
    } finally {
      setLoadingRuns(false);
    }
  }, [apiBase, appendLog, selectedRunId]);

  useEffect(() => {
    loadRuns();
    const interval = setInterval(loadRuns, 15_000);
    return () => clearInterval(interval);
  }, [loadRuns]);

  useEffect(() => {
    if (!selectedRunId) {
      setCurrentState(null);
      setSelectedRun(null);
      setSelectedScenario(null);
      return;
    }

    const controller = new AbortController();
    const fetchState = async () => {
      try {
        const response = await fetch(buildHttpUrl(`/runs/${selectedRunId}/state`, apiBase), {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Failed to load state (${response.status})`);
        const data: SimulationStatePayload = await response.json();
        setCurrentState(data);
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          appendLog(`Error fetching state: ${(error as Error).message}`);
        }
      }
    };
    fetchState();
    return () => controller.abort();
  }, [apiBase, appendLog, selectedRunId]);

  // Load run details and scenario info when selection changes
  useEffect(() => {
    const ac = new AbortController();
    const load = async () => {
      if (!selectedRunId) return;
      try {
        const r = await fetch(buildHttpUrl(`/runs/${selectedRunId}`, apiBase), { signal: ac.signal });
        if (!r.ok) return;
        const run: SimulationRun = await r.json();
        setSelectedRun(run);
        if (run.scenario_id) {
          const s = await fetch(buildHttpUrl(`/scenarios/${run.scenario_id}`, apiBase), { signal: ac.signal });
          if (s.ok) setSelectedScenario(await s.json()); else setSelectedScenario(null);
        } else {
          setSelectedScenario(null);
        }
      } catch {}
    };
    load();
    return () => ac.abort();
  }, [apiBase, selectedRunId]);

  useEffect(() => {
    if (!selectedRunId) return;

    const url = buildWsUrl(`/runs/${selectedRunId}/ws`, wsBase);
    setWsStatus('connecting');
    appendLog(`Connecting to ${url}`);

    const socket = new WebSocket(url);

    socket.onopen = () => {
      setWsStatus('open');
      appendLog('WebSocket connected');
      socket.send(JSON.stringify({ command: 'state' }));
    };

    socket.onclose = (event) => {
      setWsStatus('closed');
      appendLog(`WebSocket closed (code ${event.code})`);
    };

    socket.onerror = (event) => {
      console.error('WebSocket error', event);
      appendLog('WebSocket error encountered');
    };

    socket.onmessage = (event) => {
      try {
        const message: WebSocketMessage = JSON.parse(event.data);
        if (message.type === 'state') {
          setCurrentState(message.payload);
        } else if (message.type === 'error') {
          appendLog(`Backend error: ${message.message}`);
        }
      } catch (error) {
        console.error('Malformed message', error);
      }
    };

    return () => {
      socket.close();
    };
  }, [appendLog, selectedRunId, wsBase]);

  const handleSelectRun = (runId: string) => {
    setSelectedRunId(runId);
  };

  const handleStep = async (count: number) => {
    if (!selectedRunId) return;
    try {
      const response = await fetch(buildHttpUrl(`/runs/${selectedRunId}/step`, apiBase), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ steps: count }),
      });
      if (!response.ok) throw new Error(`Step failed (${response.status})`);
      const data: SimulationStatePayload = await response.json();
      setCurrentState(data);
      appendLog(`Advanced simulation by ${count} step(s)`);
    } catch (error) {
      appendLog(`Error stepping simulation: ${(error as Error).message}`);
    }
  };

  // Auto-run loop
  useEffect(() => {
    if (!autoRun || !selectedRunId || tab !== 'runs' || selectedRun?.status !== 'running') return;
    let cancelled = false;
    let timer: number | undefined;

    const tick = async () => {
      if (cancelled) return;
      await handleStep(autoSteps);
      timer = window.setTimeout(tick, Math.max(100, autoIntervalMs));
    };

    timer = window.setTimeout(tick, 0);
    return () => { cancelled = true; if (timer) window.clearTimeout(timer); };
  }, [autoRun, autoSteps, autoIntervalMs, selectedRunId, tab, selectedRun?.status]);

  const metrics = currentState?.metrics ?? {};

  // Drag handler for bottom split
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!draggingSplit) return;
      const container = document.querySelector('.split-container') as HTMLDivElement | null;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const ratio = Math.max(0.2, Math.min(0.8, x / rect.width));
      setBottomSplit(ratio);
    };
    const onUp = () => setDraggingSplit(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [draggingSplit]);

  // Drag handler for vertical split
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!draggingVSplit) return;
      const container = document.querySelector('.vsplit-container') as HTMLDivElement | null;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const ratio = Math.max(0.25, Math.min(0.85, y / rect.height));
      setCenterSplit(ratio);
    };
    const onUp = () => setDraggingVSplit(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [draggingVSplit]);

  // Drag handler for sidebar width
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!draggingSidebar) return;
      const shell = document.querySelector('.app-shell') as HTMLDivElement | null;
      if (!shell) return;
      const rect = shell.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const min = 220; const max = Math.max(360, rect.width * 0.5);
      setSidebarWidth(Math.max(min, Math.min(max, x)));
    };
    const onUp = () => setDraggingSidebar(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [draggingSidebar]);

  return (
    <div className="app-shell" style={{ ['--sidebar-width' as any]: `${sidebarWidth}px` }}>
      {tab === 'runs' ? (
        <>
          <RunList
            runs={runs}
            selectedId={selectedRunId}
            onSelect={handleSelectRun}
            onRefresh={loadRuns}
            onDelete={async (runId) => {
              try {
                const url = new URL(`/runs/${runId}`, apiBase).toString();
                const r = await fetch(url, { method: 'DELETE' });
                if (!r.ok) throw new Error(`Delete failed (${r.status})`);
                if (selectedRunId === runId) setSelectedRunId(null);
                await loadRuns();
              } catch (e: any) {
                appendLog(`Delete run error: ${e?.message ?? String(e)}`);
              }
            }}
            isLoading={loadingRuns}
          />
          <div className="sidebar-divider" onMouseDown={() => setDraggingSidebar(true)} title="Resize sidebar" />
          <main className="main-content">
            <div className="header">
              <div>
                <h1>Digital Twin Console</h1>
                <p style={{ color: '#64748b' }}>WebSocket status: {wsStatus}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button className="button" onClick={() => setTab('scenarios')}>Scenarios</button>
                <button className="button" onClick={() => setViewTab('3d')} disabled={viewTab==='3d'}>3D</button>
                <button className="button" onClick={() => setViewTab('charts')} disabled={viewTab==='charts'}>Charts</button>
                <button className="button" onClick={() => handleStep(1)} disabled={!selectedRunId || selectedRun?.status !== 'running'}>Step Once</button>
                <button className="button" onClick={() => handleStep(12)} disabled={!selectedRunId || selectedRun?.status !== 'running'}>Step ×12</button>
                <button className="button" onClick={() => setAutoRun(v => !v)} disabled={!selectedRunId || selectedRun?.status !== 'running'}>
                  {autoRun ? 'Pause' : 'Auto'}
                </button>
                <button className="button" onClick={() => setBottomCollapsed(v => !v)}>
                  {bottomCollapsed ? 'Show Bottom' : 'Hide Bottom'}
                </button>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>steps/interval</span>
                <input
                  type="number"
                  value={autoSteps}
                  min={1}
                  max={288}
                  onChange={(e) => setAutoSteps(Math.max(1, Math.min(288, Number(e.target.value))))}
                  style={{ width: 64 }}
                />
                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>ms</span>
                <input
                  type="number"
                  value={autoIntervalMs}
                  min={100}
                  step={100}
                  onChange={(e) => setAutoIntervalMs(Math.max(100, Number(e.target.value)))}
                  style={{ width: 72 }}
                />
              </div>
            </div>

            <section className="metrics-grid">
              <article className="metric-card">
                <div className="metric-label">Timestep</div>
                <div className="metric-value">{metrics.timestep ?? '—'}</div>
              </article>
              <article className="metric-card">
                <div className="metric-label">Fund NAV (DKK)</div>
                <div className="metric-value">{formatCurrency(metrics.fund_nav)}</div>
              </article>
              <article className="metric-card">
                <div className="metric-label">Trading Budget (DKK)</div>
                <div className="metric-value">{formatCurrency(metrics.budget)}</div>
              </article>
              <article className="metric-card">
                <div className="metric-label">Last Revenue</div>
                <div className="metric-value">{formatNumber(metrics.last_revenue)}</div>
              </article>
            </section>

            {/* Vertical split: top (3D/Charts) and bottom (Scenario/Log) */}
            <section className="vsplit-container" style={{ height: '100%' }}>
              <div
                className="vsplit-pane"
                style={{
                  flexBasis: bottomCollapsed ? '100%' : `${Math.round(centerSplit * 100)}%`,
                  flexGrow: 1,
                  minHeight: 0,
                  padding: viewTab === '3d' ? 0 : '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {viewTab === '3d' ? (
                  <div className="viewer-panel" style={{ minHeight: 320, height: '100%' }}>
                    <ThreeScene navValue={metrics.fund_nav ?? 0} />
                  </div>
                ) : (
                  <div className="metrics-grid" style={{ height: '100%', overflow: 'auto' }}>
                    <PedPanel apiBase={apiBase} runId={selectedRunId} />
                  </div>
                )}
              </div>

              {!bottomCollapsed && (
                <div
                  className="vsplit-divider"
                  onMouseDown={() => setDraggingVSplit(true)}
                  onDoubleClick={() => setCenterSplit(0.58)}
                />
              )}

              {/* Bottom split: scenario info (left), log (right) */}
              {!bottomCollapsed && (
              <div className="split-container" style={{ flexBasis: `${Math.round((1 - centerSplit) * 100)}%`, minHeight: 180 }}>
                {/* Scenario info on the left */}
                <div className="split-pane" style={{ flexBasis: `${Math.round(bottomSplit * 100)}%`, padding: '1rem', minHeight: 220, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                  <div className="metric-label">Scenario</div>
                  {selectedScenario ? (
                    <div>
                    <h3 style={{ margin: '0.25rem 0 0.5rem 0' }}>{selectedScenario.name}</h3>
                    <p style={{ color: '#94a3b8' }}>{selectedScenario.description ?? '—'}</p>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.95rem', whiteSpace: 'pre-wrap' }}>
                      {selectedScenario.details && (
                        <p style={{ marginTop: 0 }}>{selectedScenario.details}</p>
                      )}
                    </div>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                      <div style={{ color: '#94a3b8', marginBottom: 4 }}>Overrides</div>
                      <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                        {Object.entries(selectedScenario.config_overrides || {}).map(([k, v]: any) => (
                          <li key={k}><code>{k}</code>: <span>{String(v)}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>—</div>
                )}
              </div>

              {/* Divider */}
                <div
                  className="split-divider"
                  onMouseDown={() => setDraggingSplit(true)}
                  onDoubleClick={() => setBottomSplit(0.5)}
                />

              {/* Log on the right */}
              <div className="split-pane" style={{ flexBasis: `${Math.round((1 - bottomSplit) * 100)}%`, padding: 0, minHeight: 220, display: 'flex', flexDirection: 'column' }}>
                <div className="log-panel" style={{ height: '100%', maxHeight: '100%', flex: 1 }}>
                  {logs.map((entry, idx) => (
                    <div key={idx}>{entry}</div>
                  ))}
                </div>
              </div>
              {/* end split-container */}
              </div>
              )}
            </section>

          </main>
        </>
      ) : (
        <main className="main-content" style={{ gridColumn: '1 / -1' }}>
          <div className="header">
            <h1>Scenarios</h1>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="button" onClick={() => setTab('runs')}>Back to Runs</button>
            </div>
          </div>
          <ScenarioList apiBase={apiBase} onRun={(runId) => { setTab('runs'); setSelectedRunId(runId); loadRuns(); }} />
        </main>
      )}
    </div>
  );
}
