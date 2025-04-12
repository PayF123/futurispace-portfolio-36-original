
import { Gamepad, Layers, Code, Server, Cpu } from 'lucide-react';
import { ServiceCategory } from './types';

export const gameServices: ServiceCategory = {
  category: 'Game Development',
  description: 'Create engaging, immersive gaming experiences across multiple platforms with our expert game development services.',
  icon: Gamepad,
  services: [
    {
      title: '2D/3D Game Design',
      description: 'Custom game design with captivating visuals, storylines, and gameplay mechanics tailored to your audience.',
      icon: Layers,
    },
    {
      title: 'Unity Development',
      description: 'Cross-platform game development using Unity, enabling deployment across mobile, desktop, console, and web.',
      icon: Code,
    },
    {
      title: 'Game Backend Systems',
      description: 'Robust, scalable backend infrastructure for multiplayer games, leaderboards, and user accounts.',
      icon: Server,
    },
    {
      title: 'Game Optimization',
      description: 'Performance optimization to ensure smooth gameplay across various devices and platforms.',
      icon: Cpu,
    },
  ]
};
