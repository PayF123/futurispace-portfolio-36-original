
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { User, CheckCircle2, Building2, Code2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">About CognitiveDatablocks</h1>
              <p className="text-xl text-white/90">Empowering Innovation Through Technology Since 2015</p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow-xl">
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">Our Story</h2>
                      <p className="text-gray-700 mb-4">
                        CognitiveDatablocks was founded with a simple yet powerful vision: to bridge the gap between complex technology and practical business solutions. Starting as a small team of passionate developers in 2015, we've grown into a full-service software development company trusted by businesses across industries.
                      </p>
                      <p className="text-gray-700">
                        Our journey has been defined by continuous innovation, technical excellence, and a deep commitment to our clients' success. We believe that software should not just function—it should transform how businesses operate, compete, and grow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <Building2 className="h-32 w-32 text-blue-500/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
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

        {/* Team Section */}
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
      </main>

      <Footer />
    </div>
  );
};

export default About;
