import styled from 'styled-components';
import theming from 'styled-theming';

import { THEME_MODES } from 'app/theme/ThemeProvider';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const textColor = theming.variants('themeMode', 'variant', {
  [BUTTON_VARIANTS.PRIMARY]: {
    [THEME_MODES.LIGHT]: ({ theme }) => theme.palette.common.black,
    [THEME_MODES.DARK]: ({ theme }) => theme.palette.common.white,
  },
  [BUTTON_VARIANTS.SECONDARY]: {
    [THEME_MODES.LIGHT]: ({ theme }) => theme.palette.common.black,
    [THEME_MODES.DARK]: ({ theme }) => theme.palette.common.white,
  },
});

const backgroundColor = theming.variants('themeMode', 'variant', {
  [BUTTON_VARIANTS.PRIMARY]: {
    [THEME_MODES.LIGHT]: ({ theme }) => theme.palette.common.white,
    [THEME_MODES.DARK]: ({ theme }) => theme.palette.common.black,
  },
  [BUTTON_VARIANTS.SECONDARY]: {
    [THEME_MODES.LIGHT]: ({ theme }) => theme.palette.common.white,
    [THEME_MODES.DARK]: ({ theme }) => theme.palette.common.black,
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
