import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin: 60px 0;

    h2 {
      margin: 0 0 0 12px;
    }
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  label {
    display: block;
    margin: 0 0 4px 0;

    font-size: 14px;
    font-weight: bold;
  }

  p {
    margin: 0;
  }

  input {
    height: 40px;
    width: 280px;
    padding: 0 0 0 8px;
    font-size: 16px;
  }

  button {
    margin: 20px 0 0 0;

    height: 40px;
    width: 176px;
    background-color: black;
    color: white;
    border: 1px;

    font-size: 14px;
  }
`;
