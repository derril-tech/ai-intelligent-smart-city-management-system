from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime
from uuid import UUID
from .base import BaseSchema

class GeoPoint(BaseModel):
    type: str = "Point"
    coordinates: list[float] = Field(..., min_items=2, max_items=2)

class TelemetryDataBase(BaseModel):
    asset_id: UUID
    timestamp: datetime
    metrics: Dict[str, float]
    location: Optional[GeoPoint] = None
    tags: Optional[Dict[str, str]] = None

class TelemetryDataCreate(TelemetryDataBase):
    pass

class TelemetryDataResponse(TelemetryDataBase, BaseSchema):
    id: UUID
