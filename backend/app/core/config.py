from pydantic_settings import BaseSettings
from typing import List, Optional
import os

class Settings(BaseSettings):
    """Application settings"""
    
    # Application
    APP_NAME: str = "CivitasIQ"
    VERSION: str = "1.0.0"
    DEBUG: bool = False
    
    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    
    # Security
    SECRET_KEY: str = "your-secret-key-here"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # CORS
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://civitasiq.com"
    ]
    ALLOWED_HOSTS: List[str] = ["*"]
    
    # Database
    DATABASE_URL: str = "postgresql://user:password@localhost/civitasiq"
    DATABASE_POOL_SIZE: int = 20
    DATABASE_MAX_OVERFLOW: int = 30
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379"
    REDIS_DB: int = 0
    
    # AI Services
    OPENAI_API_KEY: Optional[str] = None
    ANTHROPIC_API_KEY: Optional[str] = None
    
    # External Services
    MAPBOX_ACCESS_TOKEN: Optional[str] = None
    
    # File Storage
    STORAGE_BACKEND: str = "local"  # local, s3, minio
    STORAGE_PATH: str = "./storage"
    S3_BUCKET: Optional[str] = None
    S3_ACCESS_KEY: Optional[str] = None
    S3_SECRET_KEY: Optional[str] = None
    S3_REGION: Optional[str] = None
    
    # Email
    SMTP_HOST: Optional[str] = None
    SMTP_PORT: int = 587
    SMTP_USERNAME: Optional[str] = None
    SMTP_PASSWORD: Optional[str] = None
    SMTP_TLS: bool = True
    
    # Logging
    LOG_LEVEL: str = "INFO"
    LOG_FORMAT: str = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    
    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = 100
    RATE_LIMIT_PER_HOUR: int = 1000
    
    # WebSocket
    WS_HEARTBEAT_INTERVAL: int = 30
    WS_MAX_CONNECTIONS: int = 1000
    
    # AI Model Settings
    DEFAULT_LLM_MODEL: str = "gpt-4"
    DEFAULT_EMBEDDING_MODEL: str = "text-embedding-ada-002"
    MAX_TOKENS: int = 4000
    TEMPERATURE: float = 0.7
    
    # Geospatial
    DEFAULT_SRID: int = 4326
    MAP_CENTER_LAT: float = 40.7128
    MAP_CENTER_LNG: float = -74.0060
    MAP_DEFAULT_ZOOM: int = 12
    
    class Config:
        env_file = ".env"
        case_sensitive = True

# Create settings instance
settings = Settings()

# Validate required settings
def validate_settings():
    """Validate required settings"""
    required_settings = [
        "SECRET_KEY",
        "DATABASE_URL",
        "REDIS_URL"
    ]
    
    missing_settings = []
    for setting in required_settings:
        if not getattr(settings, setting):
            missing_settings.append(setting)
    
    if missing_settings:
        raise ValueError(f"Missing required settings: {', '.join(missing_settings)}")

# Validate settings on import
try:
    validate_settings()
except ValueError as e:
    print(f"Configuration error: {e}")
    print("Please check your .env file and ensure all required settings are provided.")
