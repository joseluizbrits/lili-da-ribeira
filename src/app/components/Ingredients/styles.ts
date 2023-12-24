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

export const IngredientsList = styled.ul`
  padding: 0 var(--space10);
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    font-size: var(--font20);
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
    background-color: var(--s5);
    color: #f4c8cd;
  }

  #egg {
    background-color: #fd5c5c;
    color: var(--s4);
  }

  #seasoning {
    background-color: #0c4b4b;
    color: #fff;
  }

  #love {
    background-color: var(--s2);
    color: #fff;
  }

  @media screen and (min-width: 1000px) {
    padding: 0 10%;
    gap: 24px;

    li {
      padding: 24px;
    }

    li .wrapp {
      gap: 20px;
    }
  }
`;
