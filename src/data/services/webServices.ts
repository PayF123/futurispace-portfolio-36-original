
import { MonitorSmartphone, Palette, Server, LineChart, Smartphone } from 'lucide-react';
import { ServiceCategory } from './types';

export const webServices: ServiceCategory = {
  category: 'Web Development',
  description: 'Create powerful, responsive web applications with modern frameworks and technologies tailored to your business needs.',
  icon: MonitorSmartphone,
  services: [
    {
      title: 'Frontend Development',
      description: 'Responsive, interactive user interfaces built with modern frameworks like React, Vue, and Angular.',
      icon: Palette,
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side architecture using Node.js, Python, Java, or PHP with scalable database solutions.',
      icon: Server,
    },
    {
      title: 'E-commerce Solutions',
      description: 'Custom online shopping experiences with secure payment processing and inventory management systems.',
      icon: LineChart,
    },
    {
      title: 'Progressive Web Apps',
      description: 'Web applications that offer native app-like experiences with offline capabilities and fast performance.',
      icon: Smartphone,
    },
  ]
};
