import { formatRelative } from '../lib/format';
import { formatTwinSummary, twinFromOverrides, twinSummary } from '../lib/twin';
import type { DigitalTwinConfig } from './DigitalTwinBuilder';
import type { SimulationRun } from '../types';

interface RunListProps {
  runs: SimulationRun[];
  selectedId: string | null;
  onSelect: (runId: string) => void;
  onRefresh: () => void;
  onDelete?: (runId: string) => void;
  onRestart?: (runId: string) => void;
  onNewRun?: () => void;
  isLoading?: boolean;
  busyId?: string | null;
}

export function runSource(run: SimulationRun): string {
  if (run.scenario_id) return 'Scenario';
  if (run.digital_twin_id) return 'Digital twin';
  return 'Custom';
}

/** What the run simulated: the design's key sizes and which model was used. */
export function runDesign(run: SimulationRun): { summary: string; full: boolean } {
  const overrides = (run.config?.config_overrides ?? {}) as Record<string, unknown>;
  const components = overrides.twin_components as DigitalTwinConfig['components'] | undefined;
  if (Array.isArray(components)) return { summary: formatTwinSummary(twinSummary({ components })), full: true };
  return { summary: formatTwinSummary(twinSummary(twinFromOverrides('', '', overrides))), full: false };
}

export function RunStatusBadge({ run }: { run: SimulationRun }) {
  if (run.session_id && run.status === 'running') return <span className="badge badge-live">Live</span>;
  if (run.status === 'failed') return <span className="badge badge-bad">Failed</span>;
  return <span className="badge badge-idle" title="The in-memory session ended (e.g. backend restart). Restart to simulate again.">Inactive</span>;
}

export function RunList({ runs, selectedId, onSelect, onRefresh, onDelete, onRestart, onNewRun, isLoading, busyId }: RunListProps) {
  return (
    <aside className="run-list">
      <div className="panel-header">
        <div>
          <h2>Runs</h2>
          <p className="muted small">{runs.length} total · {runs.filter((r) => r.session_id).length} live</p>
        </div>
        <div className="row gap-xs">
          <button className="btn btn-ghost btn-icon" onClick={onRefresh} disabled={isLoading} title="Refresh runs" aria-label="Refresh runs">
            <span className={isLoading ? 'spin' : ''}>↻</span>
          </button>
          {onNewRun && <button className="btn btn-primary btn-sm" onClick={onNewRun}>New run</button>}
        </div>
      </div>

      <div className="run-items" role="listbox" aria-label="Simulation runs">
        {runs.length === 0 && (
          <div className="empty-state">
            <p>No runs yet.</p>
            <p className="muted small">Pick a scenario and press <strong>Run</strong>, or build a digital twin.</p>
            {onNewRun && <button className="btn btn-primary btn-sm" onClick={onNewRun}>Browse scenarios</button>}
          </div>
        )}
        {runs.map((run) => {
          const live = Boolean(run.session_id);
          const design = runDesign(run);
          return (
            <div
              key={run.id}
              role="option"
              tabIndex={0}
              aria-selected={selectedId === run.id}
              className={`run-item ${selectedId === run.id ? 'is-active' : ''} ${live ? '' : 'is-inactive'}`}
              onClick={() => onSelect(run.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(run.id); } }}
            >
              <div className="run-item-top">
                <strong className="run-item-name" title={run.name ?? run.id}>{run.name ?? 'Untitled run'}</strong>
                <RunStatusBadge run={run} />
              </div>
              <div className="run-item-design muted small" title={design.full ? 'Every component simulated (heat, EV, CHP, measured data)' : 'Hand-entered sizes: electricity only'}>
                {design.summary}{design.full ? '' : ' · electricity only'}
              </div>
              <div className="run-item-meta">
                <span className="tag">{runSource(run)}</span>
                <span title={new Date(run.created_at).toLocaleString()}>
                  Started {new Date(run.created_at).toLocaleString(undefined, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                </span>
                <div className="run-item-actions">
                {!live && onRestart && (
                  <button
                    className="btn btn-sm btn-secondary"
                    disabled={busyId === run.id}
                    onClick={(e) => { e.stopPropagation(); onRestart(run.id); }}
                  >
                    {busyId === run.id ? 'Starting…' : 'Restart'}
                  </button>
                )}
                {onDelete && (
                  <button
                    className="btn btn-sm btn-ghost btn-danger"
                    title="Delete run"
                    aria-label={`Delete ${run.name ?? 'run'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`Delete “${run.name ?? 'this run'}”? This cannot be undone.`)) onDelete(run.id);
                    }}
                  >
                    Delete
                  </button>
                )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
