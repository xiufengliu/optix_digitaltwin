import React, { useEffect, useMemo, useState } from 'react';
import { SankeyDiagram } from './SankeyDiagram';
import { EnergyHeatmap } from './EnergyHeatmap';
import { InteractiveTimeline } from './InteractiveTimeline';
import type { EnergySeries } from '../types';

interface AdvancedVisualizationsProps {
  apiBase: string;
  runId: string | null;
  currentStep: number;
  maxSteps: number;
  onStepChange?: (step: number) => void;
  onBack?: () => void;
}

export function AdvancedVisualizations({
  apiBase,
  runId,
  currentStep,
  maxSteps,
  onStepChange,
  onBack,
}: AdvancedVisualizationsProps) {
  const [energySeries, setEnergySeries] = useState<EnergySeries | null>(null);
  const [dispatch, setDispatch] = useState<any | null>(null);
  const [selectedView, setSelectedView] = useState<'sankey' | 'heatmap' | 'timeline'>('sankey');

  useEffect(() => {
    if (!runId) {
      setEnergySeries(null);
      setDispatch(null);
      return;
    }

    const join = (p: string) => {
      const base = apiBase.endsWith('/') ? apiBase : apiBase + '/';
      return new URL(p.replace(/^\/+/, ''), base).toString();
    };

    const load = async () => {
      try {
        const [seriesRes, optimizeRes] = await Promise.all([
          fetch(join(`/runs/${runId}/energy_series?limit=10000`)),
          fetch(join(`/runs/${runId}/optimize`)),
        ]);

        if (seriesRes.ok) setEnergySeries(await seriesRes.json());
        if (optimizeRes.ok) setDispatch(await optimizeRes.json());
      } catch (e) {
        console.error('Failed to load visualization data:', e);
      }
    };

    load();
    const interval = setInterval(load, 10000);
    return () => clearInterval(interval);
  }, [apiBase, runId]);

  const sankeyData = useMemo(() => {
    if (!dispatch?.series_mwh) return null;
    const series = dispatch.series_mwh;
    const sum = (arr: number[]) => arr?.reduce((a, b) => a + b, 0) || 0;

    return {
      nodes: [
        { id: 'pv', label: 'Solar PV' },
        { id: 'battery', label: 'Battery' },
        { id: 'grid', label: 'Grid' },
        { id: 'load', label: 'Load' },
      ],
      links: [
        { source: 'pv', target: 'load', value: sum(series.pv_to_load_mwh) },
        { source: 'pv', target: 'battery', value: sum(series.pv_to_batt_mwh) },
        { source: 'pv', target: 'grid', value: sum(series.pv_export_mwh) },
        { source: 'battery', target: 'load', value: sum(series.batt_to_load_mwh) },
        { source: 'grid', target: 'load', value: sum(series.grid_import_mwh) },
      ].filter(l => l.value > 0.01),
      kpis: dispatch.kpis || {},
    };
  }, [dispatch]);

  const heatmapData = useMemo(() => {
    if (!energySeries) return null;
    return {
      timestamps: energySeries.timestamps || energySeries.steps.map(String),
      generation: energySeries.gen_mw,
      load: energySeries.load_mw,
      netEnergy: energySeries.gen_mw.map((g, i) => g - energySeries.load_mw[i]),
    };
  }, [energySeries]);

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        {onBack && (
          <button className="button" onClick={onBack} style={{ background: '#475569' }}>
            ← Back
          </button>
        )}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {(['sankey', 'heatmap', 'timeline'] as const).map(view => (
            <button
              key={view}
              className="button"
              onClick={() => setSelectedView(view)}
              style={{ background: selectedView === view ? '#3b82f6' : undefined }}
            >
              {view === 'sankey' ? '🔀 Energy Flow' : view === 'heatmap' ? '🌡️ Heatmap' : '📈 Timeline'}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
        {selectedView === 'sankey' && (
          <div style={{ background: 'rgba(30, 41, 59, 0.8)', borderRadius: '0.75rem', padding: '1rem', height: '100%' }}>
            <h3 style={{ margin: '0 0 1rem', fontSize: '1rem' }}>Energy Flow (Sankey)</h3>
            {sankeyData ? (
              <>
                <SankeyDiagram data={sankeyData} width={800} height={400} />
                <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
                  {Object.entries(sankeyData.kpis).slice(0, 6).map(([k, v]) => (
                    <div key={k} style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>{k.replace(/_/g, ' ')}</div>
                      <div style={{ fontSize: '1rem', fontWeight: 600 }}>{typeof v === 'number' ? v.toFixed(2) : String(v)}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ color: '#64748b', textAlign: 'center', padding: '2rem' }}>Loading energy flow data...</div>
            )}
          </div>
        )}

        {selectedView === 'heatmap' && (
          <div style={{ background: 'rgba(30, 41, 59, 0.8)', borderRadius: '0.75rem', padding: '1rem', height: '100%' }}>
            <h3 style={{ margin: '0 0 1rem', fontSize: '1rem' }}>Energy Heatmap</h3>
            {heatmapData ? (
              <EnergyHeatmap data={heatmapData} width={900} height={300} />
            ) : (
              <div style={{ color: '#64748b', textAlign: 'center', padding: '2rem' }}>Loading heatmap data...</div>
            )}
          </div>
        )}

        {selectedView === 'timeline' && (
          <div style={{ background: 'rgba(30, 41, 59, 0.8)', borderRadius: '0.75rem', padding: '1rem', height: '100%' }}>
            <h3 style={{ margin: '0 0 1rem', fontSize: '1rem' }}>Interactive Timeline</h3>
            {energySeries ? (
              <InteractiveTimeline
                data={energySeries}
                currentStep={currentStep}
                onStepChange={onStepChange}
                width={900}
                height={350}
              />
            ) : (
              <div style={{ color: '#64748b', textAlign: 'center', padding: '2rem' }}>Loading timeline data...</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdvancedVisualizations;
