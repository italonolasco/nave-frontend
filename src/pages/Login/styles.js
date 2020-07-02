import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 448px;
  height: 408px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid;

  form {
    margin: 40px 0 0 0;
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-weight: bold;
      margin: 0 0 4px 0;
    }

    input {
      width: 384px;
      height: 40px;
      padding: 0 0 0 8px;
      margin: 0 0 30px 0;

      font-size: 16px;
    }

    button {
      width: 384px;
      height: 40px;

      background-color: black;
      color: white;
      border: 1px;
    }
  }
`;
