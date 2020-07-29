import { useEffect, useState } from 'react';

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const LOCAL_STORAGE_KEY = 'themeMode';
const DEFAULT_THEME_MODE = THEME_MODES.LIGHT;

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEY) || DEFAULT_THEME_MODE;
    } catch (error) {
      return DEFAULT_THEME_MODE;
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, themeMode);
  }, [themeMode]);

  return [themeMode, setThemeMode];
};
