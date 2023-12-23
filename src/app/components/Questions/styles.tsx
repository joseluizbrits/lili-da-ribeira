import styled from "styled-components";

export const Container = styled.section`
  /* margin-bottom: 120px; */
`;

export const Content = styled.div`
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
`;

export const Wrapper = styled.div`
  /* AQUI TA VAZIO */
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
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
    }
  }
`;

export const Sea = styled.div`
  margin-top: -290px;
  display: flex;
  flex-direction: column;

  #fish {
    margin-bottom: -80px;
  }
`;
