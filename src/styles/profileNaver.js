import styled from "styled-components";

import Modal from "react-modal";

export const ModalStyleProfile = styled(Modal)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 1008px;
  height: 504px;
  display: flex;
  flex-direction: row;
  background: white;

  border: 1px solid;

  img {
    height: 502px;
    width: 504px;
  }
`;

export const Profile = styled.div`
  padding: 32px 32px;

  display: flex;
  flex-direction: column;

  h2 {
    margin: 0 170px 24px 0;
  }

  h3 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0 0 24px 0;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin: 50px 12px 0 0;
    border: none;
    background: #fff;
  }
`;

export const CloseButton = styled.div`
  width: 2000px;
  padding: 21px 21px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    border: none;
    background: #fff;
  }
`;
