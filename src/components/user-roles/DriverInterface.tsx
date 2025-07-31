import React from 'react';
import { Route, Users, AlertTriangle, Navigation } from 'lucide-react';

const DriverInterface: React.FC = () => {
  const features = [
    {
      icon: Route,
      title: 'Route Navigation',
      description: 'GPS-guided routes with traffic updates'
    },
    {
      icon: Users,
      title: 'Student Management',
      description: 'Digital attendance and pickup tracking'
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Button',
      description: 'One-tap emergency alerts to school and parents'
    },
    {
      icon: Navigation,
      title: 'Smart Directions',
      description: 'Optimized routes with real-time adjustments'
    }
  ];

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="bg-secondary-100 dark:bg-secondary-900 p-2 rounded-lg flex-shrink-0">
            <feature.icon className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DriverInterface;