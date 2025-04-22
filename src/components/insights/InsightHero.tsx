
import React from 'react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';

const InsightHero: React.FC = () => (
  <AnimatedGradient className="pt-28 pb-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
          Our Insights
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Thoughts and Perspectives on Technology
        </h1>
        <p className="text-lg text-gray-600 mb-0">
          Explore our articles, news updates, and expert opinions on the latest trends in AI, AR/VR, and Blockchain technologies.
        </p>
      </div>
    </div>
  </AnimatedGradient>
);

export default InsightHero;
