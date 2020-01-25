import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from 'components/Auth/AuthProvider';
import { RoutesPanel } from 'components/RoutesPanel/RoutesPanel';
import { ROUTES } from 'components/Routes/experimental';
import { authReducer, initialState } from 'components/Auth/useAuth';
import { AppRoutes } from 'components/Routes/AppRoutes';

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
