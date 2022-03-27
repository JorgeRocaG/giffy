import styled from "@emotion/styled";

export const Modal = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  border-radius: 8px;
  background-color: #282c34;
  width: 300px;
  padding: 1rem;
  height: 60vh;
  margin: 10vh auto;
  position: relative;
  color: white;
`;

export const ModalClose = styled.button`
  display: block;
  margin-bottom: 32px;
`;
