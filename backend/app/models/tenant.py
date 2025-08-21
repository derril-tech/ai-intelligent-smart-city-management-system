from sqlalchemy import Column, String, Boolean, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from .base import Base, TimestampMixin
import uuid

class Tenant(Base, TimestampMixin):
    __tablename__ = "tenants"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    domain = Column(String(255), unique=True, nullable=False, index=True)
    settings = Column(JSON, default={})
    is_active = Column(Boolean, default=True)
    
    # Relationships
    users = relationship("User", back_populates="tenant")
    assets = relationship("Asset", back_populates="tenant")
    incidents = relationship("Incident", back_populates="tenant")
    
    def __repr__(self):
        return f"<Tenant(id={self.id}, name='{self.name}', domain='{self.domain}')>"
