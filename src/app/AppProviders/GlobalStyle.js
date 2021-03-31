import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }
`;
