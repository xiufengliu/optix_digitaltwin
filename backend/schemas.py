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
    digital_twin_id: Optional[str] = None
    status: str
    created_at: datetime
    updated_at: datetime
    config: dict
    notes: Optional[str]


class SimulationStepRequest(BaseModel):
    """Payload when advancing a simulation run."""

    steps: int = Field(1, ge=1, le=10000, description="Number of environment steps to execute")


class SimulationState(BaseModel):
    """Serialized state snapshot returned by step/state endpoints."""

    session_id: str
    observation: Dict[str, Any]
    rewards: Dict[str, float]
    terminations: Dict[str, bool]
    truncations: Dict[str, bool]
    info: Dict[str, Any]
    metrics: Dict[str, Any]


class RunCompareRequest(BaseModel):
    """Request body for comparing multiple runs on a common horizon."""

    run_ids: list[str] = Field(default_factory=list)
    use_common_horizon: bool = Field(
        True,
        description="If true, truncate every run to the minimum available step count.",
    )
    full_period: bool = Field(
        False,
        description="Compare the whole dataset period of every run (no live session needed).",
    )


class RunCompareRow(BaseModel):
    """Comparable run summary used by the compare view."""

    run_id: str
    name: Optional[str] = None
    status: str
    comparable: bool
    available_steps: Optional[int] = None
    compared_steps: Optional[int] = None
    period_hours: Optional[float] = None
    total_gen_mwh: Optional[float] = None
    total_demand_mwh: Optional[float] = None
    ped_absolute_mwh: Optional[float] = None
    ped_ratio: Optional[float] = None
    total_energy_ped_ratio: Optional[float] = None
    self_sufficiency_ratio: Optional[float] = None
    grid_purchase_mwh: Optional[float] = None
    export_delivered_mwh: Optional[float] = None
    heat_demand_mwh: Optional[float] = None
    design: Optional[str] = None


class RunCompareResponse(BaseModel):
    """Response payload for the compare-runs API."""

    common_steps: Optional[int] = None
    common_period_hours: Optional[float] = None
    rows: list[RunCompareRow] = Field(default_factory=list)


# -------- Scenario Schemas --------

class ScenarioCreate(BaseModel):
    name: str
    description: Optional[str] = None
    details: Optional[str] = None
    config_overrides: Dict[str, Any] = Field(default_factory=dict)
    digital_twin_id: Optional[str] = None


class ScenarioRead(BaseModel):
    id: str
    name: str
    description: Optional[str]
    details: Optional[str]
    created_at: datetime
    updated_at: datetime
    config_overrides: Dict[str, Any]
    digital_twin_id: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)


class ScenarioUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    details: Optional[str] = None
    config_overrides: Optional[Dict[str, Any]] = None
    digital_twin_id: Optional[str] = None


# -------- Digital Twin Schemas --------

class DTComponentSchema(BaseModel):
    id: str
    type: str
    name: str
    x: float
    y: float
    params: Dict[str, Any] = Field(default_factory=dict)


class DTConnectionSchema(BaseModel):
    id: str
    from_id: str = Field(alias='from')
    to_id: str = Field(alias='to')
    type: str = 'electricity'
    capacity_kw: Optional[float] = None

    class Config:
        populate_by_name = True


class DigitalTwinCreate(BaseModel):
    name: str
    description: Optional[str] = None
    components: list[DTComponentSchema] = Field(default_factory=list)
    connections: list[DTConnectionSchema] = Field(default_factory=list)


class DigitalTwinRead(BaseModel):
    id: str
    name: str
    description: Optional[str]
    created_at: datetime
    updated_at: datetime
    components: list[Dict[str, Any]]
    connections: list[Dict[str, Any]]

    model_config = ConfigDict(from_attributes=True)


class DigitalTwinUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    components: Optional[list[DTComponentSchema]] = None
    connections: Optional[list[DTConnectionSchema]] = None


class ComponentRef(BaseModel):
    """Component as currently edited (may be newer than the saved twin)."""

    type: str
    params: Dict[str, Any] = Field(default_factory=dict)


class ProfileUpload(BaseModel):
    # Two-column CSV (time, value) as text, or gzip-compressed and base64-encoded
    csv_text: Optional[str] = None
    csv_gzip_b64: Optional[str] = None
    filename: Optional[str] = Field(None, max_length=200)
    unit: str = 'kW'
    time_column: Optional[str] = None
    value_column: Optional[str] = None
    timezone: str = 'local'
    scale: bool = True
    component: Optional[ComponentRef] = None


class ProfileSettings(BaseModel):
    scale: Optional[bool] = None


class SyntheticPreviewRequest(BaseModel):
    component: ComponentRef
    channel: str
    year: Optional[int] = None


class TwinEvaluateRequest(BaseModel):
    """A design as currently edited; ``twin_id`` lets saved uploads take part."""

    components: list[Dict[str, Any]] = Field(default_factory=list)
    twin_id: Optional[str] = None
