import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, MapPin, Clock } from 'lucide-react';
import AppPreview from './AppPreview';
import DownloadButtons from './DownloadButtons';
import busBgImage from '../../assests/bus bg 4.jpg';
import busBgResponsiveImage from '../../assests/bus bg 4 responsive.jpg';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: Users, value: '10+', label: 'Schools' },
    { icon: MapPin, value: '15K+', label: 'Students' },
    { icon: Clock, value: '99.9%', label: 'Uptime' },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Mobile Background Image (xs to sm) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat sm:hidden"
        style={{ 
          backgroundImage: `url(${busBgResponsiveImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          minWidth: '100%'
        }}
      />
      
      {/* Tablet Background Image (sm to lg) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat hidden sm:block lg:hidden"
        style={{ 
          backgroundImage: `url(${busBgResponsiveImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          minWidth: '100%'
        }}
      />
      
      {/* Desktop Background Image (lg and above) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat hidden lg:block"
        style={{ 
          backgroundImage: `url(${busBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          minWidth: '100%'
        }}
      />
      
      {/* Adaptive Overlay for better text readability across devices */}
      <div className="absolute inset-0 w-full h-full bg-black/40 sm:bg-black/50 lg:bg-black/50 dark:bg-black/50 dark:sm:bg-black/60 dark:lg:bg-black/60" />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-secondary-100/20 dark:from-primary-900/30 dark:via-transparent dark:to-secondary-900/30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl dark:bg-primary-800/40"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-200/30 rounded-full blur-3xl dark:bg-secondary-800/40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              className="inline-flex items-center px-4 py-2 bg-white/90 dark:bg-gray-800/30 backdrop-blur-sm rounded-full text-gray-800 dark:text-primary-300 font-medium text-sm sm:text-base"
            >
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 10+ Schools Nationwide
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white dark:text-white leading-tight"
            >
              Smart Bus Tracking
              <span className="text-gradient block">Made Simple</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-gray-100 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Real-time GPS tracking, instant notifications, and comprehensive safety features 
              for parents, drivers, and school administrators.
            </motion.p>

            <DownloadButtons />

            {/* Stats - Clean */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-300/50 dark:border-gray-700"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.6 + index * 0.1, 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 dark:text-primary-400" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white dark:text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-200 dark:text-gray-400 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - App Preview with Professional Positioning */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 relative flex justify-center lg:justify-end items-center min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[700px] lg:pl-8 mt-8 lg:mt-0"
          >
            {/* Professional backdrop elements - responsive */}
            <div className="absolute inset-0 flex justify-center lg:justify-end items-center">
              {/* Large backdrop circle - responsive sizing */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl -z-10 right-0 lg:right-0"
              />
              
              {/* Secondary backdrop - responsive positioning */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] bg-gradient-to-tr from-secondary-400/15 to-primary-400/15 rounded-full blur-2xl -z-10 right-4 sm:right-8 lg:right-16 top-4 sm:top-8 lg:top-16"
              />
              
              {/* Accent elements - responsive */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl -z-10 right-2 sm:right-4 md:right-8 bottom-12 sm:bottom-16 md:bottom-24"
              />
            </div>

            {/* App Preview Container with enhanced responsive positioning */}
            <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto lg:ml-auto lg:mx-0">
              {/* Floating geometric elements - responsive sizing */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-1 sm:-top-2 md:-top-4 -right-1 sm:-right-2 md:-right-4 z-0 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 border-primary-400/30 rounded-lg"
              />
              
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  y: [0, -8, 0]
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 -left-2 sm:-left-4 md:-left-6 z-0 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-gradient-to-br from-secondary-400/40 to-secondary-600/40 rounded-full"
              />

              <div className="transform scale-85 sm:scale-90 md:scale-95 lg:scale-100 origin-center">
                <AppPreview />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;