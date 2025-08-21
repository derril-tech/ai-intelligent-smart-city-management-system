from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from uuid import UUID

from app.core.database import get_db
from app.schemas.asset import AssetCreate, AssetUpdate, AssetResponse, AssetList
from app.models.asset import Asset

router = APIRouter()

@router.get("/", response_model=AssetList)
async def get_assets(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    type: Optional[str] = None,
    status: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """
    Get list of assets with optional filtering
    """
    query = db.query(Asset)
    
    if type:
        query = query.filter(Asset.type == type)
    if status:
        query = query.filter(Asset.status == status)
    
    total = query.count()
    assets = query.offset(skip).limit(limit).all()
    
    return AssetList(
        assets=assets,
        total=total,
        page=skip // limit + 1,
        per_page=limit,
        total_pages=(total + limit - 1) // limit
    )

@router.get("/{asset_id}", response_model=AssetResponse)
async def get_asset(asset_id: UUID, db: Session = Depends(get_db)):
    """
    Get a specific asset by ID
    """
    asset = db.query(Asset).filter(Asset.id == asset_id).first()
    if not asset:
        raise HTTPException(status_code=404, detail="Asset not found")
    return asset

@router.post("/", response_model=AssetResponse)
async def create_asset(asset: AssetCreate, db: Session = Depends(get_db)):
    """
    Create a new asset
    """
    db_asset = Asset(**asset.dict())
    db.add(db_asset)
    db.commit()
    db.refresh(db_asset)
    return db_asset

@router.put("/{asset_id}", response_model=AssetResponse)
async def update_asset(
    asset_id: UUID, 
    asset_update: AssetUpdate, 
    db: Session = Depends(get_db)
):
    """
    Update an existing asset
    """
    db_asset = db.query(Asset).filter(Asset.id == asset_id).first()
    if not db_asset:
        raise HTTPException(status_code=404, detail="Asset not found")
    
    update_data = asset_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_asset, field, value)
    
    db.commit()
    db.refresh(db_asset)
    return db_asset

@router.delete("/{asset_id}")
async def delete_asset(asset_id: UUID, db: Session = Depends(get_db)):
    """
    Delete an asset
    """
    db_asset = db.query(Asset).filter(Asset.id == asset_id).first()
    if not db_asset:
        raise HTTPException(status_code=404, detail="Asset not found")
    
    db.delete(db_asset)
    db.commit()
    return {"message": "Asset deleted successfully"}

@router.get("/{asset_id}/telemetry")
async def get_asset_telemetry(
    asset_id: UUID,
    limit: int = Query(100, ge=1, le=1000),
    db: Session = Depends(get_db)
):
    """
    Get telemetry data for a specific asset
    """
    asset = db.query(Asset).filter(Asset.id == asset_id).first()
    if not asset:
        raise HTTPException(status_code=404, detail="Asset not found")
    
    # This would typically query the telemetry_data table
    # For now, return a placeholder response
    return {
        "asset_id": str(asset_id),
        "telemetry_data": [],
        "message": "Telemetry data endpoint - implementation pending"
    }
