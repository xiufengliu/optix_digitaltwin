import { TimeSeriesChart, type ChartSeries } from './charts/TimeSeriesChart';
import { formatEnergy, formatPercent, formatPower, formatTimestamp } from '../lib/format';
import type { DispatchResult, EnergySeries, PedMetrics } from '../types';

export const COLORS = {
  solar: '#f5b83d',
  wind: '#5ab8e8',
  hydro: '#4f8ef7',
  load: '#f0647a',
  pvToLoad: '#8bd450',
  battery: '#2fc59b',
  dsm: '#c38cf2',
  grid: '#9aa6b8',
  export: '#41c6d9',
  chp: '#d98c5f',
  heatPump: '#f08a4b',
  thermal: '#e0b04b',
  districtHeat: '#b0566b',
  externalHeat: '#7b8494',
  curtailed: '#c9a227',
};

function shortLabel(label: string): string {
  const date = new Date(label.replace(' ', 'T'));
  if (Number.isNaN(date.getTime())) return label;
  return date.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function labelsFor(steps: number[], timestamps?: string[] | null): string[] {
  return timestamps && timestamps.length === steps.length ? timestamps : steps.map((s) => `Step ${s}`);
}

export function Stat({ label, value, hint, tone }: { label: string; value: string; hint?: string; tone?: 'good' | 'bad' | 'neutral' }) {
  return (
    <div className="stat">
      <div className="stat-label">{label}</div>
      <div className={`stat-value ${tone ? `tone-${tone}` : ''}`}>{value}</div>
      {hint && <div className="stat-hint">{hint}</div>}
    </div>
  );
}

export function PedGauge({ ratio }: { ratio?: number | null }) {
  const value = typeof ratio === 'number' && Number.isFinite(ratio) ? ratio : null;
  const pct = value === null ? 0 : Math.min(value / 1.5, 1) * 100;
  return (
    <div className="ped-gauge" aria-label="PED ratio relative to the 1.0 target">
      <div className="ped-gauge-track">
        <div className={`ped-gauge-fill ${value !== null && value >= 1 ? 'is-good' : ''}`} style={{ width: `${pct}%` }} />
        <div className="ped-gauge-target" style={{ left: `${100 / 1.5}%` }} title="PED target (1.0)" />
      </div>
      <div className="ped-gauge-scale"><span>0</span><span>1.0 target</span><span>1.5+</span></div>
    </div>
  );
}

interface EnergyProps {
  ped: PedMetrics | null;
  series: EnergySeries | null;
}

export function EnergyPanel({ ped, series }: EnergyProps) {
  const chartSeries: ChartSeries[] = series
    ? [
        { key: 'solar', label: 'Solar', color: COLORS.solar, values: series.solar_mw ?? [], stacked: true },
        { key: 'wind', label: 'Wind', color: COLORS.wind, values: series.wind_mw ?? [], stacked: true },
        { key: 'hydro', label: 'Hydro', color: COLORS.hydro, values: series.hydro_mw ?? [], stacked: true },
        { key: 'chp', label: 'CHP', color: COLORS.chp, values: series.chp_mw ?? [], stacked: true },
        { key: 'load', label: series.heat_pump_mw || series.ev_mw ? 'Load (incl. heat pumps, EV)' : 'Load', color: COLORS.load, values: series.load_mw },
      ].filter((s) => s.key === 'load' || s.values.some((v) => v > 1e-9))
    : [];
  const balance = ped?.ped_absolute_mwh;

  return (
    <div className="panel-stack">
      <div className="stat-row">
        <Stat label="On-site generation" value={formatEnergy(ped?.total_gen_mwh)} hint={ped ? `renewable, over ${ped.period_hours.toFixed(0)} h simulated` : undefined} />
        <Stat label="Demand" value={formatEnergy(ped?.total_demand_mwh)} />
        <Stat label="Energy balance" value={balance == null ? '—' : `${balance >= 0 ? '+' : ''}${formatEnergy(balance)}`} tone={balance == null ? undefined : balance >= 0 ? 'good' : 'bad'} hint="generation − demand" />
        <div className="stat">
          <div className="stat-label">PED ratio</div>
          <div className={`stat-value ${ped ? (ped.ped_ratio >= 1 ? 'tone-good' : 'tone-bad') : ''}`}>{ped ? ped.ped_ratio.toFixed(2) : '—'}</div>
          <PedGauge ratio={ped?.ped_ratio} />
        </div>
      </div>
      <TimeSeriesChart
        ariaLabel="Generation by source and load over time"
        series={chartSeries}
        xLabels={series ? labelsFor(series.steps, series.timestamps) : []}
        formatY={formatPower}
        formatX={shortLabel}
        emptyMessage="Advance the simulation to see generation and load."
      />
      {series && series.steps.length > 0 && (
        <p className="muted small">
          Showing {formatTimestamp(series.timestamps?.[0])} → {formatTimestamp(series.timestamps?.[series.timestamps.length - 1])}
          {series.steps.length < series.end - series.start ? ` · averaged into ${series.steps.length} points` : ''}
        </p>
      )}
    </div>
  );
}

export function DispatchPanel({ dispatch, series }: { dispatch: DispatchResult | null; series: EnergySeries | null }) {
  if (!dispatch) {
    return <div className="chart-empty tall">Computing merit-order dispatch…</div>;
  }
  const s = dispatch.series_mw;
  const k = dispatch.kpis;
  const hasBattery = Number(dispatch.config?.battery_energy_mwh) > 0;
  const hasDsm = Boolean(dispatch.config?.has_dsm ?? Number(dispatch.config?.flexible_load_share) > 0);
  const hasHeat = Boolean(dispatch.config?.has_heat);
  const curtailed = k.curtailed_mwh ?? 0;
  const overLimitHours = k.import_over_limit_hours ?? 0;
  const sources = Object.values(dispatch.data_sources ?? {});
  const uploaded = sources.filter((v) => v === 'uploaded').length;
  // /optimize and /energy_series share window + bucketing, so timestamps line up
  const aligned = series && series.steps.length === dispatch.steps.length && series.steps[0] === dispatch.steps[0];
  const labels = labelsFor(dispatch.steps, aligned ? series!.timestamps : null);

  const supply: ChartSeries[] = [
    { key: 'pv', label: 'On-site → load', color: COLORS.pvToLoad, values: s.pv_to_load_mw ?? [], stacked: true },
    ...(hasBattery ? [{ key: 'batt', label: 'Battery → load', color: COLORS.battery, values: s.batt_to_load_mw ?? [], stacked: true }] : []),
    ...(hasDsm ? [{ key: 'dsm', label: 'Shifted demand', color: COLORS.dsm, values: s.dsm_discharge_mw ?? [], stacked: true }] : []),
    { key: 'grid', label: 'Grid import', color: COLORS.grid, values: s.grid_import_mw ?? [], stacked: true },
    { key: 'export', label: 'Export', color: COLORS.export, values: s.pv_export_mw ?? [], dashed: true },
  ];

  return (
    <div className="panel-stack">
      <div className="stat-row">
        <Stat label="Self-sufficiency" value={formatPercent(k.self_sufficiency_ratio)} hint="demand met without grid" tone={(k.self_sufficiency_ratio ?? 0) >= 0.5 ? 'good' : undefined} />
        <Stat label="Self-consumption" value={formatPercent(k.self_consumption_ratio)} hint="generation used on site" />
        <Stat label="Grid import" value={formatEnergy(k.grid_import_mwh)} />
        <Stat label="Export" value={formatEnergy(k.export_mwh)} />
        {hasBattery && <Stat label="Battery throughput" value={formatEnergy(k.battery_throughput_mwh)} />}
        {curtailed > 1e-6 && <Stat label="Curtailed" value={formatEnergy(curtailed)} hint="surplus above the export limit" tone="bad" />}
        {overLimitHours > 0 && <Stat label="Above import limit" value={`${overLimitHours.toFixed(0)} h`} hint={`${formatEnergy(k.import_over_limit_mwh)} over the connection limit`} tone="bad" />}
        {k.total_energy_ped_ratio != null && (
          <Stat label="PED ratio, all energy" value={k.total_energy_ped_ratio.toFixed(2)} hint="incl. heat, fuel and grid losses" tone={k.total_energy_ped_ratio >= 1 ? 'good' : 'bad'} />
        )}
      </div>
      <h4 className="section-title">How demand is met</h4>
      <TimeSeriesChart ariaLabel="Dispatch of demand by source" series={supply} xLabels={labels} formatY={formatPower} formatX={shortLabel} />
      {hasBattery && (
        <>
          <h4 className="section-title">Battery state of charge</h4>
          <TimeSeriesChart
            ariaLabel="Battery state of charge"
            height={150}
            series={[{ key: 'soc', label: 'Stored energy', color: COLORS.battery, values: dispatch.soc_mwh ?? [] }]}
            xLabels={labels}
            formatY={formatEnergy}
            formatX={shortLabel}
          />
        </>
      )}
      {hasHeat && <HeatSection dispatch={dispatch} labels={labels} />}
      <p className="muted small">
        PV-first merit order: on-site → load, → battery{hasHeat ? ', → heat pump into thermal storage' : ''}, → export; then battery → load, then grid import.
        {hasHeat && ' Heat: thermal storage → heat pump → CHP → district heating.'} KPIs cover the steps simulated so far.
      </p>
      {(dispatch.data_source_details?.length ?? 0) > 0 && (
        <details className="data-sources">
          <summary className="muted small">Input data: {uploaded} measured, {sources.length - uploaded} synthetic series</summary>
          <ul>
            {dispatch.data_source_details!.map((d) => (
              <li key={`${d.component}/${d.channel}`}>
                <span>{d.component} · {d.label}</span>
                <span className={`badge ${d.source === 'uploaded' ? 'badge-accent' : ''}`}>{d.source === 'uploaded' ? 'Measured' : 'Synthetic'}</span>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

function HeatSection({ dispatch, labels }: { dispatch: DispatchResult; labels: string[] }) {
  const s = dispatch.series_mw;
  const k = dispatch.kpis;
  const sub = (a?: number[], b?: number[]) => (a ?? []).map((v, i) => v - (b?.[i] ?? 0));
  const external = k.external_heat_mwh ?? 0;
  const heat: ChartSeries[] = [
    { key: 'ts', label: 'Thermal storage', color: COLORS.thermal, values: s.ts_discharge_mw ?? [], stacked: true },
    // Heat pump heat that went straight to demand (the rest filled the storage)
    { key: 'hp', label: 'Heat pump', color: COLORS.heatPump, values: sub(s.hp_heat_mw, s.ts_charge_mw), stacked: true },
    { key: 'chp', label: 'CHP', color: COLORS.chp, values: s.chp_heat_mw ?? [], stacked: true },
    { key: 'dh', label: 'District heating', color: COLORS.districtHeat, values: s.dh_heat_mw ?? [], stacked: true },
    { key: 'ext', label: 'Not covered on site', color: COLORS.externalHeat, values: s.external_heat_mw ?? [], stacked: true },
    { key: 'demand', label: 'Heat demand', color: COLORS.load, values: s.heat_demand_mw ?? [] },
  ].filter((x) => x.key === 'demand' || x.values.some((v) => v > 1e-9));

  return (
    <>
      <h4 className="section-title">Heat</h4>
      <div className="stat-row">
        <Stat label="Heat demand" value={formatEnergy(k.heat_demand_mwh)} />
        {(k.hp_heat_mwh ?? 0) > 0 && <Stat label="Heat pumps" value={formatEnergy(k.hp_heat_mwh)} hint={`${formatEnergy(k.hp_el_mwh)} electricity · SPF ${k.hp_spf?.toFixed(2) ?? '–'}`} />}
        {(k.chp_heat_mwh ?? 0) > 0 && <Stat label="CHP" value={formatEnergy(k.chp_heat_mwh)} hint={`+ ${formatEnergy(k.chp_el_mwh)} electricity, ${formatEnergy(k.chp_fuel_mwh)} fuel`} />}
        {(k.ts_discharge_mwh ?? 0) > 0 && <Stat label="From thermal storage" value={formatEnergy(k.ts_discharge_mwh)} hint={`${formatEnergy(k.ts_losses_mwh)} standing losses`} />}
        {(k.dh_heat_mwh ?? 0) > 0 && <Stat label="District heating" value={formatEnergy(k.dh_heat_mwh)} />}
        {external > 1e-6 && <Stat label="Not covered on site" value={formatEnergy(external)} hint="no or too little heat supply in the design" tone="bad" />}
      </div>
      <TimeSeriesChart ariaLabel="Heat supply by source" series={heat} xLabels={labels} formatY={formatPower} formatX={shortLabel} />
      {dispatch.thermal_soc_mwh && dispatch.thermal_soc_mwh.some((v) => v > 1e-9) && (
        <>
          <h4 className="section-title">Thermal storage</h4>
          <TimeSeriesChart
            ariaLabel="Thermal storage content"
            height={150}
            series={[{ key: 'tsoc', label: 'Stored heat', color: COLORS.thermal, values: dispatch.thermal_soc_mwh }]}
            xLabels={labels}
            formatY={formatEnergy}
            formatX={shortLabel}
          />
        </>
      )}
    </>
  );
}

export function exportSeriesCsv(series: EnergySeries | null, dispatch: DispatchResult | null) {
  if (!series) return;
  const keys = ['pv_to_load_mw', 'pv_to_batt_mw', 'pv_export_mw', 'batt_to_load_mw', 'grid_import_mw',
    ...['curtailed_mw', 'heat_demand_mw', 'hp_heat_mw', 'hp_el_mw', 'ts_charge_mw', 'ts_discharge_mw', 'chp_heat_mw', 'chp_el_mw', 'dh_heat_mw', 'external_heat_mw']
      .filter((key) => dispatch?.series_mw[key])];
  const aligned = dispatch && dispatch.steps.length === series.steps.length && dispatch.steps[0] === series.steps[0];
  const header = ['step', 'timestamp', 'gen_mw', 'load_mw', 'solar_mw', 'wind_mw', 'hydro_mw', ...(aligned ? [...keys, 'battery_soc_mwh'] : [])];
  const rows = [header.join(',')];
  series.steps.forEach((step, i) => {
    const row = [
      step,
      series.timestamps?.[i] ?? '',
      series.gen_mw[i],
      series.load_mw[i],
      series.solar_mw?.[i] ?? '',
      series.wind_mw?.[i] ?? '',
      series.hydro_mw?.[i] ?? '',
      ...(aligned ? [...keys.map((key) => dispatch!.series_mw[key]?.[i] ?? ''), dispatch!.soc_mwh?.[i] ?? ''] : []),
    ];
    rows.push(row.join(','));
  });
  const url = URL.createObjectURL(new Blob([rows.join('\n')], { type: 'text/csv' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'digital_twin_series.csv';
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
