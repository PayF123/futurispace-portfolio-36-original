
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, MessageSquare } from 'lucide-react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <AnimatedGradient className="relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Business with Software?
                </h2>
                <p className="text-gray-600 mb-8">
                  Our team of experts will help you build custom software solutions that drive efficiency, innovation, and growth for your organization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Schedule a Consultation
                  </Link>
                  <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all">
                    <Code className="mr-2 h-5 w-5" />
                    Explore Solutions
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-10 rounded-xl"></div>
                  <div className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-500">console.log</div>
                    </div>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="text-gray-500">// Let's build something great together</div>
                      <div><span className="text-purple-600">function</span> <span className="text-blue-600">transformBusiness</span>() &#123;</div>
                      <div className="pl-4"><span className="text-green-600">const</span> innovation = <span className="text-orange-600">'Custom Solutions'</span>;</div>
                      <div className="pl-4"><span className="text-green-600">const</span> technology = [<span className="text-orange-600">'AI'</span>, <span className="text-orange-600">'Cloud'</span>, <span className="text-orange-600">'Data'</span>];</div>
                      <div className="pl-4"><span className="text-purple-600">return</span> success;</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedGradient>
    </section>
  );
};

export default CTASection;
