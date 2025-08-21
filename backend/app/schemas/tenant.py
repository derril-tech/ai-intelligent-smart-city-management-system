from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime
from uuid import UUID
from .base import BaseSchema

class NotificationPreferences(BaseModel):
    email: bool = True
    sms: bool = False
    push: bool = True
    webhook_urls: list[str] = Field(default_factory=list)

class TenantSettings(BaseModel):
    timezone: str = "UTC"
    currency: str = "USD"
    language: str = "en"
    emergency_contacts: list[str] = Field(default_factory=list)
    notification_preferences: NotificationPreferences = Field(default_factory=NotificationPreferences)

class TenantBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    domain: str = Field(..., min_length=1, max_length=255)
    settings: TenantSettings = Field(default_factory=TenantSettings)

class TenantCreate(TenantBase):
    pass

class TenantUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=255)
    domain: Optional[str] = Field(None, min_length=1, max_length=255)
    settings: Optional[TenantSettings] = None
    is_active: Optional[bool] = None

class TenantResponse(TenantBase, BaseSchema):
    id: UUID
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None
