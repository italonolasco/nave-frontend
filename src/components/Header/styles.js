import styled from "styled-components";

export const Container = styled.div`
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 85px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 28px;
    height: 24px;
    font-size: 18px;
    border: none;
    background-color: Transparent;

    color: var(--primary-collor);
  }
`;
