// Formatting helpers. Backend values are MW / MWh; the building-scale
// scenarios are a few hundred kW, so pick the unit that keeps numbers readable.

const DASH = '—';

function isNum(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function fixed(value: number, digits: number): string {
  return value.toLocaleString(undefined, { maximumFractionDigits: digits, minimumFractionDigits: 0 });
}

export function formatPower(mw?: number | null): string {
  if (!isNum(mw)) return DASH;
  const abs = Math.abs(mw);
  if (abs >= 1000) return `${fixed(mw / 1000, 2)} GW`;
  if (abs >= 1) return `${fixed(mw, 2)} MW`;
  return `${fixed(mw * 1000, abs * 1000 >= 100 ? 0 : 1)} kW`;
}

export function formatEnergy(mwh?: number | null): string {
  if (!isNum(mwh)) return DASH;
  const abs = Math.abs(mwh);
  if (abs >= 1000) return `${fixed(mwh / 1000, 2)} GWh`;
  if (abs >= 1) return `${fixed(mwh, abs >= 100 ? 0 : 1)} MWh`;
  return `${fixed(mwh * 1000, 0)} kWh`;
}

export function formatNumber(value?: number | null, digits = 2): string {
  return isNum(value) ? fixed(value, digits) : DASH;
}

export function formatCompact(value?: number | null): string {
  if (!isNum(value)) return DASH;
  return new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}

export function formatPercent(ratio?: number | null, digits = 0): string {
  return isNum(ratio) ? `${fixed(ratio * 100, digits)}%` : DASH;
}

export function formatDuration(hours?: number | null): string {
  if (!isNum(hours)) return DASH;
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  if (hours < 48) return `${fixed(hours, 1)} h`;
  const days = hours / 24;
  if (days < 60) return `${fixed(days, 1)} days`;
  return `${fixed(days / 365, 2)} years`;
}

export function formatTimestamp(ts?: string | null): string {
  if (!ts) return DASH;
  const date = new Date(ts.replace(' ', 'T'));
  if (Number.isNaN(date.getTime())) return ts;
  return date.toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function formatRelative(iso?: string | null): string {
  if (!iso) return DASH;
  // Backend timestamps are naive UTC
  const date = new Date(/[zZ]|[+-]\d\d:\d\d$/.test(iso) ? iso : iso + 'Z');
  const seconds = (Date.now() - date.getTime()) / 1000;
  if (!Number.isFinite(seconds)) return DASH;
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} h ago`;
  if (seconds < 86400 * 30) return `${Math.floor(seconds / 86400)} d ago`;
  return date.toLocaleDateString();
}
