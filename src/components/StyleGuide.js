import { createGlobalStyle } from 'styled-components';

import fontEOT from '../assets/fonts/FlappyBird.eot';
import fontWOFF from '../assets/fonts/FlappyBird.woff';
import fontTTF from '../assets/fonts/FlappyBird.ttf';
import fontSVG from '../assets/fonts/FlappyBird.svg';

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: Flappy Bird;
      src: url(${fontEOT});
      src: url(${fontEOT}?#iefix) format("embedded-opentype"),url(${fontWOFF}) format("woff"),url(${fontTTF}) format("truetype"),url(${fontSVG}#04b_19regular) format("svg");
      font-weight: 400;
      font-style: normal
  }

  * {
    padding: 0;
    margin: 0;
  }
  
  #root {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: orange;
  }
  
  body {
    display: flex;
    flex: 1;
    min-width: 100vw;
    min-height: 100vh;
  }
`;
