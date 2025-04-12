
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Code2, User } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-12">Our Core Values</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 subtle-shift">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-blue-800">Excellence</h3>
              <p className="text-gray-600 text-center">We are committed to delivering the highest quality in everything we do, constantly pushing the boundaries of what's possible.</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 subtle-shift">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Code2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-blue-800">Innovation</h3>
              <p className="text-gray-600 text-center">We embrace new technologies and methodologies, constantly adapting our approach to deliver cutting-edge solutions.</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 subtle-shift">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-blue-800">Partnership</h3>
              <p className="text-gray-600 text-center">We build lasting relationships with our clients, working as an extension of their team to achieve shared goals.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
