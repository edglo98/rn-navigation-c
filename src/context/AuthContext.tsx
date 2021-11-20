import React, {createContext, FC, useReducer} from 'react';
import {AuthAction, authReducer} from './authReducer';

export interface AuthState {
  isAuthenticated: boolean;
  userName?: string;
  favoriteIcon?: string;
}

interface AuthContextProps {
  authState: AuthState;
  authDispatch: React.Dispatch<AuthAction>;
}

export const authInitialState: AuthState = {
  isAuthenticated: false,
  userName: '',
  favoriteIcon: '',
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

const AuthProvider: FC = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider value={{authState, authDispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
