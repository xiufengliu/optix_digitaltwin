"""Utility helpers for managing simulation environments within the API."""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, Optional, TYPE_CHECKING
from uuid import uuid4

import numpy as np

if TYPE_CHECKING:  # pragma: no cover
    from environment import RenewableMultiAgentEnv  # type: ignore
    from generator import MultiHorizonForecastGenerator  # type: ignore
    from wrapper import MultiHorizonWrapperEnv  # type: ignore


@dataclass
class SimulationSettings:
    """Runtime configuration used when spawning environments."""

    data_path: Path = Path("trainingdata.csv")
    investment_freq: int = 12
    enable_forecasts: bool = False
    model_dir: Path = Path("saved_models")
    scaler_dir: Path = Path("saved_scalers")

    def resolve(self, base_dir: Optional[Path] = None) -> "SimulationSettings":
        """Return a copy with absolute paths resolved."""
        if base_dir is None:
            base_dir = Path.cwd()
        resolved = SimulationSettings(
            data_path=(base_dir / self.data_path).resolve(),
            investment_freq=self.investment_freq,
            enable_forecasts=self.enable_forecasts,
            model_dir=(base_dir / self.model_dir).resolve(),
            scaler_dir=(base_dir / self.scaler_dir).resolve(),
        )
        return resolved


@dataclass
class SimulationSession:
    """Book-keeping wrapper storing active environment instances."""

    session_id: str
    env: RenewableMultiAgentEnv
    wrapper: Optional[Any] = None
    forecast_generator: Optional[Any] = None
    last_observation: Optional[Dict[str, Any]] = None
    last_info: Optional[Dict[str, Any]] = None
    steps_taken: int = 0
    last_rewards: Dict[str, float] = field(default_factory=dict)
    last_terminations: Dict[str, bool] = field(default_factory=dict)
    last_truncations: Dict[str, bool] = field(default_factory=dict)


class SimulationManager:
    """Centralized registry for active simulation sessions."""

    _global_manager: Optional["SimulationManager"] = None

    def __init__(self, settings: Optional[SimulationSettings] = None):
        self.settings = (settings or SimulationSettings()).resolve(Path.cwd())
        self._sessions: Dict[str, SimulationSession] = {}

    # ------------------------------------------------------------------
    # Lifecycle helpers
    # ------------------------------------------------------------------
    @classmethod
    def initialize_global(cls, settings: Optional[SimulationSettings] = None) -> None:
        """Create a process-wide manager instance if one is not ready."""
        if cls._global_manager is None:
            cls._global_manager = cls(settings=settings)

    @classmethod
    def get_global(cls) -> "SimulationManager":
        """Return the global manager, creating it with defaults if needed."""
        if cls._global_manager is None:
            cls.initialize_global()
        assert cls._global_manager is not None  # mypy guard
        return cls._global_manager

    @classmethod
    def shutdown_global(cls) -> None:
        """Dispose of any active sessions and drop the global manager."""
        if cls._global_manager is not None:
            cls._global_manager.close_all()
            cls._global_manager = None

    # ------------------------------------------------------------------
    # Session management
    # ------------------------------------------------------------------
    def create_session(self, settings: Optional[SimulationSettings] = None, config_overrides: Optional[Dict[str, Any]] = None) -> SimulationSession:
        """Instantiate an environment using either supplied or default settings."""
        base_settings = settings or self.settings
        settings = base_settings.resolve(Path.cwd())

        # Forecasting is optional; instantiate lazily to avoid heavy startup costs
        forecast_generator: Optional[Any] = None
        wrapper: Optional[Any] = None

        if settings.enable_forecasts:
            from generator import MultiHorizonForecastGenerator  # type: ignore
            from wrapper import MultiHorizonWrapperEnv  # type: ignore

            forecast_generator = MultiHorizonForecastGenerator(
                model_dir=str(settings.model_dir),
                scaler_dir=str(settings.scaler_dir),
                fallback_mode=True,
                verbose=False,
            )
        data = self._load_data(settings.data_path)

        # Build EnhancedConfig and apply overrides if provided
        config_obj = None
        try:
            from config import EnhancedConfig  # type: ignore
            config_obj = EnhancedConfig()
            if config_overrides:
                for k, v in config_overrides.items():
                    if hasattr(config_obj, k):
                        setattr(config_obj, k, v)
        except Exception:
            config_obj = None

        # Import the environment lazily. If unavailable, fall back to a minimal
        # local environment that enables basic stepping and charting.
        env = None
        try:
            from environment import RenewableMultiAgentEnv  # type: ignore
            env = RenewableMultiAgentEnv(
                data=data,
                investment_freq=settings.investment_freq,
                forecast_generator=forecast_generator,
                config=config_obj,
            )
        except Exception:
            env = _MinimalEnv(
                data=data,
                investment_freq=settings.investment_freq,
            )

        if forecast_generator is not None:
            wrapper = MultiHorizonWrapperEnv(
                env,
                forecast_generator,
                log_path=None,
                disable_csv_logging=True,
            )

        observations, info = self._reset_environment(env, wrapper)

        session = SimulationSession(
            session_id=str(uuid4()),
            env=env,
            wrapper=wrapper,
            forecast_generator=forecast_generator,
            last_observation=observations,
            last_info=info,
        )
        self._sessions[session.session_id] = session
        return session

    def close_session(self, session_id: str) -> None:
        """Close and remove a session if it exists."""
        session = self._sessions.pop(session_id, None)
        if session is None:
            return
        self._safe_close(session)

    def close_all(self) -> None:
        """Dispose of every tracked session."""
        for session in list(self._sessions.values()):
            self._safe_close(session)
        self._sessions.clear()

    def get_session(self, session_id: str) -> SimulationSession:
        if session_id not in self._sessions:
            raise KeyError(f"Unknown simulation session: {session_id}")
        return self._sessions[session_id]

    def step_session(self, session_id: str, steps: int = 1) -> Dict[str, Any]:
        session = self.get_session(session_id)
        active_env = session.wrapper or session.env

        for _ in range(max(1, steps)):
            actions = self._build_default_actions(active_env)
            observations, rewards, terminations, truncations, info = active_env.step(actions)

            session.last_observation = observations
            session.last_rewards = {k: float(v) for k, v in rewards.items()}
            session.last_terminations = {k: bool(v) for k, v in terminations.items()}
            session.last_truncations = {k: bool(v) for k, v in truncations.items()}
            session.last_info = info
            session.steps_taken += 1

            if all(terminations.get(agent, False) or truncations.get(agent, False) for agent in getattr(active_env, "agents", [])):
                observations, info = self._reset_environment(session.env, session.wrapper)
                session.last_observation = observations
                session.last_info = info
                session.last_rewards = {}
                session.last_terminations = {}
                session.last_truncations = {}
                break

        return self.build_state_snapshot(session)

    def build_state_snapshot(self, session: SimulationSession) -> Dict[str, Any]:
        env = session.wrapper or session.env
        observation = session.last_observation or {}

        obs_payload = {agent: self._to_serializable(values) for agent, values in observation.items()}
        info_payload = {key: self._to_serializable(value) for key, value in (session.last_info or {}).items()}

        metrics = {
            "timestep": int(getattr(env, "t", session.steps_taken)),
            "steps_taken": session.steps_taken,
            "fund_nav": self._safe_float(getattr(env, "equity", None)),
            "budget": self._safe_float(getattr(env, "budget", None)),
            "last_revenue": self._safe_float(getattr(env, "last_revenue", None)),
        }

        return {
            "session_id": session.session_id,
            "observation": obs_payload,
            "rewards": session.last_rewards,
            "terminations": session.last_terminations,
            "truncations": session.last_truncations,
            "info": info_payload,
            "metrics": metrics,
        }

    # ------------------------------------------------------------------
    # Helpers
    # ------------------------------------------------------------------
    def _load_data(self, path: Path):
        from .data_loader import load_energy_dataframe

        return load_energy_dataframe(path)

    @staticmethod
    def _reset_environment(env: RenewableMultiAgentEnv, wrapper: Optional[Any]):
        if wrapper is not None:
            return wrapper.reset()
        return env.reset()

    @staticmethod
    def _build_default_actions(active_env: Any) -> Dict[str, Any]:
        actions: Dict[str, Any] = {}
        for agent in getattr(active_env, "agents", []):
            space = active_env.action_space(agent)
            actions[agent] = SimulationManager._zero_action(space)
        return actions

    @staticmethod
    def _zero_action(space: Any) -> Any:
        try:
            if hasattr(space, "n"):
                return 0
            shape = getattr(space, "shape", None)
            if shape is not None:
                dtype = getattr(space, "dtype", np.float32)
                return np.zeros(shape, dtype=dtype)
        except Exception:
            pass
        try:
            return space.sample()
        except Exception:
            return 0

    @staticmethod
    def _to_serializable(value: Any) -> Any:
        if isinstance(value, np.ndarray):
            return value.tolist()
        if isinstance(value, np.generic):
            return value.item()
        if isinstance(value, dict):
            return {k: SimulationManager._to_serializable(v) for k, v in value.items()}
        if isinstance(value, (list, tuple)):
            return [SimulationManager._to_serializable(v) for v in value]
        return value

    @staticmethod
    def _safe_float(value: Any) -> Optional[float]:
        if value is None:
            return None
        try:
            return float(value)
        except Exception:
            return None

    @staticmethod
    def _safe_close(session: SimulationSession) -> None:
        """Attempt to release resources associated with a session."""
        try:
            if session.wrapper is not None and hasattr(session.wrapper, "close"):
                session.wrapper.close()
        except Exception:
            pass
        try:
            if hasattr(session.env, "close"):
                session.env.close()
        except Exception:
            pass


# ------------------------------------------------------------------
# Minimal fallback environment
# ------------------------------------------------------------------
class _Space:
    def __init__(self, shape=(1,), dtype=np.float32):
        self.shape = shape
        self.dtype = dtype

    def sample(self):
        return np.zeros(self.shape, dtype=self.dtype)


class _MinimalEnv:
    """Single-agent minimal env to keep API usable without external package.

    Exposes arrays and a simple step/reset so charts and PED endpoints work.
    """

    def __init__(self, data, investment_freq: int = 12):
        self.data = data
        self.investment_freq = int(investment_freq)
        self.agents = ["manager"]
        n = len(data)
        self._wind = (data["wind"].to_numpy() if "wind" in data.columns else np.zeros(n))
        self._solar = (data["solar"].to_numpy() if "solar" in data.columns else np.zeros(n))
        self._hydro = (data["hydro"].to_numpy() if "hydro" in data.columns else np.zeros(n))
        self._load = (data["load"].to_numpy() if "load" in data.columns else np.zeros(n))
        self._price = (data["price"].to_numpy() if "price" in data.columns else np.zeros(n))
        self.t = 0
        self.equity = None
        self.budget = None
        self.last_revenue = 0.0

    def action_space(self, agent):
        return _Space(shape=(1,), dtype=np.float32)

    def reset(self):
        self.t = 0
        obs = {"manager": self._build_obs(self.t)}
        info = {}
        return obs, info

    def step(self, actions):
        idx = self.t
        pv = float(self._solar[idx] + self._wind[idx] + self._hydro[idx]) if idx < len(self._load) else 0.0
        load = float(self._load[idx]) if idx < len(self._load) else 0.0
        price = float(self._price[idx]) if idx < len(self._price) else 0.0
        net = pv - load
        self.last_revenue = net * price

        self.t = min(idx + 1, len(self._load))

        term = {"manager": self.t >= len(self._load)}
        trunc = {"manager": False}
        rew = {"manager": float(self.last_revenue)}
        obs = {"manager": self._build_obs(self.t)}
        info = {}
        return obs, rew, term, trunc, info

    def _build_obs(self, t):
        i = min(max(int(t), 0), len(self._load) - 1) if len(self._load) > 0 else 0
        return {
            "t": i,
            "wind": float(self._wind[i] if i < len(self._wind) else 0.0),
            "solar": float(self._solar[i] if i < len(self._solar) else 0.0),
            "hydro": float(self._hydro[i] if i < len(self._hydro) else 0.0),
            "load": float(self._load[i] if i < len(self._load) else 0.0),
            "price": float(self._price[i] if i < len(self._price) else 0.0),
        }

    def close(self):
        return None
