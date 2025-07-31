import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Navigation, Clock, Zap } from 'lucide-react';

const RealTimeTracking: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trackingFeatures = [
    {
      icon: MapPin,
      title: 'Precise GPS Location',
      description: 'Sub-meter accuracy with updates every 30 seconds'
    },
    {
      icon: Navigation,
      title: 'Route Monitoring',
      description: 'Real-time route adherence and deviation alerts'
    },
    {
      icon: Clock,
      title: 'ETA Predictions',
      description: 'AI-powered arrival time estimates with traffic data'
    },
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Live notifications for any route changes or delays'
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Real-time <span className="text-gradient">GPS Tracking</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Never lose sight of your buses with our advanced GPS tracking system. 
                Get precise location data, route monitoring, and instant alerts for 
                complete transparency.
              </p>
            </div>

            <div className="space-y-6">
              {trackingFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <div className="aspect-square card-dark rounded-xl shadow-lg p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Map View</h3>
                    <p className="text-gray-600 dark:text-gray-300">Interactive tracking interface</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeTracking;