import { useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { apiFetch, apiUrl } from '../lib/api';
import { formatTwinSummary, twinSummary, type TwinSummary } from '../lib/twin';
import type { DigitalTwinConfig } from './DigitalTwinBuilder';

export interface CopilotContext {
  view: string;
  run_id?: string | null;
  run_name?: string | null;
  simulated_time?: string | null;
  scenario_id?: string | null;
  scenario_name?: string | null;
  /** Twin Builder canvas */
  design?: {
    name: string;
    twin_id: string | null;
    is_reference: boolean;
    selected_component: string | null;
    components: { id: string; type: string; name: string; params: Record<string, unknown> }[];
    connections: { from: string; to: string; type: string }[];
  } | null;
}

/** A scenario as the Scenarios page shows it */
export interface ScenarioInfo {
  id: string;
  name: string;
  isPaper: boolean;
  /** Name of the linked twin (full design), null for electricity-only sizes */
  twinName: string | null;
  summary: TwinSummary;
  flexiblePct: number;
  /** Unsaved edits in the scenario editor */
  dirty: boolean;
}

/** Page state behind the suggested prompts (not sent to the backend) */
export interface CopilotStatus {
  console?: {
    runCount: number;
    /** Most recent other run, for comparisons */
    otherRunName: string | null;
    live: boolean;
    done: boolean;
    progress: number;
    simulatedHours: number;
    pedRatio: number | null;
    importing: boolean;
    workspace: 'twin' | 'energy' | 'dispatch';
    design: TwinSummary | null;
    hasHeat: boolean;
  };
  scenarios?: { selected: ScenarioInfo | null; customCount: number };
}

/** A twin design the copilot generated (propose_twin_design) */
interface Proposal {
  id: string;
  design: Pick<DigitalTwinConfig, 'name' | 'components' | 'connections'> & { summary?: string };
  results: Record<string, number | null>;
}

interface ToolCall {
  id: string;
  name: string;
  status: 'running' | 'ok' | 'error';
  summary?: string;
  input?: unknown;
}

interface Turn {
  role: 'user' | 'assistant';
  text: string;
  thinking?: string;
  tools?: ToolCall[];
  proposals?: Proposal[];
  error?: string;
  streaming?: boolean;
}

type StreamEvent =
  | { type: 'start' | 'done'; conversation_id: string }
  | { type: 'text' | 'thinking'; text: string }
  | { type: 'tool_start'; id: string; name: string }
  | { type: 'tool_result'; id: string; name: string; input: unknown; is_error: boolean; summary: string }
  | { type: 'twin_changed'; kind: 'run' | 'scenario' | 'twin'; result: unknown }
  | { type: 'design_proposal'; id: string; result: { design: Proposal['design']; results: Proposal['results'] } }
  | { type: 'error'; message: string };

const TOOL_LABELS: Record<string, string> = {
  get_twin_overview: 'Reading twin overview',
  get_run_details: 'Reading run KPIs',
  get_energy_profile: 'Analysing energy profile',
  compare_runs: 'Comparing runs',
  evaluate_design: 'Simulating design',
  sweep_designs: 'Sweeping design options',
  step_simulation: 'Advancing simulation',
  compare_scenarios: 'Comparing scenarios (2015–2024)',
  get_current_design: 'Reading the canvas design',
  propose_twin_design: 'Designing and simulating a twin',
  create_scenario: 'Creating scenario',
  run_scenario: 'Starting a run',
};

// The copilot's role on each page
const PAGE: Record<string, { title: string; subtitle: string; intro: string; placeholder: string }> = {
  console: {
    title: 'Run copilot',
    subtitle: 'Explains the selected run and simulates further on request',
    intro: 'Ask why a run performs as it does, what drives imports or heat, or how two runs differ.',
    placeholder: 'Ask about this run…',
  },
  scenarios: {
    title: 'Scenario copilot',
    subtitle: 'Compares scenarios over 2015–2024, creates and runs them',
    intro: 'Ask it to rank scenarios, set up a study (e.g. a series of battery sizes) or start runs.',
    placeholder: 'Compare, create or run scenarios…',
  },
  builder: {
    title: 'Design copilot',
    subtitle: 'Reads your canvas, generates and improves twin designs',
    intro: 'Describe a district and it generates a twin you can apply to the canvas, or ask it to improve the current design.',
    placeholder: 'Describe a twin to generate, or ask about this design…',
  },
};

interface Props {
  apiBase: string;
  open: boolean;
  onClose: () => void;
  context: CopilotContext;
  /** A prompt to send immediately (e.g. from "Ask AI about this run"); nonce re-triggers. */
  request?: { prompt: string; nonce: number } | null;
  onTwinChanged: (kind: 'run' | 'scenario' | 'twin') => void;
  /** Open a proposed design on the Twin Builder canvas */
  onApplyDesign: (design: Proposal['design']) => void;
  /** What the page currently shows; only used to pick the suggested prompts */
  status?: CopilotStatus;
}

export function Copilot({ apiBase, open, onClose, context, request, onTwinChanged, onApplyDesign, status }: Props) {
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const conversationId = useRef<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const lastNonce = useRef<number | null>(null);

  useEffect(() => {
    apiFetch<{ enabled: boolean }>(apiBase, '/assistant/status').then((s) => setEnabled(s.enabled), () => setEnabled(false));
  }, [apiBase]);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [turns]);

  // Update the in-progress assistant turn
  const patchLast = (fn: (t: Turn) => Turn) =>
    setTurns((prev) => (prev.length === 0 ? prev : [...prev.slice(0, -1), fn(prev[prev.length - 1])]));

  const send = useCallback(async (text: string) => {
    const message = text.trim();
    if (!message || busy) return;
    setInput('');
    setBusy(true);
    setTurns((prev) => [...prev, { role: 'user', text: message }, { role: 'assistant', text: '', tools: [], streaming: true }]);
    const ac = new AbortController();
    abortRef.current = ac;

    try {
      const response = await fetch(apiUrl(apiBase, '/assistant/chat'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, conversation_id: conversationId.current, context }),
        signal: ac.signal,
      });
      if (!response.ok || !response.body) {
        let detail = `Request failed (${response.status})`;
        try { detail = (await response.json()).detail ?? detail; } catch {}
        throw new Error(detail);
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let sep: number;
        while ((sep = buffer.indexOf('\n\n')) >= 0) {
          const chunk = buffer.slice(0, sep);
          buffer = buffer.slice(sep + 2);
          if (!chunk.startsWith('data: ')) continue;
          const event = JSON.parse(chunk.slice(6)) as StreamEvent;
          switch (event.type) {
            case 'start':
            case 'done':
              conversationId.current = event.conversation_id;
              break;
            case 'text':
              patchLast((t) => ({ ...t, text: t.text + event.text }));
              break;
            case 'thinking':
              patchLast((t) => ({ ...t, thinking: (t.thinking ?? '') + event.text }));
              break;
            case 'tool_start':
              patchLast((t) => ({ ...t, tools: [...(t.tools ?? []), { id: event.id, name: event.name, status: 'running' }] }));
              break;
            case 'tool_result':
              patchLast((t) => ({
                ...t,
                tools: (t.tools ?? []).map((c) => (c.id === event.id ? { ...c, status: event.is_error ? 'error' : 'ok', summary: event.summary, input: event.input } : c)),
              }));
              break;
            case 'twin_changed':
              onTwinChanged(event.kind);
              break;
            case 'design_proposal':
              patchLast((t) => ({ ...t, proposals: [...(t.proposals ?? []), { id: event.id, design: event.result.design, results: event.result.results }] }));
              break;
            case 'error':
              patchLast((t) => ({ ...t, error: event.message }));
              break;
          }
        }
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') patchLast((t) => ({ ...t, error: (error as Error).message }));
    } finally {
      patchLast((t) => ({ ...t, streaming: false }));
      setBusy(false);
      abortRef.current = null;
    }
  }, [apiBase, busy, context, onTwinChanged]);

  useEffect(() => {
    if (open && request && request.nonce !== lastNonce.current && !busy && enabled) {
      lastNonce.current = request.nonce;
      send(request.prompt);
    }
  }, [open, request, busy, enabled, send]);

  const newChat = () => {
    abortRef.current?.abort();
    if (conversationId.current) apiFetch(apiBase, `/assistant/conversations/${conversationId.current}`, { method: 'DELETE' }).catch(() => {});
    conversationId.current = null;
    setTurns([]);
  };

  const page = PAGE[context.view] ?? PAGE.console;
  const canvasCount = context.design?.components.length ?? 0;
  const suggestions = buildSuggestions(context, status);

  const apply = (p: Proposal) => {
    if (context.view === 'builder' && canvasCount > 0
      && !confirm(`Open “${p.design.name}” on the canvas? The current design stays saved if you saved it; unsaved changes are lost.`)) return;
    onApplyDesign(p.design);
  };

  if (!open) return null;

  return (
    <aside className="copilot" aria-label="AI copilot">
      <div className="copilot-header">
        <div>
          <div className="copilot-title"><span className="copilot-spark" aria-hidden>✦</span> {page.title}</div>
          <div className="muted small">{page.subtitle}</div>
        </div>
        <div className="row gap-xs">
          <button className="btn btn-ghost btn-sm" onClick={newChat} disabled={turns.length === 0}>New chat</button>
          <button className="btn btn-ghost btn-icon" onClick={onClose} aria-label="Close copilot">✕</button>
        </div>
      </div>

      <div className="copilot-body" ref={scrollRef}>
        {enabled === false ? (
          <div className="notice notice-warn">The AI copilot is not configured on the server (missing <code>CLAUDE_API_KEY</code>).</div>
        ) : turns.length === 0 ? (
          <div className="copilot-empty">
            <p className="muted">{page.intro} Answers are grounded in the twin's simulations.</p>
            <div className="copilot-suggestions">
              {suggestions.map((s) => (
                <button key={s} className="suggestion" onClick={() => send(s)} disabled={busy || !enabled}>{s}</button>
              ))}
            </div>
          </div>
        ) : (
          turns.map((turn, i) =>
            turn.role === 'user' ? (
              <div key={i} className="msg msg-user">{turn.text}</div>
            ) : (
              <div key={i} className="msg msg-assistant">
                {turn.thinking && (
                  <details className="msg-thinking">
                    <summary>{turn.streaming && !turn.text ? 'Reasoning…' : 'Reasoning'}</summary>
                    <div className="prewrap">{turn.thinking}</div>
                  </details>
                )}
                {(turn.tools ?? []).length > 0 && (
                  <div className="tool-calls">
                    {turn.tools!.map((c) => (
                      <details key={c.id} className={`tool-call is-${c.status}`}>
                        <summary>
                          <span className={`tool-dot ${c.status === 'running' ? 'spin-dot' : ''}`} />
                          {TOOL_LABELS[c.name] ?? c.name}
                        </summary>
                        {c.input !== undefined && <pre>{JSON.stringify(c.input, null, 1)}</pre>}
                        {c.summary && <pre>{c.summary}</pre>}
                      </details>
                    ))}
                  </div>
                )}
                {(turn.proposals ?? []).map((p) => (
                  <ProposalCard key={p.id} proposal={p} inBuilder={context.view === 'builder'} onApply={() => apply(p)} />
                ))}
                {turn.text ? (
                  <div className="markdown">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{turn.text}</ReactMarkdown>
                  </div>
                ) : turn.streaming && !(turn.tools ?? []).some((c) => c.status === 'running') ? (
                  <div className="typing" aria-label="Copilot is thinking"><span /><span /><span /></div>
                ) : null}
                {turn.error && <div className="notice notice-error">{turn.error}</div>}
              </div>
            ),
          )
        )}
      </div>

      <form
        className="copilot-input"
        onSubmit={(e) => { e.preventDefault(); send(input); }}
      >
        <textarea
          ref={inputRef}
          rows={2}
          value={input}
          placeholder={context.view === 'console' && context.run_id ? `Ask about “${context.run_name ?? 'this run'}”…` : page.placeholder}
          disabled={enabled === false}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); }
          }}
        />
        {busy ? (
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => abortRef.current?.abort()}>Stop</button>
        ) : (
          <button type="submit" className="btn btn-primary btn-sm" disabled={!input.trim() || enabled === false}>Send</button>
        )}
      </form>
    </aside>
  );
}

function ProposalCard({ proposal, inBuilder, onApply }: { proposal: Proposal; inBuilder: boolean; onApply: () => void }) {
  const r = proposal.results;
  const pct = (v: number | null | undefined) => (v == null ? '–' : `${Math.round(v * 100)}%`);
  const mwh = (v: number | null | undefined) => (v == null ? '–' : `${Math.round(v / 1000).toLocaleString()} MWh/y`);
  const ratio = r.ped_ratio_electricity;
  return (
    <div className="proposal-card">
      <div className="proposal-head">
        <strong>{proposal.design.name}</strong>
        <span className="badge">Proposal · not saved</span>
      </div>
      {proposal.design.summary && <p className="muted small">{proposal.design.summary}</p>}
      <p className="small">{proposal.design.components.length} components · {formatTwinSummary(twinSummary(proposal.design))}</p>
      <div className="proposal-kv small">
        <span>PED ratio <b className={(ratio ?? 0) >= 1 ? 'tone-good' : 'tone-bad'}>{ratio?.toFixed(2) ?? '–'}</b></span>
        <span>All energy <b>{r.ped_ratio_all_energy?.toFixed(2) ?? '–'}</b></span>
        <span>Self-sufficiency <b>{pct(r.self_sufficiency)}</b></span>
        <span>Generation <b>{mwh(r.generation_kwh_per_year)}</b></span>
        <span>Demand <b>{mwh(r.electricity_demand_kwh_per_year)}</b></span>
        {r.heat_demand_kwh_per_year != null && <span>Heat <b>{mwh(r.heat_demand_kwh_per_year)}</b></span>}
      </div>
      <button className="btn btn-primary btn-sm" onClick={onApply}>{inBuilder ? 'Apply to canvas' : 'Open in Twin Builder'}</button>
    </div>
  );
}

const quote = (name: string | null | undefined, fallback: string) => (name ? `“${name}”` : fallback);
const kw = (v: number) => Math.round(v).toLocaleString();

/** Up to four prompts that fit what the user is looking at right now. */
function buildSuggestions(context: CopilotContext, status: CopilotStatus | undefined): string[] {
  const pick = (list: (string | false | null | undefined)[]) => list.filter((s): s is string => Boolean(s)).slice(0, 4);

  if (context.view === 'builder') {
    const d = context.design;
    if (!d || d.components.length === 0) {
      return [
        'Generate a twin: 3 residential blocks (6,000 m²), 400 kWp PV, heat pumps and 20 EV chargers.',
        'Generate an office campus that reaches PED, with a battery and smart EV charging.',
        'Generate a small industrial site with CHP, PV and thermal storage.',
        'Which components does the simulation model, and what data do they need?',
      ];
    }
    const s = twinSummary(d);
    const has = (type: string) => d.components.some((c) => c.type === type);
    const selected = d.selected_component ? d.components.find((c) => c.id === d.selected_component || c.name === d.selected_component) : null;
    const name = quote(d.name, 'this design');
    const hasBuilding = has('smart_building') || has('load_center');
    const heatSource = has('heat_pump') || has('district_heating') || has('chp_unit');
    return pick([
      selected && `How does “${selected.name}” affect the results, and what size would be best for it?`,
      `How does ${name} perform over 2015–2024, and what limits it?`,
      d.is_reference
        ? 'This is the read-only paper reference — propose an improved copy that reaches PED.'
        : `Improve ${name} so it becomes a positive energy district.`,
      !hasBuilding && 'This design has no building or load yet — add a realistic demand for it.',
      hasBuilding && !heatSource && 'The buildings have no heat source — add heat pumps or district heating and compare.',
      s.pvKwp === 0 && 'Add rooftop PV sized for this design — how much can it cover?',
      s.pvKwp > 0 && s.batteryKwh === 0 && `Would a battery help with ${kw(s.pvKwp)} kWp of PV? Find the size where it stops paying off.`,
      s.batteryKwh > 0 && `Is the ${kw(s.batteryKwh)} kWh battery well sized for this design?`,
      has('district_heating') && !has('heat_pump') && 'Replace district heating with heat pumps and thermal storage — what changes?',
      has('heat_pump') && !has('thermal_storage') && 'Would thermal storage let the heat pumps use more on-site PV?',
      has('ev_charger') && 'How much do the EV chargers add to peak import, and would smart charging help?',
      'What measured data should I upload for the most accurate results?',
    ]);
  }

  if (context.view === 'scenarios') {
    const info = status?.scenarios;
    const sel = info?.selected;
    if (!sel) {
      return pick([
        'Rank all scenarios by PED ratio and self-sufficiency over 2015–2024.',
        info && info.customCount > 0 ? 'How do my own scenarios compare with the five paper scenarios?' : 'Which paper scenario gives the best self-sufficiency per kWh of battery?',
        'Create scenarios for S2 with batteries of 160, 320 and 640 kWh.',
        'Create a scenario with S3 plus a 100 kW heat pump replacing district heating, and run it.',
      ]);
    }
    const name = quote(sel.name, 'this scenario');
    const s = sel.summary;
    return pick([
      sel.dirty && `I have unsaved edits to ${name} — what should I check before saving and running it?`,
      `What would most improve ${name}?`,
      `How does ${name} compare with the other scenarios over 2015–2024?`,
      s.batteryKwh > 0
        ? `Create variants of ${name} with half and double the ${kw(s.batteryKwh)} kWh battery and compare them.`
        : `Would adding a battery to ${name} pay off? Try 160, 320 and 640 kWh.`,
      sel.flexiblePct === 0 && !sel.twinName && `How much would 20 % flexible demand (DSM) help ${name}?`,
      !sel.twinName && `${name} is electricity only — what would a full design with heat and EV charging change?`,
      sel.isPaper && `Run ${name} so I can follow it in the Console.`,
      sel.twinName && `Which components of “${sel.twinName}” matter most for ${name}?`,
    ]);
  }

  const c = status?.console;
  const run = quote(context.run_name, 'this run');
  if (!context.run_id || !c) {
    return [
      'Which scenario should I run first, and why?',
      'What is the smallest PV size that makes the reference building a PED over a full year?',
      'Compare the five paper scenarios over 2019.',
      'How robust is a 716 kWp design across 2015–2024?',
    ];
  }
  if (!c.live) {
    return pick([
      `${run} has no live session — what did its design achieve over 2015–2024?`,
      c.otherRunName && `Compare ${run} with “${c.otherRunName}”.`,
      'Which runs exist, and how do they compare?',
      'What would most improve this design?',
    ]);
  }
  if (c.simulatedHours < 24) {
    return pick([
      `Simulate ${run} for one week and summarise what happens.`,
      'Which scenario does this run come from, and what does its design contain?',
      `What PED ratio should I expect from ${run} over a full year?`,
      c.runCount > 1 && c.otherRunName && `How is this run set up differently from “${c.otherRunName}”?`,
    ]);
  }
  const ped = c.pedRatio;
  return pick([
    c.done ? `Summarise the full results of ${run}.` : `Explain how ${run} is performing so far.`,
    ped != null && (ped < 1
      ? `Why is the PED ratio ${ped.toFixed(2)} so far, and what would bring it above 1?`
      : `The PED ratio is ${ped.toFixed(2)} — is this design oversized, and where is the surplus lost?`),
    c.workspace === 'dispatch'
      ? 'Explain the dispatch: when does the battery charge and discharge, and is it used well?'
      : c.workspace === 'energy'
        ? 'Which month is hardest for this design, and why?'
        : c.importing ? 'Why is the district importing from the grid right now?' : 'Where does the surplus go right now — battery, export or curtailment?',
    c.hasHeat && 'Where does the heat come from in this run, and what does it cost in electricity?',
    !c.done && c.progress < 0.5 && c.simulatedHours < 24 * 60 && `Simulate ${run} one more month and tell me what changed.`,
    c.otherRunName && `Compare ${run} with “${c.otherRunName}” over the same period.`,
    c.design && c.design.batteryKwh > 0 && `Is the ${kw(c.design.batteryKwh)} kWh battery the right size for this run?`,
  ]);
}
