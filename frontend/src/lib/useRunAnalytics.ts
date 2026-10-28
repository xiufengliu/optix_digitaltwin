import { useEffect, useRef, useState } from 'react';
import { apiFetch, isAbort } from './api';
import type { DispatchResult, EnergySeries, PedMetrics } from '../types';

export const MAX_CHART_POINTS = 480;

interface Options {
  apiBase: string;
  runId: string | null;
  /** Only live runs have data; others are skipped. */
  live: boolean;
  /** Current simulation timestep – a change triggers a (debounced) refresh. */
  timestep: number | null | undefined;
  rangeHours: number | null; // null = whole horizon
  includeDispatch: boolean;
}

export interface RunAnalytics {
  ped: PedMetrics | null;
  series: EnergySeries | null;
  dispatch: DispatchResult | null;
  error: string | null;
  loading: boolean;
}

const EMPTY: RunAnalytics = { ped: null, series: null, dispatch: null, error: null, loading: false };

export function useRunAnalytics({ apiBase, runId, live, timestep, rangeHours, includeDispatch }: Options): RunAnalytics {
  const [state, setState] = useState<RunAnalytics>(EMPTY);
  const seq = useRef(0);
  const applied = useRef(0);
  const dtHours = useRef(1 / 6);

  const controller = useRef<AbortController>(new AbortController());

  // Clear immediately when switching runs so stale charts never show, and
  // cancel requests that belong to the previous run (or to an unmounted view)
  useEffect(() => {
    setState(EMPTY);
    controller.current = new AbortController();
    const current = controller.current;
    return () => current.abort();
  }, [apiBase, runId]);

  useEffect(() => {
    if (!runId || !live) {
      setState(EMPTY);
      return;
    }
    const ac = controller.current;
    const id = ++seq.current;
    const timer = window.setTimeout(async () => {
      setState((s) => ({ ...s, loading: true }));
      const limit = rangeHours == null ? 600000 : Math.max(1, Math.round(rangeHours / dtHours.current));
      const q = `limit=${limit}&max_points=${MAX_CHART_POINTS}`;
      try {
        const [ped, series, dispatch] = await Promise.all([
          apiFetch<PedMetrics>(apiBase, `/runs/${runId}/ped`, { signal: ac.signal }),
          apiFetch<EnergySeries>(apiBase, `/runs/${runId}/energy_series?${q}`, { signal: ac.signal }),
          includeDispatch
            ? apiFetch<DispatchResult>(apiBase, `/runs/${runId}/optimize?${q}`, { signal: ac.signal })
            : Promise.resolve(null),
        ]);
        // Show any response newer than what is on screen, so charts keep
        // updating during continuous play even if requests overlap
        if (id < applied.current || ac.signal.aborted) return;
        applied.current = id;
        if (series?.dt_hours) dtHours.current = series.dt_hours;
        setState({ ped, series, dispatch, error: null, loading: false });
      } catch (error) {
        if (isAbort(error) || id < applied.current) return;
        setState((s) => ({ ...s, error: (error as Error).message, loading: false }));
      }
    }, 350);
    // In-flight requests may finish during rapid stepping (out-of-order
    // responses are dropped via `applied`); run changes abort them above.
    return () => window.clearTimeout(timer);
  }, [apiBase, runId, live, timestep, rangeHours, includeDispatch]);

  return state;
}
