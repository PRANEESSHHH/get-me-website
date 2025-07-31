import React from 'react';
import { Link } from 'react-router-dom';
import { Bus, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import FooterThreeBackground from '../ui/FooterThreeBackground';
import clsx from 'clsx';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  const quickLinks = [
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/viruzverse-solutions/posts/?feedView=all', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/viruzverse.tech/', label: 'Instagram' },
  ];

  return (
    <footer className={clsx(
      'text-white relative overflow-hidden',
      theme === 'dark' 
        ? 'bg-gray-950' 
        : 'bg-gray-900'
    )}>
      {/* Three.js animated background */}
      <FooterThreeBackground />
      
      <div className="container-custom relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Brand Section */}
            <div className="space-y-6 text-center md:text-left">
              <Link to="/" className="flex items-center justify-center md:justify-start space-x-2">
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                  <Bus className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">GETME</span>
              </Link>
              <p className={clsx(
                'text-sm leading-relaxed max-w-sm mx-auto md:mx-0',
                theme === 'dark' ? 'text-gray-300' : 'text-gray-400'
              )}>
                Smart bus tracking solution making school transportation safer and more efficient.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 text-center md:text-left">
              <h4 className="font-semibold text-white text-sm">Quick Links</h4>
              <div className="flex flex-col space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={clsx(
                      'hover:text-white text-sm transition-colors duration-200 inline-block',
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-400'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-center md:text-left">
              <h4 className="font-semibold text-white text-sm">Contact</h4>
              <div className="space-y-4 text-sm">
                <div className={clsx(
                  'flex items-center justify-center md:justify-start space-x-3',
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-400'
                )}>
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">contact@viruzverse.tech</span>
                </div>
                <div className={clsx(
                  'flex items-center justify-center md:justify-start space-x-3',
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-400'
                )}>
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 96590 08000</span>
                </div>
                <div className={clsx(
                  'flex items-center justify-center md:justify-start space-x-3',
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-400'
                )}>
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>@SECE CAMPUS, Coimbatore</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={clsx(
          'border-t py-8 relative z-10',
          theme === 'dark' ? 'border-gray-700' : 'border-gray-800'
        )}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className={clsx(
              'text-sm text-center md:text-left',
              theme === 'dark' ? 'text-gray-300' : 'text-gray-400'
            )}>
              <span>&copy; 2025 GETME. All rights reserved.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className={clsx(
                'text-xs',
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              )}>Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={clsx(
                      'w-8 h-8 rounded-full flex items-center justify-center hover:text-white hover:bg-primary-600 transition-all duration-200',
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-800 text-gray-400'
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;