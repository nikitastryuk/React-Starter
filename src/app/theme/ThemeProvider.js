import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import reset from 'styled-reset';

import { THEME_MODES, useThemeMode } from './useThemeMode';
import { getTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Bebas Neue', cursive;
  }
`;

export function AppThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useThemeMode();
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider
        theme={{ themeMode, setThemeMode, ...getTheme(themeMode) }}
      >
        {children}
      </ThemeProvider>
      ;
    </React.Fragment>
  );
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { THEME_MODES };
