import React from "react";
import {
  ModalContent,
  ModalTitle,
  ModalButtonsWrapper,
  ModalButton,
} from "./styles";

function Delete({ modalState, title, closeModal, action }) {
  return (
    <ModalContent>
      <ModalTitle>{title}</ModalTitle>
      <ModalButtonsWrapper>
        <ModalButton
          onClick={() => (closeModal(), action(modalState.info))}
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid black",
          }}
        >
          ТАК
        </ModalButton>
        <ModalButton
          onClick={() => closeModal()}
          style={{
            color: "white",
            backgroundColor: "black",
            border: "1px solid black",
          }}
        >
          НІ
        </ModalButton>
      </ModalButtonsWrapper>
    </ModalContent>
  );
}

export default Delete;
