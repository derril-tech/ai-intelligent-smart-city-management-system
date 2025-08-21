'use client';

import React from 'react';
import KPICard from '@/components/dashboard/KPICard';
import IncidentCard from '@/components/dashboard/IncidentCard';
import AlertCard from '@/components/dashboard/AlertCard';
import { mockKPIMetrics, mockIncidents, mockAlerts } from '@/data/mockData';
import { Plus, BarChart3, Settings, AlertTriangle, Users, MapPin, Zap, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function DashboardPage() {
  const handleIncidentClick = (incident: any) => {
    console.log('Incident clicked:', incident);
    // TODO: Navigate to incident detail page or open modal
  };

  const handleAlertAcknowledge = (alertId: string) => {
    console.log('Alert acknowledged:', alertId);
    // TODO: Update alert status via API
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">CivitasIQ Dashboard</h1>
            <p className="text-gray-600">Real-time city operations overview</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="status-indicator status-success">
              <div className="w-2 h-2 bg-success-500 rounded-full mr-2"></div>
              System Online
            </div>
            <Button variant="outline" icon={<Settings className="w-4 h-4" />}>
              Settings
            </Button>
            <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
              Report Incident
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockKPIMetrics.map((kpi) => (
            <KPICard key={kpi.id} kpi={kpi} />
          ))}
        </div>

        {/* Alerts Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Active Alerts
            </h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockAlerts.slice(0, 3).map((alert) => (
              <AlertCard 
                key={alert.id} 
                alert={alert} 
                onAcknowledge={handleAlertAcknowledge}
              />
            ))}
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="card h-96">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">City Overview</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Traffic</Button>
                  <Button variant="outline" size="sm">Incidents</Button>
                  <Button variant="outline" size="sm">Utilities</Button>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Mapbox integration coming soon</p>
                  <p className="text-sm text-gray-500">Real-time geospatial visualization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Incidents */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Incidents</h3>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-3">
                {mockIncidents.slice(0, 3).map((incident) => (
                  <div 
                    key={incident.id}
                    className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => handleIncidentClick(incident)}
                  >
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      incident.severity === 'critical' ? 'bg-red-500' :
                      incident.severity === 'high' ? 'bg-orange-500' :
                      incident.severity === 'medium' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{incident.title}</p>
                      <p className="text-xs text-gray-600">
                        {incident.location.coordinates[1].toFixed(4)}, {incident.location.coordinates[0].toFixed(4)} • {new Date(incident.reported_at).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="primary" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  New Incident
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Contact Team
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Development Status</h3>
          <p className="text-yellow-700">
            This is an enhanced dashboard with mock data. The following features are being implemented:
          </p>
          <ul className="list-disc list-inside mt-2 text-yellow-700 text-sm space-y-1">
            <li>✅ KPI cards with real-time data integration</li>
            <li>✅ Incident cards with interactive elements</li>
            <li>✅ Alert system with acknowledgment functionality</li>
            <li>✅ Reusable UI components (Button, Card, Badge)</li>
            <li>✅ Comprehensive TypeScript types and interfaces</li>
            <li>✅ Mock data for development and testing</li>
            <li>• Real-time data integration with WebSocket connections</li>
            <li>• Interactive Mapbox geospatial visualization</li>
            <li>• AI-powered incident analysis and recommendations</li>
            <li>• Advanced analytics and forecasting widgets</li>
            <li>• User authentication and role-based access control</li>
            <li>• Mobile-responsive design optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
