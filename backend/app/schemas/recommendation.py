from pydantic import BaseModel, Field
from typing import Optional, Dict, Any, List
from datetime import datetime
from uuid import UUID
from .base import BaseSchema

class RecommendedAction(BaseModel):
    id: str
    title: str
    description: str
    priority: str = Field(..., regex="^(low|medium|high|critical)$")
    estimated_impact: str
    required_resources: List[str]
    approval_required: bool

class RecommendationBase(BaseModel):
    incident_id: Optional[UUID] = None
    type: str = Field(..., min_length=1, max_length=100)
    title: str = Field(..., min_length=1, max_length=255)
    description: str = Field(..., min_length=1)
    rationale: str = Field(..., min_length=1)
    confidence: float = Field(..., ge=0.0, le=1.0)
    actions: List[RecommendedAction]

class RecommendationCreate(RecommendationBase):
    pass

class RecommendationUpdate(BaseModel):
    type: Optional[str] = Field(None, min_length=1, max_length=100)
    title: Optional[str] = Field(None, min_length=1, max_length=255)
    description: Optional[str] = Field(None, min_length=1)
    rationale: Optional[str] = Field(None, min_length=1)
    confidence: Optional[float] = Field(None, ge=0.0, le=1.0)
    actions: Optional[List[RecommendedAction]] = None
    status: Optional[str] = Field(None, regex="^(pending|approved|rejected|implemented)$")

class RecommendationResponse(RecommendationBase, BaseSchema):
    id: UUID
    status: str
    created_at: datetime
    updated_at: Optional[datetime] = None
