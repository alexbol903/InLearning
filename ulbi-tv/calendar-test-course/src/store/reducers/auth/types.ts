import { IUser } from '../../../models/IUser';

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  errors: string;
}

export enum AuthActionsEnum {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERRORS = 'SET_ERRORS'
}

export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}

export interface SetUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: IUser;
}

export interface SetIsLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorsAction {
  type: AuthActionsEnum.SET_ERRORS;
  payload: string;
}

export type AuthAction = 
  SetAuthAction |
  SetUserAction | 
  SetIsLoadingAction | 
  SetErrorsAction
