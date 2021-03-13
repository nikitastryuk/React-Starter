import { useEffect, useState } from 'react';

import { THEME_LS_KEY } from 'constants';

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const DEFAULT_THEME_MODE = THEME_MODES.LIGHT;

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(() => {
    try {
      return localStorage.getItem(THEME_LS_KEY) || DEFAULT_THEME_MODE;
    } catch (error) {
      return DEFAULT_THEME_MODE;
    }
  });

  useEffect(() => {
    localStorage.setItem(THEME_LS_KEY, themeMode);
  }, [themeMode]);

  return [themeMode, setThemeMode];
};
