import PropTypes from 'prop-types';

import {
  StyleMainLayoutSidebarNavigationLinkContent,
  StyleMainLayoutSidebarNavigationLinkLabel,
  StyledMainLayoutSidebarNavigationLink,
} from './StyledMainLayoutSidebarNavigationLink';

export function MainLayoutSidebarNavigationLink({ route }) {
  return (
    <StyledMainLayoutSidebarNavigationLink activeClassName="active" exact to={route.path}>
      <StyleMainLayoutSidebarNavigationLinkContent>
        {route.icon}
        <StyleMainLayoutSidebarNavigationLinkLabel>{route.label}</StyleMainLayoutSidebarNavigationLinkLabel>
      </StyleMainLayoutSidebarNavigationLinkContent>
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
