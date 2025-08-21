from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
import logging
from typing import AsyncGenerator
import asyncio

from app.core.config import settings

logger = logging.getLogger(__name__)

# Database URL
DATABASE_URL = settings.DATABASE_URL

# Create engine
engine = create_engine(
    DATABASE_URL,
    pool_size=settings.DATABASE_POOL_SIZE,
    max_overflow=settings.DATABASE_MAX_OVERFLOW,
    pool_pre_ping=True,
    echo=settings.DEBUG
)

# Create session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create base class for models
Base = declarative_base()

# Metadata for schema management
metadata = MetaData()

def get_db():
    """Get database session"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

async def init_db():
    """Initialize database"""
    try:
        # Import all models to ensure they are registered
        from app.models import (
            user, tenant, role, audit_log,
            asset, zone, telemetry, incident,
            recommendation, document
        )
        
        # Create all tables
        Base.metadata.create_all(bind=engine)
        logger.info("Database tables created successfully")
        
        # TODO: Run initial migrations
        # TODO: Seed initial data
        
    except Exception as e:
        logger.error(f"Database initialization failed: {e}")
        raise

async def check_db_health():
    """Check database health"""
    try:
        db = SessionLocal()
        db.execute("SELECT 1")
        db.close()
        return True
    except Exception as e:
        logger.error(f"Database health check failed: {e}")
        return False

# Database utilities
def get_db_session():
    """Get database session for use in background tasks"""
    return SessionLocal()

# TODO: Add async database support for better performance
# TODO: Add connection pooling configuration
# TODO: Add database migration support with Alembic
# TODO: Add database backup and recovery procedures
