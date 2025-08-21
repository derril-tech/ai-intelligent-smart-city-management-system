from sqlalchemy import Column, String, JSON, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from geoalchemy2 import Geography
from .base import Base
import uuid

class TelemetryData(Base):
    __tablename__ = "telemetry_data"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    asset_id = Column(UUID(as_uuid=True), ForeignKey('assets.id'), nullable=False, index=True)
    timestamp = Column(DateTime(timezone=True), nullable=False, index=True)
    metrics = Column(JSON, nullable=False)  # Store sensor readings as JSON
    location = Column(Geography('POINT', srid=4326))  # Optional, can be different from asset location
    tags = Column(JSON, default={})  # Additional metadata
    
    # Relationships
    asset = relationship("Asset", back_populates="telemetry_data")
    
    def __repr__(self):
        return f"<TelemetryData(id={self.id}, asset_id={self.asset_id}, timestamp='{self.timestamp}')>"
