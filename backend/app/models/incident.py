from sqlalchemy import Column, String, Text, JSON, ForeignKey, ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from geoalchemy2 import Geography
from .base import Base, TimestampMixin
import uuid

class Incident(Base, TimestampMixin):
    __tablename__ = "incidents"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    type = Column(String(100), nullable=False, index=True)  # traffic_accident, power_outage, etc.
    severity = Column(String(50), nullable=False, index=True)  # low, medium, high, critical
    status = Column(String(50), nullable=False, default='reported', index=True)  # reported, acknowledged, in_progress, resolved, closed
    location = Column(Geography('POINT', srid=4326), nullable=False)
    reported_at = Column(TimestampMixin.created_at)
    resolved_at = Column(TimestampMixin.updated_at)
    assigned_to = Column(UUID(as_uuid=True), ForeignKey('users.id'))
    assets_involved = Column(ARRAY(UUID(as_uuid=True)), default=[])
    tags = Column(ARRAY(String), default=[])
    metadata = Column(JSON, default={})
    tenant_id = Column(UUID(as_uuid=True), ForeignKey('tenants.id'), nullable=False)
    
    # Relationships
    tenant = relationship("Tenant", back_populates="incidents")
    assigned_user = relationship("User", back_populates="incidents_assigned")
    assets = relationship("Asset", secondary="incident_assets")
    recommendations = relationship("AIRecommendation", back_populates="incident")
    
    def __repr__(self):
        return f"<Incident(id={self.id}, title='{self.title}', status='{self.status}')>"
