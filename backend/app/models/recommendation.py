from sqlalchemy import Column, String, Text, JSON, ForeignKey, Float, ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from .base import Base, TimestampMixin
import uuid

class AIRecommendation(Base, TimestampMixin):
    __tablename__ = "ai_recommendations"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    incident_id = Column(UUID(as_uuid=True), ForeignKey('incidents.id'))  # Optional, can be standalone
    type = Column(String(100), nullable=False, index=True)  # traffic_optimization, energy_conservation, etc.
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    rationale = Column(Text, nullable=False)
    confidence = Column(Float, nullable=False)  # 0.0 to 1.0
    actions = Column(JSON, nullable=False)  # Array of recommended actions
    status = Column(String(50), default='pending', index=True)  # pending, approved, rejected, implemented
    
    # Relationships
    incident = relationship("Incident", back_populates="recommendations")
    
    def __repr__(self):
        return f"<AIRecommendation(id={self.id}, type='{self.type}', confidence={self.confidence})>"
