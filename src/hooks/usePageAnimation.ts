import { useEffect, useState } from 'react';

export const usePageAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure animations only start after page is fully loaded with shorter delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50); // Reduced from 100ms

    return () => clearTimeout(timer);
  }, []);

  return { isLoaded };
};

export const useDelayedAnimation = (delay: number = 0) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { isLoaded } = usePageAnimation();

  useEffect(() => {
    if (isLoaded) {
      // Use shorter delay and requestAnimationFrame for better performance
      const timer = setTimeout(() => {
        requestAnimationFrame(() => {
          setShouldAnimate(true);
        });
      }, Math.min(delay, 300)); // Cap delay at 300ms for better UX

      return () => clearTimeout(timer);
    }
  }, [isLoaded, delay]);

  return { shouldAnimate, isLoaded };
};

export const useSmoothAnimation = (triggerCondition: boolean = true) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (triggerCondition) {
      // Use requestAnimationFrame for smoother animation timing
      const rafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => { // Double RAF for better smoothness
          setIsVisible(true);
        });
      });

      return () => cancelAnimationFrame(rafId);
    }
  }, [triggerCondition]);

  return { isVisible };
};

// Performance utility hook for managing will-change property
export const useWillChange = (isAnimating: boolean) => {
  const [willChange, setWillChange] = useState<string>('auto');

  useEffect(() => {
    if (isAnimating) {
      setWillChange('transform, opacity');
      // Auto-cleanup after animation completes
      const cleanup = setTimeout(() => {
        setWillChange('auto');
      }, 500);
      return () => clearTimeout(cleanup);
    } else {
      setWillChange('auto');
    }
  }, [isAnimating]);

  return willChange;
}; 