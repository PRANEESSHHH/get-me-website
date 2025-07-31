import React from 'react';
import { motion } from 'framer-motion';
import AllFeaturesOverview from '../components/features/AllFeaturesOverview';
import RealTimeTracking from '../components/features/RealTimeTracking';
import SafetyFeatures from '../components/features/SafetyFeatures';
import NotificationSystem from '../components/features/NotificationSystem';

const Features: React.FC = () => {
  return (
    <div className="pt-16">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding gradient-bg"
      >
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover all the advanced features that make GETME the most comprehensive 
            bus tracking solution for schools.
          </p>
        </div>
      </motion.section>

      <AllFeaturesOverview />
      <RealTimeTracking />
      <SafetyFeatures />
      <NotificationSystem />
    </div>
  );
};

export default Features;