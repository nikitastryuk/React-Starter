import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

export function useTheme() {
  return useContext(ThemeContext);
}
