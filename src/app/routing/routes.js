import { lazy } from 'react';

import { ROUTE_PATHS } from 'app/routing/routePaths';
import Login from 'pages/Login/Login';
import Logout from 'pages/Logout/Logout';

function SubRoute() {
  return <div>Sub Route</div>;
}

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
    private: true,
    routes: [
      {
        path: ROUTE_PATHS.LOGOUT_SUB_ROUTE,
        exact: true,
        component: SubRoute,
        private: true,
      },
    ],
  },
];
