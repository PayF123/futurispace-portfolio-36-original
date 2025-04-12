
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCTA: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass rounded-xl p-6 md:p-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-techblue-500/10 to-techpurple-500/10" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-bold mb-3">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-5">
              Contact us today to discuss how our technology solutions can address your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
              <Link 
                to="/work" 
                className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white text-techblue-600 border border-techblue-200 hover:border-techblue-400 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
