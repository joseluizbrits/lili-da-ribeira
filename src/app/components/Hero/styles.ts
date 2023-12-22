import styled from "styled-components";

export const Container = styled.section`
  height: 200px;
  position: relative;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.25em;
  color: #fff;
  max-width: 22ch;
  padding-left: 32px;
  padding-top: 8px;

  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1;

  span {
    font-size: 1rem;
    color: var(--green2);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
`;
