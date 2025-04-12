
import { aiServices } from './services/aiServices';
import { arvServices } from './services/arvServices';
import { blockchainServices } from './services/blockchainServices';
import { cloudServices } from './services/cloudServices';
import { dataServices } from './services/dataServices';
import { dotnetServices } from './services/dotnetServices';
import { gameServices } from './services/gameServices';
import { iotServices } from './services/iotServices';
import { metaverseServices } from './services/metaverseServices';
import { mobileServices } from './services/mobileServices';
import { uiuxServices } from './services/uiuxServices';
import { webServices } from './services/webServices';
import { ServiceCategory, ServiceItem } from './services/types';

export const serviceCategories: ServiceCategory[] = [
  aiServices,
  arvServices,
  blockchainServices,
  cloudServices,
  dataServices,
  dotnetServices,
  gameServices,
  iotServices,
  metaverseServices,
  mobileServices,
  uiuxServices,
  webServices
];

export type { ServiceCategory, ServiceItem };
