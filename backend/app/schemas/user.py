from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from uuid import UUID
from .base import BaseSchema

class UserBase(BaseModel):
    email: EmailStr
    name: str = Field(..., min_length=1, max_length=255)
    role: str = Field(..., regex="^(admin|operator|viewer|citizen)$")

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)
    tenant_id: UUID

class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    name: Optional[str] = Field(None, min_length=1, max_length=255)
    role: Optional[str] = Field(None, regex="^(admin|operator|viewer|citizen)$")
    is_active: Optional[bool] = None

class UserResponse(UserBase, BaseSchema):
    id: UUID
    tenant_id: UUID
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None
    last_login: Optional[datetime] = None

class UserList(BaseSchema):
    users: list[UserResponse]
    total: int
    page: int
    per_page: int
    total_pages: int
