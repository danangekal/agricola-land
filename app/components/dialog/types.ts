import { DialogProps as MuiDialogProps } from '@mui/material';

import { TypeActionFarmer } from '@/app/farmers/types';

export interface DialogProps extends Pick<MuiDialogProps, 'open'> {
  /**
   * type of dialog
   */
  type: TypeActionFarmer;
  /**
   * title of daalog
   */
  title: string;
  /**
   * content of dialog
   */
  content: string;
  /**
   * handle cancel of dialog
   */
  handleOnCancel: () => void;
  /**
   * handle submit of dialog
   */
  handleOnSubmit: () => void;
}
