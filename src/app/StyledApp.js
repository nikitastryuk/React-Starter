import styled from 'styled-components';
import theming from 'styled-theming';

import { THEME_MODES } from 'app/theme/useThemeMode';

const textColor = theming('themeMode', {
  [THEME_MODES.LIGHT]: ({ theme }) => theme.palette.common.black,
  [THEME_MODES.DARK]: ({ theme }) => theme.palette.common.white,
});

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  color: ${textColor};
  background: ${({ theme }) => theme.palette.primary.main};
`;
