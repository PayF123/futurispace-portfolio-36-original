
import { Smartphone, Layers, Cpu, Code, Shield } from 'lucide-react';
import { ServiceCategory } from './types';

export const mobileServices: ServiceCategory = {
  category: 'Mobile App Development',
  description: 'Create powerful, user-friendly mobile applications for iOS and Android platforms.',
  icon: Smartphone,
  services: [
    {
      title: 'iOS Development',
      description: 'Native iOS applications that leverage the full capabilities of Apple\'s ecosystem.',
      icon: Layers,
    },
    {
      title: 'Android Development',
      description: 'Powerful Android applications optimized for the diverse range of Android devices.',
      icon: Cpu,
    },
    {
      title: 'Cross-Platform Development',
      description: 'Efficient development across multiple platforms using React Native, Flutter, or other frameworks.',
      icon: Code,
    },
    {
      title: 'App Maintenance',
      description: 'Ongoing support and updates to keep your app running smoothly and securely.',
      icon: Shield,
    },
  ]
};
