import React from "react";
import { ModalContainer, ModalWrapper } from "./styles";
import CloseIcon from "../../assets/CloseIcon";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../store/actions/modal";
import Delete from "./Delete";

function Modal({ modalState }) {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setCurrentModal({ state: false, flag: "", info: {} }));
  };
  return (
    <ModalWrapper>
      <ModalContainer>
        <CloseIcon onClick={() => closeModal()} />
        {(() => {
          switch (modalState.flag) {
            case "delete_cattegory":
              return (
                <Delete
                  modalState={modalState}
                  title={`Видалити категорію: "${modalState.info.name}" ?`}
                  closeModal={closeModal}
                  dispatch={dispatch}
                />
              );

            default:
              return null;
          }
        })()}
      </ModalContainer>
    </ModalWrapper>
  );
}

export default Modal;
