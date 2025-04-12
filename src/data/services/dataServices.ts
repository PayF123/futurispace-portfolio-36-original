
import { LineChart, Layers, Database, Palette } from 'lucide-react';
import { ServiceCategory } from './types';

export const dataServices: ServiceCategory = {
  category: 'Data Analytics',
  description: 'Transform your data into actionable insights with our advanced analytics solutions.',
  icon: LineChart,
  services: [
    {
      title: 'Business Intelligence',
      description: 'Comprehensive dashboards and reporting tools that provide clear visibility into your business metrics.',
      icon: Layers,
    },
    {
      title: 'Big Data Processing',
      description: 'Scalable solutions for managing and analyzing large volumes of structured and unstructured data.',
      icon: Database,
    },
    {
      title: 'Predictive Analytics',
      description: 'Use historical data to forecast trends and anticipate future business needs.',
      icon: LineChart,
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable visualizations that drive business decisions.',
      icon: Palette,
    },
  ]
};
