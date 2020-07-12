import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import notesReducer from "./notesReducer";

/* export default combineReducers({
  notesReducer,
  menuReducer,
}); */

const rootReducer = combineReducers({
  notesReducer,
  menuReducer,
});

export default rootReducer;
