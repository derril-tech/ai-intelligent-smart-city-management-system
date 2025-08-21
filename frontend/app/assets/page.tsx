'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { mockAssets } from '@/data/mockData';
import { Plus, MapPin, Search, Filter, Settings, Activity } from 'lucide-react';

export default function AssetsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredAssets = mockAssets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || asset.type === filterType;
    const matchesStatus = filterStatus === 'all' || asset.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'default';
      case 'maintenance': return 'warning';
      case 'error': return 'danger';
      default: return 'default';
    }
  };

  const getAssetIcon = (type: string) => {
    switch (type) {
      case 'traffic_signal': return '🚦';
      case 'air_quality_sensor': return '🌬️';
      case 'energy_meter': return '⚡';
      case 'water_meter': return '💧';
      case 'camera': return '📹';
      case 'street_light': return '💡';
      default: return '🏗️';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Asset Management</h1>
            <p className="text-gray-600 mt-2">Monitor and manage city infrastructure assets</p>
          </div>
          <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
            Add Asset
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
                placeholder="Search assets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="traffic_signal">Traffic Signals</option>
              <option value="air_quality_sensor">Air Quality Sensors</option>
              <option value="energy_meter">Energy Meters</option>
              <option value="water_meter">Water Meters</option>
              <option value="camera">Cameras</option>
              <option value="street_light">Street Lights</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="maintenance">Maintenance</option>
              <option value="error">Error</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Assets</p>
              <p className="text-2xl font-bold text-gray-900">{mockAssets.length}</p>
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
                {mockAssets.filter(a => a.status === 'active').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Badge variant="success" size="sm">Active</Badge>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Maintenance</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockAssets.filter(a => a.status === 'maintenance').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Badge variant="warning" size="sm">Maintenance</Badge>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Errors</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockAssets.filter(a => a.status === 'error').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <Badge variant="danger" size="sm">Error</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <Card key={asset.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getAssetIcon(asset.type)}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{asset.name}</h3>
                    <p className="text-sm text-gray-600 capitalize">{asset.type.replace('_', ' ')}</p>
                  </div>
                </div>
                <Badge variant={getStatusColor(asset.status) as any} size="sm">
                  {asset.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>
                    {asset.location.coordinates[1].toFixed(4)}, {asset.location.coordinates[0].toFixed(4)}
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Activity className="w-4 h-4 mr-2" />
                  <span>Last updated: {new Date(asset.last_updated).toLocaleTimeString()}</span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Settings className="w-4 h-4 mr-1" />
                    Configure
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Activity className="w-4 h-4 mr-1" />
                    Monitor
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAssets.length === 0 && (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No assets found</h3>
          <p className="text-gray-600">
            {searchTerm || filterType !== 'all' || filterStatus !== 'all'
              ? 'Try adjusting your search or filters'
              : 'No assets have been configured yet'}
          </p>
        </div>
      )}

      {/* Development Status */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Development Status</h3>
        <p className="text-yellow-700">
          Asset management system is being implemented with the following features:
        </p>
        <ul className="list-disc list-inside mt-2 text-yellow-700 text-sm space-y-1">
          <li>• Real-time asset monitoring and telemetry</li>
          <li>• Geospatial asset mapping with Mapbox integration</li>
          <li>• Asset lifecycle management and maintenance scheduling</li>
          <li>• Performance analytics and predictive maintenance</li>
          <li>• Asset configuration and remote control capabilities</li>
          <li>• Integration with IoT sensors and smart city infrastructure</li>
        </ul>
      </div>
    </div>
  );
}
