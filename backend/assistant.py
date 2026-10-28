"""AI copilot for the digital twin: a Claude agent that reasons over twin data.

The agent loop runs server-side. Claude calls the tools in
``assistant_tools`` (live run KPIs, energy profiles, fast design what-ifs and
sweeps, simulation stepping, saving scenarios); every text delta, tool call
and tool result is streamed to the browser as server-sent events.
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import time
from collections import OrderedDict, deque
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, AsyncIterator, Optional
from uuid import uuid4

import anthropic
from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field, ValidationError

from .assistant_tools import TOOLS, TOOLS_BY_NAME

log = logging.getLogger(__name__)

MODEL = "claude-opus-5-5"
MAX_TOOL_ROUNDS = 12
MAX_HISTORY_MESSAGES = 120
MAX_CONVERSATIONS = 200

_REPO_ROOT = Path(__file__).resolve().parent.parent


def _api_key() -> Optional[str]:
    """CLAUDE_API_KEY / ANTHROPIC_API_KEY from the environment or the repo .env."""
    for name in ("CLAUDE_API_KEY", "ANTHROPIC_API_KEY"):
        if os.environ.get(name):
            return os.environ[name]
    env_file = _REPO_ROOT / ".env"
    if env_file.is_file():
        from dotenv import dotenv_values

        values = dotenv_values(env_file)
        return values.get("CLAUDE_API_KEY") or values.get("ANTHROPIC_API_KEY")
    return None


_client: Optional[anthropic.AsyncAnthropic] = None


def _get_client() -> Optional[anthropic.AsyncAnthropic]:
    global _client
    if _client is None:
        key = _api_key()
        if key:
            _client = anthropic.AsyncAnthropic(api_key=key)
    return _client


SYSTEM_PROMPT = """You are the copilot of the OptiX digital twin, a simulator for Positive Energy Districts (PEDs).

The twin models a Danish building (district) with on-site renewables, a battery, optional demand-side management (DSM) and a grid connection. Time series come from DK2 data (2015-2024, 10-minute steps): wind/solar/hydro profiles, electricity demand and spot prices in DKK/MWh. A design scales these profiles to its asset sizes (PV in kWp, wind in kW, battery in kWh, peak demand in kW). Dispatch is PV-first merit order: on-site generation serves load, then charges the battery, then is exported; the battery then serves load and the grid covers the rest. A PED produces at least as much renewable energy on site as it consumes over a year (PED ratio = generation / demand >= 1).

Five reference scenarios from the project paper exist (baseline 30 kWp; high PV 171 kWp; + 320 kWh battery; + 640 kWh battery; + 30% DSM), all with a 150 kW peak load. Users also create their own scenarios and digital twins, and step simulation runs forward in time.

How to help:
- Ground every number in tool results; never invent figures. Say which period a number covers - a run simulated for two winter weeks says little about a year.
- For "what if" and sizing questions, use evaluate_design or sweep_designs over a full year (or several years when comparing robustness) instead of reasoning from intuition. Seasonality matters a lot in Denmark.
- When you recommend a design, give the trade-offs (PED ratio, self-sufficiency, grid import/export, peak import, DKK cost) and note what the model does not capture (investment cost, roof area limits, heat demand, grid tariffs).
- Only step simulations or save scenarios when the user asks for it.
- Be concise. Lead with the answer, then the supporting numbers; use a small markdown table when comparing options. Use kW/kWh for building-scale values.

Each user message may start with a [UI context] line describing what the user is looking at; use it to resolve "this run" or "the current scenario"."""


# ---------------------------------------------------------------------------
# Conversations and abuse limits (in memory; the site has no login)
# ---------------------------------------------------------------------------

@dataclass
class Conversation:
    id: str
    messages: list[dict] = field(default_factory=list)
    lock: asyncio.Lock = field(default_factory=asyncio.Lock)


_conversations: "OrderedDict[str, Conversation]" = OrderedDict()


def _get_conversation(conversation_id: Optional[str]) -> Conversation:
    if conversation_id and conversation_id in _conversations:
        _conversations.move_to_end(conversation_id)
        return _conversations[conversation_id]
    conv = Conversation(id=str(uuid4()))
    _conversations[conv.id] = conv
    while len(_conversations) > MAX_CONVERSATIONS:
        _conversations.popitem(last=False)
    return conv


class _RateLimiter:
    def __init__(self) -> None:
        self.per_ip_hour = int(os.environ.get("ASSISTANT_MAX_PER_IP_PER_HOUR", "40"))
        self.per_day = int(os.environ.get("ASSISTANT_MAX_PER_DAY", "400"))
        self._ip: dict[str, deque] = {}
        self._day: deque = deque()

    def check(self, ip: str) -> Optional[str]:
        now = time.time()
        while self._day and now - self._day[0] > 86400:
            self._day.popleft()
        hits = self._ip.setdefault(ip, deque())
        while hits and now - hits[0] > 3600:
            hits.popleft()
        if len(self._day) >= self.per_day:
            return "The copilot's daily request limit has been reached. Please try again tomorrow."
        if len(hits) >= self.per_ip_hour:
            return "You've reached the hourly copilot limit. Please wait a while and try again."
        hits.append(now)
        self._day.append(now)
        return None


_limiter = _RateLimiter()


# ---------------------------------------------------------------------------
# Agent loop
# ---------------------------------------------------------------------------

def _summarize(result: dict) -> str:
    text = json.dumps(result, default=str)
    return text if len(text) <= 300 else text[:297] + "..."


async def _run_tool(name: str, raw_input: Any) -> tuple[str, bool, Optional[dict]]:
    """Validate and execute one tool call. Returns (content, is_error, result)."""
    tool = TOOLS_BY_NAME.get(name)
    if tool is None:
        return f"Unknown tool: {name}", True, None
    try:
        # The streaming parser is tolerant, so validate before running anything
        args = tool.input_model.model_validate(raw_input if isinstance(raw_input, dict) else {})
    except ValidationError as exc:
        return f"Invalid input: {exc.errors(include_url=False)}", True, None
    try:
        result = await tool.handler(args)
    except (ValueError, KeyError) as exc:
        return f"Error: {exc}", True, None
    except Exception as exc:  # pragma: no cover - surfaced to the model, logged here
        log.exception("Copilot tool %s failed", name)
        return f"Tool failed: {exc}", True, None
    return json.dumps(result, default=str), False, result


def _close_dangling_tool_uses(conv: Conversation, content: list, reason: str) -> None:
    """Keep history valid: every tool_use needs a tool_result before the next user turn."""
    pending = [b for b in content if getattr(b, "type", None) == "tool_use"]
    if pending:
        conv.messages.append({
            "role": "user",
            "content": [{"type": "tool_result", "tool_use_id": b.id, "is_error": True, "content": reason} for b in pending],
        })


async def _agent_turn(conv: Conversation, user_text: str) -> AsyncIterator[dict]:
    client = _get_client()
    assert client is not None
    conv.messages.append({"role": "user", "content": user_text})
    tool_defs = [t.definition() for t in TOOLS]
    json_retries = 0

    for _ in range(MAX_TOOL_ROUNDS):
        try:
            async with client.beta.messages.stream(
                model=MODEL,
                max_tokens=32000,
                system=SYSTEM_PROMPT,
                tools=tool_defs,
                messages=conv.messages,
                thinking={"type": "adaptive", "display": "summarized"},
                output_config={"effort": "medium"},
                cache_control={"type": "ephemeral"},
                # Re-run declined requests on a fallback model inside the same call
                betas=["server-side-fallback-2026-07-01"],
                fallbacks="default",
            ) as stream:
                async for event in stream:
                    if event.type == "content_block_start" and event.content_block.type == "tool_use":
                        yield {"type": "tool_start", "id": event.content_block.id, "name": event.content_block.name}
                    elif event.type == "content_block_delta":
                        if event.delta.type == "text_delta":
                            yield {"type": "text", "text": event.delta.text}
                        elif event.delta.type == "thinking_delta":
                            yield {"type": "thinking", "text": event.delta.thinking}
                message = await stream.get_final_message()
            json_retries = 0
        except ValueError:
            # Tool input JSON the SDK could not parse; re-issue the turn (bounded)
            json_retries += 1
            if json_retries > 2:
                yield {"type": "error", "message": "The model produced an unreadable tool call. Please try again."}
                return
            continue

        # Append the full content (thinking, fallback and tool_use blocks included)
        conv.messages.append({"role": "assistant", "content": message.content})

        if message.stop_reason == "pause_turn":
            continue

        tool_uses = [b for b in message.content if b.type == "tool_use"]
        if message.stop_reason == "refusal":
            _close_dangling_tool_uses(conv, message.content, "Request declined.")
            yield {"type": "error", "message": "The model declined this request."}
            return
        if message.stop_reason == "max_tokens":
            _close_dangling_tool_uses(conv, message.content, "Output limit reached before the tool call completed.")
            yield {"type": "error", "message": "The answer hit the output limit."}
            return
        if not tool_uses:
            return

        results = []
        for block in tool_uses:
            content, is_error, result = await _run_tool(block.name, block.input)
            results.append({"type": "tool_result", "tool_use_id": block.id, "content": content, "is_error": is_error})
            yield {
                "type": "tool_result",
                "id": block.id,
                "name": block.name,
                "input": block.input,
                "is_error": is_error,
                "summary": content[:300] if is_error else _summarize(result or {}),
            }
            tool = TOOLS_BY_NAME.get(block.name)
            if tool and tool.mutates and not is_error:
                yield {"type": "twin_changed", "kind": tool.mutates, "result": result}
        conv.messages.append({"role": "user", "content": results})

    yield {"type": "error", "message": "Stopped after too many tool calls. Try a more specific question."}


# ---------------------------------------------------------------------------
# HTTP API
# ---------------------------------------------------------------------------

router = APIRouter(prefix="/assistant", tags=["assistant"])


class ChatContext(BaseModel):
    view: Optional[str] = Field(None, max_length=40)
    run_id: Optional[str] = Field(None, max_length=64)
    run_name: Optional[str] = Field(None, max_length=200)
    simulated_time: Optional[str] = Field(None, max_length=40)


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=4000)
    conversation_id: Optional[str] = Field(None, max_length=64)
    context: Optional[ChatContext] = None


@router.get("/status")
async def assistant_status() -> dict:
    return {"enabled": _get_client() is not None, "model": MODEL}


def _context_line(ctx: Optional[ChatContext]) -> str:
    if ctx is None:
        return ""
    parts = []
    if ctx.view:
        parts.append(f"view={ctx.view}")
    if ctx.run_id:
        parts.append(f"selected run '{ctx.run_name or ''}' (run_id={ctx.run_id})")
    if ctx.simulated_time:
        parts.append(f"simulated time {ctx.simulated_time}")
    return f"[UI context: {'; '.join(parts)}]\n\n" if parts else ""


def _sse(event: dict) -> str:
    return f"data: {json.dumps(event, default=str)}\n\n"


@router.post("/chat")
async def chat(payload: ChatRequest, request: Request) -> StreamingResponse:
    if _get_client() is None:
        raise HTTPException(status_code=503, detail="AI copilot is not configured (missing CLAUDE_API_KEY).")
    limited = _limiter.check(request.client.host if request.client else "unknown")
    if limited:
        raise HTTPException(status_code=429, detail=limited)

    conv = _get_conversation(payload.conversation_id)
    if len(conv.messages) >= MAX_HISTORY_MESSAGES:
        raise HTTPException(status_code=409, detail="This conversation is too long. Start a new chat.")
    if conv.lock.locked():
        raise HTTPException(status_code=409, detail="The copilot is still answering the previous message.")

    async def events() -> AsyncIterator[str]:
        async with conv.lock:
            yield _sse({"type": "start", "conversation_id": conv.id})
            history_len = len(conv.messages)
            try:
                async for event in _agent_turn(conv, _context_line(payload.context) + payload.message):
                    yield _sse(event)
            except anthropic.RateLimitError:
                yield _sse({"type": "error", "message": "The AI service is rate limited. Please retry shortly."})
                del conv.messages[history_len:]
            except anthropic.AuthenticationError:
                yield _sse({"type": "error", "message": "The AI service rejected the API key."})
                del conv.messages[history_len:]
            except anthropic.APIStatusError as exc:
                log.warning("Copilot API error %s: %s", exc.status_code, exc.message)
                yield _sse({"type": "error", "message": f"AI service error ({exc.status_code}). Please retry."})
                del conv.messages[history_len:]
            except anthropic.APIConnectionError:
                yield _sse({"type": "error", "message": "Could not reach the AI service. Please retry."})
                del conv.messages[history_len:]
            except (asyncio.CancelledError, GeneratorExit):
                # Browser went away mid-turn: drop the partial turn so the
                # history never ends on an unanswered tool call
                del conv.messages[history_len:]
                raise
            yield _sse({"type": "done", "conversation_id": conv.id})

    return StreamingResponse(
        events(),
        media_type="text/event-stream",
        # nginx must not buffer the stream
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@router.delete("/conversations/{conversation_id}")
async def reset_conversation(conversation_id: str) -> dict:
    _conversations.pop(conversation_id, None)
    return {"status": "deleted"}
