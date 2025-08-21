from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime
from uuid import UUID

class BaseSchema(BaseModel):
    """Base schema with common configuration"""
    class Config:
        from_attributes = True
        json_encoders = {
            datetime: lambda v: v.isoformat(),
            UUID: lambda v: str(v)
        }

class PaginationParams(BaseModel):
    """Pagination parameters for list endpoints"""
    page: int = Field(default=1, ge=1, description="Page number")
    per_page: int = Field(default=20, ge=1, le=100, description="Items per page")
    sort_by: Optional[str] = Field(default=None, description="Sort field")
    sort_order: Optional[str] = Field(default="desc", regex="^(asc|desc)$", description="Sort order")

class PaginatedResponse(BaseModel):
    """Paginated response wrapper"""
    data: list[Any]
    pagination: Dict[str, Any]
    total: int
    page: int
    per_page: int
    total_pages: int

class ErrorResponse(BaseModel):
    """Standard error response"""
    error: str
    message: str
    details: Optional[Dict[str, Any]] = None
