
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-techblue-500/10 to-techpurple-500/10" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss how our technology solutions can address your specific business challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
              >
                Contact Us
              </Link>
              <Link 
                to="/work" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-techblue-600 border border-techblue-200 hover:border-techblue-400 transition-all shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
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
