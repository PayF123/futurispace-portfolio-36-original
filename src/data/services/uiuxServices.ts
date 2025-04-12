
import { Palette, Layers, LineChart, Smartphone } from 'lucide-react';
import { ServiceCategory } from './types';

export const uiuxServices: ServiceCategory = {
  category: 'UI/UX Design',
  description: 'Elevate your digital presence with intuitive, beautiful interfaces that enhance user experience and drive engagement.',
  icon: Palette,
  services: [
    {
      title: 'User Interface Design',
      description: 'Visually stunning interfaces that reflect your brand and delight your users.',
      icon: Layers,
    },
    {
      title: 'User Experience Design',
      description: 'Thoughtful experiences that guide users through your product, making complex tasks feel simple.',
      icon: LineChart,
    },
    {
      title: 'Interaction Design',
      description: 'Engaging animations and interactions that make your product feel responsive and alive.',
      icon: Smartphone,
    },
  ]
};
