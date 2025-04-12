
import React from 'react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';

const ServicesHero: React.FC = () => {
  return (
    <AnimatedGradient className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cutting-Edge Technology Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-0">
            We deliver innovative services across AI, AR/VR, Blockchain, and UI/UX design to help businesses thrive in the digital era.
          </p>
        </div>
      </div>
    </AnimatedGradient>
  );
};

export default ServicesHero;
