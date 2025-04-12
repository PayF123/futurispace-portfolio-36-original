
import React from 'react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';

const ServicesHero: React.FC = () => {
  return (
    <AnimatedGradient className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-5 py-2 mb-6 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800 shadow-sm">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Cutting-Edge Technology Solutions
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
            We deliver innovative services across AI, AR/VR, Blockchain, and more to help businesses thrive in the digital era.
          </p>
        </div>
      </div>
    </AnimatedGradient>
  );
};

export default ServicesHero;
