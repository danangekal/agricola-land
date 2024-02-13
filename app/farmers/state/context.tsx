'use client';
import { createContext, useContext, useReducer } from 'react';

import { farmerReducer } from './reducer';
import { FarmerContextValue, FarmerProviderProps, FarmerState } from './types';

const initFarmerState: FarmerState = {
  list: [],
  detail: null,
  page: 1,
};
const initFarmerContextValue: FarmerContextValue = {
  state: initFarmerState,
  dispatch: () => undefined,
};

const FarmerContext = createContext<FarmerContextValue>(initFarmerContextValue);

export function FarmerProvider({ children }: FarmerProviderProps) {
  const [state, dispatch] = useReducer(farmerReducer, initFarmerState);

  return (
    <FarmerContext.Provider value={{ state, dispatch }}>
      {children}
    </FarmerContext.Provider>
  );
}

export function useFarmerContext() {
  return useContext(FarmerContext);
}

export default FarmerContext;
