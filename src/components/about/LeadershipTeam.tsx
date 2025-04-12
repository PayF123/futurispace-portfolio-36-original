
import React from 'react';
import { User } from 'lucide-react';

const LeadershipTeam = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-12">Our Leadership Team</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <User className="h-24 w-24 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Alex Johnson</h3>
            <p className="text-blue-600 mb-2 font-medium">CEO & Founder</p>
            <p className="text-gray-600 max-w-xs mx-auto">15+ years of experience in software architecture and enterprise solutions.</p>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <User className="h-24 w-24 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Sarah Chen</h3>
            <p className="text-blue-600 mb-2 font-medium">CTO</p>
            <p className="text-gray-600 max-w-xs mx-auto">Expert in AI/ML technologies with a background in data science.</p>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <User className="h-24 w-24 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Michael Okonjo</h3>
            <p className="text-blue-600 mb-2 font-medium">COO</p>
            <p className="text-gray-600 max-w-xs mx-auto">Specializes in streamlining operations and optimizing delivery processes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
