import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RootRouteWithSubRoutes } from '../Routes/RootRouteWithSubRoutes';
import { AppStateProvider } from './AppStateProvider';
import { RoutesPanel } from '../RoutesPanel/RoutesPanel';
import { ROUTES } from '../Routes/routes';

export const App = () => {
  return (
    <React.Fragment>
      <AppStateProvider reducer={() => {}} initialState={{}}>
        <BrowserRouter>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <RoutesPanel routes={ROUTES} />
            <RootRouteWithSubRoutes routes={ROUTES} />
          </div>
        </BrowserRouter>
      </AppStateProvider>
    </React.Fragment>
  );
};
