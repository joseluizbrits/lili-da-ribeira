import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--green1);
`;

export const Logo = styled.div`
  padding-top: 160px;
  padding-left: 20px;

  a {
    display: grid;
  }

  a :nth-child(1) {
    font-size: 2rem;
    letter-spacing: 0.05rem;
    color: var(--green4);
    text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.1);
  }

  a :nth-child(2) {
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.05rem;
    color: var(--green3);
  }
`;

export const Media = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0 24px 20px;
`;

export const Location = styled.div`
  background-color: var(--green1);
`;

export const Card = styled.div`
  background-color: var(--green5);
  margin: 0 10px;
  padding: 10px;
  border-radius: 20px;

  display: grid;
  gap: 8px;
`;

export const Address = styled.span`
  font-size: 0.75rem;
  line-height: 1.25em;
  color: #fff;
  margin-right: 10px;
  justify-self: end;
`;

export const Copyright = styled.span`
  font-size: 0.75rem;
  line-height: 1.25em;
  text-align: center;
  color: #fff;
  margin-top: 56px;
`;
