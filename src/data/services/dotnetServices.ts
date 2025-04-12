
import { Code, Server, Layers, Network } from 'lucide-react';
import { ServiceCategory } from './types';

export const dotnetServices: ServiceCategory = {
  category: '.NET Development',
  description: 'Build robust, scalable enterprise applications with our expert .NET development services.',
  icon: Code,
  services: [
    {
      title: 'Web Applications',
      description: 'Powerful, secure web applications using ASP.NET Core and related technologies.',
      icon: Server,
    },
    {
      title: 'Desktop Applications',
      description: 'Robust desktop solutions using WPF, Windows Forms, or .NET MAUI.',
      icon: Layers,
    },
    {
      title: 'Microservices',
      description: 'Scalable, maintainable microservice architectures built on .NET Core.',
      icon: Network,
    },
    {
      title: 'API Development',
      description: 'Well-designed RESTful or GraphQL APIs that enable seamless integration with other systems.',
      icon: Code,
    },
  ]
};
