import React from 'react';
import { Incident } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { cn, formatRelativeTime, getSeverityColor } from '@/lib/utils';
import { MapPin, Clock, User, Tag } from 'lucide-react';

interface IncidentCardProps {
  incident: Incident;
  className?: string;
  onClick?: (incident: Incident) => void;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ 
  incident, 
  className,
  onClick 
}) => {
  const getSeverityVariant = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'danger';
      case 'high':
        return 'warning';
      case 'medium':
        return 'info';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return 'success';
      case 'in_progress':
        return 'warning';
      case 'acknowledged':
        return 'info';
      case 'reported':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <Card 
      className={cn(
        'cursor-pointer hover:shadow-md transition-shadow duration-200',
        className
      )}
      onClick={() => onClick?.(incident)}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-gray-900 line-clamp-2">
            {incident.title}
          </h3>
          <div className="flex space-x-2 ml-2">
            <Badge variant={getSeverityVariant(incident.severity)} size="sm">
              {incident.severity}
            </Badge>
            <Badge variant={getStatusVariant(incident.status)} size="sm">
              {incident.status.replace('_', ' ')}
            </Badge>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {incident.description}
        </p>
        
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{formatRelativeTime(incident.reported_at)}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>
              {incident.location.coordinates[1].toFixed(4)}, {incident.location.coordinates[0].toFixed(4)}
            </span>
          </div>
          
          {incident.assigned_to && (
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Assigned to: {incident.assigned_to}</span>
            </div>
          )}
          
          {incident.tags.length > 0 && (
            <div className="flex items-start">
              <Tag className="w-4 h-4 mr-2 mt-0.5" />
              <div className="flex flex-wrap gap-1">
                {incident.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="default" size="sm">
                    {tag}
                  </Badge>
                ))}
                {incident.tags.length > 3 && (
                  <Badge variant="default" size="sm">
                    +{incident.tags.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default IncidentCard;
