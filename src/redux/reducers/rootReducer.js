import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import notesReducer from "./notesReducer";
import userReducer from "./userReducer";

/* export default combineReducers({
  notesReducer,
  menuReducer,
}); */

const rootReducer = combineReducers({
  notesReducer,
  menuReducer,
  userReducer,
});

export default rootReducer;
