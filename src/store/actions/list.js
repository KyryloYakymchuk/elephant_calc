import {
  ADD_NEW_CATTEGORY,
  UPDATE_LIST_ITEM,
  DELETE_CATTEGORY,
  DELETE_CATTEGORY_ITEM,
  SET_LIST_FROM_FB
} from "../constants/list";

export const updateListData = (payload) => ({
  type: UPDATE_LIST_ITEM,
  payload,
});
export const addNewCattegory = (payload) => ({
  type: ADD_NEW_CATTEGORY,
  payload,
});

export const deleteCattegory = (payload) => ({
  type: DELETE_CATTEGORY,
  payload,
});
export const deleteCattegoryItem = (payload) => ({
  type: DELETE_CATTEGORY_ITEM,
  payload,
});

export const setListFBData = (payload) => ({
  type: SET_LIST_FROM_FB,
  payload,
});
