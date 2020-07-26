import React, { useContext } from 'react';

import { THEME_MODES } from 'app/theme/ThemeProvider';
import { ThemeContext } from 'styled-components';

import { StyledCircleButton, StyledThemeSwitcher } from './StyledThemeSwitcher';

export function ThemeSwitcher() {
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  return (
    <StyledThemeSwitcher>
      <StyledCircleButton
        colorTheme={THEME_MODES.DARK}
        selected={themeMode === THEME_MODES.DARK}
        onClick={() => setThemeMode(THEME_MODES.DARK)}
      />
      <StyledCircleButton
        colorTheme={THEME_MODES.LIGHT}
        selected={themeMode === THEME_MODES.LIGHT}
        onClick={() => setThemeMode(THEME_MODES.LIGHT)}
      />
    </StyledThemeSwitcher>
  );
}
