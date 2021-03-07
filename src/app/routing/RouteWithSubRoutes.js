import { Redirect, Route } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';

import { ROUTE_PATHS } from 'app/routing/routePaths';
import { useAuth } from 'app/auth/useAuth';

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export function RouteWithSubRoutes(route) {
  const [{ user }] = useAuth();
  return (
    <Suspense fallback={route.fallback ?? <div>Loading...</div>}>
      <Route path={route.path} render={renderRoute} />
    </Suspense>
  );

  // This function checks whether the route is private and the user is authenticated or if this path has to be redirected.
  // If the user is authenticated and we do not have to redirect, then <route.component {…props} routes={route.routes}/> returned.
  // The crucial part here is to pass routes={route.routes} - this will make the component aware of the sub-routes of the current route.
  // When it comes to the component itself, we have to implicitly accept this prop.
  function renderRoute(props) {
    if (route.redirect) {
      return <Redirect to={route.redirect} />;
    }
    if (route.private) {
      return user ? (
        route.component && <route.component {...props} routes={route.routes} />
      ) : (
        <Redirect to={ROUTE_PATHS.LOGIN} />
      );
    }
    return route.component && <route.component {...props} routes={route.routes} />;
  }
}

export const routeShape = PropTypes.shape({
  path: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  exact: PropTypes.bool,
  private: PropTypes.bool,
  fallback: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any,
});
routeShape.routes = PropTypes.arrayOf(routeShape);

RouteWithSubRoutes.propTypes = {
  ...routeShape.isRequired,
};
