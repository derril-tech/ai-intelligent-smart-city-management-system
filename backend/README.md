# CivitasIQ Backend

The backend API for the CivitasIQ Intelligent Smart City Management System, built with FastAPI, PostgreSQL, and Redis.

## 🚀 Quick Start

### Prerequisites
- Python 3.9+
- PostgreSQL 13+ with PostGIS extension
- Redis 6+
- Docker (optional, for containerized setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-intelligent-smart-city-management-system/backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` with your configuration values.

5. **Set up database**
   ```bash
   # Create database
   createdb civitasiq
   
   # Run migrations (when implemented)
   alembic upgrade head
   ```

6. **Start development server**
   ```bash
   uvicorn main:app --reload
   ```

7. **Access API documentation**
   Navigate to [http://localhost:8000/docs](http://localhost:8000/docs)

## 📁 Project Structure

```
backend/
├── app/                    # Application package
│   ├── api/               # API endpoints
│   │   └── v1/           # API version 1
│   │       ├── api.py    # Main API router
│   │       └── endpoints/ # Domain-specific endpoints
│   ├── core/              # Core configuration
│   │   ├── config.py     # Application settings
│   │   ├── database.py   # Database configuration
│   │   └── security.py   # Security utilities
│   ├── models/            # SQLAlchemy models (TODO)
│   ├── schemas/           # Pydantic schemas (TODO)
│   ├── services/          # Business logic (TODO)
│   └── utils/             # Utility functions (TODO)
├── alembic/               # Database migrations (TODO)
├── tests/                 # Test suite (TODO)
├── main.py                # Application entry point
├── requirements.txt       # Python dependencies
└── env.example           # Environment variables template
```

## 🛠️ Available Scripts

- `uvicorn main:app --reload` - Start development server
- `pytest` - Run tests
- `black app/` - Format code with Black
- `isort app/` - Sort imports
- `flake8 app/` - Lint code
- `mypy app/` - Type checking

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Application Settings
APP_NAME=CivitasIQ
VERSION=1.0.0
DEBUG=true
HOST=0.0.0.0
PORT=8000

# Security
SECRET_KEY=your-super-secret-key-change-this-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Database
DATABASE_URL=postgresql://user:password@localhost/civitasiq
REDIS_URL=redis://localhost:6379

# AI Services
OPENAI_API_KEY=your-openai-api-key-here
ANTHROPIC_API_KEY=your-anthropic-api-key-here

# External Services
MAPBOX_ACCESS_TOKEN=your-mapbox-access-token-here
```

### Database Setup

1. **Install PostgreSQL with PostGIS**
   ```bash
   # Ubuntu/Debian
   sudo apt-get install postgresql postgresql-contrib postgis
   
   # macOS
   brew install postgresql postgis
   ```

2. **Create database and extensions**
   ```sql
   CREATE DATABASE civitasiq;
   \c civitasiq
   CREATE EXTENSION postgis;
   CREATE EXTENSION timescaledb;
   CREATE EXTENSION vector;
   ```

3. **Run migrations**
   ```bash
   alembic upgrade head
   ```

## 📱 Features

### Current Features
- ✅ FastAPI application setup
- ✅ Configuration management
- ✅ Database connection setup
- ✅ API router structure
- ✅ Authentication endpoint placeholder
- ✅ Health check endpoint
- ✅ CORS middleware
- ✅ Security middleware

### Planned Features
- 🔄 User authentication and authorization
- 🔄 Multi-tenant support
- 🔄 Real-time WebSocket connections
- 🔄 AI-powered analytics
- 🔄 Incident management
- 🔄 Geospatial data processing
- 🔄 File storage and management
- 🔄 Email and notification system

## 🔌 API Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `GET /api/v1/auth/me` - Get current user
- `POST /api/v1/auth/logout` - User logout

### Core Endpoints
- `GET /health` - Health check
- `GET /docs` - API documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation

### Domain Endpoints
- `/api/v1/mobility/` - Traffic and transit management
- `/api/v1/utilities/` - Energy, water, and waste management
- `/api/v1/safety/` - Public safety and emergency management
- `/api/v1/incidents/` - Incident tracking and management
- `/api/v1/analytics/` - Data analytics and reporting
- `/api/v1/ai/` - AI and machine learning endpoints

### WebSocket Endpoints
- `/api/v1/ws/alerts` - Real-time alert notifications
- `/api/v1/ws/telemetry` - Real-time sensor data

## 🗄️ Database Schema

### Core Schema
- `users` - User accounts and authentication
- `tenants` - Multi-tenant organization support
- `roles` - Role-based access control
- `audit_logs` - Activity tracking and compliance

### Geospatial Schema
- `assets` - City infrastructure and assets
- `zones` - Geographic zones and boundaries
- `telemetry` - Sensor and IoT data (TimescaleDB hypertable)

### Operations Schema
- `incidents` - Incident tracking and management
- `recommendations` - AI-generated recommendations
- `documents` - Document storage for RAG system

## 🤖 AI Integration

### LangGraph Agents
- **DataQualityAgent** - Data validation and quality checks
- **PolicyComplianceAgent** - Policy and regulation compliance
- **IncidentSummarizer** - Incident analysis and summarization
- **Recommender** - AI-powered recommendations
- **Notifier** - Automated notification system

### RAG Pipeline
- Document ingestion and processing
- Text chunking and embedding
- Vector storage with pgvector
- Semantic search and retrieval
- Citation and source tracking

### Forecasting Models
- Traffic congestion forecasting
- Energy consumption prediction
- Water usage forecasting
- Incident probability modeling

## 🧪 Testing

### Unit Testing
```bash
pytest tests/unit/
```

### Integration Testing
```bash
pytest tests/integration/
```

### API Testing
```bash
pytest tests/api/
```

### Performance Testing
```bash
pytest tests/performance/
```

## 📦 Deployment

### Docker Deployment
```bash
# Build image
docker build -t civitasiq-backend .

# Run container
docker run -p 8000:8000 civitasiq-backend
```

### Production Deployment
1. Set up production database
2. Configure environment variables
3. Run database migrations
4. Start application with production server
5. Set up reverse proxy (nginx)
6. Configure SSL certificates

### Monitoring
- Application metrics with Prometheus
- Log aggregation with ELK stack
- Error tracking with Sentry
- Health checks and alerting

## 🔒 Security

### Authentication & Authorization
- JWT token-based authentication
- Role-based access control (RBAC)
- Multi-tenant isolation
- Session management and token refresh

### Data Protection
- PII data encryption
- Audit logging for compliance
- Data retention policies
- GDPR compliance features

### API Security
- Rate limiting
- Input validation
- SQL injection prevention
- CORS configuration
- HTTPS enforcement

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure code quality (linting, type checking)
6. Submit a pull request

### Code Style
- Use type hints throughout
- Follow FastAPI best practices
- Use Pydantic for data validation
- Implement proper error handling
- Add comprehensive logging

## 📚 Documentation

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Redis Documentation](https://redis.io/documentation)

## 🐛 Troubleshooting

### Common Issues

**Database Connection Errors**
- Verify PostgreSQL is running
- Check database credentials
- Ensure PostGIS extension is installed
- Verify network connectivity

**Import Errors**
- Activate virtual environment
- Install missing dependencies
- Check Python version compatibility
- Verify import paths

**API Errors**
- Check environment variables
- Verify database migrations
- Review application logs
- Test individual endpoints

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the API documentation at `/docs`
- Review existing issues
- Create a new issue with detailed information
- Contact the development team

---

**CivitasIQ** - Intelligent Smart City Management System
