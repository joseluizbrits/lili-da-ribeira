import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --p1: #80BFBF;
    --p2: #4C9696;
    --p3: #247070;
    --p4: #0C4B4B;
    --p5: #002D2D;
    --s1: #AB3CF5;
    --s2: #9219E2;
    --s3: #6900AE;
    --s4: #4B017B;
    --s5: #3D0960;
    --font12: clamp(0.75rem, 1vw, 1rem);
    --font16: clamp(1rem, 2vw, 2rem);
    --font20: clamp(1.25rem, 2.5vw, 2.5rem);
    --font24: clamp(1.5rem, 4vw, 4rem);
    --font40: clamp(2.5rem, 5.5vw, 5.5rem);
    --font56: clamp(3.25rem, 6vw, 6rem);
    --space10: 3%;
    --space20: 6%;
    --space32: 8%;
    --space60: 16%;
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: var(--p3);
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
