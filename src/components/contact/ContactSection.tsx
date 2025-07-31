import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+91 96590 08000',
      subtitle: 'Mon-Sat 9am-7pm IST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'contact@viruzverse.tech',
      subtitle: 'We respond within 1 hours'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: 'ViruzVerse, Coimbatore',
      subtitle: 'Tamilnadu, India 641202'
    },
    {
      icon: Clock,
      title: 'Emergency Support',
      details: '24/7 School Emergency Line',
      subtitle: 'Always available for urgent issues'
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
            Ready to Transform Your <span className="text-gradient">School Transport?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join 10+ schools across India who trust GETME for safe and efficient 
            student transportation. Contact us to learn more about our solution!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our expert team specializes in implementing bus tracking solutions for 
                Indian schools. From small private schools to large educational institutions, 
                we have the perfect solution for your transportation needs.
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-xl border-l-4 border-primary-500">
                <h4 className="font-semibold text-primary-800 dark:text-primary-300 mb-2">
                  🚀 Quick Implementation
                </h4>
                <p className="text-primary-700 dark:text-primary-400 text-sm">
                  Get your school's bus tracking system up and running within 48 hours!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="card-dark p-6 rounded-xl hover:shadow-lg transition-shadow h-full"
                >
                  <div className="flex items-start space-x-4 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                      <p className="text-gray-800 dark:text-gray-200 font-medium break-words">{info.details}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{info.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                💡 Why Schools Choose GETME?
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span>Trusted by 10+ schools across India</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span>50,000+ students safely tracked daily</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span>99.9% uptime with reliable support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span>Affordable pricing for all school budgets</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;