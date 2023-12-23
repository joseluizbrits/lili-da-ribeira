import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--green1);
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
  text-align: end;
  color: var(--green2);
  margin-right: 32px;
`;

export const FAQ = styled.ul`
  margin: 0 10px;
  padding-top: 60px;
`;

export const Question = styled.section`
  display: grid;
  grid-template-columns: 1fr max-content;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 0.875rem;
    color: var(--green5);
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--purple3);
      margin-top: -1px;
    }
  }

  svg {
    transition: 0.3s ease-in-out;
  }

  .answer {
    padding-left: 16px;
    padding-bottom: 10px;
    max-width: 35ch;

    height: 0;
    overflow-y: hidden;
    transition: height 0.3s ease;
  }

  .answer p {
    font-size: 0.75rem;
    opacity: 0;
  }

  &.active {
    .answer {
      height: 10vh;
    }

    .answer p {
      opacity: 1;
    }
    svg {
      rotate: 135deg;
    }
  }
`;

export const Separator = styled.hr`
  border: 1px solid var(--green2);
  opacity: 0.2;
  margin-bottom: 16px;
`;

export const Sea = styled.div`
  margin-top: -290px;
  display: flex;
  flex-direction: column;

  #fish {
    margin-bottom: -80px;
  }
`;
