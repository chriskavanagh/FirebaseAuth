import { createStore } from "redux";
//import rootReducer from "./reducers/rootReducer";
import notesReducer from "./reducers/notesReducer";

const store = createStore(notesReducer);

export default store;
