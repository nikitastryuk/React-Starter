import { useContext } from 'react';

import { THEMES } from 'app/AppProviders/ThemeProvider/ThemeProvider';
import { ThemeContext } from 'styled-components';

import { StyledCircleButton, StyledThemeSwitcher } from './StyledThemeSwitcher';

export function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <StyledThemeSwitcher>
      <StyledCircleButton
        selectedTheme={THEMES.LIGHT}
        selected={theme === THEMES.LIGHT}
        onClick={() => setTheme(THEMES.LIGHT)}
      />
      <StyledCircleButton
        selectedTheme={THEMES.DARK}
        selected={theme === THEMES.DARK}
        onClick={() => setTheme(THEMES.DARK)}
      />
    </StyledThemeSwitcher>
  );
}
