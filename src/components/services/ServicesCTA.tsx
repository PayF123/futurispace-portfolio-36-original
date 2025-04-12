
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="glass rounded-2xl p-12 overflow-hidden relative bg-gradient-to-r from-techblue-50 to-techpurple-50 shadow-sm border border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-r from-techblue-500/5 via-techpurple-500/5 to-techblue-500/5" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Contact us today to discuss how our technology solutions can address your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
              <Link 
                to="/work" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-techblue-600 border border-techblue-200 hover:border-techblue-400 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
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
