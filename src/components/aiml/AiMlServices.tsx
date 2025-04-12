
import React from 'react';
import { Brain, LineChart, Bot, Database, Server, Search, Code, FileCode } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AiService {
  title: string;
  description: string;
  icon: React.ElementType;
}

const AiMlServices: React.FC = () => {
  const services: AiService[] = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models that improve over time and deliver increasing business value through accurate predictions.",
      icon: Brain
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors to make data-driven decisions based on historical patterns.",
      icon: LineChart
    },
    {
      title: "Conversational AI",
      description: "Build intelligent chatbots and virtual assistants that provide natural, human-like interactions.",
      icon: Bot
    },
    {
      title: "Big Data Processing",
      description: "Process and analyze large volumes of data to uncover hidden patterns and actionable insights.",
      icon: Database
    },
    {
      title: "Natural Language Processing",
      description: "Analyze and understand human language with sophisticated text processing algorithms.",
      icon: FileCode
    },
    {
      title: "Computer Vision",
      description: "Enable machines to interpret and make decisions based on visual data from the real world.",
      icon: Search
    },
    {
      title: "MLOps Solutions",
      description: "Streamline the deployment, monitoring, and management of ML models in production.",
      icon: Server
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and applications.",
      icon: Code
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-techblue-100 text-techblue-800">
            Our AI/ML Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cutting-Edge AI Solutions for Modern Businesses
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive suite of AI and Machine Learning services to help transform your business operations and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:border-techpurple-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 bg-white overflow-hidden">
              <CardHeader className="pb-2">
                <div className="bg-gradient-to-r from-techblue-500 to-techpurple-500 p-3 mb-4 rounded-lg w-fit">
                  {React.createElement(service.icon, { className: "h-6 w-6 text-white" })}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiMlServices;
