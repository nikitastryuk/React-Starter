import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import BebasNeue from './BebasNeue-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'BebasNeue';
    src: url(${BebasNeue}) format('truetype');
  }
  body {
    font-family: 'BebasNeue', sans-serif;
  }
`;
