import {
  FarmerActionType,
  FarmerAction,
  SetList,
  SetDetail,
  SetPage,
} from './action';
import { FarmerState } from './types';
import { Farmer } from '../types';

export function farmerReducer(state: FarmerState, action: FarmerAction) {
  switch (action.type) {
    case FarmerActionType.SetList:
      return { ...state, list: action.payload };
    case FarmerActionType.SetDetail:
      return { ...state, detail: action.payload };
    case FarmerActionType.SetPage:
      return { ...state, page: action.payload };

    default:
      return state;
  }
}

export const setList = (payload: Farmer[] | []): SetList => ({
  type: FarmerActionType.SetList,
  payload,
});

export const setDetail = (payload: Farmer | null): SetDetail => ({
  type: FarmerActionType.SetDetail,
  payload,
});

export const setPage = (payload: number): SetPage => ({
  type: FarmerActionType.SetPage,
  payload,
});
