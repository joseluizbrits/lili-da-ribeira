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
