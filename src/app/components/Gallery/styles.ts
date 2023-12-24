import styled from "styled-components";
import arrowCircle from "../../../../public/arrow-circle.svg";

export const Container = styled.section`
  padding: 40px 0 126px var(--space10);
  overflow-x: hidden;

  .swiper {
    height: 100%;
    width: 80vw;
  }

  /* My edition */
  .swiper-wrapper {
    width: max-content;
    display: flex;
    gap: 10px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 50vh;
    border-radius: 20px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    right: 24px;
  }

  .swiper-button-prev {
    rotate: 180deg;
    right: 66px;
  }

  @media screen and (min-width: 440px) {
    .swiper {
      width: 60vw;
    }

    .swiper-wrapper {
      gap: 24px;
    }

    .swiper-button-prev {
      right: 162px;
    }

    .swiper-button-next {
      right: 120px;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 40px 0 126px 10%;

    .swiper {
      width: 50vw;
    }

    .swiper-slide {
      height: 80vh;
    }

    .swiper-wrapper {
      gap: 64px;
    }

    .swiper-button-prev {
      right: 258px;
    }

    .swiper-button-next {
      right: 216px;
    }
  }
`;
