import React from "react";
import { ModalContainer, ModalWrapper } from "./styles";
import CloseIcon from "../../assets/CloseIcon";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../store/actions/modal";
import Delete from "./Delete";
import { deleteCattegory, deleteCattegoryItem } from "../../store/actions/list";

function Modal({ modalState }) {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setCurrentModal({ state: false, flag: "", info: {} }));
  };
  const actions = {
    deleteCattegory: (info) => {
      dispatch(
        deleteCattegory({
          id: info.id,
        })
      );
    },
    deleteCattegoryItem: (info) => {
      dispatch(
        deleteCattegoryItem({
          info,
        })
      );
    },
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
                  action={actions.deleteCattegory}
                />
              );
            case "delete_item_from_catterory":
              return (
                <Delete
                  modalState={modalState}
                  title={`Видалити: "${modalState.info.name}" ?`}
                  closeModal={closeModal}
                  action={actions.deleteCattegoryItem}
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
