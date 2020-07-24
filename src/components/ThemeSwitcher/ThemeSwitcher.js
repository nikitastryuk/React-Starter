import React, { useState } from 'react';

import { THEMES } from 'app/ThemeProvider/ThemeProvider';

import { StyledCircleButton, StyledThemeSwitcher } from './StyledThemeSwitcher';

const DEFAULT_THEME = THEMES.DARK;

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

  function saveNewTheme(newTheme) {
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return (
    <StyledThemeSwitcher>
      <StyledCircleButton
        colorTheme={THEMES.DARK}
        selected={currentTheme === THEMES.DARK}
        onClick={() => saveNewTheme(THEMES.DARK)}
      />
      <StyledCircleButton
        colorTheme={THEMES.LIGHT}
        selected={currentTheme === THEMES.LIGHT}
        onClick={() => saveNewTheme(THEMES.LIGHT)}
      />
    </StyledThemeSwitcher>
  );
}
