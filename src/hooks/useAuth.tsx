import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {AuthActionTypes} from '../context/authReducer';

const useAuth = () => {
  const {authState, authDispatch} = useContext(AuthContext);

  const signIn = () => {
    authDispatch({
      type: AuthActionTypes.LOGIN,
      payload: {
        userName: 'John Doe',
        favoriteIcon: '🍕',
      },
    });
  };

  const logout = () => {
    authDispatch({
      type: AuthActionTypes.LOGOUT,
    });
  };

  return {
    authState,
    actions: {
      signIn,
      logout,
    },
  };
};

export default useAuth;
