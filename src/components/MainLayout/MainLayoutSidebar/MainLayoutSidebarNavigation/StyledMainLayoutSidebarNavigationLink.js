import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theming from 'styled-theming';

import { THEME_MODES } from 'app/theme/useThemeMode';

const borderColor = theming('themeMode', {
  [THEME_MODES.LIGHT]: ({ theme }) => theme.palette.common.black,
  [THEME_MODES.DARK]: ({ theme }) => theme.palette.common.white,
});

export const StyledAppNavbarLinkLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const StyledAppNavbarLinkContent = styled.div`
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
  }
`;
