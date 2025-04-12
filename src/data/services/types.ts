
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  category: string;
  description: string;
  icon: LucideIcon;
  services: ServiceItem[];
}
