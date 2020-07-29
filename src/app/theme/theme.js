import { THEME_MODES } from 'app/theme/useThemeMode';

function createLightPalette() {
  return {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#fafafa',
      main: '#eee',
      dark: '#e0e0e0',
    },
    secondary: {
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036',
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

function createDarkPalette() {
  return {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#515154',
      main: '#35363a',
      dark: '#202124',
    },
    secondary: {
      light: '#f6a5c0',
      main: '#f48fb1',
      dark: '#aa647b',
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

export function getTheme(mode) {
  const THEME = {
    spacing: (multiplier) => createSpacing(multiplier),
  };
  if (mode === THEME_MODES.LIGHT) {
    THEME.palette = createLightPalette();
  }
  if (mode === THEME_MODES.DARK) {
    THEME.palette = createDarkPalette();
  }
  return THEME;
}
