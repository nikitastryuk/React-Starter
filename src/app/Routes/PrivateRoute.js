import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTE_PATHS } from 'app/Routes/routePaths';
import { useAuth } from 'app/Auth/useAuth';

export const PrivateRoute = ({ component, path, exact }) => {
  const [{ user }] = useAuth();
  if (!user) {
    return <Redirect to={ROUTE_PATHS.LOGIN} />;
  }
  return <Route path={path} exact={exact} component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  exact: false,
};
