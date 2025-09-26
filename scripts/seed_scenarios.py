#!/usr/bin/env python3
"""Seed predefined scenarios into the local SQLite database.

This script can be run on any host to (re)seed the DB used by the
digital twin backend. It is idempotent and will also upgrade the
description/details of existing predefined scenarios when applicable.

Usage:
  python scripts/seed_scenarios.py

The script assumes it lives inside the repository and will add the repo
root to PYTHONPATH so importing `backend` works regardless of cwd.
"""

from __future__ import annotations

import sys
from pathlib import Path


def main() -> int:
    base_dir = Path(__file__).resolve().parents[1]
    if str(base_dir) not in sys.path:
        sys.path.insert(0, str(base_dir))

    try:
        from backend.db import create_all, session_scope  # type: ignore
        from backend.main import _seed_predefined_scenarios  # type: ignore
        from backend.models import Scenario  # type: ignore
    except Exception as exc:  # pragma: no cover
        print(f"[seed] Failed to import backend modules: {exc}")
        return 2

    try:
        create_all()
        before = 0
        with session_scope() as db:
            try:
                before = int(db.query(Scenario).count())
            except Exception:
                before = 0
        _seed_predefined_scenarios()
        with session_scope() as db:
            after = int(db.query(Scenario).count())
            names = [r.name for r in db.query(Scenario).all()]
        print(f"[seed] Scenarios before: {before}, after: {after}")
        for n in names:
            print(f"[seed] - {n}")
        return 0
    except Exception as exc:  # pragma: no cover
        print(f"[seed] Seeding failed: {exc}")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

