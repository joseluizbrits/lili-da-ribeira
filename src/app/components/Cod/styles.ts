import styled from "styled-components";
import cod from "../../../../public/bg-cod.jpg";

export const Container = styled.section`
  background: url(${cod.src}) fixed;
  background-size: cover;
  min-height: 780px;

  position: relative;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 2.75rem;
  line-height: 1.25em;
  letter-spacing: 0.05rem;
  color: #ffe9dc;

  max-width: 9ch;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 100px;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.25em;
  color: #fff;

  max-width: 20ch;
  margin-left: 24px;
`;

export const Button = styled.a`
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  position: absolute;
  bottom: 36px;
  right: 24px;

  background: none;
  color: #fff;
  padding: 16px 32px;
  border: 2px solid #ffe9dc;
  border-radius: 30px;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.1);
`;
