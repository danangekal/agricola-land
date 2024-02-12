'use client';
import { createContext, useContext, useReducer } from 'react';

import { appReducer } from './reducer';
import { AppContextValue, AppProviderProps, AppState } from './types';

const initAppState: AppState = {
  credential: {
    username: '',
    password: '',
  },
  snackbar: {
    open: false,
    type: 'info',
    title: '',
    message: '',
  },
};
const initAppContextValue: AppContextValue = {
  state: initAppState,
  dispatch: () => undefined,
};

const AppContext = createContext<AppContextValue>(initAppContextValue);

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContext;
