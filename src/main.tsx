import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Performance optimization: prevent animations during initial load
document.documentElement.classList.add('no-transitions');

// Remove the no-transitions class after page load with optimized timing
const removeTransitionsBlock = () => {
  // Use requestAnimationFrame for better performance
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('no-transitions');
    });
  });
};

// Multiple fallbacks for better compatibility
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeTransitionsBlock);
} else {
  // Document already loaded
  setTimeout(removeTransitionsBlock, 50); // Reduced from longer delays
}

// Additional performance optimizations
const optimizePerformance = () => {
  // Preload critical font weights
  const fontPreloader = document.createElement('link');
  fontPreloader.rel = 'preload';
  fontPreloader.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap';
  fontPreloader.as = 'style';
  document.head.appendChild(fontPreloader);

  // Set performance hints
  const performanceHints = document.createElement('meta');
  performanceHints.name = 'performance-optimization';
  performanceHints.content = 'smooth-animations';
  document.head.appendChild(performanceHints);
};

optimizePerformance();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)