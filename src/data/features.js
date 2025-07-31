import { 
  MapPin, 
  Shield, 
  Bell, 
  Route, 
  Users, 
  BarChart3, 
  Clock, 
  Smartphone 
} from 'lucide-react';

export const featuresData = [
  {
    id: 'realtime-tracking',
    title: 'Real-time GPS Tracking',
    description: 'Track buses live with precise GPS coordinates, route monitoring, and location updates every 30 seconds for complete visibility.',
    icon: MapPin,
    color: 'bg-gradient-to-r from-primary-500 to-primary-600'
  },
  {
    id: 'safety-features',
    title: 'Advanced Safety Features',
    description: 'Geofencing, emergency alerts, safe zone notifications, and panic button integration for maximum student safety.',
    icon: Shield,
    color: 'bg-gradient-to-r from-green-500 to-green-600'
  },
  {
    id: 'notifications',
    title: 'Smart Notifications',
    description: 'Automated SMS and push notifications for arrivals, delays, route changes, and emergency situations.',
    icon: Bell,
    color: 'bg-gradient-to-r from-accent-500 to-accent-600'
  },
  {
    id: 'route-management',
    title: 'Route Optimization',
    description: 'Intelligent route planning, traffic-aware navigation, and automatic route adjustments for efficient transportation.',
    icon: Route,
    color: 'bg-gradient-to-r from-secondary-500 to-secondary-600'
  },
  {
    id: 'user-management',
    title: 'Multi-User Dashboard',
    description: 'Separate interfaces for parents, drivers, and administrators with role-based access and customized features.',
    icon: Users,
    color: 'bg-gradient-to-r from-purple-500 to-purple-600'
  },
  {
    id: 'analytics',
    title: 'Detailed Analytics',
    description: 'Comprehensive reports on routes, delays, fuel consumption, driver performance, and student attendance patterns.',
    icon: BarChart3,
    color: 'bg-gradient-to-r from-blue-500 to-blue-600'
  },
  {
    id: 'scheduling',
    title: 'Smart Scheduling',
    description: 'Automated schedule management, holiday adjustments, and flexible timing configurations for different routes.',
    icon: Clock,
    color: 'bg-gradient-to-r from-indigo-500 to-indigo-600'
  },
  {
    id: 'mobile-first',
    title: 'Mobile-First Design',
    description: 'Native mobile apps for iOS and Android with offline capabilities and seamless synchronization.',
    icon: Smartphone,
    color: 'bg-gradient-to-r from-pink-500 to-pink-600'
  }
];