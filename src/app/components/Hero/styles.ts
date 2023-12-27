import styled from "styled-components";
import wavesShort from "../../../../public/waves-short.svg";
import wavesMiddle from "../../../../public/waves-middle.svg";
import wavesLarge from "../../../../public/waves-large.svg";

export const Container = styled.section`
  display: grid;
  overflow-x: hidden;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    min-height: 200px;
    background: url(${wavesShort.src}) no-repeat;

    grid-area: 1/1;
  }

  @media screen and (min-width: 440px) {
    &::after {
      min-height: 300px;
      background: url(${wavesMiddle.src}) no-repeat;
    }
  }

  @media screen and (min-width: 1000px) {
    &::after {
      min-height: 400px;
      background: url(${wavesLarge.src}) no-repeat;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: var(--font24);
  line-height: 1.25em;
  color: #fff;
  max-width: 22ch;
  padding-left: var(--space32);
  padding-top: 8px;

  display: flex;
  flex-direction: column;

  grid-area: 1/1;
  position: relative;
  z-index: 1;

  animation: show 1s ease forwards;

  span {
    font-size: var(--font16);
    color: var(--p2);
  }

  @keyframes show {
    from {
      transform: translateX(-60px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media screen and (min-width: 1000px) {
    padding-left: 240px;
    max-width: 26ch;
  }
`;
