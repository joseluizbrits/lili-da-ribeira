import styled from "styled-components";
import codMobile from "../../../../public/cod-mobile.jpg";
import codDesktop from "../../../../public/cod-desktop.jpg";

export const Container = styled.section`
  background: url(${codMobile.src}) fixed center center;
  background-size: cover;
  min-height: 780px;

  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #000;
    opacity: 0.3;
  }

  @media screen and (min-width: 1000px) {
    background: url(${codDesktop.src}) fixed center center;
  }
`;

export const Content = styled.div`
  margin: 0 var(--space20);
  min-height: 780px;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 1000px) {
    margin: 0 10%;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: var(--font40);
  line-height: 1.25em;
  letter-spacing: 0.05rem;
  color: #ffe9dc;

  max-width: 9ch;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Paragraph = styled.p`
  font-size: var(--font24);
  line-height: 1.25em;
  color: #fff;

  max-width: 20ch;

  @media screen and (min-width: 1000px) {
    font-size: 2.5rem;
    margin-top: -32px;
  }
`;

export const Button = styled.a`
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  position: absolute;
  bottom: 36px;
  right: 0;

  background: none;
  color: #fff;
  padding: 16px 32px;
  border: 2px solid #ffe9dc;
  border-radius: 30px;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 1000px) {
    font-size: 1rem;
    bottom: 56px;
  }
`;
