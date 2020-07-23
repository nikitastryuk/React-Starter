import PropTypes from 'prop-types';
import React, { createContext, useReducer } from 'react';

export const initialState = {
  user: localStorage.getItem('user') || null,
  isLoading: false,
  error: null,
};

export const AuthContext = createContext();

export const ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
};

export function authReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN_START: {
      return {
        error: null,
        isLoading: true,
      };
    }
    case ACTIONS.LOGIN_SUCCESS: {
      const { user } = action;
      localStorage.setItem('user', user);
      return {
        user,
        isLoading: false,
        error: null,
      };
    }

    case ACTIONS.LOGOUT: {
      localStorage.clear();
      return {
        user: null,
        error: null,
        isLoading: false,
      };
    }

    case ACTIONS.LOGIN_ERROR: {
      const error = action.payload;
      localStorage.clear();
      return {
        user: null,
        error,
        isLoading: false,
      };
    }

    default: {
      return new Error('Wrong action');
    }
  }
}

export function AuthProvider({ children }) {
  const value = useReducer(authReducer, initialState);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
