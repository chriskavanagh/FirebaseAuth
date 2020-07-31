import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import notesReducer from "./notesReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

/* export default combineReducers({
  notesReducer,
  menuReducer,
}); */

const rootReducer = combineReducers({
  notesReducer,
  menuReducer,
  userReducer,
  cartReducer,
});

export default rootReducer;
