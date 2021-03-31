export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

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
      main: '#171819',
      dark: '#131415',
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
  if (mode === THEMES.LIGHT) {
    THEME.palette = createLightPalette();
  }
  if (mode === THEMES.DARK) {
    THEME.palette = createDarkPalette();
  }
  return THEME;
}
