import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/contact/ContactSection';

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-white dark:bg-gray-900"
      >
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to make your school transport safer and smarter? Our team is here 
            to help you get started with GETME bus tracking solution.
          </p>
        </div>
      </motion.section>

      <ContactSection />
    </div>
  );
};

export default Contact;