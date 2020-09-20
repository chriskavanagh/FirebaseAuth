import thunk from "redux-thunk";
//import firebase from "../firebase/config";
import rootReducer from "./reducers/rootReducer";
//import { reduxFirestore, getFirestore } from "redux-firestore";
//import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { createStore, applyMiddleware, compose } from "redux";

import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance, getFirestore } from "redux-firestore";

// const store = createStore(rootReducer, applyMiddleware(thunk));

/* const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase), // redux binding for firebase
    reduxFirestore(firebase) // redux bindings for firestore
  )
); */

const middlewares = [thunk.withExtraArgument(getFirebase)];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export default store;
