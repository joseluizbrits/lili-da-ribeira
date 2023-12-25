import styled from "styled-components";

export const Container = styled.section`
  background-color: #ffefdf;
  padding-bottom: 200px;

  position: relative;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: var(--font56);
  line-height: 1.25em;
  letter-spacing: 0.05rem;
  text-align: center;
  color: #f29764;

  max-width: 5ch;
  margin: 0 auto;
  padding: 100px 0;
`;

export const Content = styled.div`
  display: grid;
  gap: 220px;
`;

export const ImageWrapper = styled.div`
  width: clamp(280px, 40vw, 800px);
  height: clamp(260px, 36vw, 720px);

  position: relative;

  p {
    background-color: #ffdbb3;
    color: #540d0d;
    padding: var(--space20);
    border-radius: 20px;

    font-size: var(--font20);
    line-height: 1.25em;

    position: relative;
    z-index: 1;
  }

  &#story1 {
    margin-left: var(--space10);

    p {
      bottom: -72%;
      right: -60%;
      max-width: 15ch;
    }
  }

  &#story2 {
    width: clamp(200px, 32vw, 660px);
    height: clamp(280px, 40vw, 720px);

    justify-self: end;
    margin-right: var(--space10);

    p {
      background-color: var(--p4);
      color: #f29764;

      bottom: -62%;
      left: -50%;
      max-width: 20ch;
    }
  }

  &#story3 {
    margin-left: var(--space32);
    width: clamp(240px, 32vw, 720px);

    p {
      bottom: -66%;
      right: -42%;
      max-width: 20ch;
    }
  }

  @media screen and (min-width: 1000px) {
    &#story1 {
      p {
        right: -70%;
      }
    }

    &#story2 {
      p {
        bottom: -75%;
      }
    }

    &#story3 {
      margin-top: 100px;

      p {
        right: -68%;
      }
    }
  }
`;

export const LastDescription = styled.p`
  font-size: var(--font20);
  line-height: 1.25em;
  color: #540d0d;
  margin-left: var(--space10);
  max-width: 28ch;

  @media screen and (min-width: 1000px) {
    font-size: 3rem;
    margin-top: 180px;
    margin-left: 18%;
  }
`;

export const HandsOn = styled.div`
  width: clamp(268px, 31vw, 960px);
  height: clamp(345px, 40vw, 1240px);

  overflow-x: hidden;
  position: absolute;
  bottom: -160px;
  right: 0;
  z-index: 1;

  @media screen and (min-width: 1000px) {
    bottom: -240px;
  }
`;
