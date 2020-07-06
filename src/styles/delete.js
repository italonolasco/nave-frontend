import styled from "styled-components";

import Modal from "react-modal";

export const ModalStyleDelete = styled(Modal)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContentDelete = styled.div`
  width: 592px;
  height: 233px;
  background: white;

  border: 1px solid;

  padding: 32px 32px;

  h1 {
    margin: 0 0 24px 0;
  }

  p {
    margin: 0 0 33px 0;
  }

  .cancel {
    margin: 0 24px 0 0;

    height: 40px;
    width: 176px;
    background-color: #fff;
    color: black;
    border: 1px solid;

    font-size: 14px;
  }

  .confirm {
    margin: 0 24px 0 0;

    height: 40px;
    width: 176px;
    background-color: black;
    color: white;
    border: 1px;

    font-size: 14px;
  }
`;
