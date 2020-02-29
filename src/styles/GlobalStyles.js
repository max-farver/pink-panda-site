import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyles = createGlobalStyle`
  ${normalize}

  a {
    text-shadow: none;
  }
`;

export default GlobalStyles;
