import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bell, MessageSquare, Zap, Settings } from 'lucide-react';

const NotificationSystem: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-white dark:bg-gray-900" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Smart <span className="text-gradient">Notification System</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Keep everyone informed with intelligent notifications that adapt to your needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800"
          >
            <Bell className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Push Notifications</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Instant mobile notifications for arrivals, delays, and important updates
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Real-time arrival alerts</li>
              <li>• Route change notifications</li>
              <li>• Emergency alerts</li>
              <li>• Custom scheduling</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-2xl p-8 border border-secondary-200 dark:border-secondary-800"
          >
            <MessageSquare className="w-12 h-12 text-secondary-600 dark:text-secondary-400 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">SMS Alerts</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Text message notifications for parents without smartphone access
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Bus delay notifications</li>
              <li>• Daily pickup reminders</li>
              <li>• Weather-related updates</li>
              <li>• Emergency communications</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-2xl p-8 border border-accent-200 dark:border-accent-800"
          >
            <Settings className="w-12 h-12 text-accent-600 dark:text-accent-400 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Smart Automation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              AI-powered notifications that learn from patterns and preferences
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Predictive delay alerts</li>
              <li>• Personalized timing</li>
              <li>• Weather impact warnings</li>
              <li>• Maintenance notifications</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotificationSystem;