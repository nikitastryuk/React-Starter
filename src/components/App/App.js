import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { AppRoutes } from 'components/Routes/AppRoutes';
import { AuthProvider } from 'components/Auth/AuthProvider';
import { ROUTES } from 'components/Routes/experimental';
import { RoutesPanel } from 'components/RoutesPanel/RoutesPanel';
import { authReducer, initialState } from 'components/Auth/useAuth';

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
