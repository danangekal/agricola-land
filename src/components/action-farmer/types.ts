import { ReactElement } from 'react';

import { IFarmer } from '@/app/farmers/types';

export type IActionFarmer = Pick<IFarmer, 'id'>;

export interface IActionMenu {
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
