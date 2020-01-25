import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  authReducer,
  initialState,
  AuthContext,
} from 'components/Auth/useAuth';

export function AuthProvider({ children }) {
  const value = useReducer(authReducer, initialState);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
