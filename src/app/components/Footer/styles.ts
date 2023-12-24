import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--p1);
`;

export const Logo = styled.div`
  padding-top: 160px;
  padding-left: var(--space20);

  a {
    display: grid;
    width: max-content;
  }

  a :nth-child(1) {
    font-size: clamp(2rem, 3vw, 3rem);
    letter-spacing: 0.05rem;
    color: var(--p4);
    text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.1);
  }

  a :nth-child(2) {
    font-weight: 700;
    font-size: clamp(0.875rem, 1.25vw, 1.25rem);
    letter-spacing: 0.05rem;
    color: var(--p3);
  }

  @media screen and (min-width: 1000px) {
    padding-top: 280px;
    padding-left: 10%;
  }
`;

export const Media = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0 var(--space20) var(--space20);

  @media screen and (min-width: 1000px) {
    padding-left: 10%;
  }
`;

export const Location = styled.div`
  background: linear-gradient(to bottom, var(--p1), var(--p4));
  padding-bottom: var(--space10);
`;

export const Card = styled.div`
  background-color: var(--p5);
  margin: 0 var(--space10);
  padding: 10px;
  border-radius: 20px;

  display: grid;
  gap: 8px;

  @media screen and (min-width: 1000px) {
    margin: 0 var(--space20);
    padding: 20px;
  }
`;

export const Address = styled.span`
  font-size: var(--font12);
  line-height: 1.25em;
  color: #fff;
  margin-right: 10px;
  justify-self: end;
`;

export const Copyright = styled.span`
  font-size: var(--font12);
  line-height: 1.25em;
  text-align: center;
  color: #fff;
  margin-top: 56px;
`;
