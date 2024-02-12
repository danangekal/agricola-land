import { SnackbarProps } from '@/app/components/snackbar/types';
import { Credential } from '@/app/types';
import { ActionType, AppAction, SetCredential, SetSnackbar } from './action';
import { AppState } from './types';

export function appReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case ActionType.SetCredential:
      return { ...state, credential: action.payload };
    case ActionType.SetSnackbar:
      return { ...state, snackbar: action.payload };

    default:
      return state;
  }
}

export const setCredential = (payload: Credential): SetCredential => ({
  type: ActionType.SetCredential,
  payload,
});

export const setSnackbar = (payload: SnackbarProps): SetSnackbar => ({
  type: ActionType.SetSnackbar,
  payload,
});
