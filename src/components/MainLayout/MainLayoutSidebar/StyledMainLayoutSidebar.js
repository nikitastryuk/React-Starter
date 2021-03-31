import { StyledIconBase } from '@styled-icons/styled-icon';
import styled from 'styled-components';
import theming from 'styled-theming';

import { THEMES } from 'app/AppProviders/ThemeProvider/ThemeProvider';

export const StyledMainLayoutSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.palette.primary.dark};
  ${StyledIconBase} {
    width: 22px;
    height: 22px;
  }
`;

export const StyledMainLayoutSidebarLogo = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(20)};
  padding: 0 ${({ theme }) => theme.spacing(12)};
  padding-top: ${({ theme }) => theme.spacing(12)};
  font-size: 50px;
`;

const textColor = theming('theme', {
  [THEMES.LIGHT]: ({ theme }) => theme.palette.common.black,
  [THEMES.DARK]: ({ theme }) => theme.palette.common.white,
});

export const StyledMainLayoutSidebarLogoutButton = styled.button`
  align-self: center;
  margin-top: auto;
  padding-bottom: ${({ theme }) => theme.spacing(12)};
  color: ${textColor};
  font-size: 18px;
  text-transform: uppercase;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
