import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useDelayedAnimation } from '../../hooks/usePageAnimation';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationType?: 'fade' | 'slide' | 'scale' | 'bounce';
  threshold?: number;
  duration?: 'fast' | 'medium' | 'smooth';
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  delay = 0,
  animationType = 'fade',
  threshold = 0.1,
  duration = 'medium'
}) => {
  const { shouldAnimate } = useDelayedAnimation(delay);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationClasses = () => {
    // Use specific property transitions instead of transition-all for better performance
    const durationClass = `animate-${duration}`;
    const baseClasses = `${durationClass} gpu-accelerated contain-layout`;
    
    switch (animationType) {
      case 'fade':
        return `${baseClasses} ${shouldAnimate && isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
        }`;
      case 'slide':
        return `${baseClasses} ${shouldAnimate && isInView 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-4'
        }`;
      case 'scale':
        return `${baseClasses} ${shouldAnimate && isInView 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95'
        }`;
      case 'bounce':
        return `${baseClasses} ${shouldAnimate && isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
        } ${shouldAnimate && isInView ? 'animate-bounce' : ''}`;
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        willChange: shouldAnimate && !isInView ? 'transform, opacity' : 'auto'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement; 