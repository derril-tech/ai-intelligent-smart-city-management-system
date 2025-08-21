# Backend Development Instructions - CivitasIQ

## Overview
This directory contains the FastAPI backend application for the CivitasIQ Smart City Management System.

## Current Status
- ✅ Basic project structure and configuration
- ✅ FastAPI application setup with middleware
- ✅ Configuration management with environment variables
- ✅ Database connection setup
- ✅ API router structure
- ✅ Authentication endpoint placeholder

## TODO: Core Components to Implement

### Database Models (`/app/models`)
- [ ] `user.py` - User management models
- [ ] `tenant.py` - Multi-tenant models
- [ ] `role.py` - Role-based access control
- [ ] `audit_log.py` - Audit trail logging
- [ ] `asset.py` - City assets and infrastructure
- [ ] `zone.py` - Geographic zones and boundaries
- [ ] `telemetry.py` - Sensor and IoT data
- [ ] `incident.py` - Incident tracking and management
- [ ] `recommendation.py` - AI recommendations
- [ ] `document.py` - Document storage and RAG

### Data Schemas (`/app/schemas`)
- [ ] `auth.py` - Authentication schemas
- [ ] `user.py` - User data schemas
- [ ] `incident.py` - Incident schemas
- [ ] `analytics.py` - Analytics data schemas
- [ ] `mobility.py` - Traffic and transit schemas
- [ ] `utilities.py` - Energy and water schemas
- [ ] `safety.py` - Public safety schemas
- [ ] `common.py` - Common response schemas

### API Endpoints (`/app/api/v1/endpoints`)
- [ ] `users.py` - User management endpoints
- [ ] `tenants.py` - Multi-tenant management
- [ ] `mobility.py` - Traffic and transit APIs
- [ ] `utilities.py` - Energy, water, waste APIs
- [ ] `safety.py` - Public safety APIs
- [ ] `incidents.py` - Incident management APIs
- [ ] `analytics.py` - Analytics and reporting APIs
- [ ] `ai.py` - AI and ML endpoints
- [ ] `websockets.py` - Real-time WebSocket APIs

### Services (`/app/services`)
- [ ] `auth_service.py` - Authentication and authorization
- [ ] `ai_service.py` - AI and machine learning services
- [ ] `analytics_service.py` - Data analytics and forecasting
- [ ] `notification_service.py` - Email and push notifications
- [ ] `storage_service.py` - File storage management
- [ ] `geospatial_service.py` - Map and location services
- [ ] `telemetry_service.py` - IoT data processing
- [ ] `incident_service.py` - Incident management logic

### Core Utilities (`/app/core`)
- [ ] `security.py` - JWT and password utilities
- [ ] `dependencies.py` - FastAPI dependencies
- [ ] `exceptions.py` - Custom exception handlers
- [ ] `middleware.py` - Custom middleware
- [ ] `logging.py` - Logging configuration

## TODO: Database Implementation

### Alembic Migrations
- [ ] Initialize Alembic configuration
- [ ] Create initial migration for core tables
- [ ] Add PostGIS extension migration
- [ ] Add TimescaleDB hypertables migration
- [ ] Add pgvector extension migration

### Database Schema
- [ ] Core schema (users, tenants, roles)
- [ ] Geospatial schema (assets, zones)
- [ ] Time-series schema (telemetry)
- [ ] Operations schema (incidents, recommendations)
- [ ] RAG schema (documents, embeddings)

## TODO: AI Integration

### LangGraph Agents
- [ ] `DataQualityAgent` - Data validation and quality checks
- [ ] `PolicyComplianceAgent` - Policy and regulation compliance
- [ ] `IncidentSummarizer` - Incident analysis and summarization
- [ ] `Recommender` - AI-powered recommendations
- [ ] `Notifier` - Automated notification system

### RAG Pipeline
- [ ] Document ingestion and processing
- [ ] Text chunking and embedding
- [ ] Vector storage with pgvector
- [ ] Semantic search and retrieval
- [ ] Citation and source tracking

### Forecasting Models
- [ ] Traffic congestion forecasting
- [ ] Energy consumption prediction
- [ ] Water usage forecasting
- [ ] Incident probability modeling
- [ ] Demand prediction for services

## TODO: Real-time Features

### WebSocket Implementation
- [ ] Connection management and authentication
- [ ] Real-time alert broadcasting
- [ ] Live telemetry data streaming
- [ ] Incident updates in real-time
- [ ] User presence and activity tracking

### Message Queuing
- [ ] Redis Streams for event processing
- [ ] Background task processing
- [ ] Event-driven architecture
- [ ] Message persistence and replay

## TODO: Security Implementation

### Authentication & Authorization
- [ ] JWT token generation and validation
- [ ] Role-based access control (RBAC)
- [ ] Multi-tenant isolation
- [ ] Session management
- [ ] Password policies and validation

### Data Protection
- [ ] PII data handling and encryption
- [ ] Audit logging for all operations
- [ ] Data retention policies
- [ ] Backup and recovery procedures
- [ ] GDPR compliance features

## TODO: External Integrations

### IoT and Sensor Data
- [ ] MQTT/HTTP data ingestion
- [ ] GTFS-Realtime transit data
- [ ] Traffic signal controller integration
- [ ] Smart meter data processing
- [ ] Weather API integration

### Third-party Services
- [ ] Mapbox integration for mapping
- [ ] Email service integration (SendGrid)
- [ ] SMS service integration
- [ ] File storage (S3/MinIO)
- [ ] Monitoring and logging services

## Development Guidelines

### Code Style
- Use type hints throughout
- Follow FastAPI best practices
- Use Pydantic for data validation
- Implement proper error handling
- Add comprehensive logging

### Performance
- Use async/await for I/O operations
- Implement proper database indexing
- Add caching with Redis
- Optimize database queries
- Use connection pooling

### Testing
- Write unit tests for all services
- Add integration tests for APIs
- Implement API contract testing
- Add performance benchmarks
- Create test data fixtures

### Documentation
- Add comprehensive docstrings
- Maintain OpenAPI documentation
- Create API usage examples
- Document deployment procedures
- Add troubleshooting guides

## Environment Setup

### Required Environment Variables
```env
# Database
DATABASE_URL=postgresql://user:password@localhost/civitasiq
REDIS_URL=redis://localhost:6379

# Security
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# AI Services
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key

# External Services
MAPBOX_ACCESS_TOKEN=your-mapbox-token
SMTP_HOST=smtp.sendgrid.net
SMTP_USERNAME=your-sendgrid-username
SMTP_PASSWORD=your-sendgrid-password
```

### Development Commands
```bash
# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn main:app --reload

# Run tests
pytest

# Run linting
black app/
isort app/
flake8 app/

# Database migrations
alembic upgrade head
```

## File Structure Guidelines

### Module Organization
- Group related functionality in modules
- Use clear naming conventions
- Separate concerns (models, schemas, services)
- Keep files focused and manageable

### API Design
- Use RESTful conventions
- Implement proper HTTP status codes
- Add comprehensive error responses
- Include pagination for list endpoints
- Add filtering and sorting options

### Database Design
- Use UUIDs for primary keys
- Implement soft deletes where appropriate
- Add proper foreign key constraints
- Use database indexes for performance
- Implement data validation at the database level

## Next Steps Priority

1. **High Priority**
   - Implement database models and migrations
   - Create authentication system
   - Add core API endpoints
   - Set up WebSocket connections

2. **Medium Priority**
   - Implement AI services
   - Add analytics and forecasting
   - Create notification system
   - Add file storage integration

3. **Low Priority**
   - Add advanced features
   - Implement monitoring and alerting
   - Add performance optimization
   - Create deployment automation

## Notes for AI Development

When implementing backend features:
- Follow FastAPI and SQLAlchemy best practices
- Use proper type hints and Pydantic validation
- Implement comprehensive error handling
- Add appropriate logging and monitoring
- Ensure security best practices
- Write tests for all new functionality

The backend should provide a robust, scalable, and secure foundation for the smart city management system.
