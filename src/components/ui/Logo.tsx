import React from 'react';
import logoImage from '../../assests/getme-logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = false, // Default to false since the logo image likely contains text
  size = 'lg'
}) => {
  const sizeConfig = {
    sm: {
      container: 'h-10',
      image: 'h-10 w-auto',
      text: 'text-xl'
    },
    md: {
      container: 'h-14',
      image: 'h-14 w-auto',
      text: 'text-2xl'
    },
    lg: {
      container: 'h-20',
      image: 'h-20 w-auto',
      text: 'text-4xl'
    },
    xl: {
      container: 'h-28',
      image: 'h-28 w-auto',
      text: 'text-5xl'
    }
  };

  const config = sizeConfig[size];

  return (
    <div className={`flex items-center space-x-3 ${config.container} ${className}`}>
      {/* Professional Logo Image */}
      <img
        src={logoImage}
        alt="GETME Logo"
        className={`${config.image} object-contain drop-shadow-sm hover:drop-shadow-md transition-all duration-300 ease-out`}
        style={{
          filter: 'brightness(1.02) contrast(1.05)', // Slight enhancement for better visibility
        }}
      />

      {/* Optional Text (if needed alongside the logo) */}
      {showText && (
        <span
          className={`${config.text} font-black tracking-tight text-gray-900 dark:text-white`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          GETME
        </span>
      )}
    </div>
  );
};

export default Logo;