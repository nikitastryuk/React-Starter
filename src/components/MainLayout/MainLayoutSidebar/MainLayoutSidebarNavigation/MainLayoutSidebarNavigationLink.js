import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAppNavbarLinkLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

const StyledAppNavbarLinkIcon = styled.div``;

const StyledAppNavbarLinkContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMainLayoutSidebarNavigationLink = styled(NavLink)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(14)};
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }

  &.active {
    color: white;
    background: linear-gradient(to right, rgb(174, 217, 229, 10%), rgb(174, 217, 229, 0%));
    border-left: ${({ theme }) => theme.spacing(1)} solid white;
    ${StyledAppNavbarLinkIcon} {
      color: white;
    }
  }
`;

export function MainLayoutSidebarNavigationLink({ route }) {
  return (
    <StyledMainLayoutSidebarNavigationLink activeClassName="active" exact to={route.path}>
      <StyledAppNavbarLinkContent>
        {route.icon && <StyledAppNavbarLinkIcon>{route.icon}</StyledAppNavbarLinkIcon>}
        <StyledAppNavbarLinkLabel>{route.label}</StyledAppNavbarLinkLabel>
      </StyledAppNavbarLinkContent>
    </StyledMainLayoutSidebarNavigationLink>
  );
}

MainLayoutSidebarNavigationLink.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.node,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
