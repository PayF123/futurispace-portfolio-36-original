
import React from 'react';
import { Building2 } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const OurStory = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-techblue-600 to-techpurple-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-xl">
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-techblue-700 to-techpurple-600 mb-6">Our Story</h2>
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
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-techblue-500/20 to-techpurple-500/20 z-10"></div>
                <AspectRatio ratio={16/9} className="w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="Team collaboration at CognitiveDatablocks" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
