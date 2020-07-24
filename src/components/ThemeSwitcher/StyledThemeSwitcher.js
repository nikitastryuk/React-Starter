import styled from 'styled-components';

import { THEMES } from 'app/ThemeProvider/ThemeProvider';

function handleColoring(theme, selected, palette) {
  function getColoring(backgroundColor, boxShadowColor, hoverColor) {
    const hover = hoverColor && `&:hover { background: ${hoverColor} }`;
    const boxShadow = selected && `box-shadow: 0 0 0 2px ${boxShadowColor}`;
    return `background: ${backgroundColor}; ${boxShadow}; ${hover};`;
  }
  switch (theme) {
    case THEMES.LIGHT:
      return getColoring(
        palette.primary.main,
        palette.common.black,
        palette.primary.dark,
      );
    case THEMES.DARK:
      return getColoring(
        palette.secondary.main,
        palette.common.white,
        palette.secondary.dark,
      );
    default:
      return new Error('Theme is required');
  }
}

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
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  ${({ colorTheme, theme, selected }) =>
    handleColoring(colorTheme, selected, theme.palette)};
`;
