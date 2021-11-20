import {AuthState} from './AuthContext';

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export type AuthAction =
  | {
      type: AuthActionTypes.LOGIN;
      payload: {userName: string; favoriteIcon: string};
    }
  | {type: AuthActionTypes.LOGOUT};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userName: action.payload.userName,
        favoriteIcon: action.payload.favoriteIcon,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userName: '',
        favoriteIcon: '',
      };
    default:
      return state;
  }
};
