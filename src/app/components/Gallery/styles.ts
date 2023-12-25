import styled from "styled-components";
import arrowCircle from "../../../../public/arrow-circle.svg";

export const Container = styled.section`
  padding: 64px 0 146px var(--space10);
  overflow-x: hidden;

  .swiper {
    height: 100%;
    width: 80vw;
    cursor: grab;

    opacity: 0;
  }

  .swiper-wrapper {
    width: max-content;
    display: flex;
    gap: 10px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 50vw;
    height: 50vh;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 40%;
      border-radius: 20px;
      background: linear-gradient(to bottom, transparent 1%, var(--p5));

      position: absolute;
      bottom: 0;
    }
  }

  .swiper-slide img {
    object-fit: cover;
    border-radius: 20px;
    box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.1);
  }

  .swiper-button-prev,
  .swiper-button-next {
    background: url(${arrowCircle.src}) no-repeat center center;
    width: 40px;
    height: 40px;
    margin-top: 16px;
    border-radius: 100%;
    cursor: pointer;

    position: absolute;
    bottom: -64px;
  }

  .swiper-button-prev {
    rotate: 180deg;
    right: calc(40px - 14%);
  }

  .swiper-button-next {
    right: -14%;
  }

  @media screen and (min-width: 440px) {
    .swiper {
      width: 60vw;
    }

    .swiper-wrapper {
      gap: 24px;
    }

    .swiper-button-prev {
      right: calc(40px - 49%);
    }

    .swiper-button-next {
      right: -49%;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 80px 0 146px 10%;

    .swiper {
      width: 50vw;
    }

    .swiper-slide {
      height: 80vh;
    }

    .swiper-wrapper {
      gap: 64px;
    }
  }
`;

export const Description = styled.div`
  padding-bottom: 16px;
  padding-left: 16px;

  display: grid;
  gap: 10px;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  @media screen and (min-width: 440px) {
    padding-bottom: var(--space20);
    padding-left: var(--space20);
  }

  @media screen and (min-width: 1000px) {
    padding-bottom: 40px;
    padding-left: 40px;
    gap: 16px;
  }
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: clamp(0.5rem, 1vw, 1rem);
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: #c374f8;

  width: max-content;
  padding: 4px var(--space10);
  border: 1px solid #c374f8;
  border-radius: 5px;

  @media screen and (min-width: 1000px) {
    padding: 8px 20px;
    border-radius: 10px;
  }
`;

export const Text = styled.span`
  font-size: var(--font16);
  line-height: 1.25em;
  color: #defbfb;
`;
