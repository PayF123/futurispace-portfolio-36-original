
import { WifiIcon, Smartphone, LineChart, Cpu, Shield } from 'lucide-react';
import { ServiceCategory } from './types';

export const iotServices: ServiceCategory = {
  category: 'IoT Development',
  description: 'Connect the physical and digital worlds with custom Internet of Things solutions for smart homes, cities, and industries.',
  icon: WifiIcon,
  services: [
    {
      title: 'Smart Device Integration',
      description: 'Connect and control physical devices through custom applications and centralized management systems.',
      icon: Smartphone,
    },
    {
      title: 'IoT Data Analytics',
      description: 'Collect, process, and analyze data from IoT devices to derive actionable business insights.',
      icon: LineChart,
    },
    {
      title: 'Industrial IoT Solutions',
      description: 'Optimize manufacturing and industrial processes with connected sensors and automated monitoring systems.',
      icon: Cpu,
    },
    {
      title: 'IoT Security',
      description: 'Implement robust security protocols to protect IoT ecosystems from vulnerabilities and threats.',
      icon: Shield,
    },
  ]
};
