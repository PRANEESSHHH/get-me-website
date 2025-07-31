import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor } from 'lucide-react';

const DownloadButtons: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-4 pt-4 sm:pt-6"
    >
      <a
        href="#"
        className="flex items-center w-full sm:w-auto px-6 py-4 sm:px-6 sm:py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-gray-900 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105 transform min-h-[60px] sm:min-h-[60px] max-w-xs sm:max-w-none mx-auto sm:mx-0"
      >
        <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0" />
        <div className="text-left flex-1">
          <div className="text-xs sm:text-xs text-gray-700 opacity-80 leading-tight">Download on the</div>
          <div className="text-sm sm:text-base font-semibold leading-tight">App Store</div>
        </div>
      </a>
      
      <a
        href="#"
        className="flex items-center w-full sm:w-auto px-6 py-4 sm:px-6 sm:py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-gray-900 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105 transform min-h-[60px] sm:min-h-[60px] max-w-xs sm:max-w-none mx-auto sm:mx-0"
      >
        <Monitor className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0" />
        <div className="text-left flex-1">
          <div className="text-xs sm:text-xs text-gray-700 opacity-80 leading-tight">Get it on</div>
          <div className="text-sm sm:text-base font-semibold leading-tight">Google Play</div>
        </div>
      </a>
    </motion.div>
  );
};

export default DownloadButtons;