import { ReactElement } from 'react';

import { Farmer } from '@/app/farmers/types';

export interface ActionFarmerProps extends Pick<Farmer, 'id' | 'name'> {
  /**
   * isMobile (true/false)
   */
  isMobile?: boolean;
}

export interface ActionMenu {
  /**
   * The label of menu
   */
  label: ReactElement;
  /**
   * The name of icon (use material icons -> refer to https://mui.com/material-ui/material-icons/)
   */
  icon: ReactElement;
  /**
   * The action of menu
   */
  handleOnClick: () => void;
}
