import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Roboto from '../assets/fonts/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
  }
  body {
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }
`;
