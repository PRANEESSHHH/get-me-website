import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Schools Served', value: '10+', icon: Award },
    { label: 'Students Protected', value: '15K+', icon: Shield },
    { label: 'Daily Trips', value: '25K+', icon: Zap },
    { label: 'Team Members', value: '20+', icon: Users },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding gradient-bg"
      >
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-gradient">GETME</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make school transportation safer, more efficient, 
            and more transparent for everyone involved.
          </p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Every day, millions of students depend on school buses for safe transportation. 
                We believe parents deserve to know where their children are, schools need 
                efficient fleet management, and drivers should have the tools to do their jobs effectively.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                GETME was built to bridge this gap with cutting-edge technology that brings 
                transparency, safety, and peace of mind to school transportation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-dark rounded-2xl p-8 shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Safety First</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Every feature prioritizes student safety</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Community Focused</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Built for schools, parents, and drivers</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Innovation Driven</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Constantly improving with new technology</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;