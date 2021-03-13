import { useEffect, useState } from 'react';

import { THEME_LS_KEY } from 'constants';
import ls from 'utils/localStorage';

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const DEFAULT_THEME_MODE = THEME_MODES.DARK;

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(ls.getItem(THEME_LS_KEY) ?? DEFAULT_THEME_MODE);

  useEffect(() => {
    ls.setItem(THEME_LS_KEY, themeMode);
  }, [themeMode]);

  return [themeMode, setThemeMode];
};
