import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyles = createGlobalStyle`
  ${normalize}

  body { 
    width: auto;
    height: auto;
    }

  a {
    text-shadow: none;
  }
`;

export default GlobalStyles;
