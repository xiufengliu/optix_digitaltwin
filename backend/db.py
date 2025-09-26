"""Database helpers built around a local SQLite file."""

from __future__ import annotations

from contextlib import contextmanager
from pathlib import Path
from typing import Iterator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

_DB_PATH = Path("digital_twin.sqlite3")
DATABASE_URL = f"sqlite:///{_DB_PATH}"  # Stored alongside the repository for now


class Base(DeclarativeBase):
    """Base declarative class for SQLAlchemy models."""


_engine = create_engine(
    DATABASE_URL,
    echo=False,
    future=True,
    connect_args={"check_same_thread": False},
)
_SessionFactory = sessionmaker(bind=_engine, expire_on_commit=False, class_=Session)


@contextmanager
def session_scope() -> Iterator[Session]:
    """Provide a transactional scope around a series of operations."""
    session = _SessionFactory()
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()


def create_all() -> None:
    """Create database tables if they do not yet exist."""
    # Import models lazily so SQLAlchemy knows about them before metadata creation
    from . import models  # noqa: F401  # pylint: disable=unused-import

    Base.metadata.create_all(_engine)
    _run_light_migrations()


def _run_light_migrations() -> None:
    """Perform minimal, safe migrations for SQLite.

    We do not use Alembic here; instead, we add newly introduced columns when
    they are missing. This keeps existing data and avoids full rebuilds.
    """
    try:
        with _engine.connect() as conn:
            # Add simulation_runs.scenario_id if missing
            res = conn.exec_driver_sql("PRAGMA table_info(simulation_runs)")
            cols = {row[1] for row in res.fetchall()}  # type: ignore[index]
            if "scenario_id" not in cols:
                conn.exec_driver_sql(
                    "ALTER TABLE simulation_runs ADD COLUMN scenario_id VARCHAR(36)"
                )
            # Add scenarios.details if missing
            res2 = conn.exec_driver_sql("PRAGMA table_info(scenarios)")
            cols2 = {row[1] for row in res2.fetchall()}  # type: ignore[index]
            if "details" not in cols2:
                conn.exec_driver_sql(
                    "ALTER TABLE scenarios ADD COLUMN details TEXT"
                )
    except Exception:
        # If anything goes wrong, we fail silently to avoid breaking startup.
        pass
