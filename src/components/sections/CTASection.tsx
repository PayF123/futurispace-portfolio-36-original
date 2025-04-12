
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <AnimatedGradient className="relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss how our solutions can address your specific business challenges.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </AnimatedGradient>
    </section>
  );
};

export default CTASection;
