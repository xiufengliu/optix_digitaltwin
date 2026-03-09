#!/usr/bin/env bash
#
# Reseed the predefined scenarios into the active SQLite database and restart
# the backend so the UI can see them immediately.
#
# Usage:
#   ./repair_scenarios.sh

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PYTHON_BIN="${PYTHON_BIN:-/opt/anaconda3/bin/python}"
DB_PATH="${DIGITAL_TWIN_DB_PATH:-$REPO_DIR/digital_twin.sqlite3}"

echo "==> Repo dir:  $REPO_DIR"
echo "==> Python:    $PYTHON_BIN"
echo "==> Database:  $DB_PATH"
echo

if [[ ! -x "$PYTHON_BIN" ]]; then
  echo "ERROR: Python executable not found: $PYTHON_BIN" >&2
  exit 1
fi

cd "$REPO_DIR"
export DIGITAL_TWIN_DB_PATH="$DB_PATH"

"$PYTHON_BIN" - <<'PY'
from backend.main import _seed_predefined_scenarios
from backend.db import session_scope
from backend.models import Scenario


def dump(label: str) -> None:
    with session_scope() as db:
        rows = db.query(Scenario).order_by(Scenario.created_at.asc()).all()
        print(f"{label}: {len(rows)} scenario(s)")
        for row in rows:
            print(f"  - {row.name}")


dump("Before reseed")
_seed_predefined_scenarios()
dump("After reseed")
PY

echo
echo "==> Restarting backend"
"$REPO_DIR/restart.sh"
