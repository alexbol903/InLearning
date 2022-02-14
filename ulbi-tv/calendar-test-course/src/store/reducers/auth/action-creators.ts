import { AppDispatch } from '../../index';
import { IUser } from '../../../models/IUser';
import { AuthActionsEnum, SetUserAction, SetIsLoadingAction, SetAuthAction, SetErrorsAction } from './types';
import UserService from '../../../api/UserService';

export const AuthActionCreators = {
  setAuth: (payload: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload }),
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload }),
  setErrors: (errors: string): SetErrorsAction => ({ type: AuthActionsEnum.SET_ERRORS, payload: errors }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));

      const response = await UserService.getUsers();
      const mockUser = response.data.find((user: IUser) => user.username === username && user.password === password);
      
      setTimeout( async () => {
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch(AuthActionCreators.setUser(mockUser));
          dispatch(AuthActionCreators.setAuth(true));
        } else {
          dispatch(AuthActionCreators.setErrors('Incorect login or password!'))
        }
        dispatch(AuthActionCreators.setIsLoading(false));
      }, 1000);

    } catch (err) {
      dispatch(AuthActionCreators.setErrors('Login Error'))
    }
  }, 
  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem('auth');
      localStorage.removeItem('username');
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setAuth(false));
    } catch (err) {

    }
  }, 
}