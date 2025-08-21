import React from 'react';
import { KPIMetric } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface KPICardProps {
  kpi: KPIMetric;
  className?: string;
}

const KPICard: React.FC<KPICardProps> = ({ kpi, className }) => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'border-l-green-500';
      case 'warning':
        return 'border-l-yellow-500';
      case 'critical':
        return 'border-l-red-500';
      default:
        return 'border-l-gray-500';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card className={cn('border-l-4', getStatusColor(kpi.status), className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{kpi.name}</p>
            <div className="flex items-baseline mt-2">
              <p className="text-2xl font-bold text-gray-900">
                {kpi.value}
              </p>
              <span className="ml-1 text-sm text-gray-500">{kpi.unit}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {getTrendIcon(kpi.trend)}
            <span className={cn('text-sm font-medium', getTrendColor(kpi.trend))}>
              {kpi.trend_value > 0 ? '+' : ''}{kpi.trend_value}%
            </span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-gray-500">
            Last updated: {new Date(kpi.last_updated).toLocaleTimeString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default KPICard;
