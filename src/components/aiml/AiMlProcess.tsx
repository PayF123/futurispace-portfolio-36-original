
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AiMlProcess: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How We Deliver AI Excellence
          </h2>
          <p className="text-gray-600 text-lg">
            Our systematic approach ensures that we deliver AI/ML solutions that are robust, scalable, and aligned with your business objectives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="discovery" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
              <TabsTrigger 
                value="discovery" 
                className="bg-white border border-gray-200 data-[state=active]:border-techpurple-500 data-[state=active]:border-2 rounded-lg py-3 px-4"
              >
                <div className="text-center">
                  <div className="font-bold mb-1">01</div>
                  <div>Discovery</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="design" 
                className="bg-white border border-gray-200 data-[state=active]:border-techpurple-500 data-[state=active]:border-2 rounded-lg py-3 px-4"
              >
                <div className="text-center">
                  <div className="font-bold mb-1">02</div>
                  <div>Data & Design</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="development" 
                className="bg-white border border-gray-200 data-[state=active]:border-techpurple-500 data-[state=active]:border-2 rounded-lg py-3 px-4"
              >
                <div className="text-center">
                  <div className="font-bold mb-1">03</div>
                  <div>Development</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="deployment" 
                className="bg-white border border-gray-200 data-[state=active]:border-techpurple-500 data-[state=active]:border-2 rounded-lg py-3 px-4"
              >
                <div className="text-center">
                  <div className="font-bold mb-1">04</div>
                  <div>Deployment</div>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-white p-6 md:p-10 rounded-xl border border-gray-200 shadow-md min-h-[300px]">
              <TabsContent value="discovery" className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4">Discovery & Planning</h3>
                <p className="text-gray-600 mb-4">
                  We begin by thoroughly understanding your business needs, challenges, and goals. This involves:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-techblue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techblue-600 rounded-full"></div>
                    </div>
                    <span>Stakeholder interviews to identify key requirements and success metrics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techblue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techblue-600 rounded-full"></div>
                    </div>
                    <span>Assessment of data availability, quality, and accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techblue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techblue-600 rounded-full"></div>
                    </div>
                    <span>Evaluating technical feasibility and potential implementation approaches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techblue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techblue-600 rounded-full"></div>
                    </div>
                    <span>Defining project scope, timelines, and resource requirements</span>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="design" className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4">Data Preparation & Solution Design</h3>
                <p className="text-gray-600 mb-4">
                  We prepare your data and design a solution architecture that addresses your specific needs:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-techpurple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techpurple-600 rounded-full"></div>
                    </div>
                    <span>Data collection, cleaning, and preprocessing to ensure quality</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techpurple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techpurple-600 rounded-full"></div>
                    </div>
                    <span>Feature engineering and selection to optimize model performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techpurple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techpurple-600 rounded-full"></div>
                    </div>
                    <span>Designing the system architecture and technical specifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techpurple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techpurple-600 rounded-full"></div>
                    </div>
                    <span>Prototyping and validating key components of the solution</span>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="development" className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4">Model Development & Training</h3>
                <p className="text-gray-600 mb-4">
                  We develop and train the AI/ML models tailored to your specific use case:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-techblue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techblue-600 rounded-full"></div>
                    </div>
                    <span>Selecting appropriate algorithms and model architectures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techblue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techblue-600 rounded-full"></div>
                    </div>
                    <span>Training and fine-tuning models for optimal performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techblue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techblue-600 rounded-full"></div>
                    </div>
                    <span>Implementing rigorous testing and validation procedures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techblue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techblue-600 rounded-full"></div>
                    </div>
                    <span>Iterative refinement based on performance metrics and feedback</span>
                  </li>
                </ul>
              </TabsContent>
              
              <TabsContent value="deployment" className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4">Deployment & Ongoing Support</h3>
                <p className="text-gray-600 mb-4">
                  We seamlessly deploy your AI solution and provide ongoing support:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-techpurple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techpurple-600 rounded-full"></div>
                    </div>
                    <span>Setting up the production environment and deployment pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techpurple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techpurple-600 rounded-full"></div>
                    </div>
                    <span>Implementing monitoring and alerting systems for model performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techpurple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techpurple-600 rounded-full"></div>
                    </div>
                    <span>Knowledge transfer and training for your team</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-techpurple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-techpurple-600 rounded-full"></div>
                    </div>
                    <span>Continuous improvement through regular model updates and optimizations</span>
                  </li>
                </ul>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AiMlProcess;
