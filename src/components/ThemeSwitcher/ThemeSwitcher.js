import { THEMES } from 'app/AppProviders/ThemeProvider/ThemeProvider';
import { useTheme } from 'styled-components';

import { StyledCircleButton, StyledThemeSwitcher } from './StyledThemeSwitcher';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <StyledThemeSwitcher>
      <StyledCircleButton
        data-testid="light-theme-button"
        selectedTheme={THEMES.LIGHT}
        selected={theme === THEMES.LIGHT}
        onClick={() => setTheme(THEMES.LIGHT)}
      />
      <StyledCircleButton
        data-testid="dark-theme-button"
        selectedTheme={THEMES.DARK}
        selected={theme === THEMES.DARK}
        onClick={() => setTheme(THEMES.DARK)}
      />
    </StyledThemeSwitcher>
  );
}
