import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 32px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 40px 0;

  button {
    height: 40px;
    width: 176px;
    background-color: black;
    color: white;
    border: 1px;

    font-size: 14px;
  }
`;

export const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;

  img {
    height: 280px;
    width: 280px;
  }

  strong {
    display: block;
    margin: 4px 0;
  }

  p {
    margin: 0 0 8px 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin: 0 12px 0 0;
    border: none;
    background: #fff;
  }
`;
