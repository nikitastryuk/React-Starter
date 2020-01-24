import PropTypes from 'prop-types';

export const routeShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  path: PropTypes.string,
  exact: PropTypes.bool,
  isPublic: PropTypes.bool,
});
routeShape.routes = PropTypes.arrayOf(routeShape);
