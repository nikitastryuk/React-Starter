import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { THEME_MODES, useThemeMode } from 'app/theme/useThemeMode';
import { getTheme } from 'app/theme/theme';

export function AppThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useThemeMode();
  return <ThemeProvider theme={{ themeMode, setThemeMode, ...getTheme(themeMode) }}>{children}</ThemeProvider>;
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { THEME_MODES };
