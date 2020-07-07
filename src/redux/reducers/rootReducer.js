import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import notesReducer from "./notesReducer";

const rootReducer = combineReducers({
  notesReducer,
  foodReducer,
});

export default rootReducer;
