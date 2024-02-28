import React from "react";
import {
  ModalContent,
  ModalTitle,
  ModalButtonsWrapper,
  ModalButton,
} from "./styles";
import { deleteCattegory } from "../../store/actions/list";

function Delete({ modalState, title, closeModal, dispatch }) {
  const handleCattegoryDelete = (id) => {
    dispatch(
      deleteCattegory({
        id,
      })
    );
  };

  return (
    <ModalContent>
      <ModalTitle>{title}</ModalTitle>
      <ModalButtonsWrapper>
        <ModalButton
          onClick={() => (
            closeModal(), handleCattegoryDelete(modalState.info.id)
          )}
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
