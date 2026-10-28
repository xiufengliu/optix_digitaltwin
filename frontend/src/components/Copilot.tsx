import { useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { apiFetch, apiUrl } from '../lib/api';

export interface CopilotContext {
  view: string;
  run_id?: string | null;
  run_name?: string | null;
  simulated_time?: string | null;
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
  error?: string;
  streaming?: boolean;
}

type StreamEvent =
  | { type: 'start' | 'done'; conversation_id: string }
  | { type: 'text' | 'thinking'; text: string }
  | { type: 'tool_start'; id: string; name: string }
  | { type: 'tool_result'; id: string; name: string; input: unknown; is_error: boolean; summary: string }
  | { type: 'twin_changed'; kind: 'run' | 'scenario'; result: unknown }
  | { type: 'error'; message: string };

const TOOL_LABELS: Record<string, string> = {
  get_twin_overview: 'Reading twin overview',
  get_run_details: 'Reading run KPIs',
  get_energy_profile: 'Analysing energy profile',
  compare_runs: 'Comparing runs',
  evaluate_design: 'Simulating design',
  sweep_designs: 'Sweeping design options',
  step_simulation: 'Advancing simulation',
  save_scenario: 'Saving scenario',
};

interface Props {
  apiBase: string;
  open: boolean;
  onClose: () => void;
  context: CopilotContext;
  /** A prompt to send immediately (e.g. from "Ask AI about this run"); nonce re-triggers. */
  request?: { prompt: string; nonce: number } | null;
  onTwinChanged: (kind: 'run' | 'scenario') => void;
}

export function Copilot({ apiBase, open, onClose, context, request, onTwinChanged }: Props) {
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

  const suggestions = context.run_id
    ? [
        `Explain how “${context.run_name ?? 'this run'}” is performing so far.`,
        'Why is the PED ratio of this run below 1, and what would fix it?',
        'Which month is hardest for this design, and why?',
        'Is adding a bigger battery worth it for this design?',
      ]
    : [
        'What is the smallest PV size that makes the reference building a PED over a full year?',
        'Compare the five reference scenarios over 2019.',
        'How much does a battery improve self-sufficiency at 400 kWp PV?',
        'How robust is a 716 kWp design across 2015–2024?',
      ];

  if (!open) return null;

  return (
    <aside className="copilot" aria-label="AI copilot">
      <div className="copilot-header">
        <div>
          <div className="copilot-title"><span className="copilot-spark" aria-hidden>✦</span> Twin Copilot</div>
          <div className="muted small">Claude reasons over your twin's data and runs what-if simulations</div>
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
            <p className="muted">Ask about performance, sizing, or what-if designs. Answers are grounded in the twin's simulations.</p>
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
          placeholder={context.run_id ? `Ask about “${context.run_name ?? 'this run'}” or any design…` : 'Ask the twin…'}
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
