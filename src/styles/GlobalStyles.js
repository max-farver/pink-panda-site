import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyles = createGlobalStyle`
  ${normalize}

  a {
    text-shadow: none;
    text-decoration: none;
  }

  main {
    max-width: ${props => props.theme.screen.xl};
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export default GlobalStyles;
