import PropTypes from 'prop-types';
import React, { useReducer } from 'react';

import { AuthContext, authReducer, initialState } from 'app/Auth/useAuth';

export function AuthProvider({ children }) {
  const value = useReducer(authReducer, initialState);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
