import styled from 'styled-components';
import theming from 'styled-theming';

import { THEMES } from 'app/AppProviders/ThemeProvider/ThemeProvider';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const textColor = theming.variants('theme', 'variant', {
  [BUTTON_VARIANTS.PRIMARY]: {
    [THEMES.LIGHT]: ({ theme }) => theme.palette.common.black,
    [THEMES.DARK]: ({ theme }) => theme.palette.common.white,
  },
  [BUTTON_VARIANTS.SECONDARY]: {
    [THEMES.LIGHT]: ({ theme }) => theme.palette.common.black,
    [THEMES.DARK]: ({ theme }) => theme.palette.common.white,
  },
});

const backgroundColor = theming.variants('theme', 'variant', {
  [BUTTON_VARIANTS.PRIMARY]: {
    [THEMES.LIGHT]: ({ theme }) => theme.palette.common.white,
    [THEMES.DARK]: ({ theme }) => theme.palette.common.black,
  },
  [BUTTON_VARIANTS.SECONDARY]: {
    [THEMES.LIGHT]: ({ theme }) => theme.palette.common.white,
    [THEMES.DARK]: ({ theme }) => theme.palette.common.black,
  },
});

export const StyledButton = styled.button`
  min-width: 100px;
  color: ${textColor};
  font-weight: bold;
  font-size: 14px;
  background: ${backgroundColor};
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`;
