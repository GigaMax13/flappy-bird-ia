import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  #root {
    display: flex;
    flex: 1;
  }
  
  body {
    display: flex;
    flex: 1;
    min-width: 100vw;
    min-height: 100vh;
  }
`;
