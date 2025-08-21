# CLAUDE.md - AI Collaboration Guidelines for CivitasIQ

## Project Overview

**CivitasIQ** is an intelligent smart city management system designed as a unified, AI-driven command platform for modern cities. The system fuses live sensor data, geospatial feeds, and citizen inputs into a real-time city twin that forecasts demand, flags anomalies, and coordinates response across mobility, energy, water, waste, and public safety.

### Technology Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, React Query, Zustand
- **Backend**: FastAPI (async), Python, SQLAlchemy, PostgreSQL (PostGIS, TimescaleDB, pgvector)
- **AI/ML**: LangGraph, LangChain, OpenAI/Anthropic, RAG over municipal policies
- **Infrastructure**: Redis, Docker, Vercel + Render

### Target Users
- City operations managers and administrators
- Emergency response teams
- Utility and infrastructure managers
- Transportation and mobility coordinators
- Data analysts and policy makers

### Project Goals
- Provide real-time operational visibility across all city systems
- Enable AI-powered decision making and automated responses
- Support multi-tenant city deployments with role-based access
- Ensure data security, compliance, and audit trails
- Deliver geospatial-first user experience with interactive maps

## Dependencies & Setup

### Prerequisites
- **Node.js** 18+ and **npm**
- **Python** 3.11+ and **pip**
- **PostgreSQL** 15+ with PostGIS extension
- **Redis** 7+

### Environment Variables

#### Frontend (.env.local)
```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws

# Mapbox Configuration
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_REAL_TIME=true

# Development
NEXT_PUBLIC_DEBUG_MODE=true
```

#### Backend (.env)
```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/civitasiq
REDIS_URL=redis://localhost:6379

# Security
SECRET_KEY=your_secret_key_here
JWT_SECRET_KEY=your_jwt_secret_here
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7

# AI Services
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here

# External Services
MAPBOX_ACCESS_TOKEN=your_mapbox_token_here
SENDGRID_API_KEY=your_sendgrid_key_here

# Application
DEBUG=true
ENVIRONMENT=development
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

### Installation Commands
```bash
# Frontend Setup
cd frontend
npm install
cp env.example .env.local
npm run dev

# Backend Setup
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp env.example .env
uvicorn main:app --reload
```

## Folder & File Structure

### ✅ Editable Files (Safe to Modify)
```
frontend/
├── app/                          # Next.js App Router pages
│   ├── dashboard/page.tsx        # Main dashboard
│   ├── analytics/page.tsx        # Analytics page
│   ├── assets/page.tsx           # Asset management
│   ├── users/page.tsx            # User management
│   ├── settings/page.tsx         # System settings
│   └── incidents/page.tsx        # Incident management
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── dashboard/                # Dashboard-specific components
│   └── layout/                   # Layout components
├── types/                        # TypeScript type definitions
├── data/                         # Mock data and fixtures
└── lib/                          # Utility functions

backend/
├── app/
│   ├── api/v1/endpoints/         # API endpoint implementations
│   ├── models/                   # SQLAlchemy database models
│   ├── schemas/                  # Pydantic validation schemas
│   └── core/                     # Core configuration
└── requirements.txt              # Python dependencies
```

### ⚠️ Careful Editing (Review Required)
```
frontend/
├── package.json                  # Dependencies and scripts
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── app/layout.tsx               # Root layout

backend/
├── main.py                      # FastAPI application entry
└── app/core/                    # Core configuration files
```

### 🚫 Do Not Edit (Preserve Structure)
```
PROJECT_BRIEF                    # Reference document
.env*                           # Environment files
.next/                          # Next.js build output
__pycache__/                    # Python cache
node_modules/                   # Node.js dependencies
```

## Workflow & Tools

### Development Workflow
1. **Start Development Environment**
   ```bash
   # Use the development script
   ./scripts/dev.sh
   
   # Or run individually
   cd frontend && npm run dev
   cd backend && uvicorn main:app --reload
   ```

2. **Frontend/Backend Boundary**
   - **Frontend**: UI components, state management, API calls, routing
   - **Backend**: Business logic, database operations, AI integration, authentication
   - **Shared**: Type definitions, API contracts, validation schemas

3. **Testing Workflow**
   ```bash
   # Frontend tests
   cd frontend
   npm run type-check
   npm run lint
   npm run test

   # Backend tests
   cd backend
   pytest
   black --check .
   isort --check-only .
   ```

### Deployment Notes
- **Frontend**: Deploy to Vercel with automatic builds from main branch
- **Backend**: Deploy to Render with PostgreSQL and Redis add-ons
- **Database**: Use managed PostgreSQL with PostGIS extension
- **Environment**: Set all required environment variables in deployment platform

### Available Scripts
```bash
# Development
./scripts/dev.sh              # Start both frontend and backend
npm run dev                   # Frontend only (in frontend/)
uvicorn main:app --reload     # Backend only (in backend/)

# Building
npm run build                 # Build frontend for production
npm run start                 # Start production frontend

# Testing
npm run lint                  # Frontend linting
npm run type-check            # TypeScript type checking
```

## Coding Conventions

### TypeScript/JavaScript (Frontend)
- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Components**: Functional components with TypeScript interfaces
- **Imports**: Use absolute imports with `@/` prefix
- **State**: Prefer React Query for server state, Zustand for client state
- **Styling**: Tailwind CSS with custom design tokens
- **Error Handling**: Use error boundaries and try-catch blocks

**Example Component:**
```typescript
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { KPIMetric } from '@/types';

interface KPICardProps {
  kpi: KPIMetric;
  onAction?: () => void;
}

export default function KPICard({ kpi, onAction }: KPICardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <h3 className="text-lg font-semibold">{kpi.title}</h3>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{kpi.value}</div>
        {onAction && (
          <Button onClick={onAction} variant="outline" size="sm">
            View Details
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
```

### Python (Backend)
- **Naming**: Use snake_case for variables/functions, PascalCase for classes
- **Type Hints**: Always use type hints for function parameters and returns
- **Async**: Use async/await for database operations and external calls
- **Validation**: Use Pydantic for request/response validation
- **Error Handling**: Use FastAPI HTTPException for API errors

**Example Endpoint:**
```python
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID

from app.core.database import get_db
from app.schemas.incident import IncidentCreate, IncidentResponse
from app.models.incident import Incident

router = APIRouter()

@router.get("/", response_model=List[IncidentResponse])
async def get_incidents(
    skip: int = 0,
    limit: int = 20,
    db: Session = Depends(get_db)
) -> List[IncidentResponse]:
    """Get list of incidents with pagination."""
    incidents = db.query(Incident).offset(skip).limit(limit).all()
    return incidents
```

### Database Models
- **Naming**: Use singular nouns for table names
- **Relationships**: Define foreign keys and relationships explicitly
- **Timestamps**: Include created_at and updated_at fields
- **Soft Deletes**: Use is_active flag instead of hard deletes
- **Geospatial**: Use PostGIS Geography type for location data

**Example Model:**
```python
from sqlalchemy import Column, String, DateTime, JSON, ForeignKey
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
from geoalchemy2 import Geography

from app.models.base import Base, TimestampMixin

class Incident(Base, TimestampMixin):
    __tablename__ = "incidents"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid7)
    title = Column(String(255), nullable=False)
    description = Column(String, nullable=False)
    type = Column(String(100), nullable=False)
    severity = Column(String(50), nullable=False)
    status = Column(String(50), default="active")
    location = Column(Geography('POINT', srid=4326))
    metadata = Column(JSONB, default={})
    
    tenant_id = Column(UUID(as_uuid=True), ForeignKey("tenants.id"))
    tenant = relationship("Tenant", back_populates="incidents")
```

## Contextual Knowledge

### Domain Rules & Business Logic

#### Smart City Operations
- **Incident Severity Levels**: Critical, High, Medium, Low (color-coded)
- **Asset Types**: Traffic signals, street lights, sensors, vehicles, buildings
- **Geospatial Data**: Always use SRID 4326 (WGS84) for coordinates
- **Multi-tenancy**: All data must be scoped to tenant_id
- **Real-time Updates**: WebSocket connections for live data streaming

#### AI Integration Patterns
- **RAG Pipeline**: Document ingestion → chunking → embedding → retrieval
- **Agent Workflows**: LangGraph orchestration with human approval gates
- **Forecasting**: Time-series data with Prophet/Neural models
- **Recommendations**: AI-generated with confidence scores and rationale

#### Security & Compliance
- **CJIS Compliance**: Criminal Justice Information Services standards
- **GDPR/CCPA**: Data privacy and user consent management
- **Audit Trails**: All AI outputs stored with inputs and user approval
- **RBAC**: Role-based access with granular permissions

### Product Quirks & Caveats

#### Frontend Considerations
- **Map-centric UI**: Map is primary canvas, panels are dockable
- **Real-time Updates**: WebSocket reconnection with exponential backoff
- **Offline Resilience**: Service Worker caching for static assets
- **Accessibility**: WCAG 2.1 AA compliance required
- **Mobile-first**: Responsive design for kiosk, tablet, desktop

#### Backend Considerations
- **Database Extensions**: PostGIS, TimescaleDB, pgvector required
- **Event Pipeline**: Raw events → normalization → enrichment → facts
- **Rate Limiting**: Per-tenant and per-endpoint limits
- **Background Jobs**: Redis RQ/Arq for heavy compute operations
- **Geospatial Queries**: Use GIST indexes for location searches

#### Integration Patterns
- **IoT Data**: MQTT/HTTP adapters for sensor data ingestion
- **External APIs**: GTFS-RT, signal controllers, weather APIs
- **File Processing**: CSV/GeoJSON/PDF ingestion with validation
- **Notifications**: Email, webhooks, in-app notifications

## AI Collaboration Rules

### Response Format
1. **Always use markdown formatting** for responses
2. **Use code blocks** with language specification for code examples
3. **Include file paths** when referencing specific files
4. **Provide context** before making changes
5. **Explain reasoning** for architectural decisions

### Edit Rules
1. **Preserve existing structure** unless explicitly asked to refactor
2. **Follow established patterns** in the codebase
3. **Maintain type safety** in both frontend and backend
4. **Add appropriate error handling** for new features
5. **Update documentation** when adding new endpoints or components

### File Editing Guidelines
- **New Components**: Create in appropriate directory with TypeScript interfaces
- **New Endpoints**: Add to existing router files or create new ones
- **Database Changes**: Create new models and schemas, update existing ones carefully
- **Configuration**: Only modify config files when explicitly requested

### Ambiguity Handling
1. **Ask clarifying questions** when requirements are unclear
2. **Suggest multiple approaches** for complex problems
3. **Reference existing patterns** in the codebase
4. **Provide examples** to illustrate solutions
5. **Flag potential issues** before implementation

### Code Quality Standards
- **Type Safety**: All TypeScript and Python code must be fully typed
- **Error Handling**: Implement proper error boundaries and exception handling
- **Performance**: Consider bundle size, API response times, and database queries
- **Accessibility**: Follow WCAG 2.1 AA guidelines for UI components
- **Security**: Validate all inputs, use parameterized queries, implement proper auth

### Testing Expectations
- **Unit Tests**: Write tests for utility functions and business logic
- **Integration Tests**: Test API endpoints and database operations
- **Component Tests**: Test React components with user interactions
- **E2E Tests**: Test critical user flows and workflows

## Examples: Good vs Bad AI Answers

### ✅ Good AI Answer Example

**User Request**: "Add a new incident type for traffic accidents"

**Good Response:**
```markdown
I'll help you add a new incident type for traffic accidents. Let me first check the existing incident structure and then implement the necessary changes.

**Analysis:**
- Current incident types are defined in `frontend/types/index.ts`
- Backend validation is in `backend/app/schemas/incident.py`
- Need to update both frontend and backend for consistency

**Implementation Plan:**
1. Update TypeScript types to include "traffic_accident"
2. Update Pydantic schema validation
3. Add appropriate UI styling for the new type
4. Update mock data for testing

**Changes:**

**1. Update TypeScript types** (`frontend/types/index.ts`):
```typescript
export type IncidentType = 
  | "power_outage" 
  | "water_main_break" 
  | "traffic_signal_failure"
  | "traffic_accident"  // New type
  | "weather_alert";
```

**2. Update Pydantic schema** (`backend/app/schemas/incident.py`):
```python
class IncidentCreate(BaseModel):
    title: str
    description: str
    type: Literal["power_outage", "water_main_break", "traffic_signal_failure", "traffic_accident", "weather_alert"]
    severity: Literal["critical", "high", "medium", "low"]
    location: Optional[GeoPoint] = None
```

**3. Update UI styling** (`frontend/components/dashboard/IncidentCard.tsx`):
```typescript
const getIncidentTypeColor = (type: IncidentType): string => {
  switch (type) {
    case "traffic_accident":
      return "bg-orange-100 text-orange-800 border-orange-200";
    // ... existing cases
  }
};
```

**4. Add to mock data** (`frontend/data/mockData.ts`):
```typescript
export const mockIncidents: Incident[] = [
  {
    id: "inc-001",
    title: "Multi-vehicle collision on Main St",
    type: "traffic_accident",
    severity: "high",
    // ... other fields
  },
  // ... existing incidents
];
```

**Testing:**
- The new type will be validated on both frontend and backend
- UI will display with appropriate styling
- Mock data includes realistic traffic accident examples

**Next Steps:**
1. Test the changes by creating a new incident with type "traffic_accident"
2. Verify the UI displays correctly
3. Check that backend validation accepts the new type
```

### ❌ Bad AI Answer Example

**User Request**: "Add a new incident type for traffic accidents"

**Bad Response:**
```markdown
I'll add the traffic accident type. Here are the changes:

```typescript
// Add this to the types
type IncidentType = "traffic_accident";
```

```python
# Add to the backend
incident_type = "traffic_accident"
```

This adds the new type. You can now use it.
```

**Problems with this response:**
- ❌ No context or analysis of existing code
- ❌ Incomplete implementation (only partial changes)
- ❌ No consideration of existing patterns
- ❌ Missing error handling and validation
- ❌ No testing guidance
- ❌ Doesn't explain the reasoning
- ❌ Doesn't reference specific file paths
- ❌ No consideration of UI/UX impact

## Development Workflow

### When Adding New Features
1. **Check existing patterns** in similar components/endpoints
2. **Update types/interfaces** to reflect new data structures
3. **Add appropriate validation** using Pydantic schemas
4. **Include error handling** for edge cases
5. **Update documentation** for new APIs or components

### When Fixing Issues
1. **Identify root cause** before implementing fixes
2. **Test changes** in isolation when possible
3. **Update related code** that might be affected
4. **Add regression tests** to prevent future issues
5. **Document the fix** for future reference

### When Refactoring
1. **Preserve functionality** while improving structure
2. **Update all references** to changed components/endpoints
3. **Maintain backward compatibility** for public APIs
4. **Test thoroughly** to ensure no regressions
5. **Update documentation** to reflect changes

## Performance Guidelines

### Frontend Performance
- **Bundle Size**: Keep component libraries under 100KB gzipped
- **Loading**: Implement skeleton loaders and progressive loading
- **Caching**: Use React Query for server state caching
- **Images**: Optimize images and use Next.js Image component
- **Code Splitting**: Use dynamic imports for large components

### Backend Performance
- **Database**: Use indexes for frequently queried fields
- **Caching**: Implement Redis caching for expensive operations
- **Pagination**: Always paginate large result sets
- **Async**: Use async/await for I/O operations
- **Monitoring**: Add performance metrics and logging

## Security Guidelines

### Authentication & Authorization
- **JWT Tokens**: Use secure JWT tokens with proper expiration
- **RBAC**: Implement role-based access control
- **Multi-tenancy**: Ensure proper tenant isolation
- **Rate Limiting**: Implement rate limiting for API endpoints
- **Input Validation**: Validate all user inputs

### Data Protection
- **Encryption**: Encrypt sensitive data at rest and in transit
- **PII Handling**: Minimize collection and proper handling of PII
- **Audit Logging**: Log all sensitive operations
- **Backup Security**: Secure backup and recovery procedures

## Communication Guidelines

### When Asking Questions
1. **Be specific** about what you need help with
2. **Provide context** about the current state
3. **Include error messages** when troubleshooting
4. **Reference specific files** when discussing code
5. **Explain your goal** not just the problem

### When Providing Solutions
1. **Explain the approach** before implementing
2. **Provide alternatives** when appropriate
3. **Include examples** to illustrate concepts
4. **Flag potential issues** or limitations
5. **Suggest next steps** for implementation

This document serves as the primary guide for AI collaboration on the CivitasIQ project. Follow these guidelines to ensure consistent, high-quality development and effective collaboration.
