from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from uuid import UUID

from app.core.database import get_db
from app.schemas.incident import IncidentCreate, IncidentUpdate, IncidentResponse, IncidentList
from app.models.incident import Incident

router = APIRouter()

@router.get("/", response_model=IncidentList)
async def get_incidents(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    status: Optional[str] = None,
    severity: Optional[str] = None,
    type: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """
    Get list of incidents with optional filtering
    """
    query = db.query(Incident)
    
    if status:
        query = query.filter(Incident.status == status)
    if severity:
        query = query.filter(Incident.severity == severity)
    if type:
        query = query.filter(Incident.type == type)
    
    total = query.count()
    incidents = query.offset(skip).limit(limit).all()
    
    return IncidentList(
        incidents=incidents,
        total=total,
        page=skip // limit + 1,
        per_page=limit,
        total_pages=(total + limit - 1) // limit
    )

@router.get("/{incident_id}", response_model=IncidentResponse)
async def get_incident(incident_id: UUID, db: Session = Depends(get_db)):
    """
    Get a specific incident by ID
    """
    incident = db.query(Incident).filter(Incident.id == incident_id).first()
    if not incident:
        raise HTTPException(status_code=404, detail="Incident not found")
    return incident

@router.post("/", response_model=IncidentResponse)
async def create_incident(incident: IncidentCreate, db: Session = Depends(get_db)):
    """
    Create a new incident
    """
    db_incident = Incident(**incident.dict())
    db.add(db_incident)
    db.commit()
    db.refresh(db_incident)
    return db_incident

@router.put("/{incident_id}", response_model=IncidentResponse)
async def update_incident(
    incident_id: UUID, 
    incident_update: IncidentUpdate, 
    db: Session = Depends(get_db)
):
    """
    Update an existing incident
    """
    db_incident = db.query(Incident).filter(Incident.id == incident_id).first()
    if not db_incident:
        raise HTTPException(status_code=404, detail="Incident not found")
    
    update_data = incident_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_incident, field, value)
    
    db.commit()
    db.refresh(db_incident)
    return db_incident

@router.delete("/{incident_id}")
async def delete_incident(incident_id: UUID, db: Session = Depends(get_db)):
    """
    Delete an incident
    """
    db_incident = db.query(Incident).filter(Incident.id == incident_id).first()
    if not db_incident:
        raise HTTPException(status_code=404, detail="Incident not found")
    
    db.delete(db_incident)
    db.commit()
    return {"message": "Incident deleted successfully"}
