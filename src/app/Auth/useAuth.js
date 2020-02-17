import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const initialState = {
  user: localStorage.getItem('user') || null,
  isLoading: false,
  errorMessage: null,
};

const ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
};

export function authReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN_START: {
      return {
        errorMessage: null,
        isLoading: true,
      };
    }
    case ACTIONS.LOGIN_SUCCESS: {
      const { user } = action;
      localStorage.setItem('user', user);
      return {
        user,
        isLoading: false,
        errorMessage: null,
      };
    }

    case ACTIONS.LOGOUT: {
      localStorage.clear();
      return {
        user: null,
        errorMessage: null,
        isLoading: false,
      };
    }

    case ACTIONS.LOGIN_ERROR: {
      const errorMessage = action.payload;
      localStorage.clear();
      return {
        user: null,
        errorMessage,
        isLoading: false,
      };
    }

    default: {
      return new Error('Wrong action');
    }
  }
}

export function useAuth() {
  const [state, dispatch] = useContext(AuthContext);

  const loginStart = () =>
    dispatch({
      type: ACTIONS.LOGIN_START,
    });

  const loginSuccess = ({ user }) =>
    dispatch({
      type: ACTIONS.LOGIN_SUCCESS,
      user,
    });

  const loginError = ({ errorMessage }) =>
    dispatch({
      type: ACTIONS.LOGIN_ERROR,
      errorMessage,
    });

  const logout = () =>
    dispatch({
      type: ACTIONS.LOGOUT,
    });

  return [
    state,
    {
      loginStart,
      loginSuccess,
      loginError,
      logout,
    },
  ];
}
