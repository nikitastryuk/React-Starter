import styled from 'styled-components';
import theming from 'styled-theming';

import { THEMES } from 'app/AppProviders/ThemeProvider/ThemeProvider';

const textColor = theming('theme', {
  [THEMES.LIGHT]: ({ theme }) => theme.palette.common.black,
  [THEMES.DARK]: ({ theme }) => theme.palette.common.white,
});

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  color: ${textColor};
  background: ${({ theme }) => theme.palette.primary.main};
`;
