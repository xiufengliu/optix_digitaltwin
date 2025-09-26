import { useEffect, useState } from 'react';
import type { PedMetrics, EnergySeries } from '../types';

interface PedPanelProps {
  apiBase: string;
  runId: string | null;
}

export function PedPanel({ apiBase, runId }: PedPanelProps) {
  const [ped, setPed] = useState<PedMetrics | null>(null);
  const [series, setSeries] = useState<EnergySeries | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showDispatch, setShowDispatch] = useState(false);
  const [dispatch, setDispatch] = useState<any | null>(null);
  const svgRef = useState<SVGSVGElement | null>(null)[0];
  const [hover, setHover] = useState<{ visible: boolean; x: number; y: number; idx: number; text: string } | null>(null);

  useEffect(() => {
    if (!runId) {
      setPed(null); setSeries(null);
      return;
    }
    const ac = new AbortController();
    const load = async () => {
      try {
        const pedUrl = new URL(`/runs/${runId}/ped`, apiBase).toString();
        const serUrl = new URL(`/runs/${runId}/energy_series?limit=500`, apiBase).toString();

        const [pr, sr] = await Promise.all([
          fetch(pedUrl, { signal: ac.signal }),
          fetch(serUrl, { signal: ac.signal }),
        ]);

        if (!pr.ok) {
          const txt = await pr.text();
          setError(`PED fetch failed (${pr.status}): ${txt}`);
          setPed(null); setSeries(null); return;
        }
        if (!sr.ok) {
          const txt = await sr.text();
          setError(`Series fetch failed (${sr.status}): ${txt}`);
          setPed(null); setSeries(null); return;
        }

        const p = (await pr.json()) as any;
        const s = (await sr.json()) as EnergySeries;

        if (typeof p !== 'object' || p === null || typeof p.total_gen_mwh !== 'number') {
          setError('PED payload invalid');
          setPed(null); setSeries(null); return;
        }

        setError(null);
        setPed(p as PedMetrics);
        setSeries(s);
        if (showDispatch) {
          const durl = new URL(`/runs/${runId}/optimize`, apiBase).toString();
          const dr = await fetch(durl, { signal: ac.signal });
          if (dr.ok) setDispatch(await dr.json()); else setDispatch(null);
        } else {
          setDispatch(null);
        }
      } catch (e: any) {
        setError(e?.message ?? String(e));
        setPed(null); setSeries(null);
      }
    };
    load();
    const id = setInterval(load, 3000);
    return () => { clearInterval(id); ac.abort(); };
  }, [apiBase, runId, showDispatch]);

  return (
    <div className="metric-card" style={{ gridColumn: '1 / -1' }}>
      <div className="metric-label">PED (Positive Energy District)</div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: 8 }}>
        <button className="button" onClick={() => setShowDispatch(v => !v)}>{showDispatch ? 'Hide Dispatch' : 'Show Dispatch'}</button>
      </div>
      {error && (
        <div style={{ color: '#fca5a5', marginBottom: '0.5rem' }}>{error}</div>
      )}
      {ped ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
          <div>
            <div className="metric-label">Total Gen (MWh)</div>
            <div className="metric-value">{Number(ped.total_gen_mwh).toFixed(1)}</div>
          </div>
          <div>
            <div className="metric-label">Total Demand (MWh)</div>
            <div className="metric-value">{Number(ped.total_demand_mwh).toFixed(1)}</div>
          </div>
          <div>
            <div className="metric-label">Balance (MWh)</div>
            <div className="metric-value">{Number(ped.ped_absolute_mwh).toFixed(1)}</div>
          </div>
          <div>
            <div className="metric-label">PED Ratio</div>
            <div className="metric-value">{Number(ped.ped_ratio).toFixed(3)}</div>
          </div>
        </div>
      ) : (
        <div>—</div>
      )}

      {series && (
        <div style={{ position: 'relative', marginTop: '0.75rem' }}>
        {/* Legend (top-right) */}
        <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(15,23,42,0.85)', border: '1px solid rgba(148,163,184,0.3)', borderRadius: 8, padding: '6px 8px', display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap', zIndex: 2 }}>
          <LegendItem color="#22c55e" label="Generation" />
          <LegendItem color="#ef4444" label="Load" />
          {showDispatch && (
            <>
              <LegendItem color="#84cc16" label="PV→Load" />
              <LegendItem color="#22d3ee" label="PV→Export" />
              <LegendItem color="#f59e0b" label="Battery→Load" />
              <LegendItem color="#a78bfa" label="Grid Import" />
            </>
          )}
        </div>
        <svg ref={(el) => { /* store ref indirectly */ }} width="100%" height="140" viewBox="0 0 600 140" preserveAspectRatio="none"
          onMouseMove={(e) => {
            try {
              const svg = e.currentTarget as SVGSVGElement;
              const rect = svg.getBoundingClientRect();
              const xRel = e.clientX - rect.left;
              const gens = series.gen_mw; const loads = series.load_mw;
              const n = Math.max(gens.length, loads.length);
              const stepX = 600 / Math.max(1, n - 1);
              const idx = Math.max(0, Math.min(n - 1, Math.round(xRel / (rect.width / 600)))) ;
              const g = gens[idx] ?? 0; const l = loads[idx] ?? 0;
              let lines = [`Gen: ${g.toFixed(2)} MW`, `Load: ${l.toFixed(2)} MW`];
              if (dispatch && dispatch.series_mw) {
                const s = dispatch.series_mw as Record<string, number[]>;
                const v = (k: string) => (s[k] && s[k][idx] !== undefined ? s[k][idx] : 0);
                lines.push(`PV→Load: ${v('pv_to_load_mw').toFixed(2)} MW`);
                lines.push(`PV→Export: ${v('pv_export_mw').toFixed(2)} MW`);
                lines.push(`Batt→Load: ${v('batt_to_load_mw').toFixed(2)} MW`);
                lines.push(`Grid Import: ${v('grid_import_mw').toFixed(2)} MW`);
              }
              setHover({ visible: true, x: e.clientX - rect.left + 10, y: e.clientY - rect.top - 10, idx, text: lines.join('\n') });
            } catch {}
          }}
          onMouseLeave={() => setHover(null)}
        >
          {(() => {
            const gens = series.gen_mw;
            const loads = series.load_mw;
            const n = Math.max(gens.length, loads.length);
            if (n === 0) return null;
            const maxVal = Math.max(1, ...gens, ...loads);
            const stepX = 600 / Math.max(1, n - 1);
            const toY = (v: number) => 130 - (v / maxVal) * 120;
            const buildPath = (arr: number[]) => arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${toY(v)}`).join(' ');
            return (
              <>
                <path d={buildPath(gens)} stroke="#22c55e" fill="none" strokeWidth="2" />
                <path d={buildPath(loads)} stroke="#ef4444" fill="none" strokeWidth="2" />
                {dispatch && dispatch.series_mw && (() => {
                  const s = dispatch.series_mw as Record<string, number[]>;
                  const keys = ['pv_to_load_mw','pv_export_mw','batt_to_load_mw','grid_import_mw'];
                  const colors: Record<string,string> = {
                    pv_to_load_mw: '#84cc16',
                    pv_export_mw: '#22d3ee',
                    batt_to_load_mw: '#f59e0b',
                    grid_import_mw: '#a78bfa',
                  };
                  const maxV = Math.max(maxVal, ...keys.flatMap(k => s[k] || [0]));
                  const toY2 = (v: number) => 130 - (v / maxV) * 120;
                  const build = (arr: number[]) => arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${toY2(v)}`).join(' ');
                  return (
                    <>
                      {keys.map(k => s[k] && (<path key={k} d={build(s[k])} stroke={colors[k]} fill="none" strokeWidth="1.5" />))}
                    </>
                  );
                })()}
              </>
            );
          })()}
        </svg>
        {hover && hover.visible && (
          <div style={{ position: 'absolute', left: hover.x, top: hover.y, pointerEvents: 'none', background: 'rgba(15,23,42,0.9)', color: '#e5e7eb', border: '1px solid rgba(148,163,184,0.3)', padding: '6px 8px', borderRadius: 6, whiteSpace: 'pre' }}>
            {hover.text}
          </div>
        )}
        </div>
      )}
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span style={{ width: 12, height: 12, background: color, borderRadius: 3, display: 'inline-block' }} />
      <span style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>{label}</span>
    </span>
  );
}
