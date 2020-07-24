import PropTypes from 'prop-types';
import React from 'react';
import reset from 'styled-reset';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function createPalette() {
  return {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    success: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
    info: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    },
  };
}

function createSpacing(multiplier) {
  const INITIAL_UNIT = 4;
  return `${INITIAL_UNIT * multiplier}px`;
}

const THEME = {
  palette: createPalette(),
  spacing: (multiplier) => createSpacing(multiplier),
};

export function AppThemeProvider({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
    </React.Fragment>
  );
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
