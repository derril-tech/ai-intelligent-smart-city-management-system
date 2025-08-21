from sqlalchemy import Column, String, Text, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from geoalchemy2 import Geography
from .base import Base, TimestampMixin
import uuid

class Alert(Base, TimestampMixin):
    __tablename__ = "alerts"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    type = Column(String(100), nullable=False, index=True)  # system_alert, incident_alert, etc.
    title = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    severity = Column(String(50), nullable=False, index=True)  # info, warning, error, critical
    location = Column(Geography('POINT', srid=4326))  # Optional location
    acknowledged = Column(Boolean, default=False)
    acknowledged_by = Column(UUID(as_uuid=True), ForeignKey('users.id'))
    acknowledged_at = Column(DateTime(timezone=True))
    
    # Relationships
    acknowledged_by_user = relationship("User", back_populates="alerts_acknowledged")
    
    def __repr__(self):
        return f"<Alert(id={self.id}, type='{self.type}', severity='{self.severity}')>"
