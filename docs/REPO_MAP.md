# Repository Map - CivitasIQ Smart City Management System

## Overview
This repository contains the complete infrastructure for CivitasIQ, an intelligent smart city management system. The project follows a monorepo structure with clear separation between frontend and backend components, designed for AI-driven city operations with real-time data processing, geospatial visualization, and automated decision-making.

## Project Structure

```
ai-intelligent-smart-city-management-system/
├── frontend/                    # Next.js 14 frontend application
├── backend/                     # FastAPI backend application
├── docs/                        # Project documentation
├── PROJECT_BRIEF               # Detailed project requirements and 8-step plan
├── PROMPT_DECLARATION          # AI collaboration guidelines (placeholder)
└── README.md                   # Project overview
```

## Frontend Structure (`/frontend`)

### Core Configuration Files
- `package.json` - Dependencies and scripts for Next.js application
- `next.config.js` - Next.js configuration with API proxy and environment setup
- `tailwind.config.js` - Tailwind CSS configuration with custom design tokens
- `tsconfig.json` - TypeScript configuration with path mappings
- `env.example` - Environment variables template

### App Directory (`/frontend/app`)
- `layout.tsx` - Root layout with metadata, global styles, and Navigation component
- `globals.css` - Global CSS with Tailwind directives and custom components
- `page.tsx` - Landing page with hero section and feature overview
- `dashboard/page.tsx` - Main dashboard with KPI cards, incidents, and alerts using mock data
- `about/page.tsx` - About page with platform information and technology stack
- `analytics/page.tsx` - Analytics & Insights page with placeholder sections
- `assets/page.tsx` - Asset Management page with search, filtering, and asset grid
- `users/page.tsx` - User Management page with user table and role management
- `settings/page.tsx` - System Settings page with configuration sections
- `incidents/page.tsx` - Incident Management page with search and filtering

### Components Directory (`/frontend/components`)
- `ui/` - Reusable UI components
  - `Button.tsx` - Flexible button component with variants and icons
  - `Card.tsx` - Card components (Card, CardHeader, CardContent, CardFooter)
  - `Badge.tsx` - Badge component for status indicators
  - `index.ts` - Export file for UI components
- `dashboard/` - Dashboard-specific components
  - `KPICard.tsx` - KPI metric display component
  - `IncidentCard.tsx` - Incident information display component
  - `AlertCard.tsx` - Alert display with acknowledgment functionality
- `layout/` - Layout components
  - `Navigation.tsx` - Main navigation sidebar and top bar

### Data and Types (`/frontend/data` and `/frontend/types`)
- `data/mockData.ts` - Comprehensive mock data for development
- `types/index.ts` - TypeScript interfaces for all domain models

### Utilities (`/frontend/lib`)
- `utils.ts` - Utility functions (formatting, debouncing, throttling)

## Backend Structure (`/backend`)

### Core Configuration Files
- `requirements.txt` - Python dependencies for FastAPI application
- `main.py` - FastAPI application entry point with middleware and routing
- `env.example` - Environment variables template

### App Directory (`/backend/app`)
- `core/` - Core application configuration and utilities
  - `config.py` - Application settings and environment variables
  - `database.py` - Database configuration and connection management
- `api/v1/` - API version 1 endpoints
  - `api.py` - Main API router that includes all domain routers
  - `endpoints/` - Domain-specific API endpoints
    - `auth.py` - Authentication endpoints (login, register, etc.)
    - `incidents.py` - Incident management CRUD operations
    - `assets.py` - Asset management CRUD operations
- `models/` - SQLAlchemy database models
  - `__init__.py` - Model imports and registration
  - `base.py` - Base model with timestamp mixin
  - `user.py` - User model with authentication fields
  - `tenant.py` - Tenant model for multi-tenancy
  - `asset.py` - Asset model with geospatial support
  - `incident.py` - Incident model with full lifecycle tracking
  - `telemetry.py` - Telemetry data model for sensor data
  - `alert.py` - Alert model for system notifications
  - `recommendation.py` - AI recommendation model
- `schemas/` - Pydantic data validation schemas
  - `__init__.py` - Schema imports
  - `base.py` - Base schemas and pagination
  - `user.py` - User-related schemas
  - `tenant.py` - Tenant-related schemas
  - `asset.py` - Asset-related schemas
  - `incident.py` - Incident-related schemas
  - `telemetry.py` - Telemetry-related schemas
  - `alert.py` - Alert-related schemas
  - `recommendation.py` - Recommendation-related schemas

### TODO: Additional backend components
- `services/` - Business logic and external service integrations
- `utils/` - Helper functions and utilities
- `alembic/` - Database migration files
- `tests/` - Unit and integration tests
- `scripts/` - Utility scripts for deployment and maintenance

## Documentation Structure (`/docs`)

### Core Documentation
- `REPO_MAP.md` - This file: comprehensive repository structure guide
- `API_SPEC.md` - API documentation with endpoints, schemas, and examples
- `CLAUDE.md` - AI collaboration guidelines and coding conventions

### TODO: Additional documentation
- `DEPLOYMENT.md` - Deployment instructions and configuration
- `DEVELOPMENT.md` - Development setup and guidelines
- `ARCHITECTURE.md` - System architecture documentation
- `SECURITY.md` - Security guidelines and best practices

## Key Technologies

### Frontend Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Mapbox GL JS** - Interactive mapping library (planned)
- **React Query** - Server state management (planned)
- **Zustand** - Client state management (planned)
- **Lucide React** - Icon library
- **Recharts** - Chart library (planned)
- **Framer Motion** - Animation library (planned)

### Backend Stack
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - Database ORM
- **PostgreSQL** - Primary database with PostGIS extension
- **Redis** - Caching and message queuing (planned)
- **LangGraph** - AI agent orchestration (planned)
- **Pydantic** - Data validation and serialization
- **Alembic** - Database migration tool (planned)

## Current Implementation Status

### ✅ Completed (Steps 1-3)
- Basic project scaffold with Next.js 14 and FastAPI
- Core configuration files and environment setup
- TypeScript types and interfaces for all domain models
- SQLAlchemy models for database schema
- Pydantic schemas for API validation
- Mock data for frontend development
- Reusable UI components (Button, Card, Badge, KPICard, IncidentCard, AlertCard)
- Navigation component with responsive design
- Dashboard page with KPI cards and mock data integration
- Additional pages (analytics, assets, users, settings, incidents)
- Backend API endpoints for incidents and assets
- Health check endpoint

### 🚧 In Progress (Step 4)
- Documentation updates for AI collaboration
- Architecture documentation refinement

### 📋 Planned (Steps 5-8)
- AI integration and LangGraph implementation
- Real-time WebSocket connections
- Authentication and security features
- Database migrations and seeding
- Testing infrastructure
- Deployment configuration
- Performance optimization
- Production readiness

## Development Workflow

### Frontend Development
1. Navigate to `/frontend` directory
2. Install dependencies: `npm install`
3. Copy `env.example` to `.env.local` and configure
4. Start development server: `npm run dev`
5. Access application at `http://localhost:3000`

### Backend Development
1. Navigate to `/backend` directory
2. Create virtual environment: `python -m venv venv`
3. Activate environment: `source venv/bin/activate` (Linux/Mac) or `venv\Scripts\activate` (Windows)
4. Install dependencies: `pip install -r requirements.txt`
5. Copy `env.example` to `.env` and configure
6. Start development server: `uvicorn main:app --reload`
7. Access API documentation at `http://localhost:8000/docs`

## File Editing Guidelines

### ✅ Editable Files (Safe to Modify)
- All files in `/frontend/app/` (except core config files)
- All files in `/frontend/components/` (except core UI components)
- All files in `/frontend/types/` and `/frontend/data/`
- All files in `/frontend/lib/`
- All files in `/backend/app/api/v1/endpoints/`
- All files in `/backend/app/models/` and `/backend/app/schemas/`
- Documentation files in `/docs/`
- Configuration files with clear TODO markers

### ⚠️ Careful Editing (Review Required)
- Core configuration files (`package.json`, `requirements.txt`, `next.config.js`, `tailwind.config.js`, `tsconfig.json`)
- Main application files (`frontend/app/layout.tsx`, `backend/main.py`)
- Core utility files (`frontend/lib/utils.ts`, `backend/app/core/`)

### 🚫 Do Not Edit (Preserve Structure)
- Generated files (`.next/`, `__pycache__/`, etc.)
- Lock files (`package-lock.json`, `poetry.lock`)
- Environment files (`.env`, `.env.local`)
- `PROJECT_BRIEF` (reference document)
- Core UI components without explicit TODO markers

## TODO Markers and Implementation Status

### Frontend TODOs
- [ ] Implement real-time data fetching with React Query
- [ ] Add WebSocket connections for live updates
- [ ] Integrate Mapbox GL JS for geospatial visualization
- [ ] Add authentication and user management
- [ ] Implement form validation with react-hook-form and zod
- [ ] Add error boundaries and loading states
- [ ] Implement offline capabilities and service workers

### Backend TODOs
- [ ] Implement authentication middleware and JWT handling
- [ ] Add database migrations with Alembic
- [ ] Implement WebSocket endpoints for real-time data
- [ ] Add AI integration with LangGraph and LangChain
- [ ] Implement file upload and storage
- [ ] Add comprehensive error handling and logging
- [ ] Implement rate limiting and security middleware

### Integration TODOs
- [ ] Connect frontend to backend APIs
- [ ] Implement real-time data synchronization
- [ ] Add geospatial data processing
- [ ] Integrate AI recommendations
- [ ] Add notification system
- [ ] Implement audit logging

## Next Steps

1. **Step 4**: Document the Architecture (current step)
2. **Step 5**: Improve the Prompt with detailed guidelines
3. **Step 6**: Expert Audit of the Prompt
4. **Step 7**: Bird's-Eye Repo Review
5. **Step 8**: Finalize CLAUDE.md

This repository map serves as the primary reference for understanding the project structure, current implementation status, and development workflow. It is designed to be Claude-ready for AI collaboration and development assistance.
