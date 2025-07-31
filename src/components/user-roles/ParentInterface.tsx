import React from 'react';
import { MapPin, Bell, Clock, Shield } from 'lucide-react';

const ParentInterface: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Live Bus Tracking',
      description: 'See exactly where your child\'s bus is at any moment'
    },
    {
      icon: Bell,
      title: 'Instant Notifications',
      description: 'Get alerts for pickups, drop-offs, and delays'
    },
    {
      icon: Clock,
      title: 'ETA Updates',
      description: 'Know exactly when the bus will arrive'
    },
    {
      icon: Shield,
      title: 'Safety Alerts',
      description: 'Emergency notifications and safe zone updates'
    }
  ];

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-lg flex-shrink-0">
            <feature.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
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

export default ParentInterface;