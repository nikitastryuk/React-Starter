import { lazy } from 'react';

import { ROUTE_PATHS } from 'app/routes/routePaths';
import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';

export const routes = [
  {
    path: ROUTE_PATHS.LOGIN,
    component: Login,
    exact: true,
  },
  {
    path: ROUTE_PATHS.MAIN,
    component: Main,
    exact: true,
    private: true,
  },
  {
    path: ROUTE_PATHS.LOGOUT,
    component: lazy(() => import('pages/Logout/Logout')),
    exact: true,
    private: true,
  },
];
