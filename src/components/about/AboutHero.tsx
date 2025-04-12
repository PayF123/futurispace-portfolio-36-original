
import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedGradient from '@/components/ui/AnimatedGradient';

const AboutHero = () => {
  return (
    <AnimatedGradient className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6">
            <span className="inline-block px-5 py-2 mb-6 text-sm font-medium rounded-full bg-blue-100 text-blue-800 shadow-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Innovation <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Since 2015</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/services" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-20 left-16 w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.2s' }}>
              <Building2 className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            <div className="absolute top-40 left-48 w-16 h-16 md:w-20 md:h-20 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div className="absolute top-60 left-24 w-16 h-16 md:w-20 md:h-20 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.7s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="h-80 md:h-96 w-full rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center shadow-lg">
              <div className="relative w-3/4 h-3/4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-6 bg-gray-100 flex items-center">
                    <div className="ml-2 flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="mb-4 w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
                        <Building2 className="h-10 w-10 text-white" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 w-32 mx-auto bg-gray-300 rounded-full"></div>
                        <div className="h-2 w-48 mx-auto bg-gray-300 rounded-full"></div>
                        <div className="h-2 w-40 mx-auto bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-6 px-8">
                        <div className="h-4 bg-blue-200 rounded-full"></div>
                        <div className="h-4 bg-indigo-200 rounded-full"></div>
                        <div className="h-4 bg-blue-300 rounded-full"></div>
                        <div className="h-4 bg-indigo-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedGradient>
  );
};

export default AboutHero;
