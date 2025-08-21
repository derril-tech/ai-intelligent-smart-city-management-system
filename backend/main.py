from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
import uvicorn
from contextlib import asynccontextmanager
import logging

from app.core.config import settings
from app.core.database import init_db
from app.api.v1.api import api_router

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan events"""
    # Startup
    logger.info("Starting CivitasIQ API server...")
    await init_db()
    logger.info("Database initialized successfully")
    
    yield
    
    # Shutdown
    logger.info("Shutting down CivitasIQ API server...")

def create_application() -> FastAPI:
    """Create and configure FastAPI application"""
    
    app = FastAPI(
        title="CivitasIQ API",
        description="Intelligent Smart City Management System API",
        version="1.0.0",
        docs_url="/docs" if settings.DEBUG else None,
        redoc_url="/redoc" if settings.DEBUG else None,
        lifespan=lifespan
    )
    
    # Security middleware
    app.add_middleware(
        TrustedHostMiddleware,
        allowed_hosts=settings.ALLOWED_HOSTS
    )
    
    # CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    # Include API router
    app.include_router(api_router, prefix="/api/v1")
    
    return app

app = create_application()

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "CivitasIQ API",
        "version": "1.0.0",
        "status": "operational"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    try:
        # TODO: Add database health check
        # TODO: Add Redis health check
        # TODO: Add external service health checks
        
        return {
            "status": "healthy",
            "timestamp": "2024-01-01T00:00:00Z",
            "version": "1.0.0",
            "services": {
                "database": "healthy",
                "redis": "healthy",
                "ai_services": "healthy"
            }
        }
    except Exception as e:
        logger.error(f"Health check failed: {e}")
        raise HTTPException(status_code=503, detail="Service unhealthy")

@app.get("/api")
async def api_info():
    """API information endpoint"""
    return {
        "name": "CivitasIQ API",
        "version": "1.0.0",
        "description": "Intelligent Smart City Management System",
        "endpoints": {
            "docs": "/docs",
            "health": "/health",
            "api_v1": "/api/v1"
        }
    }

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG,
        log_level="info"
    )
