from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime
from uuid import UUID
from .base import BaseSchema

class GeoPoint(BaseModel):
    type: str = "Point"
    coordinates: list[float] = Field(..., min_items=2, max_items=2)

class AssetBase(BaseModel):
    type: str = Field(..., min_length=1, max_length=100)
    name: str = Field(..., min_length=1, max_length=255)
    location: GeoPoint
    properties: Dict[str, Any] = Field(default_factory=dict)
    status: str = Field(default="active", regex="^(active|inactive|maintenance|error)$")

class AssetCreate(AssetBase):
    tenant_id: UUID

class AssetUpdate(BaseModel):
    type: Optional[str] = Field(None, min_length=1, max_length=100)
    name: Optional[str] = Field(None, min_length=1, max_length=255)
    location: Optional[GeoPoint] = None
    properties: Optional[Dict[str, Any]] = None
    status: Optional[str] = Field(None, regex="^(active|inactive|maintenance|error)$")

class AssetResponse(AssetBase, BaseSchema):
    id: UUID
    tenant_id: UUID
    created_at: datetime
    updated_at: Optional[datetime] = None

class AssetList(BaseSchema):
    assets: list[AssetResponse]
    total: int
    page: int
    per_page: int
    total_pages: int
