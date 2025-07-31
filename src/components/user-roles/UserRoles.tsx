import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Car, Settings } from 'lucide-react';
import ParentInterface from './ParentInterface';
import DriverInterface from './DriverInterface';
import AdminInterface from './AdminInterface';
import parentImage from '../../assests/parent.png';
import driversImage from '../../assests/drivers.png';
import schoolImage from '../../assests/school.jpg';

const UserRoles: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roles = [
    {
      id: 'parent',
      title: 'For Parents',
      description: 'Track your child\'s bus in real-time and receive instant notifications',
      icon: Users,
      color: 'from-primary-500 to-primary-600',
      component: ParentInterface,
      image: parentImage
    },
    {
      id: 'driver',
      title: 'For Drivers',
      description: 'Manage routes, students, and emergency situations efficiently',
      icon: Car,
      color: 'from-secondary-500 to-secondary-600',
      component: DriverInterface,
      image: driversImage
    },
    {
      id: 'admin',
      title: 'For Schools',
      description: 'Complete fleet management and analytics dashboard',
      icon: Settings,
      color: 'from-accent-500 to-accent-600',
      component: AdminInterface,
      image: schoolImage
    }
  ];

  return (
    <section className="section-padding gradient-bg" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Built for <span className="text-gradient">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored interfaces and features for parents, drivers, and school administrators
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {roles.map((role, index) => {
            const Component = role.component;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Image Section - Always first on mobile, alternating on desktop */}
                <div className={`relative flex justify-center order-1 ${
                  index % 2 === 0 
                    ? 'lg:justify-end lg:order-2' 
                    : 'lg:justify-start lg:order-1'
                }`}>
                  <div className="card-dark rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-md">
                    <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center overflow-hidden">
                      {role.image ? (
                        <img 
                          src={role.image} 
                          alt={`${role.title} interface`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <role.icon className="w-16 h-16 text-gray-400 dark:text-gray-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Text Content Section - Always second on mobile, alternating on desktop */}
                <div className={`space-y-6 lg:space-y-8 order-2 text-left ${
                  index % 2 === 0 
                    ? 'lg:order-1' 
                    : 'lg:order-2'
                }`}>
                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <role.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{role.title}</h3>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">{role.description}</p>
                    </div>
                  </div>
                  <div className="max-w-md lg:mx-0">
                    <Component />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserRoles;