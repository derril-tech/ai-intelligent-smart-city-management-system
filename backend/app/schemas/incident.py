from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
from uuid import UUID
from .base import BaseSchema

class GeoPoint(BaseModel):
    type: str = "Point"
    coordinates: List[float] = Field(..., min_items=2, max_items=2)

class IncidentBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    description: str = Field(..., min_length=1)
    type: str = Field(..., regex="^(traffic_accident|power_outage|water_main_break|air_quality_alert|flooding|fire|medical_emergency|security_breach|infrastructure_failure|weather_event)$")
    severity: str = Field(..., regex="^(low|medium|high|critical)$")
    location: GeoPoint
    assets_involved: List[UUID] = Field(default_factory=list)
    tags: List[str] = Field(default_factory=list)
    metadata: Dict[str, Any] = Field(default_factory=dict)

class IncidentCreate(IncidentBase):
    tenant_id: UUID

class IncidentUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=255)
    description: Optional[str] = Field(None, min_length=1)
    type: Optional[str] = Field(None, regex="^(traffic_accident|power_outage|water_main_break|air_quality_alert|flooding|fire|medical_emergency|security_breach|infrastructure_failure|weather_event)$")
    severity: Optional[str] = Field(None, regex="^(low|medium|high|critical)$")
    status: Optional[str] = Field(None, regex="^(reported|acknowledged|in_progress|resolved|closed)$")
    location: Optional[GeoPoint] = None
    assigned_to: Optional[UUID] = None
    assets_involved: Optional[List[UUID]] = None
    tags: Optional[List[str]] = None
    metadata: Optional[Dict[str, Any]] = None

class IncidentResponse(IncidentBase, BaseSchema):
    id: UUID
    status: str
    reported_at: datetime
    resolved_at: Optional[datetime] = None
    assigned_to: Optional[UUID] = None
    tenant_id: UUID
    created_at: datetime
    updated_at: Optional[datetime] = None

class IncidentList(BaseSchema):
    incidents: List[IncidentResponse]
    total: int
    page: int
    per_page: int
    total_pages: int
