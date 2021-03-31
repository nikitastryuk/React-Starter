import styled from 'styled-components';
import theming from 'styled-theming';

import { THEMES } from 'app/AppProviders/ThemeProvider/ThemeProvider';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const backgroundColor = theming.variants('theme', 'selectedTheme', {
  [THEMES.LIGHT]: {
    [THEMES.LIGHT]: ({ theme }) => theme.palette.common.white,
    [THEMES.DARK]: ({ theme }) => theme.palette.common.white,
  },
  [THEMES.DARK]: {
    [THEMES.LIGHT]: ({ theme }) => theme.palette.common.black,
    [THEMES.DARK]: ({ theme }) => theme.palette.common.black,
  },
});

export const StyledThemeSwitcher = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export const StyledCircleButton = styled.button`
  display: block;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: ${({ theme }) => theme.spacing(2)};
  background-color: ${backgroundColor};
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
`;
