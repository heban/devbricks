import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    height: 100%;
  }
`;

export const colors = {
  skin: '#fcdac4',
};

export default GlobalStyles;
