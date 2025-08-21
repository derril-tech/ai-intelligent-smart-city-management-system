// Core Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  tenant_id: string;
  created_at: string;
  last_login?: string;
  is_active: boolean;
}

export type UserRole = 'admin' | 'operator' | 'viewer' | 'citizen';

export interface Tenant {
  id: string;
  name: string;
  domain: string;
  settings: TenantSettings;
  created_at: string;
  is_active: boolean;
}

export interface TenantSettings {
  timezone: string;
  currency: string;
  language: string;
  emergency_contacts: string[];
  notification_preferences: NotificationPreferences;
}

export interface NotificationPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
  webhook_urls: string[];
}

// Geospatial Types
export interface GeoPoint {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
}

export interface GeoPolygon {
  type: 'Polygon';
  coordinates: number[][][];
}

export interface Asset {
  id: string;
  type: AssetType;
  name: string;
  location: GeoPoint;
  properties: Record<string, any>;
  status: AssetStatus;
  last_updated: string;
}

export type AssetType = 
  | 'traffic_signal'
  | 'street_light'
  | 'parking_meter'
  | 'air_quality_sensor'
  | 'water_meter'
  | 'energy_meter'
  | 'camera'
  | 'emergency_phone'
  | 'bus_stop'
  | 'bike_rack';

export type AssetStatus = 'active' | 'inactive' | 'maintenance' | 'error';

export interface Zone {
  id: string;
  name: string;
  type: ZoneType;
  boundary: GeoPolygon;
  rules: ZoneRules;
  created_at: string;
}

export type ZoneType = 'residential' | 'commercial' | 'industrial' | 'park' | 'school' | 'hospital' | 'emergency';

export interface ZoneRules {
  speed_limit?: number;
  parking_restrictions?: string[];
  noise_limits?: number;
  special_events?: boolean;
}

// Telemetry & Monitoring Types
export interface TelemetryData {
  asset_id: string;
  timestamp: string;
  metrics: Record<string, number>;
  location?: GeoPoint;
  tags?: Record<string, string>;
}

export interface AirQualityData extends TelemetryData {
  metrics: {
    pm25: number;
    pm10: number;
    co2: number;
    temperature: number;
    humidity: number;
    aqi: number;
  };
}

export interface TrafficData extends TelemetryData {
  metrics: {
    volume: number;
    speed: number;
    occupancy: number;
    queue_length: number;
  };
}

export interface EnergyData extends TelemetryData {
  metrics: {
    consumption: number;
    demand: number;
    voltage: number;
    current: number;
    power_factor: number;
  };
}

export interface WaterData extends TelemetryData {
  metrics: {
    flow_rate: number;
    pressure: number;
    quality_ph: number;
    quality_turbidity: number;
    consumption: number;
  };
}

// Incident Management Types
export interface Incident {
  id: string;
  title: string;
  description: string;
  type: IncidentType;
  severity: IncidentSeverity;
  status: IncidentStatus;
  location: GeoPoint;
  reported_at: string;
  resolved_at?: string;
  assigned_to?: string;
  assets_involved: string[];
  tags: string[];
  metadata: Record<string, any>;
}

export type IncidentType = 
  | 'traffic_accident'
  | 'power_outage'
  | 'water_main_break'
  | 'air_quality_alert'
  | 'flooding'
  | 'fire'
  | 'medical_emergency'
  | 'security_breach'
  | 'infrastructure_failure'
  | 'weather_event';

export type IncidentSeverity = 'low' | 'medium' | 'high' | 'critical';

export type IncidentStatus = 'reported' | 'acknowledged' | 'in_progress' | 'resolved' | 'closed';

export interface IncidentUpdate {
  id: string;
  incident_id: string;
  user_id: string;
  status: IncidentStatus;
  message: string;
  timestamp: string;
  attachments?: string[];
}

// Mobility Types
export interface TrafficSignal {
  id: string;
  controller_ref: string;
  location: GeoPoint;
  phase_plan: TrafficPhase[];
  current_phase: number;
  status: 'normal' | 'maintenance' | 'emergency';
  last_updated: string;
}

export interface TrafficPhase {
  phase_number: number;
  duration: number;
  movements: TrafficMovement[];
}

export interface TrafficMovement {
  direction: 'north' | 'south' | 'east' | 'west';
  signal_state: 'red' | 'yellow' | 'green' | 'flashing';
}

export interface TravelTime {
  corridor_id: string;
  corridor_name: string;
  timestamp: string;
  travel_time_minutes: number;
  distance_km: number;
  average_speed: number;
  congestion_level: 'low' | 'medium' | 'high' | 'severe';
}

export interface TransitVehicle {
  id: string;
  route_id: string;
  vehicle_type: 'bus' | 'train' | 'tram';
  location: GeoPoint;
  heading: number;
  speed: number;
  occupancy: number;
  next_stop: string;
  estimated_arrival: string;
  status: 'in_service' | 'out_of_service' | 'maintenance';
}

// Analytics & Forecasting Types
export interface Forecast {
  id: string;
  asset_id: string;
  metric: string;
  forecast_type: 'demand' | 'traffic' | 'energy' | 'water';
  predictions: ForecastPoint[];
  confidence_interval: number;
  created_at: string;
  model_version: string;
}

export interface ForecastPoint {
  timestamp: string;
  value: number;
  lower_bound: number;
  upper_bound: number;
}

export interface AnalyticsReport {
  id: string;
  title: string;
  type: ReportType;
  parameters: Record<string, any>;
  data: any[];
  generated_at: string;
  expires_at?: string;
}

export type ReportType = 
  | 'daily_summary'
  | 'weekly_trends'
  | 'monthly_performance'
  | 'incident_analysis'
  | 'energy_consumption'
  | 'traffic_patterns'
  | 'air_quality_report'
  | 'custom';

// AI & Recommendations Types
export interface AIRecommendation {
  id: string;
  incident_id?: string;
  type: RecommendationType;
  title: string;
  description: string;
  rationale: string;
  confidence: number;
  actions: RecommendedAction[];
  created_at: string;
  status: 'pending' | 'approved' | 'rejected' | 'implemented';
}

export type RecommendationType = 
  | 'traffic_optimization'
  | 'energy_conservation'
  | 'safety_improvement'
  | 'maintenance_schedule'
  | 'resource_allocation'
  | 'policy_compliance';

export interface RecommendedAction {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimated_impact: string;
  required_resources: string[];
  approval_required: boolean;
}

// Real-time Communication Types
export interface Alert {
  id: string;
  type: AlertType;
  title: string;
  message: string;
  severity: AlertSeverity;
  location?: GeoPoint;
  timestamp: string;
  acknowledged: boolean;
  acknowledged_by?: string;
  acknowledged_at?: string;
}

export type AlertType = 
  | 'system_alert'
  | 'incident_alert'
  | 'maintenance_alert'
  | 'weather_alert'
  | 'security_alert'
  | 'performance_alert';

export type AlertSeverity = 'info' | 'warning' | 'error' | 'critical';

export interface WebSocketMessage {
  type: 'telemetry' | 'alert' | 'incident_update' | 'recommendation' | 'system_status';
  payload: any;
  timestamp: string;
}

// Dashboard & UI Types
export interface DashboardWidget {
  id: string;
  type: WidgetType;
  title: string;
  position: { x: number; y: number; w: number; h: number };
  config: Record<string, any>;
  data?: any;
  last_updated: string;
}

export type WidgetType = 
  | 'kpi_card'
  | 'line_chart'
  | 'bar_chart'
  | 'map'
  | 'table'
  | 'gauge'
  | 'pie_chart'
  | 'heatmap';

export interface KPIMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trend_value: number;
  status: 'good' | 'warning' | 'critical';
  last_updated: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

export interface ApiError {
  error: string;
  message: string;
  status_code: number;
  details?: Record<string, any>;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface IncidentForm {
  title: string;
  description: string;
  type: IncidentType;
  severity: IncidentSeverity;
  location: GeoPoint;
  assets_involved: string[];
  tags: string[];
}

export interface UserForm {
  email: string;
  name: string;
  role: UserRole;
  tenant_id: string;
}

// Filter & Search Types
export interface FilterOptions {
  date_range?: {
    start: string;
    end: string;
  };
  location?: GeoPolygon;
  asset_types?: AssetType[];
  incident_types?: IncidentType[];
  severity_levels?: IncidentSeverity[];
  status?: string[];
  tags?: string[];
}

export interface SearchParams {
  query: string;
  filters: FilterOptions;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
  page?: number;
  per_page?: number;
}
