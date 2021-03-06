import { lazy } from 'react';

import { ROUTE_PATHS } from 'app/routing/routePaths';
import Login from 'pages/Login/Login';
import Logout from 'pages/Logout/Logout';

export const routes = [
  {
    path: ROUTE_PATHS.LOGIN,
    component: Login,
    exact: true,
  },
  {
    path: ROUTE_PATHS.MAIN,
    component: lazy(() => import('pages/Main/Main')),
    exact: true,
    private: true,
  },
  {
    path: ROUTE_PATHS.LOGOUT,
    component: Logout,
    exact: true,
    private: true,
  },
];
