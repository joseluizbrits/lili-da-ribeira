import styled from "styled-components";
import wavesShort from "../../../../public/waves-short.svg";
import wavesMiddle from "../../../../public/waves-middle.svg";
import wavesLarge from "../../../../public/waves-large.svg";

export const Container = styled.div`
  background-color: var(--p1);
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: var(--font24);
  letter-spacing: 0.05rem;
  text-align: end;
  color: var(--p2);
  margin-right: var(--space32);

  @media screen and (min-width: 440px) {
    margin-right: 22%;
  }
`;

export const FAQ = styled.ul`
  margin: 0 var(--space10);
  padding-top: var(--space60);

  @media screen and (min-width: 400px) {
    margin: 0 10%;
  }

  @media screen and (min-width: 1000px) {
    padding-top: 140px;
    margin: 0 20%;
  }
`;

export const Question = styled.section`
  display: grid;
  grid-template-columns: 1fr max-content;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 0.875rem;
    line-height: 1.25em;
    color: var(--p5);

    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: "";
      display: block;
      width: clamp(8px, 1vw, 12px);
      height: clamp(8px, 1vw, 12px);
      border-radius: 50%;
      background-color: var(--s3);
      margin-top: -1px;
    }
  }

  svg {
    transition: 0.3s ease-in-out;
  }

  .answer {
    padding-left: 16px;
    padding-bottom: 10px;
    max-width: 35ch;

    height: 0;
    overflow-y: hidden;
    transition: height 0.3s ease;
  }

  .answer p {
    font-size: 0.75rem;
    line-height: 1.5em;
    opacity: 0;
  }

  &.active {
    .answer {
      height: 80px;
    }

    .answer p {
      opacity: 1;
    }

    svg {
      rotate: 135deg;
    }
  }

  @media screen and (min-width: 440px) {
    h3 {
      font-size: 1rem;
      padding: 8px 0;
    }

    .answer {
      max-width: 45ch;
    }

    &.active .answer {
      height: 80px;
    }

    .answer p {
      font-size: 0.875rem;
    }

    @media screen and (min-width: 1000px) {
      h3 {
        font-size: 1.5rem;
        padding: 16px 0;
        gap: 20px;
      }

      .answer {
        padding-left: 32px;
        max-width: 70ch;
      }

      .answer p {
        font-size: 1rem;
      }

      svg {
        scale: 1.2;
      }
    }
  }
`;

export const Separator = styled.hr`
  border: 1px solid var(--p2);
  opacity: 0.2;
  margin-bottom: 16px;
`;

export const Sea = styled.div`
  margin-top: -290px;
  display: flex;
  flex-direction: column;

  overflow-x: hidden;

  #fish {
    margin-bottom: -80px;
    transform: translate(-100px, 60px);
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    min-height: 200px;
    background: url(${wavesShort.src}) no-repeat;
    rotate: 180deg;

    grid-area: 1/1;
  }

  @media screen and (min-width: 440px) {
    &::after {
      min-height: 300px;
      background: url(${wavesMiddle.src}) no-repeat;
    }
  }

  @media screen and (min-width: 1000px) {
    #fish {
      margin-left: 160px;
      margin-bottom: -60px;
      scale: 2;
    }

    &::after {
      min-height: 400px;
      background: url(${wavesLarge.src}) no-repeat;
    }
  }
`;
