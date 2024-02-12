import { SnackbarProps } from '@/app/components/snackbar/types';
import { Credential } from '@/app/types';

export enum ActionType {
  SetCredential,
  SetSnackbar,
}

export interface SetCredential {
  type: ActionType.SetCredential;
  payload: Credential;
}

export interface SetSnackbar {
  type: ActionType.SetSnackbar;
  payload: SnackbarProps;
}

export type AppAction = SetCredential | SetSnackbar;
