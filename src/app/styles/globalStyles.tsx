import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --green1: #80BFBF;
    --green2: #4C9696;
    --green3: #247070;
    --green4: #0C4B4B;
    --green5: #002D2D;
    --purple1: #AB3CF5;
    --purple2: #9219E2;
    --purple3: #6900AE;
    --purple4: #4B017B;
    --purple5: #3D0960;
    --font16: clamp(1rem, 2vw, 2rem);
    --font20: clamp(1.25rem, 2.5vw, 2.5rem);
    --font24: clamp(1.5rem, 4vw, 4rem);
    --font40: clamp(2.5rem, 5.5vw, 5.5rem);
    --space10: 3%;
    --space20: 6%;
    --space32: 8%;
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: var(--green3);
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;
