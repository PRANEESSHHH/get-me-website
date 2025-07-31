import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Bell, 
  Shield, 
  Phone, 
  Zap, 
  Calculator,
  Navigation,
  Clock,
  Wifi,
  Battery,
  Signal,
  User,
  CheckCircle,
  AlertTriangle,
  MoreHorizontal,
  ChevronRight
} from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from '../../contexts/ThemeContext';

const AppPreview: React.FC = () => {
  const { theme } = useTheme();
  const [currentTime, setCurrentTime] = useState('');
  const [selectedTab, setSelectedTab] = useState('live');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Responsive floating action buttons with better positioning
  const floatingButtons = [
    {
      id: 'call',
      icon: Phone,
      href: '/contact',
      title: 'Emergency Call',
      color: 'bg-emerald-500 hover:bg-emerald-600',
      shadow: 'shadow-emerald-500/25',
      // Responsive positioning
      className: 'absolute top-[8%] left-[-15%] sm:top-[10%] sm:left-[-12%] md:top-[12%] md:left-[-10%] lg:top-[12%] lg:left-[-8%] xl:left-[-6%]'
    },
    {
      id: 'alert',
      icon: Zap,
      href: '/features',
      title: 'Quick Alert',
      color: 'bg-orange-500 hover:bg-orange-600',
      shadow: 'shadow-orange-500/25',
      className: 'absolute top-[5%] right-[-15%] sm:top-[6%] sm:right-[-12%] md:top-[8%] md:right-[-10%] lg:top-[8%] lg:right-[-8%] xl:right-[-6%]'
    },
    {
      id: 'tools',
      icon: Calculator,
      href: '/about',
      title: 'Tools',
      color: 'bg-primary-500 hover:bg-primary-600',
      shadow: 'shadow-primary-500/25',
      className: 'absolute bottom-[8%] right-[-15%] sm:bottom-[10%] sm:right-[-12%] md:bottom-[12%] md:right-[-10%] lg:bottom-[12%] lg:right-[-8%] xl:right-[-6%]'
    }
  ];

  const busStops = [
    { name: 'Main Gate', time: '8:15 AM', status: 'completed' },
    { name: 'Park Avenue', time: '8:22 AM', status: 'completed' },
    { name: 'Oak Street', time: '8:28 AM', status: 'current' },
    { name: 'School', time: '8:35 AM', status: 'pending' }
  ];

  const tabs = [
    { id: 'live', label: 'Live', icon: Navigation },
    { id: 'route', label: 'Route', icon: MapPin },
    { id: 'alerts', label: 'Alerts', icon: Bell }
  ];

  return (
    <div className="relative flex justify-center items-center min-h-[600px] w-full">
      {/* Professional Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Phone Frame */}
        <div className={clsx(
          'w-80 h-[600px] rounded-[3rem] p-3 shadow-2xl',
          theme === 'dark' 
            ? 'bg-gray-900 shadow-black/40' 
            : 'bg-gray-900 shadow-gray-900/20'
        )}>
          {/* Screen */}
          <div className={clsx(
            'w-full h-full rounded-[2.5rem] overflow-hidden relative',
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          )}>
            
          {/* Status Bar */}
            <div className={clsx(
              'backdrop-blur-sm h-14 flex items-center justify-between px-6 border-b',
              theme === 'dark' 
                ? 'bg-gray-800/80 border-gray-700' 
                : 'bg-gray-50/80 border-gray-100'
            )}>
              <div className="flex items-center space-x-3">
                <span className={clsx(
                  'text-sm font-medium',
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                )}>{currentTime}</span>
                <div className="flex items-center space-x-1 opacity-60">
                  <Wifi className={clsx(
                    'w-3.5 h-3.5',
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )} />
                  <Signal className="w-3.5 h-3.5 text-green-600" />
            </div>
          </div>
              <div className="flex items-center space-x-2">
                <Battery className="w-4 h-4 text-green-600" />
                <span className={clsx(
                  'text-sm font-medium',
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                )}>89%</span>
              </div>
            </div>

            {/* App Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-primary-500 to-primary-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div>
                    <h1 className="text-xl font-bold text-black">GETME</h1>
                    <p className="text-black text-sm">Smart Bus Tracking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-black text-sm font-medium">Live</span>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className={clsx(
              'border-b',
              theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
            )}>
              <div className="px-6 py-4">
                <div className={clsx(
                  'flex rounded-xl p-1',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                )}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={clsx(
                        'flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200',
                        selectedTab === tab.id
                          ? theme === 'dark'
                            ? 'bg-gray-700 text-primary-400 shadow-sm'
                            : 'bg-white text-primary-600 shadow-sm'
                          : theme === 'dark'
                          ? 'text-gray-400 hover:text-gray-200'
                          : 'text-gray-600 hover:text-gray-900'
                      )}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="px-6 py-4 space-y-4 h-96 overflow-y-auto">
              
              {selectedTab === 'live' && (
                <>
                  {/* Live Map Preview */}
                  <div className={clsx(
                    'h-48 bg-gradient-to-br rounded-2xl relative overflow-hidden border',
                    theme === 'dark' 
                      ? 'from-gray-800 to-primary-900/20 border-gray-700' 
                      : 'from-slate-50 to-primary-50 border-gray-200'
                  )}>
                    {/* Map Background Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path 
                            d="M 20 0 L 0 0 0 20" 
                            fill="none" 
                            stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} 
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>

                    {/* Route Path */}
                    <svg className="absolute inset-0 w-full h-full">
                      <path
                        d="M40,60 Q120,40 200,80 Q240,100 280,120"
                        stroke="#ca8a04"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="8,4"
                        className="opacity-60"
                      />
                    </svg>

                    {/* Bus Location */}
                    <div className="absolute" style={{ left: '120px', top: '50px' }}>
                      <div className="w-4 h-4 bg-primary-500 rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Student Location */}
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-secondary-600 rounded-full shadow-lg"></div>

                    {/* Map Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={clsx(
                        'backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border',
                        theme === 'dark' 
                          ? 'bg-gray-800/95 border-gray-700' 
                          : 'bg-white/95 border-white/50'
                      )}>
                        <div className="flex items-center space-x-2">
                          <Navigation className="w-5 h-5 text-primary-600" />
                          <div>
                            <p className={clsx(
                              'text-sm font-semibold',
                              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                            )}>Bus #247</p>
                            <p className={clsx(
                              'text-xs',
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            )}>2.3 km away</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className={clsx(
                      'p-4 rounded-xl border',
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-primary-900/30 to-primary-800/20 border-primary-700/50'
                        : 'bg-gradient-to-br from-primary-50 to-primary-100/50 border-primary-200/50'
                    )}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-primary-600" />
                        <span className={clsx(
                          'text-xs font-medium uppercase tracking-wide',
                          theme === 'dark' ? 'text-primary-400' : 'text-primary-700'
                        )}>ETA</span>
                      </div>
                      <p className={clsx(
                        'text-lg font-bold',
                        theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                      )}>7 mins</p>
                    </div>
                    <div className={clsx(
                      'p-4 rounded-xl border',
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-700/50'
                        : 'bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50'
                    )}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className={clsx(
                          'text-xs font-medium uppercase tracking-wide',
                          theme === 'dark' ? 'text-green-400' : 'text-green-700'
                        )}>Status</span>
                      </div>
                      <p className={clsx(
                        'text-lg font-bold',
                        theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                      )}>Safe</p>
                    </div>
                  </div>
                </>
              )}

              {selectedTab === 'route' && (
                <div className="space-y-3">
                  {busStops.map((stop, index) => (
                    <div
                      key={index}
                      className={clsx(
                        'flex items-center space-x-3 p-3 rounded-xl border transition-all',
                        stop.status === 'completed' 
                          ? theme === 'dark'
                            ? 'bg-green-900/30 border-green-700/50'
                            : 'bg-green-50 border-green-200'
                          : stop.status === 'current'
                          ? theme === 'dark'
                            ? 'bg-primary-900/30 border-primary-700/50 ring-1 ring-primary-600/50'
                            : 'bg-primary-50 border-primary-200 ring-1 ring-primary-300'
                          : theme === 'dark'
                          ? 'bg-gray-800 border-gray-700'
                          : 'bg-gray-50 border-gray-200'
                      )}
                    >
                      <div className={clsx(
                        'w-8 h-8 rounded-full flex items-center justify-center',
                        stop.status === 'completed' 
                          ? 'bg-green-500' 
                          : stop.status === 'current'
                          ? 'bg-primary-500'
                          : 'bg-gray-400'
                      )}>
                        {stop.status === 'completed' ? (
                          <CheckCircle className="w-4 h-4 text-white" />
                        ) : (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={clsx(
                          'font-medium',
                          theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                        )}>{stop.name}</p>
                        <p className={clsx(
                          'text-sm',
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        )}>{stop.time}</p>
                      </div>
                      <ChevronRight className={clsx(
                        'w-4 h-4',
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                      )} />
                    </div>
                  ))}
                </div>
              )}

              {selectedTab === 'alerts' && (
                <div className="space-y-3">
                  <div className={clsx(
                    'border p-4 rounded-xl',
                    theme === 'dark'
                      ? 'bg-green-900/30 border-green-700/50'
                      : 'bg-green-50 border-green-200'
                  )}>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className={clsx(
                          'font-medium',
                          theme === 'dark' ? 'text-green-400' : 'text-green-900'
                        )}>Bus Departed</p>
                        <p className={clsx(
                          'text-sm mt-1',
                          theme === 'dark' ? 'text-green-300' : 'text-green-700'
                        )}>Your child's bus has left the school</p>
                        <p className={clsx(
                          'text-xs mt-2',
                          theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        )}>2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={clsx(
                    'border p-4 rounded-xl',
                    theme === 'dark'
                      ? 'bg-primary-900/30 border-primary-700/50'
                      : 'bg-primary-50 border-primary-200'
                  )}>
                    <div className="flex items-start space-x-3">
                      <Bell className="w-5 h-5 text-primary-600 mt-0.5" />
                      <div>
                        <p className={clsx(
                          'font-medium',
                          theme === 'dark' ? 'text-primary-400' : 'text-primary-900'
                        )}>Approaching Stop</p>
                        <p className={clsx(
                          'text-sm mt-1',
                          theme === 'dark' ? 'text-primary-300' : 'text-primary-700'
                        )}>Bus will reach Oak Street in 3 minutes</p>
                        <p className={clsx(
                          'text-xs mt-2',
                          theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                        )}>Just now</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className={clsx(
                'backdrop-blur-md rounded-2xl p-4 border shadow-lg',
                theme === 'dark'
                  ? 'bg-gray-800/80 border-gray-700/50'
                  : 'bg-white/80 border-gray-200/50'
              )}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={clsx(
                      'w-10 h-10 rounded-full flex items-center justify-center',
                      theme === 'dark' ? 'bg-primary-800/50' : 'bg-primary-100'
                    )}>
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className={clsx(
                        'font-medium',
                        theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                      )}>Emma Wilson</p>
                      <p className={clsx(
                        'text-sm',
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      )}>Grade 7 • Seat 12</p>
                    </div>
                  </div>
                  <button className={clsx(
                    'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-100 hover:bg-gray-200'
                  )}>
                    <MoreHorizontal className={clsx(
                      'w-5 h-5',
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    )} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Floating Action Buttons */}
        {floatingButtons.map((button, index) => (
          <motion.div
            key={button.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -8, 0] 
            }}
            transition={{ 
              opacity: { delay: 1.2 + index * 0.2, duration: 0.6 },
              scale: { delay: 1.2 + index * 0.2, duration: 0.6 },
              y: { 
                delay: 2 + index * 0.3,
                duration: 2.5 + index * 0.2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className={clsx('z-20', button.className)}
          >
            <Link to={button.href}>
              <motion.button
                whileHover={{ 
                  scale: 1.15, 
                  y: -4,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  'w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200',
                  button.color,
                  button.shadow
                )}
                title={button.title}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <button.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-primary-500/5 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.18, 0.08]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.12, 0.03]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-orange-500/5 rounded-full blur-2xl"
        ></motion.div>
      </div>
    </div>
  );
};

export default AppPreview;