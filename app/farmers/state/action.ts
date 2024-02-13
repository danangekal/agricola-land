import { Farmer } from '../types';

export enum FarmerActionType {
  SetList,
  SetDetail,
  SetPage,
}

export interface SetList {
  type: FarmerActionType.SetList;
  payload: Farmer[] | [];
}

export interface SetDetail {
  type: FarmerActionType.SetDetail;
  payload: Farmer | null;
}

export interface SetPage {
  type: FarmerActionType.SetPage;
  payload: number;
}

export type FarmerAction = SetList | SetDetail | SetPage;
