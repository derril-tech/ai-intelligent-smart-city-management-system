# CivitasIQ - Intelligent Smart City Management System

[![CI/CD Pipeline](https://github.com/your-org/civitasiq/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/civitasiq/actions/workflows/ci.yml)

**CivitasIQ** is a unified, AI-driven command platform for modern cities that fuses live sensor data, geospatial feeds, and citizen inputs into a real-time city twin that forecasts demand, flags anomalies, and coordinates response across mobility, energy, water, waste, and public safety.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and **npm**
- **Python** 3.11+ and **pip**
- **PostgreSQL** 15+ with PostGIS extension
- **Redis** 7+

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/civitasiq.git
   cd civitasiq
   ```

2. **Run the development environment**
   ```bash
   # On Unix/Linux/macOS
   ./scripts/dev.sh
   
   # On Windows
   # Use the individual commands below
   ```

3. **Manual setup (if needed)**
   ```bash
   # Frontend
   cd frontend
   npm install
   cp env.example .env.local
   npm run dev
   
   # Backend (in another terminal)
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cp env.example .env
   uvicorn main:app --reload
   ```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 🏗️ Architecture

### Technology Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Mapbox GL JS
- **Backend**: FastAPI, Python, SQLAlchemy, PostgreSQL (PostGIS, TimescaleDB, pgvector)
- **AI/ML**: LangGraph, LangChain, OpenAI/Anthropic
- **Real-time**: WebSockets, Redis Streams
- **Infrastructure**: Docker, Vercel + Render

### Project Structure
```
civitasiq/
├── frontend/                 # Next.js 14 frontend application
│   ├── app/                 # App Router pages and layouts
│   ├── components/          # Reusable UI components
│   ├── types/               # TypeScript type definitions
│   └── data/                # Mock data and fixtures
├── backend/                 # FastAPI backend application
│   ├── app/                 # Application modules
│   │   ├── api/            # API endpoints and routers
│   │   ├── models/         # SQLAlchemy database models
│   │   └── schemas/        # Pydantic request/response schemas
│   └── main.py             # Application entry point
├── docs/                    # Project documentation
│   ├── CLAUDE.md           # AI collaboration guidelines
│   ├── API_SPEC.md         # API specification
│   └── REPO_MAP.md         # Repository structure guide
├── scripts/                 # Development and deployment scripts
└── .github/workflows/       # CI/CD pipeline configuration
```

## 📚 Documentation

- **[PROJECT_BRIEF](./PROJECT_BRIEF)** - Complete project specification and requirements
- **[PROMPT_DECLARATION](./PROMPT_DECLARATION)** - AI development guidelines
- **[docs/CLAUDE.md](./docs/CLAUDE.md)** - AI collaboration guidelines
- **[docs/API_SPEC.md](./docs/API_SPEC.md)** - API documentation and examples
- **[docs/REPO_MAP.md](./docs/REPO_MAP.md)** - Repository structure and file organization

## 🎯 Key Features

### Real-time Operations
- Live dashboard with city-wide operational visibility
- Real-time incident tracking and response coordination
- Asset monitoring with geospatial tracking
- WebSocket-powered live updates

### AI-Powered Intelligence
- LangGraph orchestrated multi-agent workflows
- RAG (Retrieval Augmented Generation) over municipal policies
- Predictive analytics and demand forecasting
- Automated recommendations and decision support

### Geospatial-First Design
- Map-centric user interface with dockable panels
- PostGIS-powered spatial analytics
- Real-time geofencing and location-based alerts
- Interactive scenario modeling

### Multi-tenant Architecture
- Role-based access control (RBAC)
- Tenant isolation for data security
- Scalable deployment for multiple cities
- Audit trails and compliance features

## 🔧 Development

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

### Code Quality
- **TypeScript** with strict type checking
- **ESLint** and **Prettier** for code formatting
- **Black** and **isort** for Python formatting
- **GitHub Actions** CI/CD pipeline
- **CodeQL** security scanning

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Deploy to Vercel
vercel --prod
```

### Backend (Render)
```bash
# Deploy to Render
# Configure via Render dashboard with:
# - Build Command: pip install -r requirements.txt
# - Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the coding conventions in [docs/CLAUDE.md](./docs/CLAUDE.md)
- Ensure all tests pass before submitting
- Update documentation for new features
- Follow conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the [docs/](./docs/) directory
- **Issues**: [GitHub Issues](https://github.com/your-org/civitasiq/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/civitasiq/discussions)

---

**CivitasIQ** - Building smarter cities through intelligent technology.