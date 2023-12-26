import styled from "styled-components";

export const Container = styled.section`
  background-color: #fff;
  padding-bottom: 180px;
`;

export const Title = styled.h2`
  font-size: var(--font40);
  font-weight: 500;

  color: var(--p3);
  width: max-content;
  margin: 0 auto;
  padding: 100px 0;
`;

export const List = styled.ul`
  padding: 0 var(--space10);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1000px) {
    padding: 0 10%;
    gap: 24px;
  }
`;

export const Name = styled.div`
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: 0.3s ease;

  .wrapp {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .wrapp h3 {
    font-weight: 400;
    font-size: var(--font20);
  }

  .arrow {
    transition: 0.3s ease;
  }

  &#potato {
    background-color: var(--s5);
    color: #f4c8cd;
  }

  &#potato.active {
    background-color: #44046d;
  }

  &#egg {
    background-color: #fd5c5c;
    color: var(--s4);
  }

  &#egg.active {
    background-color: #ff6a6a;
  }

  &#seasoning {
    background-color: #0c4b4b;
    color: #fff;
  }

  &#seasoning.active {
    background-color: #0b5151;
  }

  &#love {
    background-color: var(--s2);
    color: #fff;
  }

  &#love.active {
    background-color: #9c2ce6;
  }

  &.active {
    border-radius: 10px 10px 0 0;

    .arrow {
      rotate: 90deg;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 24px;

    .wrapp {
      gap: 20px;
    }

    .wrapp h3 {
      font-size: 2rem;
    }
  }
`;

export const Description = styled.div`
  margin-top: -6px;
  border-radius: 0 0 20px 20px;

  height: 0;
  transition: 0.3s ease;

  &#potato-desc {
    background-color: var(--s5);
  }

  &#egg-desc {
    background-color: #fd5c5c;
  }

  &#seasoning-desc {
    background-color: #0c4b4b;
  }

  &#love-desc {
    background-color: var(--s2);
  }

  p {
    font-size: var(--font16);
    line-height: 1.25em;
    color: #fff;
    padding: 12px 0;
    padding-left: 58px;
    max-width: 32ch;

    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease;
  }

  &.active {
    height: 64px;

    p {
      opacity: 0.9;
      pointer-events: all;
    }
  }

  @media screen and (min-width: 1000px) {
    p {
      font-size: 1.5rem;
      max-width: max-content;
      padding: 20px 0;
      padding-left: 84px;
    }

    &.active {
      height: 80px;
    }
  }
`;
