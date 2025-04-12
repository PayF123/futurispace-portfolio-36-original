
import { ServiceCategory } from './types';
import { aiServices } from './aiServices';
import { arvServices } from './arvServices';
import { blockchainServices } from './blockchainServices';
import { uiuxServices } from './uiuxServices';
import { cloudServices } from './cloudServices';
import { mobileServices } from './mobileServices';
import { dataServices } from './dataServices';
import { dotnetServices } from './dotnetServices';
import { gameServices } from './gameServices';
import { metaverseServices } from './metaverseServices';
import { webServices } from './webServices';
import { iotServices } from './iotServices';

export const serviceCategories: ServiceCategory[] = [
  aiServices,
  arvServices,
  blockchainServices,
  uiuxServices,
  cloudServices,
  mobileServices,
  dataServices,
  dotnetServices,
  gameServices,
  metaverseServices,
  webServices,
  iotServices
];

export * from './types';
