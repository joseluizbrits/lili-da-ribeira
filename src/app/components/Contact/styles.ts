import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(to bottom, #fff 35%, var(--p4));
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    height: 800px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  margin-top: -120px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: var(--font24);
  line-height: 1.25em;
  letter-spacing: 0.05rem;
  text-align: center;
  color: var(--s3);
  max-width: 21ch;
`;

export const Button = styled.a`
  font-weight: 700;
  font-size: var(--font12);
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  background: var(--s3);
  color: #f4c8cd;
  padding: 16px 32px;
  border-radius: 30px;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
