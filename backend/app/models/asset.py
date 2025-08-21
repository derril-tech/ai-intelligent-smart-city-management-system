from sqlalchemy import Column, String, JSON, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from geoalchemy2 import Geography
from .base import Base, TimestampMixin
import uuid

class Asset(Base, TimestampMixin):
    __tablename__ = "assets"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    type = Column(String(100), nullable=False, index=True)  # traffic_signal, air_quality_sensor, etc.
    name = Column(String(255), nullable=False)
    location = Column(Geography('POINT', srid=4326), nullable=False)
    properties = Column(JSON, default={})
    status = Column(String(50), default='active')  # active, inactive, maintenance, error
    tenant_id = Column(UUID(as_uuid=True), ForeignKey('tenants.id'), nullable=False)
    
    # Relationships
    tenant = relationship("Tenant", back_populates="assets")
    telemetry_data = relationship("TelemetryData", back_populates="asset")
    incidents = relationship("Incident", back_populates="assets")
    
    def __repr__(self):
        return f"<Asset(id={self.id}, type='{self.type}', name='{self.name}')>"
