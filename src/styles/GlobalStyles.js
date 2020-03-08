import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    scroll-behavior: smooth;
    position: relative;
  }

  body {
    position: relative;
    min-height: 100%;
  }

  a {
    text-shadow: none;
    text-decoration: none;
    cursor: pointer;
    background-image: none;
  }

  main {
    max-width: ${props => props.theme.screen.xl};
    margin: 0 auto;
  }
`;

export default GlobalStyles;
