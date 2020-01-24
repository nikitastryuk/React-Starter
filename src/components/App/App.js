import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../Auth/AuthProvider';
import { RoutesPanel } from '../RoutesPanel/RoutesPanel';
import { ROUTES } from '../Routes/experimental';
import { authReducer, initialState } from '../Auth/useAuth';
import { AppRoutes } from '../Routes/AppRoutes';

export const App = () => {
  return (
    <React.Fragment>
      <AuthProvider reducer={authReducer} initialState={initialState}>
        <BrowserRouter>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <RoutesPanel routes={ROUTES} />
            <AppRoutes />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </React.Fragment>
  );
};
