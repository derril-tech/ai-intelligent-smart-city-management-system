#!/bin/bash

# CivitasIQ Development Script
# Runs both frontend and backend concurrently

set -e

echo "🚀 Starting CivitasIQ Development Environment"
echo "=============================================="

# Check if required tools are installed
command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required but not installed. Aborting." >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm is required but not installed. Aborting." >&2; exit 1; }
command -v python3 >/dev/null 2>&1 || { echo "❌ Python 3 is required but not installed. Aborting." >&2; exit 1; }

# Check if .env files exist
if [ ! -f "frontend/.env.local" ]; then
    echo "⚠️  frontend/.env.local not found. Copying from example..."
    cp frontend/env.example frontend/.env.local
fi

if [ ! -f "backend/.env" ]; then
    echo "⚠️  backend/.env not found. Copying from example..."
    cp backend/env.example backend/.env
fi

# Install dependencies if needed
echo "📦 Installing dependencies..."

if [ ! -d "frontend/node_modules" ]; then
    echo "Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

if [ ! -d "backend/venv" ]; then
    echo "Creating Python virtual environment..."
    cd backend && python3 -m venv venv && cd ..
fi

echo "Activating Python virtual environment..."
source backend/venv/bin/activate

if [ ! -f "backend/venv/pyvenv.cfg" ]; then
    echo "Installing backend dependencies..."
    cd backend && pip install -r requirements.txt && cd ..
fi

echo "✅ Dependencies installed"

# Start both services concurrently
echo "🌐 Starting services..."
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:8000"
echo "API Docs: http://localhost:8000/docs"
echo ""

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "🛑 Shutting down services..."
    kill $FRONTEND_PID $BACKEND_PID 2>/dev/null || true
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Start backend
echo "🐍 Starting FastAPI backend..."
cd backend
source venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 2

# Start frontend
echo "⚛️  Starting Next.js frontend..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo "✅ Both services started successfully!"
echo "Press Ctrl+C to stop all services"

# Wait for both processes
wait $FRONTEND_PID $BACKEND_PID
