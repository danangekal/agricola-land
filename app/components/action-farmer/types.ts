import { ReactElement } from 'react';

import { Farmer } from '@/app/farmers/types';

export type ActionFarmerProps = Pick<Farmer, 'id' | 'name'>;

export interface ActionMenu {
  /**
   * The label of menu
   */
  label: string;
  /**
   * The name of icon (use material icons -> refer to https://mui.com/material-ui/material-icons/)
   */
  icon: ReactElement;
  /**
   * The action of menu
   */
  handleOnClick: () => void;
}
