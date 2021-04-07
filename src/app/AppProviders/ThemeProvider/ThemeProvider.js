import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { THEMES, getTheme } from 'app/AppProviders/ThemeProvider/theme';
import { THEME_LS_KEY } from 'constants';
import { useLocalStorageState } from 'hooks/useLocalStorageState';

const DEFAULT_THEME = THEMES.DARK;

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorageState(THEME_LS_KEY, DEFAULT_THEME);
  const validatedTheme = Object.values(THEMES).includes(theme) ? theme : DEFAULT_THEME;
  return (
    <StyledComponentsThemeProvider theme={{ theme: validatedTheme, setTheme, ...getTheme(validatedTheme) }}>
      {children}
    </StyledComponentsThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { THEMES };
