"""Database model declarations."""

from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, Dict

from sqlalchemy import JSON, Column, DateTime, Enum as SqlEnum, ForeignKey, Integer, String, Text
from sqlalchemy.dialects.sqlite import JSON as SqliteJSON

from .db import Base


class SimulationStatus(str, Enum):
    """Lifecycle states tracked for simulation runs."""

    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"


class SimulationRun(Base):
    """Persistent metadata about simulation executions."""

    __tablename__ = "simulation_runs"

    id = Column(String(36), primary_key=True)
    name = Column(String(100), nullable=True)
    session_id = Column(String(36), nullable=True)
    status = Column(SqlEnum(SimulationStatus), nullable=False, default=SimulationStatus.PENDING)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    updated_at = Column(DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
    config = Column(JSON().with_variant(SqliteJSON, "sqlite"), nullable=False, default=dict)
    notes = Column(Text, nullable=True)
    scenario_id = Column(String(36), ForeignKey("scenarios.id", ondelete="SET NULL"), nullable=True)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "name": self.name,
            "session_id": self.session_id,
            "status": self.status.value,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
            "config": self.config,
            "notes": self.notes,
        }


class Scenario(Base):
    """Named scenario presets with config overrides."""

    __tablename__ = "scenarios"

    id = Column(String(36), primary_key=True)
    name = Column(String(120), nullable=False)
    description = Column(Text, nullable=True)
    details = Column(Text, nullable=True)  # long-form description/notes
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    updated_at = Column(DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
    config_overrides = Column(JSON().with_variant(SqliteJSON, "sqlite"), nullable=False, default=dict)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "details": self.details,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
            "config_overrides": self.config_overrides,
        }


class SimulationSnapshot(Base):
    """Timeseries storage for simulation state snapshots."""

    __tablename__ = "simulation_snapshots"

    id = Column(Integer, primary_key=True, autoincrement=True)
    run_id = Column(String(36), ForeignKey("simulation_runs.id", ondelete="CASCADE"), nullable=False, index=True)
    timestep = Column(Integer, nullable=True)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
    payload = Column(JSON().with_variant(SqliteJSON, "sqlite"), nullable=False)
