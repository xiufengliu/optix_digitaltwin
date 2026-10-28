import { useEffect, useMemo, useRef, useState } from 'react';

export interface ChartSeries {
  key: string;
  label: string;
  color: string;
  values: number[];
  /** Stacked series are drawn as filled areas on top of each other, in order. */
  stacked?: boolean;
  dashed?: boolean;
}

interface Props {
  series: ChartSeries[];
  /** One label per point (timestamps or step numbers). */
  xLabels: string[];
  height?: number;
  formatY: (value: number) => string;
  formatX?: (label: string) => string;
  emptyMessage?: string;
  ariaLabel: string;
}

const PAD = { top: 12, right: 16, bottom: 28, left: 64 };

function niceTicks(max: number, count = 4): number[] {
  if (!(max > 0)) return [0];
  const raw = max / count;
  const magnitude = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * magnitude).find((s) => s >= raw) ?? raw;
  const ticks: number[] = [];
  // Last tick must reach the data maximum, otherwise the top of the series is clipped
  for (let v = 0; ticks.length === 0 || ticks[ticks.length - 1] < max; v += step) ticks.push(v);
  return ticks;
}

export function TimeSeriesChart({ series, xLabels, height = 260, formatY, formatX = (l) => l, emptyMessage = 'No data yet', ariaLabel }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(640);
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = Math.floor(entries[0].contentRect.width);
      if (w > 0) setWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const visible = useMemo(() => series.filter((s) => !hidden.has(s.key) && s.values.length > 0), [series, hidden]);
  const n = Math.max(0, ...series.map((s) => s.values.length));
  const plotW = Math.max(10, width - PAD.left - PAD.right);
  const plotH = Math.max(10, height - PAD.top - PAD.bottom);

  const geometry = useMemo(() => {
    // Cumulative baselines for stacked series
    const stackTop = new Array<number>(n).fill(0);
    const layers = new Map<string, { lower: number[]; upper: number[] }>();
    for (const s of visible) {
      if (!s.stacked) continue;
      const lower = stackTop.slice();
      for (let i = 0; i < n; i++) stackTop[i] += Math.max(0, s.values[i] ?? 0);
      layers.set(s.key, { lower, upper: stackTop.slice() });
    }
    let max = 0;
    for (const s of visible) {
      const vals = layers.get(s.key)?.upper ?? s.values;
      for (const v of vals) if (Number.isFinite(v) && v > max) max = v;
    }
    const ticks = niceTicks(max * 1.05 || 1);
    return { layers, ticks, yMax: ticks[ticks.length - 1] || 1 };
  }, [visible, n]);

  const x = (i: number) => PAD.left + (n <= 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const y = (v: number) => PAD.top + plotH - (Math.max(0, v) / geometry.yMax) * plotH;

  const linePath = (vals: number[]) =>
    vals.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
  const areaPath = (lower: number[], upper: number[]) =>
    linePath(upper) + lower.map((_, j) => {
      const i = lower.length - 1 - j;
      return `L${x(i).toFixed(1)},${y(lower[i]).toFixed(1)}`;
    }).join('') + 'Z';

  const xTickIdx = useMemo(() => {
    if (n === 0) return [];
    const count = Math.max(2, Math.min(6, Math.floor(plotW / 120)));
    return Array.from(new Set(Array.from({ length: count }, (_, k) => Math.round((k / (count - 1)) * (n - 1)))));
  }, [n, plotW]);

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (n === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - PAD.left;
    const idx = n <= 1 ? 0 : Math.round((px / plotW) * (n - 1));
    setHoverIdx(Math.max(0, Math.min(n - 1, idx)));
  };

  const toggle = (key: string) =>
    setHidden((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const tooltipLeft = hoverIdx !== null && x(hoverIdx) > width * 0.6;

  return (
    <div className="chart">
      <div className="chart-legend" role="group" aria-label="Toggle series">
        {series.map((s) => (
          <button
            key={s.key}
            type="button"
            className={`legend-chip ${hidden.has(s.key) ? 'is-off' : ''}`}
            onClick={() => toggle(s.key)}
            aria-pressed={!hidden.has(s.key)}
          >
            <span className="legend-swatch" style={{ background: s.color }} />
            {s.label}
          </button>
        ))}
      </div>
      <div ref={wrapRef} className="chart-canvas" style={{ height }}>
        {n === 0 ? (
          <div className="chart-empty">{emptyMessage}</div>
        ) : (
          <svg width={width} height={height} role="img" aria-label={ariaLabel} onMouseMove={onMove} onMouseLeave={() => setHoverIdx(null)}>
            {geometry.ticks.map((t) => (
              <g key={t}>
                <line x1={PAD.left} x2={PAD.left + plotW} y1={y(t)} y2={y(t)} className="chart-grid" />
                <text x={PAD.left - 8} y={y(t)} className="chart-tick" textAnchor="end" dominantBaseline="middle">{formatY(t)}</text>
              </g>
            ))}
            {xTickIdx.map((i, k) => (
              <text key={i} x={x(i)} y={height - 8} className="chart-tick" textAnchor={k === 0 ? 'start' : k === xTickIdx.length - 1 ? 'end' : 'middle'}>
                {formatX(xLabels[i] ?? String(i))}
              </text>
            ))}
            {visible.filter((s) => s.stacked).map((s) => {
              const layer = geometry.layers.get(s.key)!;
              return <path key={s.key} d={areaPath(layer.lower, layer.upper)} fill={s.color} fillOpacity={0.55} stroke={s.color} strokeWidth={1} />;
            })}
            {visible.filter((s) => !s.stacked).map((s) => (
              <path key={s.key} d={linePath(s.values)} fill="none" stroke={s.color} strokeWidth={2} strokeDasharray={s.dashed ? '5 4' : undefined} strokeLinejoin="round" />
            ))}
            {hoverIdx !== null && (
              <line x1={x(hoverIdx)} x2={x(hoverIdx)} y1={PAD.top} y2={PAD.top + plotH} className="chart-crosshair" />
            )}
          </svg>
        )}
        {hoverIdx !== null && n > 0 && (
          <div className="chart-tooltip" style={tooltipLeft ? { right: width - x(hoverIdx) + 12 } : { left: x(hoverIdx) + 12 }}>
            <div className="chart-tooltip-title">{formatX(xLabels[hoverIdx] ?? String(hoverIdx))}</div>
            {visible.map((s) => (
              <div key={s.key} className="chart-tooltip-row">
                <span className="legend-swatch" style={{ background: s.color }} />
                <span>{s.label}</span>
                <strong>{formatY(s.values[hoverIdx] ?? 0)}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
