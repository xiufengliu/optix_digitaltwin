#!/usr/bin/env bash
#
# Restart the digital twin backend served by uvicorn.
#
# Usage:
#   ./restart.sh
#   PORT=8001 ./restart.sh
#   PYTHON_BIN=/path/to/python ./restart.sh

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_MODULE="${APP_MODULE:-backend.main:app}"
PYTHON_BIN="${PYTHON_BIN:-/opt/anaconda3/bin/python}"
HOST="${HOST:-0.0.0.0}"
PORT="${PORT:-8000}"
WORKERS="${WORKERS:-1}"
LOG_FILE="${LOG_FILE:-$REPO_DIR/uvicorn.log}"
STARTUP_TIMEOUT="${STARTUP_TIMEOUT:-20}"
STOP_TIMEOUT="${STOP_TIMEOUT:-10}"
PID_PATTERN="uvicorn ${APP_MODULE}"

pick_db_path() {
  if [[ -n "${DIGITAL_TWIN_DB_PATH:-}" ]]; then
    printf '%s\n' "$DIGITAL_TWIN_DB_PATH"
    return 0
  fi

  local candidates=(
    "$REPO_DIR/digital_twin.sqlite3"
    "$HOME/digital_twin.sqlite3"
    "$(dirname "$REPO_DIR")/digital_twin.sqlite3"
  )
  local best_path="$REPO_DIR/digital_twin.sqlite3"
  local best_score=-1
  local best_size=-1
  local path

  for path in "${candidates[@]}"; do
    [[ -f "$path" ]] || continue

    local score=0
    local size=0
    size="$(wc -c < "$path" 2>/dev/null || printf '0')"
    if command -v sqlite3 >/dev/null 2>&1; then
      local has_scenarios
      has_scenarios="$(sqlite3 "$path" "select count(*) from sqlite_master where type='table' and name='scenarios';" 2>/dev/null || printf '0')"
      if [[ "$has_scenarios" == "1" ]]; then
        score="$(sqlite3 "$path" "select count(*) from scenarios;" 2>/dev/null || printf '0')"
      fi
    fi

    if (( score > best_score || (score == best_score && size > best_size) )); then
      best_score=$score
      best_size=$size
      best_path="$path"
    fi
  done

  printf '%s\n' "$best_path"
}

DB_PATH="$(pick_db_path)"
export DIGITAL_TWIN_DB_PATH="$DB_PATH"
LOCAL_HEALTH_URL="${LOCAL_HEALTH_URL:-http://127.0.0.1:${PORT}/health}"

echo "==> Repo dir:      $REPO_DIR"
echo "==> Python:        $PYTHON_BIN"
echo "==> App module:    $APP_MODULE"
echo "==> Bind:          ${HOST}:${PORT}"
echo "==> Workers:       $WORKERS"
echo "==> Database:      $DIGITAL_TWIN_DB_PATH"
echo "==> Log file:      $LOG_FILE"
echo

if [[ ! -x "$PYTHON_BIN" ]]; then
  echo "ERROR: Python executable not found: $PYTHON_BIN" >&2
  exit 1
fi

echo "==> Stopping existing backend process"
mapfile -t existing_pids < <(pgrep -f "$PID_PATTERN" || true)
if (( ${#existing_pids[@]} > 0 )); then
  kill "${existing_pids[@]}" 2>/dev/null || true

  stopped=false
  for ((i = 1; i <= STOP_TIMEOUT; i++)); do
    sleep 1
    if ! pgrep -f "$PID_PATTERN" >/dev/null 2>&1; then
      stopped=true
      break
    fi
  done

  if [[ "$stopped" != true ]]; then
    echo "==> Existing process did not stop after ${STOP_TIMEOUT}s; forcing kill"
    pkill -9 -f "$PID_PATTERN" || true
    sleep 1
  fi
fi

if pgrep -f "$PID_PATTERN" >/dev/null 2>&1; then
  echo "ERROR: Existing backend process is still running after forced stop." >&2
  pgrep -af "$PID_PATTERN" || true
  exit 1
fi

echo "==> Starting backend"
cd "$REPO_DIR"
nohup "$PYTHON_BIN" -m uvicorn "$APP_MODULE" \
  --host "$HOST" \
  --port "$PORT" \
  --workers "$WORKERS" \
  --proxy-headers \
  > "$LOG_FILE" 2>&1 < /dev/null &

NEW_PID=$!
echo "==> Spawned PID:   $NEW_PID"

echo "==> Waiting for health check: $LOCAL_HEALTH_URL"
for ((i = 1; i <= STARTUP_TIMEOUT; i++)); do
  if curl -fsS "$LOCAL_HEALTH_URL" >/dev/null 2>&1; then
    echo
    echo "✅ Backend restarted successfully."
    echo "==> Active process:"
    pgrep -af "$PID_PATTERN" || true
    echo "==> Health response:"
    curl -fsS "$LOCAL_HEALTH_URL"
    echo
    exit 0
  fi

  if ! kill -0 "$NEW_PID" >/dev/null 2>&1; then
    echo
    echo "ERROR: Backend exited before passing health check." >&2
    echo "==> Last log lines:" >&2
    tail -n 50 "$LOG_FILE" >&2 || true
    exit 1
  fi

  sleep 1
done

echo
echo "ERROR: Health check timed out after ${STARTUP_TIMEOUT}s." >&2
echo "==> Last log lines:" >&2
tail -n 50 "$LOG_FILE" >&2 || true
exit 1
