import { combineReducers } from "redux";
import modalReducer from "./modal";
import listReducer from "./list"

const rootReducer = combineReducers({
  // modalReducer,
  listReducer
});

export default rootReducer;