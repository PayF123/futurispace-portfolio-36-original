
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ 
  className,
  children 
}) => {
  return (
    <div className={cn(
      'relative overflow-hidden',
      className
    )}>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-techblue-600/20 via-techpurple-500/20 to-techblue-500/20 animate-gradient"
        style={{ 
          backgroundSize: '400% 400%',
          filter: 'blur(100px)',
          transform: 'translate3d(0, 0, 0)', // hardware acceleration
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
};

export default AnimatedGradient;
