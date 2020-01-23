import { RootRouteWithSubRoutes } from './RootRouteWithSubRoutes';

import { Login } from '../Login/Login';
import { Main } from '../Main/Main';
import { Logout } from '../Logout/Logout';
import { ROUTE_PATHS } from './routePaths';

// An array of route configs, with nested objects/arrays in the same structure as app's routes
export const ROUTES = [
  {
    key: 'LOGIN',
    path: ROUTE_PATHS.LOGIN,
    component: Login,
    exact: true,
  },
  {
    key: 'APP_ROOT',
    component: RootRouteWithSubRoutes,
    routes: [
      {
        key: 'APP_MAIN',
        path: ROUTE_PATHS.APP_MAIN,
        component: Main,
        exact: true,
      },
      {
        key: 'APP_LOGOUT',
        path: ROUTE_PATHS.APP_LOGOUT,
        component: Logout,
        exact: true,
      },
    ],
  },
];
