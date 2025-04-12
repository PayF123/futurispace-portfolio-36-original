
import { Globe, Rocket, Layers, Database, Network } from 'lucide-react';
import { ServiceCategory } from './types';

export const metaverseServices: ServiceCategory = {
  category: 'Metaverse Development',
  description: 'Build immersive digital worlds and experiences that connect users in virtual spaces with cutting-edge metaverse technologies.',
  icon: Globe,
  services: [
    {
      title: 'Virtual Worlds',
      description: 'Design and development of interactive 3D virtual environments for social interaction, commerce, and entertainment.',
      icon: Rocket,
    },
    {
      title: 'Digital Twin Creation',
      description: 'Virtual replicas of physical spaces and objects with real-time data synchronization for training and simulation.',
      icon: Layers,
    },
    {
      title: 'NFT Marketplaces',
      description: 'Custom marketplaces for trading digital assets and virtual real estate within metaverse environments.',
      icon: Database,
    },
    {
      title: 'Cross-Platform Integration',
      description: 'Seamless integration between different metaverse platforms, enabling unified virtual experiences.',
      icon: Network,
    },
  ]
};
