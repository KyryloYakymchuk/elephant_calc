import { CURRENT_MODAL } from "../constants/modal";

export const setCurrentModal = (payload) => ({
  type: CURRENT_MODAL,
  payload,
});