import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theming from 'styled-theming';

import { THEMES } from 'app/AppProviders/ThemeProvider/ThemeProvider';

const borderColor = theming('theme', {
  [THEMES.LIGHT]: ({ theme }) => theme.palette.common.black,
  [THEMES.DARK]: ({ theme }) => theme.palette.common.white,
});

export const StyleMainLayoutSidebarNavigationLinkLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const StyleMainLayoutSidebarNavigationLinkContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMainLayoutSidebarNavigationLink = styled(NavLink)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(14)};
  color: inherit;
  text-decoration: none;
  &.active {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.palette.primary.main},
      ${({ theme }) => theme.palette.primary.dark}
    );
    border-left: ${({ theme }) => theme.spacing(1)} solid ${borderColor};
    pointer-events: none;
  }
`;
