import { Dispatch, ReactNode } from 'react';

import { SnackbarProps } from '@/app/components/snackbar/types';
import { Credential } from '@/app/types';
import { AppAction } from './action';

export interface AppState {
  /**
   * props of credential sign in
   */
  credential: Credential;
  /**
   * props of snackbar
   */
  snackbar: SnackbarProps;
}

export interface AppProviderProps {
  /**
   * children element
   */
  children: ReactNode;
}

export interface AppContextValue {
  /**
   * all state on app
   */
  state: AppState;
  /**
   * all dispacth on app
   */
  dispatch: Dispatch<AppAction>;
}
