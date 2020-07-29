import styled from 'styled-components';

import { THEME_MODES } from 'app/theme/ThemeProvider';
import { styledMap } from 'utils/styledMap';

const SELECTED_THEME_MODE_PROP_NAME = 'selectedThemeMode';
const SELECTED_PROP_NAME = 'selected';

const backgroundColor = ({ theme }) =>
  styledMap(SELECTED_THEME_MODE_PROP_NAME, {
    [THEME_MODES.LIGHT]: theme.palette.common.white,
    [THEME_MODES.DARK]: theme.palette.common.black,
  });
const hoverBackgroundColor = ({ theme }) =>
  styledMap(SELECTED_THEME_MODE_PROP_NAME, {
    [THEME_MODES.LIGHT]: theme.palette.secondary.main,
    [THEME_MODES.DARK]: theme.palette.secondary.main,
  });
const boxShadowColor = ({ theme }) =>
  styledMap(SELECTED_THEME_MODE_PROP_NAME, {
    [THEME_MODES.LIGHT]: styledMap(SELECTED_PROP_NAME, {
      true: theme.palette.common.black,
    }),
    [THEME_MODES.DARK]: styledMap(SELECTED_PROP_NAME, {
      true: theme.palette.common.white,
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
