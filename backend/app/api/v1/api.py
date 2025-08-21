from fastapi import APIRouter
from .endpoints import auth, incidents, assets

api_router = APIRouter()

# Include all endpoint routers
api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(incidents.router, prefix="/incidents", tags=["incidents"])
api_router.include_router(assets.router, prefix="/assets", tags=["assets"])

# Health check endpoint
@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "message": "CivitasIQ API is running"}
