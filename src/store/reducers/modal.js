import { CURRENT_MODAL } from "../constants/modal";

const initialState = {
  currentModal: { state: false, flag: "", info: {} },
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_MODAL:
      return {
        ...state,
        currentModal: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default modalReducer;
