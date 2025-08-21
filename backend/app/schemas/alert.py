from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime
from uuid import UUID
from .base import BaseSchema

class GeoPoint(BaseModel):
    type: str = "Point"
    coordinates: list[float] = Field(..., min_items=2, max_items=2)

class AlertBase(BaseModel):
    type: str = Field(..., min_length=1, max_length=100)
    title: str = Field(..., min_length=1, max_length=255)
    message: str = Field(..., min_length=1)
    severity: str = Field(..., regex="^(info|warning|error|critical)$")
    location: Optional[GeoPoint] = None

class AlertCreate(AlertBase):
    pass

class AlertUpdate(BaseModel):
    type: Optional[str] = Field(None, min_length=1, max_length=100)
    title: Optional[str] = Field(None, min_length=1, max_length=255)
    message: Optional[str] = Field(None, min_length=1)
    severity: Optional[str] = Field(None, regex="^(info|warning|error|critical)$")
    location: Optional[GeoPoint] = None
    acknowledged: Optional[bool] = None
    acknowledged_by: Optional[UUID] = None

class AlertResponse(AlertBase, BaseSchema):
    id: UUID
    acknowledged: bool
    acknowledged_by: Optional[UUID] = None
    acknowledged_at: Optional[datetime] = None
    created_at: datetime
    updated_at: Optional[datetime] = None

class AlertList(BaseSchema):
    alerts: list[AlertResponse]
    total: int
    page: int
    per_page: int
    total_pages: int
