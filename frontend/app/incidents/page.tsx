'use client';

import React, { useState } from 'react';
import { mockIncidents } from '@/data/mockData';
import IncidentCard from '@/components/dashboard/IncidentCard';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Plus, Filter, Search, MapPin } from 'lucide-react';

export default function IncidentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');

  const filteredIncidents = mockIncidents.filter(incident => {
    const matchesSearch = incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || incident.type === filterType;
    const matchesSeverity = filterSeverity === 'all' || incident.severity === filterSeverity;
    
    return matchesSearch && matchesType && matchesSeverity;
  });

  const handleIncidentClick = (incident: any) => {
    console.log('Incident clicked:', incident);
    // TODO: Navigate to incident detail page or open modal
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Incident Management</h1>
            <p className="text-gray-600 mt-2">Monitor and manage city incidents in real-time</p>
          </div>
          <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
            Report New Incident
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search incidents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="traffic_accident">Traffic Accident</option>
              <option value="power_outage">Power Outage</option>
              <option value="water_main_break">Water Main Break</option>
              <option value="air_quality_alert">Air Quality Alert</option>
              <option value="infrastructure_failure">Infrastructure Failure</option>
            </select>

            <select
              value={filterSeverity}
              onChange={(e) => setFilterSeverity(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Severities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Incidents</p>
              <p className="text-2xl font-bold text-gray-900">{mockIncidents.length}</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockIncidents.filter(i => i.status !== 'resolved' && i.status !== 'closed').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Badge variant="warning" size="sm">Active</Badge>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Critical</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockIncidents.filter(i => i.severity === 'critical').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <Badge variant="danger" size="sm">Critical</Badge>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Resolved Today</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Badge variant="success" size="sm">Resolved</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Incidents List */}
      <div className="space-y-4">
        {filteredIncidents.length > 0 ? (
          filteredIncidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              onClick={handleIncidentClick}
            />
          ))
        ) : (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No incidents found</h3>
            <p className="text-gray-600">
              {searchTerm || filterType !== 'all' || filterSeverity !== 'all'
                ? 'Try adjusting your search or filters'
                : 'No incidents have been reported yet'}
            </p>
          </div>
        )}
      </div>

      {/* Development Notes */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800">Development Notes</h3>
        <ul className="mt-2 text-sm text-yellow-700 space-y-1">
          <li>• ✅ Incident listing with search and filtering</li>
          <li>• ✅ Incident cards with interactive elements</li>
          <li>• ✅ Statistics dashboard</li>
          <li>• TODO: Incident detail modal/page</li>
          <li>• TODO: Real-time incident updates</li>
          <li>• TODO: Incident assignment workflow</li>
          <li>• TODO: Incident reporting form</li>
          <li>• TODO: Integration with map view</li>
        </ul>
      </div>
    </div>
  );
}
