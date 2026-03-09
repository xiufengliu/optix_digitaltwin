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
LOCAL_HEALTH_URL="${LOCAL_HEALTH_URL:-http://127.0.0.1:${PORT}/health}"
PID_PATTERN="uvicorn ${APP_MODULE}"

echo "==> Repo dir:      $REPO_DIR"
echo "==> Python:        $PYTHON_BIN"
echo "==> App module:    $APP_MODULE"
echo "==> Bind:          ${HOST}:${PORT}"
echo "==> Workers:       $WORKERS"
echo "==> Log file:      $LOG_FILE"
echo

if [[ ! -x "$PYTHON_BIN" ]]; then
  echo "ERROR: Python executable not found: $PYTHON_BIN" >&2
  exit 1
fi

echo "==> Stopping existing backend process"
pkill -f "$PID_PATTERN" || true
sleep 1

if pgrep -f "$PID_PATTERN" >/dev/null 2>&1; then
  echo "ERROR: Existing backend process is still running." >&2
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
