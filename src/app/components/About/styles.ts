import styled from "styled-components";

export const Container = styled.section`
  background-color: #ffefdf;
  padding-bottom: 200px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 3.5rem;
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
  width: 280px;
  height: 260px;

  position: relative;

  p {
    background-color: #ffdbb3;
    color: #540d0d;
    padding: 16px;
    border-radius: 20px;

    font-size: 1.25rem;
    line-height: 1.25em;

    position: relative;
    z-index: 1;
  }

  &#story1 {
    margin-left: 10px;

    p {
      bottom: -185px;
      right: -170px;
      max-width: 15ch;
    }
  }

  &#story2 {
    justify-self: end;
    margin-right: 10px;
    width: 200px;

    p {
      background-color: var(--green4);
      color: #f29764;

      bottom: -160px;
      left: -100px;
      max-width: 20ch;
    }
  }

  &#story3 {
    margin-left: 32px;
    width: 240px;

    p {
      bottom: -170px;
      right: -100px;
      max-width: 20ch;
    }
  }
`;

export const LastDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.25em;
  color: #540d0d;
  margin-left: 10px;
  max-width: 28ch;
`;

export const HandsOn = styled.div`
  width: 268px;
  height: 345px;

  position: absolute;
  right: 0;
  z-index: 1;
`;
