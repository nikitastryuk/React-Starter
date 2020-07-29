import styled from 'styled-components';

import { THEME_MODES } from 'app/theme/ThemeProvider';
import { styledMap } from 'utils/styledMap';

const SELECTED_THEME_MODE_PROP_NAME = 'selectedThemeMode';
const SELECTED_PROP_NAME = 'selected';

const backgroundColor = styledMap(SELECTED_THEME_MODE_PROP_NAME, {
  [THEME_MODES.LIGHT]: ({ theme }) => theme.palette.primary.main,
  [THEME_MODES.DARK]: ({ theme }) => theme.palette.secondary.main,
});
const hoverBackgroundColor = styledMap(SELECTED_THEME_MODE_PROP_NAME, {
  [THEME_MODES.LIGHT]: ({ theme }) => theme.palette.primary.main,
  [THEME_MODES.DARK]: ({ theme }) => theme.palette.secondary.main,
});
const boxShadowColor = styledMap(SELECTED_THEME_MODE_PROP_NAME, {
  [THEME_MODES.LIGHT]: styledMap(SELECTED_PROP_NAME, {
    true: ({ theme }) => theme.palette.common.black,
  }),
  [THEME_MODES.DARK]: styledMap(SELECTED_PROP_NAME, {
    true: ({ theme }) => theme.palette.common.white,
  }),
});

export const StyledThemeSwitcher = styled.div`
  margin: ${({ theme }) => theme.spacing(5)} 0;

  > *:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
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
  box-shadow: 0 0 0 2px ${boxShadowColor};
  cursor: pointer;
  &:hover {
    background-color: ${hoverBackgroundColor};
  }
`;

// function handleColoring(theme, selected, palette) {
//   function getColoring(backgroundColor, boxShadowColor, hoverColor) {
//     const hover = hoverColor && `&:hover { background: ${hoverColor} }`;
//     const boxShadow = selected && `box-shadow: 0 0 0 2px ${boxShadowColor}`;
//     return `background: ${backgroundColor}; ${boxShadow}; ${hover};`;
//   }
//   switch (theme) {
//     case THEME_MODES.LIGHT:
//       return getColoring(
//         palette.primary.main,
//         palette.common.black,
//         palette.primary.dark,
//       );
//     case THEME_MODES.DARK:
//       return getColoring(
//         palette.secondary.main,
//         palette.common.white,
//         palette.secondary.dark,
//       );
//     default:
//       return new Error('Theme is required');
//   }
// }

// ${({ colorTheme, theme, selected }) =>
// handleColoring(colorTheme, selected, theme.palette)};
