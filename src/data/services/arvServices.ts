
import { Rocket, Cloud, Smartphone, Layers } from 'lucide-react';
import { ServiceCategory } from './types';

export const arvServices: ServiceCategory = {
  category: 'AR/VR Solutions',
  description: 'Create immersive experiences that transform how users interact with your brand, products, or services.',
  icon: Rocket,
  services: [
    {
      title: 'Virtual Reality Applications',
      description: 'Immersive VR experiences that transport users to new environments for training, entertainment, or product visualization.',
      icon: Cloud,
    },
    {
      title: 'Augmented Reality Apps',
      description: 'AR applications that enhance the real world with digital information and media, creating interactive user experiences.',
      icon: Smartphone,
    },
    {
      title: '3D Visualization',
      description: 'Realistic 3D models and visualizations that bring concepts and products to life before they are built.',
      icon: Layers,
    },
  ]
};
