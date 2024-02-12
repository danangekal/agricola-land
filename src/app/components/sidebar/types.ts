import { ReactElement } from 'react';

export interface Menu {
  /**
   * The name of menu
   */
  name: string;
  /**
   * The name of icon (use material icons -> refer to https://mui.com/material-ui/material-icons/)
   */
  icon: ReactElement;
  /**
   * The pathname of page
   */
  pathname: string;
}
