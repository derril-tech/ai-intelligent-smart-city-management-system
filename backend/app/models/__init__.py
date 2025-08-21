# Import all models to ensure they are registered with SQLAlchemy
from .user import User
from .tenant import Tenant
from .asset import Asset
from .incident import Incident
from .telemetry import TelemetryData
from .alert import Alert
from .recommendation import AIRecommendation

__all__ = [
    'User',
    'Tenant', 
    'Asset',
    'Incident',
    'TelemetryData',
    'Alert',
    'AIRecommendation'
]
