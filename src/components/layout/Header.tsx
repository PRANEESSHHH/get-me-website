import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Logo from '../ui/Logo';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 40,
        duration: 0.3
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ willChange: 'transform' }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo size="xl" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 ease-out ${
                  location.pathname === item.href
                    ? 'text-primary-600 dark:text-primary-400'
                    : isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    : 'text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <button className="btn-primary">
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700' 
                  : 'text-gray-900 dark:text-white hover:bg-white/10'
              }`}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Using AnimatePresence for smoother animations */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial={{ 
                opacity: 0, 
                y: -20,
                scale: 0.95
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                y: -20,
                scale: 0.95
              }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut",
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              className="md:hidden bg-white dark:bg-gray-800 rounded-lg shadow-xl mt-2 overflow-hidden"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.05,
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        location.pathname === item.href
                          ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:translate-x-1'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="w-full btn-primary mt-4"
                >
                  Download App
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
});

Header.displayName = 'Header';

export default Header;