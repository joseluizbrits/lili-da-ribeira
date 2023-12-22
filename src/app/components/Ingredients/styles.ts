import styled from "styled-components";

export const Container = styled.section`
  background-color: #fff;
  padding-bottom: 160px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;

  color: var(--green3);
  width: max-content;
  margin: 0 auto;
  padding: 64px 0;
`;

export const IngredientsList = styled.ul`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    font-size: 1.25rem;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li .wrapp {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  #flour {
    background-color: var(--purple5);
    color: #f4c8cd;
  }

  #egg {
    background-color: #fd5c5c;
    color: var(--purple4);
  }

  #seasoning {
    background-color: #0c4b4b;
    color: #fff;
  }

  #love {
    background-color: var(--purple2);
    color: #fff;
  }
`;
