import type { SimulationRun } from '../types';

interface RunListProps {
  runs: SimulationRun[];
  selectedId: string | null;
  onSelect: (runId: string) => void;
  onRefresh: () => void;
  onDelete?: (runId: string) => void;
  isLoading?: boolean;
}

export function RunList({ runs, selectedId, onSelect, onRefresh, onDelete, isLoading }: RunListProps) {
  return (
    <aside className="sidebar">
      <div className="header">
        <h2>Simulation Runs</h2>
        <button className="button" onClick={onRefresh} disabled={isLoading}>
          Refresh
        </button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        {runs.length === 0 && <p>No runs yet. Create one from the backend.</p>}
        {runs.map((run) => (
          <div key={run.id} className={`run-item ${selectedId === run.id ? 'active' : ''} run-item--with-icon`} onClick={() => onSelect(run.id)}>
            <div className="run-item__content">
              <strong>{run.name ?? 'Untitled Run'}</strong>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Status: {run.status}</div>
              <div style={{ fontSize: '0.75rem', marginTop: '0.4rem', color: '#64748b' }}>
                Updated: {new Date(run.updated_at).toLocaleString()}
              </div>
            </div>
            {onDelete && (
              <button
                className="icon-btn"
                title="Delete run"
                aria-label="Delete run"
                onClick={(e) => {
                  e.stopPropagation();
                  if (confirm('Delete this run? This cannot be undone.')) onDelete(run.id);
                }}
              >
                🗑
              </button>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
