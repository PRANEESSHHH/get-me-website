import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';
import { featuresData } from '../../data/features';

const FeaturesOverview: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter to show only the 3 requested features on home page
  const homePageFeatures = featuresData.filter(feature => 
    ['notifications', 'realtime-tracking', 'analytics'].includes(feature.id)
  );

  return (
    <section className="section-padding bg-white dark:bg-gray-900" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Core <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Essential features that make GETME the perfect choice for school transportation management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {homePageFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;