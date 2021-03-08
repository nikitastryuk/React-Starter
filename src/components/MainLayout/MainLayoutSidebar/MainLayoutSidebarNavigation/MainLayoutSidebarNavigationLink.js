import PropTypes from 'prop-types';

import {
  StyledAppNavbarLinkContent,
  StyledAppNavbarLinkLabel,
  StyledMainLayoutSidebarNavigationLink,
} from './StyledMainLayoutSidebarNavigationLink';

export function MainLayoutSidebarNavigationLink({ route }) {
  return (
    <StyledMainLayoutSidebarNavigationLink activeClassName="active" exact to={route.path}>
      <StyledAppNavbarLinkContent>
        {route.icon}
        <StyledAppNavbarLinkLabel>{route.label}</StyledAppNavbarLinkLabel>
      </StyledAppNavbarLinkContent>
    </StyledMainLayoutSidebarNavigationLink>
  );
}

MainLayoutSidebarNavigationLink.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
