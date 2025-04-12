
import React from 'react';
import { ArrowRight, Brain, Database, Cpu, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedGradient from '@/components/ui/AnimatedGradient';

const AiMlHero: React.FC = () => {
  return (
    <AnimatedGradient className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6">
            <span className="inline-block px-5 py-2 mb-6 text-sm font-medium rounded-full bg-blue-100 text-blue-800 shadow-sm">
              AI & Machine Learning
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Data Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Intelligent Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We build custom AI and machine learning solutions that help businesses automate processes, 
              gain insights from data, and make smarter decisions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="#services" className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all">
                Explore AI Solutions
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-20 left-16 w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.2s' }}>
              <Brain className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            <div className="absolute top-40 left-48 w-16 h-16 md:w-20 md:h-20 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <Code className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            <div className="absolute top-60 left-24 w-16 h-16 md:w-20 md:h-20 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.7s' }}>
              <Cpu className="h-8 w-8 md:h-10 md:w-10 text-white" />
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
                        <Brain className="h-10 w-10 text-white" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 w-24 mx-auto bg-gray-300 rounded-full"></div>
                        <div className="h-2 w-36 mx-auto bg-gray-300 rounded-full"></div>
                        <div className="h-2 w-48 mx-auto bg-gray-300 rounded-full"></div>
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

export default AiMlHero;
