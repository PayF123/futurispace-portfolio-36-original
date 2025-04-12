
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiMlCaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Predictive Maintenance System for Manufacturing",
      description: "Reduced equipment downtime by 35% through predictive maintenance AI that forecasts potential failures before they occur.",
      category: "Manufacturing",
      imageClass: "bg-gradient-to-r from-blue-400 to-cyan-300"
    },
    {
      title: "Customer Behavior Analysis Platform",
      description: "Increased conversion rates by 28% with an AI system that analyzes customer behavior patterns and recommends personalized offerings.",
      category: "Retail",
      imageClass: "bg-gradient-to-r from-purple-400 to-pink-300"
    },
    {
      title: "Intelligent Document Processing Solution",
      description: "Automated 85% of document processing tasks, reducing processing time from days to minutes while improving accuracy.",
      category: "Finance",
      imageClass: "bg-gradient-to-r from-techblue-400 to-techpurple-300"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-techblue-100 text-techblue-800">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real-World AI Implementation Success
          </h2>
          <p className="text-gray-600 text-lg">
            See how our AI and machine learning solutions have transformed businesses across industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className={`h-48 ${study.imageClass} flex items-center justify-center`}>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{index + 1}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-sm text-techpurple-600 font-medium mb-2">{study.category}</span>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-5 flex-1">{study.description}</p>
                <Link to="/work" className="inline-flex items-center font-medium text-techblue-600 hover:text-techblue-700 mt-auto">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/work" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-techblue-500 text-techblue-600 hover:bg-techblue-600 hover:text-white transition-all">
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiMlCaseStudies;
