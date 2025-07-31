import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, AlertTriangle, Eye, Users } from 'lucide-react';

const SafetyFeatures: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const safetyFeatures = [
    {
      icon: Shield,
      title: 'Geofencing',
      description: 'Virtual safe zones with automatic entry/exit notifications'
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Alerts',
      description: 'One-touch emergency button for immediate response'
    },
    {
      icon: Eye,
      title: 'Driver Monitoring',
      description: 'Speed monitoring and driving behavior analysis'
    },
    {
      icon: Users,
      title: 'Student Check-in',
      description: 'Digital attendance tracking for boarding and alighting'
    }
  ];

  return (
    <section className="section-padding gradient-bg" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:order-2"
          >
            <div className="card-dark rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {safetyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700"
                  >
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {feature.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:order-1"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Advanced <span className="text-gradient">Safety Features</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Comprehensive safety measures designed to protect students during 
                their daily commute. From geofencing to emergency alerts, every 
                feature prioritizes student wellbeing.
              </p>
            </div>

            <div className="space-y-6">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
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
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;