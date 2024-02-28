import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(82, 82, 82, 0.521);
  position: fixed;
  top: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 250px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  svg {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ModalTitle = styled.p`
  margin: 50px auto;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  max-width: 80%;
  @media (max-width: 968px) {
    font-size: 16px;
  }
`;
export const ModalButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const ModalButton = styled.button`
  padding: 10px;
  border: unset;
  width: 50%;
  font-size: 14px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 6px 3px 35px -11px rgba(0, 0, 0, 0.75);
  }
`;
