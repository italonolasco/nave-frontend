import styled from "styled-components";

import Modal from "react-modal";

export const ModalStyle = styled(Modal)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 592px;
  height: 160px;
  background: white;

  border: 1px solid;

  padding: 32px 32px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      margin: 0 0 24px 0;
    }

    button {
      align-self: flex-start;
      border: none;
      background: #fff;
    }
  }
`;
