import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import loadingImage from './assests/getme-loading.png';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home'));
const FeaturesPage = lazy(() => import('./pages/Features'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));

// Professional branded loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Custom Loading Image */}
      <div className="animate-pulse">
        <img
          src={loadingImage}
          alt="Loading..."
          className="h-24 w-auto object-contain drop-shadow-lg"
          style={{
            filter: 'brightness(1.1) contrast(1.05)',
          }}
        />
      </div>
      
      {/* Loading Text */}
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Loading...</p>
        <div className="mt-2 flex justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary-600 border-t-transparent"></div>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="pt-0">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;