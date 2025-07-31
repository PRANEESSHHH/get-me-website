import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { title, description, icon: Icon, color } = feature;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card-dark p-8 rounded-2xl card-hover h-full flex flex-col"
    >
      <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-6`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;