import React, { useEffect, useMemo, useState } from 'react';
import { SankeyDiagram } from './SankeyDiagram';
import { EnergyHeatmap } from './EnergyHeatmap';
import { InteractiveTimeline } from './InteractiveTimeline';
import { ThreeScene } from './ThreeScene';
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
  const [selectedView, setSelectedView] = useState<'sankey' | 'heatmap' | 'timeline' | '3d'>('sankey');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(2);

  // Notify parent when 3D view is active for fullscreen layout
  useEffect(() => {
    if (selectedView === '3d') {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [selectedView]);

  useEffect(() => {
    if (!runId) {
      setEnergySeries(null);
      setDispatch(null);
      return;
    }

    const join = (p: string) => {
      const base = apiBase.endsWith('/') ? apiBase : apiBase + '/';
      const clean = p.replace(/^\/+/, '');
      return new URL(clean, base).toString();
    };

    const load = async () => {
      try {
        const seriesUrl = join(`/runs/${runId}/energy_series?limit=10000`);
        const optimizeUrl = join(`/runs/${runId}/optimize`);

        const [seriesRes, optimizeRes] = await Promise.all([
          fetch(seriesUrl),
          fetch(optimizeUrl),
        ]);

        if (seriesRes.ok) {
          const series: EnergySeries = await seriesRes.json();
          setEnergySeries(series);
        }

        if (optimizeRes.ok) {
          const opt = await optimizeRes.json();
          setDispatch(opt);
        }
      } catch (e) {
        console.error('Failed to load visualization data:', e);
      }
    };

    load();
    const interval = setInterval(load, 10000);
    return () => clearInterval(interval);
  }, [apiBase, runId]);

  // Prepare Sankey diagram data from dispatch results
  const sankeyData = useMemo(() => {
    if (!dispatch || !dispatch.series_mwh) return null;

    const series = dispatch.series_mwh;
    const kpis = dispatch.kpis || {};

    // Aggregate flows over the entire period
    const totalPvToLoad = Array.isArray(series.pv_to_load_mwh)
      ? series.pv_to_load_mwh.reduce((a: number, b: number) => a + b, 0)
      : 0;
    const totalPvToBattery = Array.isArray(series.pv_to_batt_mwh)
      ? series.pv_to_batt_mwh.reduce((a: number, b: number) => a + b, 0)
      : 0;
    const totalPvExport = Array.isArray(series.pv_export_mwh)
      ? series.pv_export_mwh.reduce((a: number, b: number) => a + b, 0)
      : 0;
    const totalBatteryToLoad = Array.isArray(series.batt_to_load_mwh)
      ? series.batt_to_load_mwh.reduce((a: number, b: number) => a + b, 0)
      : 0;
    const totalGridImport = Array.isArray(series.grid_import_mwh)
      ? series.grid_import_mwh.reduce((a: number, b: number) => a + b, 0)
      : 0;

    const nodes = [
      { id: 'pv', name: 'PV/Wind', type: 'source' as const },
      { id: 'grid', name: 'Grid', type: 'source' as const },
      { id: 'battery', name: 'Battery', type: 'intermediate' as const },
      { id: 'load', name: 'Load', type: 'sink' as const },
      { id: 'export', name: 'Export', type: 'sink' as const },
    ];

    const links = [
      { source: 'pv', target: 'load', value: totalPvToLoad, color: '#84cc16' },
      { source: 'pv', target: 'battery', value: totalPvToBattery, color: '#22d3ee' },
      { source: 'pv', target: 'export', value: totalPvExport, color: '#3b82f6' },
      { source: 'battery', target: 'load', value: totalBatteryToLoad, color: '#f59e0b' },
      { source: 'grid', target: 'load', value: totalGridImport, color: '#a78bfa' },
    ].filter(link => link.value > 0.01);

    return { nodes, links };
  }, [dispatch]);

  // Prepare energy flow for 3D scene (current step)
  const currentEnergyFlow = useMemo(() => {
    if (!dispatch || !dispatch.series_mw || currentStep < 0) return null;

    const series = dispatch.series_mw;
    const pvToLoadArr = Array.isArray(series.pv_to_load_mw) ? series.pv_to_load_mw : [];
    const idx = Math.min(currentStep, Math.max(0, pvToLoadArr.length - 1));

    const pvToLoad = pvToLoadArr[idx] || 0;
    const pvToBattery = (Array.isArray(series.pv_to_batt_mw) ? series.pv_to_batt_mw[idx] : 0) || 0;
    const pvExport = (Array.isArray(series.pv_export_mw) ? series.pv_export_mw[idx] : 0) || 0;
    const batteryToLoad = (Array.isArray(series.batt_to_load_mw) ? series.batt_to_load_mw[idx] : 0) || 0;
    const gridImport = (Array.isArray(series.grid_import_mw) ? series.grid_import_mw[idx] : 0) || 0;

    // Return null if all values are zero to avoid unnecessary updates
    if (pvToLoad === 0 && pvToBattery === 0 && pvExport === 0 && batteryToLoad === 0 && gridImport === 0) {
      return null;
    }

    return {
      pvToLoad,
      pvToBattery,
      pvExport,
      batteryToLoad,
      gridImport,
    };
  }, [dispatch, currentStep]);

  // Calculate battery SoC (simplified - would need actual battery state from simulation)
  const batterySoC = useMemo(() => {
    if (!dispatch || !dispatch.kpis) return null;
    // Estimate SoC based on battery throughput (very simplified)
    const throughput = dispatch.kpis.battery_throughput_mwh || 0;
    const batteryCapacity = 0.32; // Default from scenarios
    return Math.min(1, Math.max(0, 0.5 + (throughput / (batteryCapacity * 10))));
  }, [dispatch]);

  if (!runId) {
    return <div style={{ padding: '2rem', color: '#94a3b8' }}>Select a run to view advanced visualizations</div>;
  }

  return (
    <div style={{ 
      height: selectedView === '3d' ? '100vh' : '100%', 
      width: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      gap: selectedView === '3d' ? 0 : '1rem', 
      padding: selectedView === '3d' ? 0 : '1rem',
      position: selectedView === '3d' ? 'fixed' : 'relative',
      top: selectedView === '3d' ? 0 : undefined,
      left: selectedView === '3d' ? 0 : undefined,
      right: selectedView === '3d' ? 0 : undefined,
      bottom: selectedView === '3d' ? 0 : undefined,
      zIndex: selectedView === '3d' ? 9999 : undefined,
      background: selectedView === '3d' ? '#0f172a' : 'transparent',
    }}>
      {/* Header with back button and view selector - hidden when in 3D view */}
      {selectedView !== '3d' && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          {onBack && (
            <button
              className="button"
              onClick={onBack}
              style={{
                background: '#64748b',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              ← Back to Main View
            </button>
          )}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginLeft: 'auto' }}>
            <button
              className="button"
              onClick={() => setSelectedView('sankey')}
              style={{ background: selectedView === 'sankey' ? '#3b82f6' : undefined }}
            >
              Sankey
            </button>
            <button
              className="button"
              onClick={() => setSelectedView('heatmap')}
              style={{ background: selectedView === 'heatmap' ? '#3b82f6' : undefined }}
            >
              Heatmap
            </button>
            <button
              className="button"
              onClick={() => setSelectedView('3d')}
              style={{ background: selectedView === '3d' ? '#3b82f6' : undefined }}
            >
              3D Flow
            </button>
            <button
              className="button"
              onClick={() => setSelectedView('timeline')}
              style={{ background: selectedView === 'timeline' ? '#3b82f6' : undefined }}
            >
              Timeline
            </button>
            {selectedView === 'timeline' && (
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#cbd5e1', fontSize: '0.9rem' }}>
                Speed:
                <input
                  type="number"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={playbackSpeed}
                  onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                  style={{ width: '60px', padding: '0.25rem' }}
                />
                steps/sec
              </label>
            )}
          </div>
        </div>
      )}

      {/* Timeline (always visible when selected) */}
      {selectedView === 'timeline' && onStepChange && (
        <InteractiveTimeline
          currentStep={currentStep}
          maxSteps={maxSteps}
          onStepChange={onStepChange}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
          playbackSpeed={playbackSpeed}
        />
      )}

      {/* Main visualization area */}
      <div style={{ 
        flex: 1, 
        minHeight: 0, 
        display: 'flex', 
        flexDirection: 'column',
        position: selectedView === '3d' ? 'relative' : 'static',
        height: selectedView === '3d' ? '100%' : undefined,
      }}>
        {selectedView === 'sankey' && (
          <div style={{ flex: 1, background: '#1e293b', borderRadius: '8px', padding: '1rem' }}>
            {sankeyData ? (
              <SankeyDiagram nodes={sankeyData.nodes} links={sankeyData.links} />
            ) : (
              <div style={{ padding: '2rem', color: '#94a3b8', textAlign: 'center' }}>
                Loading energy flow data... (Run optimization first)
              </div>
            )}
          </div>
        )}

        {selectedView === 'heatmap' && (
          <div style={{ flex: 1, background: '#1e293b', borderRadius: '8px' }}>
            {energySeries ? (
              <EnergyHeatmap
                data={energySeries.gen_mw || []}
                timestamps={energySeries.timestamps}
                stepSize={10}
              />
            ) : (
              <div style={{ padding: '2rem', color: '#94a3b8', textAlign: 'center' }}>
                Loading energy series data...
              </div>
            )}
          </div>
        )}

        {selectedView === '3d' && (
          <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#0f172a', 
            overflow: 'hidden', 
            zIndex: 10
          }}>
            {/* Fixed control bar on top of 3D scene */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '0.75rem 1rem',
              borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              {onBack && (
                <button
                  className="button"
                  onClick={onBack}
                  style={{
                    background: '#64748b',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    zIndex: 1001,
                  }}
                >
                  ← Back to Main View
                </button>
              )}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginLeft: 'auto' }}>
                <button
                  className="button"
                  onClick={() => setSelectedView('sankey')}
                  style={{ background: selectedView === 'sankey' ? '#3b82f6' : undefined, fontSize: '0.85rem' }}
                >
                  Sankey
                </button>
                <button
                  className="button"
                  onClick={() => setSelectedView('heatmap')}
                  style={{ background: selectedView === 'heatmap' ? '#3b82f6' : undefined, fontSize: '0.85rem' }}
                >
                  Heatmap
                </button>
                <button
                  className="button"
                  onClick={() => setSelectedView('3d')}
                  style={{ background: selectedView === '3d' ? '#3b82f6' : undefined, fontSize: '0.85rem' }}
                >
                  3D Flow
                </button>
                <button
                  className="button"
                  onClick={() => setSelectedView('timeline')}
                  style={{ background: selectedView === 'timeline' ? '#3b82f6' : undefined, fontSize: '0.85rem' }}
                >
                  Timeline
                </button>
              </div>
            </div>
            <div style={{ width: '100%', height: '100%', paddingTop: '52px', boxSizing: 'border-box' }}>
              {!dispatch && (
                <div style={{
                  position: 'absolute',
                  top: '60px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 1001,
                  background: 'rgba(239, 68, 68, 0.9)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                }}>
                  ⚠️ Please run optimization first to see energy flow visualization
                  <br />
                  <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                    (Click "Show Dispatch" in Charts view to run optimization)
                  </span>
                </div>
              )}
              <ThreeScene
                navValue={null}
                reduceMotion={false}
                energyFlow={currentEnergyFlow}
                batterySoC={batterySoC}
              />
            </div>
          </div>
        )}

        {selectedView === 'timeline' && onStepChange && (
          <div style={{ flex: 1, background: '#1e293b', borderRadius: '8px', padding: '1rem', color: '#cbd5e1' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Simulation Timeline</h3>
              <p style={{ margin: 0, color: '#94a3b8' }}>
                Use the timeline above to scrub through simulation history. Select a different view to see data for the selected step.
              </p>
            </div>
            {energySeries && (
              <div>
                <p>Current step: {currentStep}</p>
                <p>Generation: {energySeries.gen_mw?.[currentStep]?.toFixed(2) || 'N/A'} MW</p>
                <p>Load: {energySeries.load_mw?.[currentStep]?.toFixed(2) || 'N/A'} MW</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
