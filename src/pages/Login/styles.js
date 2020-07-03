import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 448px;
  height: 408px;

  border: 1px solid;

  form {
    display: flex;
    flex-direction: column;

    width: 384px;
    margin: 40px 0 0 0;

    label {
      margin: 0 0 4px 0;

      font-size: 14px;
      font-weight: bold;
    }

    input {
      height: 40px;
      padding: 0 0 0 8px;
      margin: 0 0 30px 0;

      font-size: 16px;
    }

    button {
      height: 40px;
      background-color: black;
      color: white;
      border: 1px;

      font-size: 14px;
    }
  }
`;
