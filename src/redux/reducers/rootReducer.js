import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
//import notesReducer from "./notesReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

/* export default combineReducers({
  notesReducer,
  menuReducer,
}); */

const rootReducer = combineReducers({
  //notesReducer,
  menuReducer,
  userReducer,
  cartReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
