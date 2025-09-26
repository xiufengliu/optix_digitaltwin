"""Pydantic schemas for request and response payloads."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Optional

from pydantic import BaseModel, Field, ConfigDict

from .simulation_manager import SimulationSettings


class SimulationConfig(BaseModel):
    """Configuration payload supplied when launching a run."""

    data_path: Optional[Path] = Field(None, description="Path to time-series CSV input")
    investment_freq: int = Field(12, ge=1, description="Environment investment frequency in steps")
    enable_forecasts: bool = Field(False, description="Whether to attach the forecasting wrapper")
    model_dir: Optional[Path] = Field(None, description="Directory containing TensorFlow forecast models")
    scaler_dir: Optional[Path] = Field(None, description="Directory with scaler artifacts")

    def to_settings(self) -> SimulationSettings:
        settings = SimulationSettings(
            data_path=self.data_path or SimulationSettings().data_path,
            investment_freq=self.investment_freq,
            enable_forecasts=self.enable_forecasts,
            model_dir=self.model_dir or SimulationSettings().model_dir,
            scaler_dir=self.scaler_dir or SimulationSettings().scaler_dir,
        )
        return settings


class SimulationRunCreate(BaseModel):
    """Request body when creating a simulation run entry."""

    name: Optional[str] = Field(None, max_length=100)
    notes: Optional[str] = None
    config: SimulationConfig = Field(default_factory=SimulationConfig)


class SimulationRunRead(BaseModel):
    """API response representing a simulation run record."""

    model_config = ConfigDict(from_attributes=True)

    id: str
    name: Optional[str]
    session_id: Optional[str]
    scenario_id: Optional[str]
    status: str
    created_at: datetime
    updated_at: datetime
    config: dict
    notes: Optional[str]


class SimulationStepRequest(BaseModel):
    """Payload when advancing a simulation run."""

    steps: int = Field(1, ge=1, le=100, description="Number of environment steps to execute")


class SimulationState(BaseModel):
    """Serialized state snapshot returned by step/state endpoints."""

    session_id: str
    observation: Dict[str, Any]
    rewards: Dict[str, float]
    terminations: Dict[str, bool]
    truncations: Dict[str, bool]
    info: Dict[str, Any]
    metrics: Dict[str, Any]


# -------- Scenario Schemas --------

class ScenarioCreate(BaseModel):
    name: str
    description: Optional[str] = None
    details: Optional[str] = None
    config_overrides: Dict[str, Any] = Field(default_factory=dict)


class ScenarioRead(BaseModel):
    id: str
    name: str
    description: Optional[str]
    details: Optional[str]
    created_at: datetime
    updated_at: datetime
    config_overrides: Dict[str, Any]

    model_config = ConfigDict(from_attributes=True)


class ScenarioUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    details: Optional[str] = None
    config_overrides: Optional[Dict[str, Any]] = None
