import React from 'react';
import { Alert } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { cn, formatRelativeTime } from '@/lib/utils';
import { Bell, MapPin, Clock, CheckCircle } from 'lucide-react';

interface AlertCardProps {
  alert: Alert;
  className?: string;
  onAcknowledge?: (alertId: string) => void;
}

const AlertCard: React.FC<AlertCardProps> = ({ 
  alert, 
  className,
  onAcknowledge 
}) => {
  const getSeverityVariant = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'danger';
      case 'error':
        return 'danger';
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
      default:
        return 'default';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'incident_alert':
        return '🚨';
      case 'system_alert':
        return '⚙️';
      case 'maintenance_alert':
        return '🔧';
      case 'weather_alert':
        return '🌤️';
      case 'security_alert':
        return '🔒';
      case 'performance_alert':
        return '📊';
      default:
        return '🔔';
    }
  };

  return (
    <Card 
      className={cn(
        'border-l-4',
        alert.severity === 'critical' ? 'border-l-red-500' :
        alert.severity === 'error' ? 'border-l-red-500' :
        alert.severity === 'warning' ? 'border-l-yellow-500' :
        alert.severity === 'info' ? 'border-l-blue-500' :
        'border-l-gray-500',
        className
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">{getAlertIcon(alert.type)}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                {alert.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {alert.message}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={getSeverityVariant(alert.severity)} size="sm">
              {alert.severity}
            </Badge>
            {alert.acknowledged && (
              <CheckCircle className="w-4 h-4 text-green-600" />
            )}
          </div>
        </div>
        
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{formatRelativeTime(alert.timestamp)}</span>
          </div>
          
          {alert.location && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>
                {alert.location.coordinates[1].toFixed(4)}, {alert.location.coordinates[0].toFixed(4)}
              </span>
            </div>
          )}
          
          {alert.acknowledged && alert.acknowledged_by && (
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Acknowledged by {alert.acknowledged_by}</span>
            </div>
          )}
        </div>
        
        {!alert.acknowledged && onAcknowledge && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <button
              onClick={() => onAcknowledge(alert.id)}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              Acknowledge
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AlertCard;
