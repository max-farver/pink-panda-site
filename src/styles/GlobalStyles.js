import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    scroll-behavior: smooth;
    position: relative;
    height: 100%;
  }

  body {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  a {
    text-shadow: none;
    text-decoration: none;
    cursor: pointer;
    background-image: none;
  }

  main {
    max-width: ${props => props.theme.screen.xl};
    flex: 1 0 auto;
  }
`;

export default GlobalStyles;
