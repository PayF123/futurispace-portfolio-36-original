
import { Cloud, Server, Network, Code, Shield } from 'lucide-react';
import { ServiceCategory } from './types';

export const cloudServices: ServiceCategory = {
  category: 'Cloud Solutions',
  description: 'Scalable, secure cloud infrastructure and migration services to optimize your business operations.',
  icon: Cloud,
  services: [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly transition your existing infrastructure and applications to the cloud with minimal disruption.',
      icon: Server,
    },
    {
      title: 'Infrastructure as a Service',
      description: 'Flexible, scalable cloud infrastructure that grows with your business needs.',
      icon: Network,
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline your development and operations with automated CI/CD pipelines and infrastructure as code.',
      icon: Code,
    },
    {
      title: 'Cloud Security',
      description: 'Protect your cloud-based assets with comprehensive security protocols and monitoring.',
      icon: Shield,
    },
  ]
};
