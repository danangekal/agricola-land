import { Dispatch, ReactNode } from 'react';

import { FarmerAction } from './action';
import { Farmer } from '../types';

export interface FarmerState {
  /**
   * list of farmer
   */
  list: Farmer[] | [];
  /**
   * detail of farmer
   */
  detail: Farmer | null;
  /**
   * page of list farmer
   */
  page: number;
}

export interface FarmerProviderProps {
  /**
   * children element
   */
  children: ReactNode;
}

export interface FarmerContextValue {
  /**
   * all state on farmer
   */
  state: FarmerState;
  /**
   * all dispacth on farmer
   */
  dispatch: Dispatch<FarmerAction>;
}
