
import { Code, Cpu, Server, LineChart } from 'lucide-react';
import { ServiceCategory } from './types';

export const aiServices: ServiceCategory = {
  category: 'AI Development',
  description: 'Harness the power of artificial intelligence with our custom AI solutions designed to automate processes and provide valuable insights.',
  icon: Code,
  services: [
    {
      title: 'Machine Learning',
      description: 'Custom machine learning models that improve over time and deliver increasing value to your business.',
      icon: Cpu,
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis solutions that understand, interpret, and respond to human language with remarkable accuracy.',
      icon: Server,
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and behaviors using historical data to make data-driven business decisions.',
      icon: LineChart,
    },
  ]
};
