OptiX Digital Twin
===================

Interactive digital twin prototype with a FastAPI backend and a React + Vite frontend. The backend manages simulation sessions, scenarios, and metrics; the frontend provides a console with 3D visualization and charts.

The backend stores data in a local SQLite database and seeds several predefined scenarios at startup. A minimal fallback environment is included so you can run the app using only a CSV timeseries file (no external RL/training environment required). If you install the full training environment package that exposes `environment.RenewableMultiAgentEnv`, the backend will use it automatically.


Overview
--------
- Backend: FastAPI app (`backend/`) with routes for health, runs, scenarios, PED and energy series.
- Frontend: React + Vite app (`frontend/`) with WebSocket live updates and scenario management.
- DB: SQLite file `digital_twin.sqlite3` in the repo root.
- Data: CSV timeseries `trainingdata.csv` in the repo root (configurable per-run).


Repository Structure
--------------------
- `backend/` — API, models, schemas, simulation manager, optimizer, and data loader
  - `main.py` — FastAPI app factory and lifespan hooks (seeds scenarios)
  - `routes.py` — REST and WebSocket endpoints
  - `db.py` — SQLite engine, session helpers, light migrations
  - `models.py` — SQLAlchemy models (runs, scenarios, snapshots)
  - `schemas.py` — Pydantic request/response schemas
  - `simulation_manager.py` — session lifecycle and env wrapper
  - `data_loader.py` — CSV loading and normalization utilities
  - `optimizer.py` — merit‑order dispatcher used for KPIs and charts
- `frontend/` — React app (Vite) for the console UI
- `scripts/generate_building_model.py` — creates a stylized GLB for the viewer
- `paper.txt` — scenario context (narrative used to seed predefined scenarios)


Prerequisites
-------------
- Python 3.10+
- Node.js 18+
- For the optional full environment: an installable package exposing `environment.RenewableMultiAgentEnv`


Quick Start
-----------
1) Backend

```
python -m venv .venv
source .venv/bin/activate
pip install -U "fastapi>=0.110" "uvicorn[standard]>=0.23" "sqlalchemy>=2.0" "pydantic>=2.6" numpy pandas

# run API
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000

# health check
curl http://localhost:8000/health
```

2) Frontend

```
cd frontend
npm install
VITE_API_BASE="http://localhost:8000" npm run dev
# Open http://localhost:5173
```

3) Data file

Place a CSV named `trainingdata.csv` in the repo root (or provide an absolute path when creating a run). Required columns:
- `wind`, `solar`, `hydro`, `price`, `load`
- Optional: `timestamp` (or `date` + `time`, which will be combined)

If the values look like capacity factors (0..1), the loader converts them to MW using default capacities; otherwise it assumes they are already in MW.

4) Create a run

- From the UI: Go to the Scenarios tab, create or pick a scenario, then click “Run”.
- From the API:

```
curl -X POST http://localhost:8000/runs \
  -H "Content-Type: application/json" \
  -d '{
        "name":"Test Run",
        "config":{
          "data_path":"/absolute/path/to/trainingdata.csv",
          "investment_freq":12,
          "enable_forecasts":false
        }
      }'
```


Fallback vs. Full Environment
-----------------------------
- By default, the backend tries to import `environment.RenewableMultiAgentEnv`.
- If unavailable, it falls back to a minimal single‑agent environment that reads directly from your CSV. This enables stepping, PED, and charts without extra dependencies.
- To use the full environment instead, install it and restart the API:

```
# example
cd /path/to/training_env_repo
pip install -e .

# validation
python -c "import environment; from environment import RenewableMultiAgentEnv; print('ok')"
```


Common Endpoints
----------------
- `GET /health` — service probe
- Runs
  - `POST /runs` — create a run
  - `GET /runs` — list runs
  - `GET /runs/{id}` — run metadata
  - `POST /runs/{id}/step` — advance simulation
  - `GET /runs/{id}/state` — latest snapshot
  - `GET /runs/{id}/history` — recent snapshots
  - `GET /runs/{id}/ped` — aggregate PED metrics
  - `GET /runs/{id}/energy_series` — generation/load series up to current step
  - `WS /runs/{id}/ws` — interactive stepping stream
- Scenarios
  - `POST /scenarios` / `GET /scenarios` / `PATCH /scenarios/{id}` / `DELETE /scenarios/{id}`
  - `POST /scenarios/{id}/run` — launch a run from a scenario


Notes
-----
- Database file: `digital_twin.sqlite3` at repo root (auto‑created). Lightweight migrations run at startup.
- On first boot, predefined scenarios are seeded from `paper.txt` (with details/description upgrades if needed).
- The 3D viewer asset is at `frontend/public/assets/building.glb`. You can regenerate it with:

```
python scripts/generate_building_model.py
```


Development Tips
----------------
- Fast reload: use `--reload` for the backend and `npm run dev` for the frontend.
- Cross‑origin: Vite dev server proxies `/api` only if needed; the app uses `VITE_API_BASE` for absolute URLs.
- If the UI “Run” button seems to do nothing, check the backend logs for the exact error (e.g., missing environment package or invalid CSV path).

