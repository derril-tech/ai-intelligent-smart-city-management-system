# API Specification - CivitasIQ Smart City Management System

## Overview
This document provides the complete API specification for the CivitasIQ platform, including all endpoints, request/response schemas, and usage examples. The API follows RESTful principles with JSON payloads and comprehensive error handling.

## Base URL
- **Development**: `http://localhost:8000`
- **Production**: `https://api.civitasiq.com`

## Authentication
All API endpoints require authentication using JWT Bearer tokens, except for public endpoints.

### Authentication Flow
1. **Login**: `POST /api/v1/auth/login`
2. **Use Token**: Include `Authorization: Bearer <token>` in request headers
3. **Refresh**: `POST /api/v1/auth/refresh` (when token expires)

## API Endpoints

### Health Check

#### GET /api/v1/health
Check API health status.

**Response:**
```json
{
  "status": "healthy",
  "message": "CivitasIQ API is running",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Authentication Endpoints

#### POST /api/v1/auth/login
Authenticate user and receive access token.

**Request Body:**
```json
{
  "username": "admin",
  "password": "password"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 1800
}
```

#### GET /api/v1/auth/me
Get current user information.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "id": "user-uuid",
  "username": "admin",
  "email": "admin@civitasiq.com",
  "role": "administrator",
  "permissions": ["read", "write", "admin"],
  "tenant_id": "tenant-uuid"
}
```

### Incident Management Endpoints

#### GET /api/v1/incidents
List incidents with optional filtering and pagination.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `skip`: Number of records to skip (default: 0)
- `limit`: Number of records to return (default: 20, max: 100)
- `status`: Filter by status (active, resolved, investigating)
- `severity`: Filter by severity (low, medium, high, critical)
- `type`: Filter by incident type

**Response:**
```json
{
  "incidents": [
    {
      "id": "incident-uuid",
      "title": "Traffic Signal Malfunction",
      "description": "Traffic signal not responding to sensor input",
      "type": "traffic_signal",
      "severity": "medium",
      "status": "active",
      "location": {
        "type": "Point",
        "coordinates": [-74.0060, 40.7128]
      },
      "reported_at": "2024-01-01T12:00:00Z",
      "resolved_at": null,
      "assigned_to": null,
      "assets_involved": ["asset-uuid-1", "asset-uuid-2"],
      "tags": ["downtown", "rush-hour"],
      "metadata": {
        "weather": "clear",
        "traffic_volume": "high"
      },
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "per_page": 20,
  "total_pages": 1
}
```

#### GET /api/v1/incidents/{incident_id}
Get a specific incident by ID.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "id": "incident-uuid",
  "title": "Traffic Signal Malfunction",
  "description": "Traffic signal not responding to sensor input",
  "type": "traffic_signal",
  "severity": "medium",
  "status": "active",
  "location": {
    "type": "Point",
    "coordinates": [-74.0060, 40.7128]
  },
  "reported_at": "2024-01-01T12:00:00Z",
  "resolved_at": null,
  "assigned_to": null,
  "assets_involved": ["asset-uuid-1", "asset-uuid-2"],
  "tags": ["downtown", "rush-hour"],
  "metadata": {
    "weather": "clear",
    "traffic_volume": "high"
  },
  "created_at": "2024-01-01T12:00:00Z",
  "updated_at": "2024-01-01T12:00:00Z"
}
```

#### POST /api/v1/incidents
Create a new incident.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "title": "New Traffic Incident",
  "description": "Multi-vehicle collision on Main Street",
  "type": "traffic_accident",
  "severity": "high",
  "location": {
    "type": "Point",
    "coordinates": [-74.0060, 40.7128]
  },
  "assets_involved": ["asset-uuid-1"],
  "tags": ["downtown", "emergency"],
  "metadata": {
    "weather": "rainy",
    "vehicles_involved": 3
  }
}
```

**Response:** Returns the created incident object

#### PUT /api/v1/incidents/{incident_id}
Update an existing incident.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "status": "resolved",
  "resolved_at": "2024-01-01T13:30:00Z",
  "assigned_to": "user-uuid"
}
```

**Response:** Returns the updated incident object

#### DELETE /api/v1/incidents/{incident_id}
Delete an incident.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "message": "Incident deleted successfully"
}
```

### Asset Management Endpoints

#### GET /api/v1/assets
List assets with optional filtering and pagination.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `skip`: Number of records to skip (default: 0)
- `limit`: Number of records to return (default: 20, max: 100)
- `type`: Filter by asset type
- `status`: Filter by status (active, inactive, maintenance, error)

**Response:**
```json
{
  "assets": [
    {
      "id": "asset-uuid",
      "type": "traffic_signal",
      "name": "Main St & 5th Ave Signal",
      "location": {
        "type": "Point",
        "coordinates": [-74.0060, 40.7128]
      },
      "properties": {
        "controller_id": "TS-001",
        "phase_count": 4,
        "pedestrian_crossing": true
      },
      "status": "active",
      "tenant_id": "tenant-uuid",
      "created_at": "2024-01-01T12:00:00Z",
      "updated_at": "2024-01-01T12:00:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "per_page": 20,
  "total_pages": 1
}
```

#### GET /api/v1/assets/{asset_id}
Get a specific asset by ID.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "id": "asset-uuid",
  "type": "traffic_signal",
  "name": "Main St & 5th Ave Signal",
  "location": {
    "type": "Point",
    "coordinates": [-74.0060, 40.7128]
  },
  "properties": {
    "controller_id": "TS-001",
    "phase_count": 4,
    "pedestrian_crossing": true
  },
  "status": "active",
  "tenant_id": "tenant-uuid",
  "created_at": "2024-01-01T12:00:00Z",
  "updated_at": "2024-01-01T12:00:00Z"
}
```

#### POST /api/v1/assets
Create a new asset.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "type": "traffic_signal",
  "name": "New Traffic Signal",
  "location": {
    "type": "Point",
    "coordinates": [-74.0060, 40.7128]
  },
  "properties": {
    "controller_id": "TS-002",
    "phase_count": 4
  },
  "status": "active",
  "tenant_id": "tenant-uuid"
}
```

**Response:** Returns the created asset object

#### PUT /api/v1/assets/{asset_id}
Update an existing asset.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "status": "maintenance",
  "properties": {
    "controller_id": "TS-002",
    "phase_count": 4,
    "last_maintenance": "2024-01-01T12:00:00Z"
  }
}
```

**Response:** Returns the updated asset object

#### DELETE /api/v1/assets/{asset_id}
Delete an asset.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "message": "Asset deleted successfully"
}
```

#### GET /api/v1/assets/{asset_id}/telemetry
Get telemetry data for a specific asset.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `limit`: Number of telemetry records to return (default: 100, max: 1000)

**Response:**
```json
{
  "asset_id": "asset-uuid",
  "telemetry_data": [],
  "message": "Telemetry data endpoint - implementation pending"
}
```

### User Management Endpoints

#### GET /api/v1/users
List all users (admin only).

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `role`: Filter by role
- `tenant_id`: Filter by tenant

**Response:**
```json
{
  "items": [
    {
      "id": "user-uuid",
      "username": "admin",
      "email": "admin@civitasiq.com",
      "role": "administrator",
      "created_at": "2024-01-01T00:00:00Z",
      "last_login": "2024-01-01T12:00:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 20
}
```

### Mobility Endpoints

#### GET /api/v1/mobility/traffic
Get real-time traffic data.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `zone_id`: Filter by zone
- `time_range`: Time range (e.g., "1h", "24h", "7d")

**Response:**
```json
{
  "data": [
    {
      "id": "traffic-uuid",
      "location": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "congestion_level": "moderate",
      "average_speed": 25.5,
      "vehicle_count": 150,
      "timestamp": "2024-01-01T12:00:00Z"
    }
  ],
  "summary": {
    "total_incidents": 5,
    "average_congestion": "moderate",
    "peak_hours": ["08:00", "17:00"]
  }
}
```

#### GET /api/v1/mobility/transit
Get transit system status.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "routes": [
    {
      "id": "route-uuid",
      "name": "Downtown Express",
      "status": "operational",
      "delay_minutes": 2,
      "vehicle_count": 8,
      "passenger_count": 125
    }
  ],
  "system_status": "operational",
  "alerts": []
}
```

### Utilities Endpoints

#### GET /api/v1/utilities/energy
Get energy consumption and grid status.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "grid_status": "stable",
  "total_consumption_mw": 1250.5,
  "renewable_percentage": 35.2,
  "zones": [
    {
      "id": "zone-uuid",
      "name": "Downtown",
      "consumption_mw": 450.2,
      "efficiency_score": 87.5,
      "outages": 0
    }
  ],
  "alerts": []
}
```

#### GET /api/v1/utilities/water
Get water system status.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "system_status": "operational",
  "total_flow_gpm": 12500.5,
  "pressure_psi": 65.2,
  "quality_score": 98.5,
  "zones": [
    {
      "id": "zone-uuid",
      "name": "Residential North",
      "flow_gpm": 2500.5,
      "pressure_psi": 62.1,
      "leaks": 0
    }
  ]
}
```

### Safety Endpoints

#### GET /api/v1/safety/incidents
Get active safety incidents.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `severity`: Filter by severity (low, medium, high, critical)
- `type`: Filter by incident type
- `status`: Filter by status (active, resolved, investigating)

**Response:**
```json
{
  "incidents": [
    {
      "id": "incident-uuid",
      "type": "traffic_accident",
      "severity": "medium",
      "status": "active",
      "location": {
        "lat": 40.7128,
        "lng": -74.0060,
        "address": "Main St & 5th Ave"
      },
      "description": "Two-vehicle collision",
      "reported_at": "2024-01-01T12:00:00Z",
      "responders": ["police", "ambulance"],
      "estimated_resolution": "2024-01-01T13:30:00Z"
    }
  ],
  "summary": {
    "total_active": 12,
    "critical": 2,
    "high": 3,
    "medium": 5,
    "low": 2
  }
}
```

### Analytics Endpoints

#### GET /api/v1/analytics/dashboard
Get dashboard analytics data.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `time_range`: Time range for analytics
- `metrics`: Comma-separated list of metrics

**Response:**
```json
{
  "kpis": {
    "active_incidents": 12,
    "energy_efficiency": 87.5,
    "traffic_alerts": 5,
    "air_quality": "good"
  },
  "trends": {
    "incidents_24h": [10, 12, 8, 15, 12],
    "energy_consumption": [1200, 1250, 1180, 1300, 1250],
    "traffic_flow": [85, 82, 88, 80, 85]
  },
  "alerts": [
    {
      "id": "alert-uuid",
      "type": "energy_spike",
      "message": "Unusual energy consumption detected",
      "severity": "warning",
      "timestamp": "2024-01-01T12:00:00Z"
    }
  ]
}
```

### AI Endpoints

#### POST /api/v1/ai/analyze
Analyze incident and provide AI recommendations.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "incident_id": "incident-uuid",
  "analysis_type": "response_optimization",
  "context": {
    "location": "downtown",
    "time": "rush_hour",
    "weather": "clear"
  }
}
```

**Response:**
```json
{
  "analysis_id": "analysis-uuid",
  "recommendations": [
    {
      "id": "rec-uuid",
      "type": "traffic_management",
      "action": "adjust_signal_timing",
      "description": "Optimize traffic signals to reduce congestion",
      "confidence": 0.87,
      "estimated_impact": "15% reduction in travel time",
      "implementation_time": "5 minutes"
    }
  ],
  "insights": [
    {
      "type": "pattern_recognition",
      "description": "Similar incidents occur 23% more frequently during rush hour",
      "confidence": 0.92
    }
  ],
  "generated_at": "2024-01-01T12:00:00Z"
}
```

#### POST /api/v1/ai/forecast
Generate forecasts for various city metrics.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "metric": "traffic_congestion",
  "forecast_horizon": "24h",
  "location": "downtown",
  "include_confidence": true
}
```

**Response:**
```json
{
  "forecast_id": "forecast-uuid",
  "metric": "traffic_congestion",
  "forecast_horizon": "24h",
  "predictions": [
    {
      "timestamp": "2024-01-01T13:00:00Z",
      "value": 0.65,
      "confidence_lower": 0.58,
      "confidence_upper": 0.72
    }
  ],
  "model_info": {
    "model_type": "prophet",
    "accuracy_score": 0.87,
    "last_trained": "2024-01-01T00:00:00Z"
  }
}
```

### WebSocket Endpoints

#### WebSocket /api/v1/ws/alerts
Real-time alert notifications.

**Connection:** `ws://localhost:8000/api/v1/ws/alerts`

**Authentication:** Include token in query parameter: `?token=<jwt_token>`

**Message Format:**
```json
{
  "type": "alert",
  "data": {
    "id": "alert-uuid",
    "severity": "high",
    "message": "Power outage detected in downtown",
    "location": {
      "lat": 40.7128,
      "lng": -74.0060
    },
    "timestamp": "2024-01-01T12:00:00Z"
  }
}
```

#### WebSocket /api/v1/ws/telemetry
Real-time sensor telemetry data.

**Connection:** `ws://localhost:8000/api/v1/ws/telemetry`

**Authentication:** Include token in query parameter: `?token=<jwt_token>`

**Message Format:**
```json
{
  "type": "telemetry",
  "data": {
    "sensor_id": "sensor-uuid",
    "location": {
      "lat": 40.7128,
      "lng": -74.0060
    },
    "metrics": {
      "temperature": 22.5,
      "humidity": 65.2,
      "air_quality": 45
    },
    "timestamp": "2024-01-01T12:00:00Z"
  }
}
```

## Error Responses

### Standard Error Format
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

### Common HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Validation Error
- `500` - Internal Server Error

## Rate Limiting

- **Standard endpoints**: 100 requests per minute
- **AI endpoints**: 10 requests per minute
- **WebSocket connections**: 1000 concurrent connections

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

## Pagination

List endpoints support pagination with the following parameters:
- `skip`: Number of records to skip (default: 0)
- `limit`: Number of records to return (default: 20, max: 100)

Response includes pagination metadata:
```json
{
  "items": [...],
  "total": 150,
  "page": 1,
  "per_page": 20,
  "total_pages": 8
}
```

## Data Schemas

### Common Fields
All entities include these common fields:
- `id`: UUID identifier
- `created_at`: ISO 8601 timestamp
- `updated_at`: ISO 8601 timestamp
- `tenant_id`: Multi-tenant identifier

### Geospatial Data
Location data uses GeoJSON Point format:
```json
{
  "location": {
    "type": "Point",
    "coordinates": [longitude, latitude]
  }
}
```

## Implementation Status

### ✅ Implemented Endpoints
- `GET /api/v1/health` - Health check
- `GET /api/v1/incidents` - List incidents with filtering
- `GET /api/v1/incidents/{id}` - Get specific incident
- `POST /api/v1/incidents` - Create incident
- `PUT /api/v1/incidents/{id}` - Update incident
- `DELETE /api/v1/incidents/{id}` - Delete incident
- `GET /api/v1/assets` - List assets with filtering
- `GET /api/v1/assets/{id}` - Get specific asset
- `POST /api/v1/assets` - Create asset
- `PUT /api/v1/assets/{id}` - Update asset
- `DELETE /api/v1/assets/{id}` - Delete asset
- `GET /api/v1/assets/{id}/telemetry` - Get asset telemetry (placeholder)

### 📋 Planned Endpoints
- Authentication endpoints (login, register, refresh)
- User management endpoints
- Mobility endpoints (traffic, transit)
- Utilities endpoints (energy, water)
- Safety endpoints
- Analytics endpoints
- AI endpoints (analyze, forecast)
- WebSocket endpoints (alerts, telemetry)

## Testing

API endpoints can be tested using:
- **Interactive Documentation**: `http://localhost:8000/docs` (Swagger UI)
- **Alternative Documentation**: `http://localhost:8000/redoc` (ReDoc)
- **Health Check**: `GET /api/v1/health`

## Versioning

API versioning is handled through URL paths:
- Current version: `/api/v1/`
- Future versions: `/api/v2/`, `/api/v3/`, etc.

Breaking changes will be introduced in new versions with deprecation notices for old versions.

## TODO: Additional Features

The following features are planned for future implementation:

- **File Management**: Upload/download documents and reports
- **Notification Management**: Email, SMS, and push notifications
- **Report Generation**: Automated report creation and scheduling
- **Configuration Management**: System settings and preferences
- **Audit Logging**: Comprehensive activity tracking
- **Backup and Recovery**: Data backup and restoration endpoints
- **Real-time Data Streaming**: WebSocket connections for live updates
- **AI Integration**: LangGraph and LangChain implementation
- **Geospatial Services**: Advanced mapping and location services
