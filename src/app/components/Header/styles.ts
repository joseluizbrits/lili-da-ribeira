import styled from "styled-components";

export const Wrapp = styled.div`
  padding: 20px var(--space20);
  background-color: var(--p1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1000px) {
    padding: 20px 10%;
  }
`;

export const Logo = styled.span`
  font-size: 1.75rem;
  line-height: 0.05rem;
  color: var(--p4);
  text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.1);
  animation: down 1s ease-out forwards;
`;
