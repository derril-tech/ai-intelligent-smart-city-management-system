import { 
  Incident, 
  TelemetryData, 
  User, 
  Asset, 
  KPIMetric, 
  Alert,
  TravelTime,
  AirQualityData,
  EnergyData,
  TrafficData,
  AIRecommendation
} from '@/types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'admin@civitas.com',
    name: 'Sarah Johnson',
    role: 'admin',
    tenant_id: 'tenant-1',
    created_at: '2024-01-15T10:00:00Z',
    last_login: '2024-01-20T14:30:00Z',
    is_active: true
  },
  {
    id: 'user-2',
    email: 'operator@civitas.com',
    name: 'Mike Chen',
    role: 'operator',
    tenant_id: 'tenant-1',
    created_at: '2024-01-16T09:00:00Z',
    last_login: '2024-01-20T13:45:00Z',
    is_active: true
  },
  {
    id: 'user-3',
    email: 'viewer@civitas.com',
    name: 'Lisa Rodriguez',
    role: 'viewer',
    tenant_id: 'tenant-1',
    created_at: '2024-01-17T11:00:00Z',
    last_login: '2024-01-20T12:15:00Z',
    is_active: true
  }
];

// Mock Assets
export const mockAssets: Asset[] = [
  {
    id: 'asset-1',
    type: 'traffic_signal',
    name: 'Main St & Oak Ave Signal',
    location: {
      type: 'Point',
      coordinates: [-122.4194, 37.7749]
    },
    properties: {
      controller_id: 'TS-001',
      intersection: 'Main St & Oak Ave',
      phases: 4
    },
    status: 'active',
    last_updated: '2024-01-20T15:30:00Z'
  },
  {
    id: 'asset-2',
    type: 'air_quality_sensor',
    name: 'Downtown AQ Sensor',
    location: {
      type: 'Point',
      coordinates: [-122.4184, 37.7759]
    },
    properties: {
      sensor_model: 'AQ-2000',
      installation_date: '2024-01-01'
    },
    status: 'active',
    last_updated: '2024-01-20T15:25:00Z'
  },
  {
    id: 'asset-3',
    type: 'energy_meter',
    name: 'City Hall Energy Meter',
    location: {
      type: 'Point',
      coordinates: [-122.4204, 37.7739]
    },
    properties: {
      meter_id: 'EM-001',
      building: 'City Hall',
      capacity: '500kW'
    },
    status: 'active',
    last_updated: '2024-01-20T15:20:00Z'
  },
  {
    id: 'asset-4',
    type: 'water_meter',
    name: 'Central Park Water Meter',
    location: {
      type: 'Point',
      coordinates: [-122.4174, 37.7769]
    },
    properties: {
      meter_id: 'WM-001',
      location: 'Central Park',
      pipe_diameter: '12 inches'
    },
    status: 'maintenance',
    last_updated: '2024-01-20T15:15:00Z'
  }
];

// Mock Incidents
export const mockIncidents: Incident[] = [
  {
    id: 'incident-1',
    title: 'Traffic Signal Malfunction',
    description: 'Traffic signal at Main St & Oak Ave showing all red lights, causing traffic backup',
    type: 'infrastructure_failure',
    severity: 'high',
    status: 'in_progress',
    location: {
      type: 'Point',
      coordinates: [-122.4194, 37.7749]
    },
    reported_at: '2024-01-20T14:00:00Z',
    assigned_to: 'user-2',
    assets_involved: ['asset-1'],
    tags: ['traffic', 'signal', 'malfunction'],
    metadata: {
      estimated_resolution: '2 hours',
      affected_intersections: 1
    }
  },
  {
    id: 'incident-2',
    title: 'Air Quality Alert',
    description: 'PM2.5 levels exceeding EPA standards in downtown area',
    type: 'air_quality_alert',
    severity: 'medium',
    status: 'acknowledged',
    location: {
      type: 'Point',
      coordinates: [-122.4184, 37.7759]
    },
    reported_at: '2024-01-20T13:30:00Z',
    assigned_to: 'user-1',
    assets_involved: ['asset-2'],
    tags: ['air_quality', 'health', 'environment'],
    metadata: {
      pm25_level: 55,
      epa_threshold: 35
    }
  },
  {
    id: 'incident-3',
    title: 'Water Main Break',
    description: 'Water main break reported near Central Park, affecting water pressure',
    type: 'water_main_break',
    severity: 'critical',
    status: 'reported',
    location: {
      type: 'Point',
      coordinates: [-122.4174, 37.7769]
    },
    reported_at: '2024-01-20T15:00:00Z',
    assets_involved: ['asset-4'],
    tags: ['water', 'infrastructure', 'emergency'],
    metadata: {
      affected_customers: 150,
      estimated_repair_time: '6 hours'
    }
  }
];

// Mock Telemetry Data
export const mockTelemetryData: TelemetryData[] = [
  {
    asset_id: 'asset-1',
    timestamp: '2024-01-20T15:30:00Z',
    metrics: {
      phase_duration: 30,
      vehicle_count: 45,
      pedestrian_count: 12,
      cycle_time: 120
    },
    location: {
      type: 'Point',
      coordinates: [-122.4194, 37.7749]
    },
    tags: {
      intersection: 'Main St & Oak Ave',
      controller: 'TS-001'
    }
  },
  {
    asset_id: 'asset-2',
    timestamp: '2024-01-20T15:25:00Z',
    metrics: {
      pm25: 42,
      pm10: 65,
      co2: 450,
      temperature: 22,
      humidity: 65,
      aqi: 55
    },
    location: {
      type: 'Point',
      coordinates: [-122.4184, 37.7759]
    },
    tags: {
      location: 'Downtown',
      sensor: 'AQ-2000'
    }
  }
];

// Mock Air Quality Data
export const mockAirQualityData: AirQualityData[] = [
  {
    asset_id: 'asset-2',
    timestamp: '2024-01-20T15:25:00Z',
    metrics: {
      pm25: 42,
      pm10: 65,
      co2: 450,
      temperature: 22,
      humidity: 65,
      aqi: 55
    },
    location: {
      type: 'Point',
      coordinates: [-122.4184, 37.7759]
    },
    tags: {
      location: 'Downtown',
      sensor: 'AQ-2000'
    }
  }
];

// Mock Energy Data
export const mockEnergyData: EnergyData[] = [
  {
    asset_id: 'asset-3',
    timestamp: '2024-01-20T15:20:00Z',
    metrics: {
      consumption: 125.5,
      demand: 180.2,
      voltage: 480,
      current: 375,
      power_factor: 0.95
    },
    location: {
      type: 'Point',
      coordinates: [-122.4204, 37.7739]
    },
    tags: {
      building: 'City Hall',
      meter: 'EM-001'
    }
  }
];

// Mock Traffic Data
export const mockTrafficData: TrafficData[] = [
  {
    asset_id: 'asset-1',
    timestamp: '2024-01-20T15:30:00Z',
    metrics: {
      volume: 45,
      speed: 25,
      occupancy: 0.35,
      queue_length: 12
    },
    location: {
      type: 'Point',
      coordinates: [-122.4194, 37.7749]
    },
    tags: {
      intersection: 'Main St & Oak Ave',
      direction: 'northbound'
    }
  }
];

// Mock Travel Times
export const mockTravelTimes: TravelTime[] = [
  {
    corridor_id: 'corridor-1',
    corridor_name: 'Main Street Corridor',
    timestamp: '2024-01-20T15:30:00Z',
    travel_time_minutes: 8.5,
    distance_km: 2.1,
    average_speed: 14.8,
    congestion_level: 'medium'
  },
  {
    corridor_id: 'corridor-2',
    corridor_name: 'Oak Avenue Corridor',
    timestamp: '2024-01-20T15:30:00Z',
    travel_time_minutes: 12.3,
    distance_km: 3.2,
    average_speed: 15.6,
    congestion_level: 'high'
  }
];

// Mock KPI Metrics
export const mockKPIMetrics: KPIMetric[] = [
  {
    id: 'kpi-1',
    name: 'Active Incidents',
    value: 3,
    unit: 'count',
    trend: 'up',
    trend_value: 1,
    status: 'warning',
    last_updated: '2024-01-20T15:30:00Z'
  },
  {
    id: 'kpi-2',
    name: 'Energy Efficiency',
    value: 87.5,
    unit: '%',
    trend: 'up',
    trend_value: 2.3,
    status: 'good',
    last_updated: '2024-01-20T15:25:00Z'
  },
  {
    id: 'kpi-3',
    name: 'Traffic Flow',
    value: 72.1,
    unit: '%',
    trend: 'down',
    trend_value: -5.2,
    status: 'warning',
    last_updated: '2024-01-20T15:20:00Z'
  },
  {
    id: 'kpi-4',
    name: 'Air Quality Index',
    value: 55,
    unit: 'AQI',
    trend: 'up',
    trend_value: 8,
    status: 'warning',
    last_updated: '2024-01-20T15:15:00Z'
  }
];

// Mock Alerts
export const mockAlerts: Alert[] = [
  {
    id: 'alert-1',
    type: 'incident_alert',
    title: 'New Critical Incident',
    message: 'Water main break reported near Central Park',
    severity: 'critical',
    location: {
      type: 'Point',
      coordinates: [-122.4174, 37.7769]
    },
    timestamp: '2024-01-20T15:00:00Z',
    acknowledged: false
  },
  {
    id: 'alert-2',
    type: 'system_alert',
    title: 'High CPU Usage',
    message: 'System CPU usage at 85%',
    severity: 'warning',
    timestamp: '2024-01-20T14:45:00Z',
    acknowledged: true,
    acknowledged_by: 'user-1',
    acknowledged_at: '2024-01-20T14:50:00Z'
  },
  {
    id: 'alert-3',
    type: 'maintenance_alert',
    title: 'Scheduled Maintenance',
    message: 'Water meter maintenance scheduled for tomorrow',
    severity: 'info',
    timestamp: '2024-01-20T14:30:00Z',
    acknowledged: false
  }
];

// Mock AI Recommendations
export const mockAIRecommendations: AIRecommendation[] = [
  {
    id: 'rec-1',
    incident_id: 'incident-1',
    type: 'traffic_optimization',
    title: 'Optimize Traffic Signal Timing',
    description: 'Adjust signal timing to reduce congestion during peak hours',
    rationale: 'Analysis shows 15% increase in travel time during morning peak',
    confidence: 0.87,
    actions: [
      {
        id: 'action-1',
        title: 'Increase green time for Main St',
        description: 'Extend green phase by 10 seconds during 7-9 AM',
        priority: 'high',
        estimated_impact: 'Reduce travel time by 12%',
        required_resources: ['traffic_engineer'],
        approval_required: true
      }
    ],
    created_at: '2024-01-20T15:15:00Z',
    status: 'pending'
  },
  {
    id: 'rec-2',
    type: 'energy_conservation',
    title: 'Implement Demand Response',
    description: 'Reduce energy consumption during peak demand periods',
    rationale: 'Energy demand 20% above normal during current period',
    confidence: 0.92,
    actions: [
      {
        id: 'action-2',
        title: 'Reduce HVAC load',
        description: 'Temporarily reduce HVAC output by 15%',
        priority: 'medium',
        estimated_impact: 'Save 50 kWh during peak period',
        required_resources: ['facility_manager'],
        approval_required: true
      }
    ],
    created_at: '2024-01-20T15:10:00Z',
    status: 'approved'
  }
];

// Mock Chart Data for Analytics
export const mockChartData = {
  trafficVolume: [
    { time: '06:00', volume: 120 },
    { time: '07:00', volume: 450 },
    { time: '08:00', volume: 780 },
    { time: '09:00', volume: 650 },
    { time: '10:00', volume: 420 },
    { time: '11:00', volume: 380 },
    { time: '12:00', volume: 520 },
    { time: '13:00', volume: 480 },
    { time: '14:00', volume: 390 },
    { time: '15:00', volume: 410 },
    { time: '16:00', volume: 580 },
    { time: '17:00', volume: 720 },
    { time: '18:00', volume: 680 },
    { time: '19:00', volume: 450 },
    { time: '20:00', volume: 320 }
  ],
  energyConsumption: [
    { time: '00:00', consumption: 85 },
    { time: '02:00', consumption: 75 },
    { time: '04:00', consumption: 70 },
    { time: '06:00', consumption: 90 },
    { time: '08:00', consumption: 180 },
    { time: '10:00', consumption: 220 },
    { time: '12:00', consumption: 240 },
    { time: '14:00', consumption: 230 },
    { time: '16:00', consumption: 250 },
    { time: '18:00', consumption: 280 },
    { time: '20:00', consumption: 200 },
    { time: '22:00', consumption: 120 }
  ],
  airQuality: [
    { time: '00:00', aqi: 25 },
    { time: '04:00', aqi: 20 },
    { time: '08:00', aqi: 35 },
    { time: '12:00', aqi: 45 },
    { time: '16:00', aqi: 55 },
    { time: '20:00', aqi: 40 }
  ],
  incidentTypes: [
    { type: 'Traffic', count: 12 },
    { type: 'Infrastructure', count: 8 },
    { type: 'Safety', count: 5 },
    { type: 'Environmental', count: 3 },
    { type: 'Utilities', count: 7 }
  ]
};

// Mock Map Data
export const mockMapData = {
  incidents: mockIncidents,
  assets: mockAssets,
  zones: [
    {
      id: 'zone-1',
      name: 'Downtown Core',
      type: 'commercial',
      boundary: {
        type: 'Polygon',
        coordinates: [[
          [-122.4214, 37.7729],
          [-122.4154, 37.7729],
          [-122.4154, 37.7789],
          [-122.4214, 37.7789],
          [-122.4214, 37.7729]
        ]]
      },
      rules: {
        speed_limit: 25,
        parking_restrictions: ['No parking 2-6 AM'],
        noise_limits: 65
      },
      created_at: '2024-01-01T00:00:00Z'
    }
  ]
};

// Export all mock data
export const mockData = {
  users: mockUsers,
  assets: mockAssets,
  incidents: mockIncidents,
  telemetry: mockTelemetryData,
  airQuality: mockAirQualityData,
  energy: mockEnergyData,
  traffic: mockTrafficData,
  travelTimes: mockTravelTimes,
  kpis: mockKPIMetrics,
  alerts: mockAlerts,
  recommendations: mockAIRecommendations,
  charts: mockChartData,
  map: mockMapData
};
