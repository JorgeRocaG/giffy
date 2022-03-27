import React from "react";
import ReactDOM from "react-dom";
import { Modal, ModalWrapper, ModalClose } from "./styles";

function ModalComponent({ children, onClose }) {
  return (
    <Modal>
      <ModalWrapper>
        <ModalClose onClick={onClose}>X</ModalClose>
        {children}
      </ModalWrapper>
    </Modal>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <ModalComponent onClose={onClose}> {children}</ModalComponent>,
    document.getElementById("modal-root")
  );
}
