import {
  CropFree,
  GraphicEq,
  Person,
  SmartToy,
  VideogameAsset,
} from '@mui/icons-material';

import { Menu } from './types';

export const DummyMenu: Menu[] = [
  {
    name: 'Farmers',
    icon: <Person />,
    pathname: '/farmers',
  },
  {
    name: 'Crop Detection',
    icon: <GraphicEq />,
    pathname: '#',
  },
  {
    name: 'Crop Image',
    icon: <CropFree />,
    pathname: '#',
  },
  {
    name: 'Chatbot',
    icon: <SmartToy />,
    pathname: '#',
  },
  {
    name: 'Assets',
    icon: <VideogameAsset />,
    pathname: '#',
  },
];
