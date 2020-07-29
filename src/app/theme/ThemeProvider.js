import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

import { THEME_MODES, useThemeMode } from 'app/theme/useThemeMode';
import { getTheme } from 'app/theme/theme';

export function AppThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useThemeMode();
  return (
    <React.Fragment>
      <ThemeProvider
        theme={{ themeMode, setThemeMode, ...getTheme(themeMode) }}
      >
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { THEME_MODES };
