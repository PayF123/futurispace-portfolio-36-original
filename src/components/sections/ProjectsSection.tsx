
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';

const ProjectsSection = () => {
  const projects = [{
    title: 'AI-Powered Financial Assistant',
    description: 'An intelligent financial management platform that helps users make smarter investment decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['AI', 'Machine Learning', 'Finance']
  }, {
    title: 'Virtual Reality Training Platform',
    description: 'A VR-based platform for industrial training that reduces costs and improves safety.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2196&q=80',
    tags: ['VR', '3D Modeling', 'Training']
  }, {
    title: 'Blockchain Supply Chain Solution',
    description: 'A transparent supply chain management system built on blockchain technology.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
    tags: ['Blockchain', 'Supply Chain', 'Smart Contracts']
  }];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-techpurple-100 text-techpurple-800">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-600">
            Explore our successful projects that demonstrate our expertise and innovation in action.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} image={project.image} tags={project.tags} link="/work" />)}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/work" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techpurple-600 text-white hover:bg-techpurple-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
