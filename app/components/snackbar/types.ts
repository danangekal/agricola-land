import { AlertColor, SnackbarProps as MuiSnackbarProps } from '@mui/material';

export interface SnackbarProps extends Pick<MuiSnackbarProps, 'open'> {
  /**
   * title of snackbar
   */
  title?: string;
  /**
   * message of snackbar
   */
  message: string;
  /**
   * type of snackbar
   */
  type: AlertColor;
}
