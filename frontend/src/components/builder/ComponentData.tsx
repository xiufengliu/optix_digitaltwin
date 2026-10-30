import { useCallback, useEffect, useMemo, useState } from 'react';
import { apiFetch } from '../../lib/api';
import { TimeSeriesChart } from '../charts/TimeSeriesChart';
import type { DTComponent, DTComponentType } from '../DigitalTwinBuilder';

// Data channels per component type (mirrors CHANNELS in backend/components.py)
type ChannelDef = { key: string; label: string; unit: 'kW' | 'DKK/MWh'; synthetic: string };
const CHANNELS: Partial<Record<DTComponentType, ChannelDef[]>> = {
  solar_pv: [{ key: 'generation', label: 'PV generation', unit: 'kW', synthetic: 'Measured DK2 PV fleet output per kWp (Energinet) × capacity' }],
  wind_turbine: [{ key: 'generation', label: 'Wind generation', unit: 'kW', synthetic: 'Measured DK2 onshore wind output per kW (Energinet) × capacity' }],
  smart_building: [
    { key: 'electricity', label: 'Electricity demand', unit: 'kW', synthetic: 'Demand profile shape scaled to the peak load' },
    { key: 'heat', label: 'Heat demand', unit: 'kW', synthetic: 'Area × specific heat demand, spread by outdoor temperature (Copenhagen, ERA5) plus hot water' },
  ],
  load_center: [{ key: 'electricity', label: 'Electricity demand', unit: 'kW', synthetic: 'Demand profile shape between base and peak load' }],
  ev_charger: [{ key: 'charging', label: 'Charging demand', unit: 'kW', synthetic: 'Expected charging power from typical arrival times × energy per port' }],
  smart_grid: [{ key: 'price', label: 'Electricity price', unit: 'DKK/MWh', synthetic: 'DK2 day-ahead spot price (Energinet) shaped by the tariff' }],
};

// Components the dispatcher operates (mirrors DISPATCHED in backend/components.py)
const DISPATCHED: Partial<Record<DTComponentType, string>> = {
  battery_storage: 'Charged from on-site surplus and discharged to cover demand; follows the battery parameters.',
  heat_pump: 'Runs to cover heat demand (and to fill thermal storage from on-site surplus); COP varies with outdoor temperature.',
  chp_unit: 'Heat-led: covers heat demand left after heat pumps and co-produces electricity.',
  thermal_storage: 'Filled by heat pumps from on-site electricity surplus; discharged first to cover heat demand.',
  district_heating: 'Covers the heat demand left after on-site heat sources, up to its capacity.',
};

const POWER_UNITS = ['kWh', 'kW', 'MWh', 'MW', 'Wh', 'W'];
const PRICE_UNITS = ['DKK/MWh', 'DKK/kWh', 'EUR/MWh', 'EUR/kWh'];
const MAX_UPLOAD_CHARS = 950_000; // the site proxy accepts request bodies up to 1 MB

interface Meta {
  filename?: string | null;
  rows: number;
  start: string;
  end: string;
  step_minutes: number;
  coverage: number;
  ref_size?: number | null;
  size_label?: string;
  scale: boolean;
  unit_uploaded: string;
  uploaded_at?: string;
  review?: Review | null;
}
interface Review {
  status: 'checked' | 'skipped';
  note?: string;
  summary?: string;
  issues?: { severity: 'error' | 'warning' | 'info'; message: string }[];
  actions?: string[];
}
interface Preview {
  year: number;
  years: number[];
  unit: string;
  start: string | null;
  hourly: number[];
  stats: { annual_kwh?: number; year_kwh?: number; peak_kw?: number; mean_kw?: number; mean?: number; min?: number; max?: number };
}

// ---------------------------------------------------------------------------
// CSV helpers (only the header and two columns are handled in the browser)
// ---------------------------------------------------------------------------

function splitLine(line: string, sep: string): string[] {
  if (!line.includes('"')) return line.split(sep);
  const out: string[] = [];
  let cur = '';
  let quoted = false;
  for (const ch of line) {
    if (ch === '"') quoted = !quoted;
    else if (ch === sep && !quoted) { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out;
}

interface ParsedFile { name: string; sep: string; columns: string[]; lines: string[]; timeCol: number; valueCol: number }

function inspectCsv(name: string, text: string): ParsedFile {
  const lines = text.replace(/^﻿/, '').split(/\r?\n/).filter((l) => l.trim() !== '');
  if (lines.length < 3) throw new Error('The file needs a header row and at least two data rows');
  const first = lines[0];
  const sep = [';', '\t', ','].reduce((best, s) => (first.split(s).length > first.split(best).length ? s : best), ',');
  const columns = splitLine(first, sep).map((c) => c.trim());
  if (columns.length < 2) throw new Error('Expected a time column and a value column (comma, semicolon or tab separated)');
  const sample = splitLine(lines[1], sep).map((c) => c.trim());
  let timeCol = columns.findIndex((c) => /time|date|dato|tid|fra|from|start/i.test(c));
  if (timeCol < 0) timeCol = 0;
  let valueCol = sample.findIndex((v, i) => i !== timeCol && /^-?[\d\s.]*[\d][.,]?\d*$/.test(v));
  if (valueCol < 0) valueCol = timeCol === 0 ? 1 : 0;
  return { name, sep, columns, lines, timeCol, valueCol };
}

async function gzipBase64(text: string): Promise<string | null> {
  if (typeof CompressionStream === 'undefined') return null;
  const stream = new Blob([text]).stream().pipeThrough(new CompressionStream('gzip'));
  const bytes = new Uint8Array(await new Response(stream).arrayBuffer());
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

const fmt = (v: number | null | undefined, digits = 0) =>
  v == null || !Number.isFinite(v) ? '–' : v.toLocaleString(undefined, { maximumFractionDigits: digits });

function energyKwh(kwh?: number): string {
  if (kwh == null) return '–';
  return kwh >= 10000 ? `${fmt(kwh / 1000, 1)} MWh` : `${fmt(kwh)} kWh`;
}

function statsLine(p: Preview): string {
  const s = p.stats;
  if (p.unit === 'DKK/MWh') return `Mean ${fmt(s.mean)} DKK/MWh · range ${fmt(s.min)} to ${fmt(s.max)}`;
  return `${energyKwh(s.annual_kwh)} per year (average) · peak ${fmt(s.peak_kw, 1)} kW · mean ${fmt(s.mean_kw, 1)} kW`;
}

function dailyMeans(p: Preview): { labels: string[]; values: number[] } {
  const start = p.start ? new Date(p.start.replace(' ', 'T')) : new Date(`${p.year}-01-01T00:00`);
  const labels: string[] = [];
  const values: number[] = [];
  for (let i = 0; i < p.hourly.length; i += 24) {
    const day = p.hourly.slice(i, i + 24);
    values.push(day.reduce((a, b) => a + b, 0) / day.length);
    const d = new Date(start.getTime() + i * 3600_000);
    labels.push(d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }));
  }
  return { labels, values };
}

function downloadCsv(p: Preview, filename: string, unit: string) {
  const start = p.start ? new Date(p.start.replace(' ', 'T')) : new Date(`${p.year}-01-01T00:00`);
  const pad = (n: number) => String(n).padStart(2, '0');
  const rows = [`timestamp,${unit === 'DKK/MWh' ? 'price_dkk_per_mwh' : 'power_kw'}`];
  p.hourly.forEach((v, i) => {
    const d = new Date(start.getTime() + i * 3600_000);
    rows.push(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:00,${v}`);
  });
  const url = URL.createObjectURL(new Blob([rows.join('\n')], { type: 'text/csv' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ---------------------------------------------------------------------------
// Panel
// ---------------------------------------------------------------------------

interface Props {
  apiBase: string;
  /** Saved twin id; uploads need one */
  twinId: string | null;
  /** Paper reference designs take no uploads */
  readOnly?: boolean;
  component: DTComponent;
}

export function ComponentData({ apiBase, twinId, readOnly = false, component }: Props) {
  const channels = CHANNELS[component.type];
  const dispatched = DISPATCHED[component.type];
  const [uploads, setUploads] = useState<Record<string, Meta>>({});
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!twinId) { setUploads({}); return; }
    try {
      const all = await apiFetch<Record<string, Record<string, Meta>>>(apiBase, `/digital-twins/${encodeURIComponent(twinId)}/data`);
      setUploads(all[component.id] ?? {});
    } catch {
      setUploads({});
    }
  }, [apiBase, twinId, component.id]);

  useEffect(() => { void refresh(); }, [refresh]);

  if (dispatched) {
    return (
      <>
        <div className="bn-section">Data</div>
        <p className="muted small">Simulated, no input data: {dispatched}</p>
      </>
    );
  }
  if (!channels) return null;

  return (
    <>
      <div className="bn-section">Data</div>
      {error && <p className="bn-data-error small">{error}</p>}
      {channels.map((ch) => (
        <ChannelCard
          key={`${component.id}/${ch.key}`}
          apiBase={apiBase}
          twinId={twinId}
          readOnly={readOnly}
          component={component}
          channel={ch}
          meta={uploads[ch.key] ?? null}
          onChanged={refresh}
          onError={setError}
        />
      ))}
    </>
  );
}

function ChannelCard({ apiBase, twinId, readOnly, component, channel, meta, onChanged, onError }: {
  apiBase: string; twinId: string | null; readOnly: boolean; component: DTComponent; channel: ChannelDef; meta: Meta | null;
  onChanged: () => Promise<void> | void; onError: (e: string | null) => void;
}) {
  const [preview, setPreview] = useState<Preview | null>(null);
  const [previewKind, setPreviewKind] = useState<'synthetic' | 'uploaded' | null>(null);
  const [busy, setBusy] = useState(false);
  const [file, setFile] = useState<ParsedFile | null>(null);
  const [unit, setUnit] = useState(channel.unit === 'DKK/MWh' ? 'DKK/MWh' : 'kWh');
  const [tz, setTz] = useState('local');
  const [scale, setScale] = useState(true);
  const [aiReview, setAiReview] = useState(true);
  const isPrice = channel.unit === 'DKK/MWh';
  const base = `/digital-twins/${encodeURIComponent(twinId ?? '')}/components/${encodeURIComponent(component.id)}/data/${channel.key}`;

  // A changed design or upload invalidates an open preview
  const paramsKey = JSON.stringify(component.params);
  useEffect(() => { setPreview(null); setPreviewKind(null); }, [paramsKey, meta?.uploaded_at]);

  const showPreview = async (kind: 'synthetic' | 'uploaded', year?: number) => {
    setBusy(true);
    onError(null);
    try {
      const p = kind === 'synthetic'
        ? await apiFetch<Preview>(apiBase, '/digital-twins/synthetic-preview', {
            method: 'POST',
            body: { component: { type: component.type, params: component.params }, channel: channel.key, year: year ?? null },
          })
        : (await apiFetch<{ preview: Preview }>(apiBase, `${base}${year ? `?year=${year}` : ''}`)).preview;
      setPreview(p);
      setPreviewKind(kind);
    } catch (e) {
      onError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const pickFile = async (f: File | undefined) => {
    onError(null);
    if (!f) return;
    try {
      setFile(inspectCsv(f.name, await f.text()));
    } catch (e) {
      onError((e as Error).message);
    }
  };

  const upload = async () => {
    if (!file || !twinId) return;
    setBusy(true);
    onError(null);
    try {
      // Send only the chosen columns (keeps the request small)
      const rows = [`${file.columns[file.timeCol]};${file.columns[file.valueCol]}`];
      for (const line of file.lines.slice(1)) {
        const cells = splitLine(line, file.sep);
        if (cells.length <= Math.max(file.timeCol, file.valueCol)) continue;
        rows.push(`${cells[file.timeCol].trim()};${cells[file.valueCol].trim()}`);
      }
      const text = rows.join('\n');
      const b64 = await gzipBase64(text);
      const size = b64 ? b64.length : text.length;
      if (size > MAX_UPLOAD_CHARS) throw new Error('The file is too large to upload here. Aggregate it to 15-minute or hourly values and try again.');
      const res = await apiFetch<{ meta: Meta; preview: Preview }>(apiBase, base, {
        method: 'POST',
        body: {
          ...(b64 ? { csv_gzip_b64: b64 } : { csv_text: text }),
          filename: file.name,
          unit,
          timezone: tz,
          scale,
          ai_review: aiReview,
          time_column: file.columns[file.timeCol],
          value_column: file.columns[file.valueCol],
          component: { type: component.type, params: component.params },
        },
      });
      setFile(null);
      setPreview(res.preview);
      setPreviewKind('uploaded');
      await onChanged();
    } catch (e) {
      onError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const remove = async () => {
    if (!confirm(`Remove the uploaded ${channel.label.toLowerCase()} of “${component.name}”? The synthetic profile will be used again.`)) return;
    setBusy(true);
    try {
      await apiFetch(apiBase, base, { method: 'DELETE' });
      setPreview(null);
      await onChanged();
    } catch (e) {
      onError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const toggleScale = async (value: boolean) => {
    try {
      await apiFetch(apiBase, base, { method: 'PATCH', body: { scale: value } });
      await onChanged();
    } catch (e) {
      onError((e as Error).message);
    }
  };

  const chart = useMemo(() => (preview ? dailyMeans(preview) : null), [preview]);
  const sizeNow = meta?.ref_size ? currentSize(component, channel.key) : null;

  return (
    <div className="bn-data-card">
      <div className="bn-data-head">
        <strong>{channel.label}</strong>
        <span className={`badge ${meta ? 'badge-accent' : ''}`}>{meta ? 'Measured data' : 'Synthetic'}</span>
      </div>

      {meta ? (
        <div className="small bn-data-meta">
          <div>{meta.filename || 'Uploaded file'} · {fmt(meta.rows)} rows · {fmt(meta.step_minutes)} min steps</div>
          <div className="muted">{meta.start.slice(0, 10)} → {meta.end.slice(0, 10)}; covers {fmt(meta.coverage * 100)} % of the simulated period, the rest repeats its typical week</div>
          <ReviewNote review={meta.review} />
          {meta.ref_size != null && (
            <label className="bn-switch small">
              <input type="checkbox" checked={meta.scale} onChange={(e) => void toggleScale(e.target.checked)} />
              <span>
                Scale with component size (recorded at {fmt(meta.ref_size, 1)} {meta.size_label}
                {meta.scale && sizeNow != null && Math.abs(sizeNow - meta.ref_size) > 1e-9 ? `, now ×${fmt(sizeNow / meta.ref_size, 2)}` : ''})
              </span>
            </label>
          )}
        </div>
      ) : (
        <p className="muted small">{channel.synthetic}.</p>
      )}

      <div className="bn-data-actions">
        {meta && <button className="btn btn-secondary btn-sm" disabled={busy} onClick={() => void showPreview('uploaded')}>View data</button>}
        <button className="btn btn-secondary btn-sm" disabled={busy} onClick={() => void showPreview('synthetic')}>{meta ? 'Compare synthetic' : 'Generate synthetic'}</button>
        {twinId && !readOnly ? (
          <label className={`btn btn-secondary btn-sm ${busy ? 'is-disabled' : ''}`}>
            {meta ? 'Replace…' : 'Upload CSV…'}
            <input type="file" accept=".csv,.txt,text/csv" hidden disabled={busy} onChange={(e) => { void pickFile(e.target.files?.[0]); e.target.value = ''; }} />
          </label>
        ) : null}
        {meta && !readOnly && <button className="btn btn-ghost btn-sm btn-danger" disabled={busy} onClick={() => void remove()}>Remove</button>}
      </div>
      {!twinId && <p className="muted small">Save the twin to upload measured data.</p>}
      {twinId && readOnly && <p className="muted small">Paper reference designs use the synthetic profiles. Change any value and save to get your own copy, then upload measured data there.</p>}

      {file && (
        <div className="bn-data-form">
          <div className="small"><b>{file.name}</b> · {fmt(file.lines.length - 1)} rows</div>
          <label className="field">
            <span className="field-label">Time column</span>
            <select value={file.timeCol} onChange={(e) => setFile({ ...file, timeCol: Number(e.target.value) })}>
              {file.columns.map((c, i) => <option key={i} value={i}>{c || `Column ${i + 1}`}</option>)}
            </select>
          </label>
          <label className="field">
            <span className="field-label">Value column</span>
            <select value={file.valueCol} onChange={(e) => setFile({ ...file, valueCol: Number(e.target.value) })}>
              {file.columns.map((c, i) => <option key={i} value={i}>{c || `Column ${i + 1}`}</option>)}
            </select>
          </label>
          <label className="field">
            <span className="field-label">Unit of the values</span>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              {(isPrice ? PRICE_UNITS : POWER_UNITS).map((u) => (
                <option key={u} value={u}>{u}{!isPrice && u.endsWith('h') ? ' per interval (meter reading)' : !isPrice ? ' (average power)' : ''}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="field-label">Time zone of the timestamps</span>
            <select value={tz} onChange={(e) => setTz(e.target.value)}>
              <option value="local">Danish local time (with summer time)</option>
              <option value="cet">CET all year (UTC+1)</option>
              <option value="utc">UTC</option>
            </select>
            <span className="field-hint">Timestamps with an offset (e.g. +01:00) are converted automatically.</span>
          </label>
          {!isPrice && (
            <label className="bn-switch small">
              <input type="checkbox" checked={scale} onChange={(e) => setScale(e.target.checked)} />
              <span>Scale with component size</span>
            </label>
          )}
          <label className="bn-switch small">
            <input type="checkbox" checked={aiReview} onChange={(e) => setAiReview(e.target.checked)} />
            <span>Check and clean the data with AI (Claude)</span>
          </label>
          <div className="bn-data-actions">
            <button className="btn btn-primary btn-sm" disabled={busy} onClick={() => void upload()}>{busy ? (aiReview ? 'Checking data with AI…' : 'Uploading…') : 'Upload'}</button>
            <button className="btn btn-ghost btn-sm" disabled={busy} onClick={() => setFile(null)}>Cancel</button>
          </div>
        </div>
      )}

      {preview && chart && (
        <div className="bn-data-preview">
          <div className="bn-data-head small">
            <span>{previewKind === 'uploaded' ? 'Measured data (on the simulation timeline)' : 'Synthetic profile'} · daily mean</span>
            {preview.years.length > 1 && (
              <select value={preview.year} onChange={(e) => void showPreview(previewKind ?? 'synthetic', Number(e.target.value))} aria-label="Year">
                {preview.years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            )}
          </div>
          <TimeSeriesChart
            ariaLabel={`${channel.label} of ${component.name}, daily mean`}
            height={140}
            series={[{ key: 'v', label: channel.label, color: isPrice ? '#9aa6b8' : channel.key === 'heat' ? '#f08a4b' : channel.key === 'generation' ? '#f5b83d' : '#f0647a', values: chart.values }]}
            xLabels={chart.labels}
            formatY={(v) => `${fmt(v, isPrice ? 0 : 1)} ${isPrice ? 'DKK/MWh' : 'kW'}`}
          />
          <div className="muted small">{statsLine(preview)}</div>
          <div className="bn-data-actions">
            <button className="btn btn-ghost btn-sm" onClick={() => downloadCsv(preview, `${component.name.replace(/[^\w-]+/g, '_')}_${channel.key}_${previewKind}_${preview.year}.csv`, preview.unit)}>
              Download {preview.year} as CSV
            </button>
            <button className="btn btn-ghost btn-sm" onClick={() => { setPreview(null); setPreviewKind(null); }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function ReviewNote({ review }: { review?: Review | null }) {
  if (!review) return null;
  if (review.status === 'skipped') return <div className="muted">{review.note}</div>;
  const issues = review.issues ?? [];
  const warnings = issues.filter((i) => i.severity !== 'info').length;
  const actions = review.actions ?? [];
  return (
    <details className="bn-review" open={warnings > 0}>
      <summary>
        AI data check: {actions.length ? `${actions.length} fix${actions.length > 1 ? 'es' : ''} applied` : 'no changes'}
        {warnings ? ` · ${warnings} warning${warnings > 1 ? 's' : ''}` : ''}
      </summary>
      {review.summary && <p>{review.summary}</p>}
      {actions.length > 0 && (
        <ul>{actions.map((a, i) => <li key={i} className="is-fix">{a}</li>)}</ul>
      )}
      {issues.length > 0 && (
        <ul>{issues.map((it, i) => <li key={i} className={`is-${it.severity}`}>{it.message}</li>)}</ul>
      )}
    </details>
  );
}

// Current component size of a channel (mirrors Channel.size in backend/components.py)
function currentSize(c: DTComponent, channel: string): number | null {
  const p = c.params as Record<string, unknown>;
  const n = (k: string) => (Number.isFinite(Number(p[k])) ? Number(p[k]) : 0);
  switch (c.type) {
    case 'solar_pv': return n('capacity_kwp');
    case 'wind_turbine': return n('capacity_kw');
    case 'smart_building': return channel === 'heat' ? n('area_m2') : n('load_kw');
    case 'load_center': return n('peak_load_kw') || n('base_load_kw');
    case 'ev_charger': return n('num_ports') * n('power_per_port_kw');
    default: return null;
  }
}
