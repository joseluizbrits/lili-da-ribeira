import styled from "styled-components";
import wavesShort from "../../../../public/waves-short.svg";
import wavesMiddle from "../../../../public/waves-middle.svg";
import wavesLarge from "../../../../public/waves-large.svg";

export const Container = styled.section`
  display: grid;
  overflow-x: hidden;
  position: relative;
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

  span {
    font-size: var(--font16);
    color: var(--green2);
  }
`;

export const Waves = styled.div`
  width: 100%;
  min-height: 200px;
  background: url(${wavesShort.src}) no-repeat;

  grid-area: 1/1;

  @media screen and (min-width: 430px) {
    min-height: 300px;
    background: url(${wavesMiddle.src}) no-repeat;
  }

  @media screen and (min-width: 1000px) {
    min-height: 400px;
    background: url(${wavesLarge.src}) no-repeat;
  }
`;
