
import { Database, Shield, Network, Server } from 'lucide-react';
import { ServiceCategory } from './types';

export const blockchainServices: ServiceCategory = {
  category: 'Blockchain Development',
  description: 'Build secure, transparent, and decentralized applications with our blockchain development services.',
  icon: Database,
  services: [
    {
      title: 'Smart Contracts',
      description: 'Self-executing contracts with the terms directly written into code, ensuring transparency and security.',
      icon: Shield,
    },
    {
      title: 'Decentralized Applications',
      description: 'Build dApps that run on a P2P network of computers rather than a single computer, eliminating central points of failure.',
      icon: Network,
    },
    {
      title: 'Tokenization',
      description: 'Create digital tokens that represent real-world assets, enabling fractional ownership and increasing liquidity.',
      icon: Server,
    },
  ]
};
