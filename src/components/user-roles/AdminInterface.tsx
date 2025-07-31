import React from 'react';
import { BarChart3, Settings, Users, MapPin } from 'lucide-react';

const AdminInterface: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive reports and performance metrics'
    },
    {
      icon: Settings,
      title: 'Fleet Management',
      description: 'Manage buses, routes, and driver assignments'
    },
    {
      icon: Users,
      title: 'User Administration',
      description: 'Control access for parents, drivers, and staff'
    },
    {
      icon: MapPin,
      title: 'Route Planning',
      description: 'Optimize routes for efficiency and safety'
    }
  ];

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="bg-accent-100 dark:bg-accent-900 p-2 rounded-lg flex-shrink-0">
            <feature.icon className="w-5 h-5 text-accent-600 dark:text-accent-400" />
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

export default AdminInterface;