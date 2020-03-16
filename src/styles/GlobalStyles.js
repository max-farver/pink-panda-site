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
    flex: 1 0 auto;
    margin: 6rem auto 0 auto;
    max-width: ${props => props.theme.screen.xl};
    padding: 0 1rem;

    h1 {
      font-size: 3rem;
    }
  }
`;

export default GlobalStyles;
