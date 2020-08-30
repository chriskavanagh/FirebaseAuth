import "react-native-gesture-handler";
import React from "react";
import Main from "./src/screens/Main";
//import store from "./src/redux/store";
import { Provider as StoreProvider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import thunk from "redux-thunk";
//import firebase from "../firebase/config";
import rootReducer from "./src/redux/reducers/rootReducer";
//import { reduxFirestore, getFirestore } from "redux-firestore";
//import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { createStore, applyMiddleware, compose } from "redux";

import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance, getFirestore } from "redux-firestore";
import rrConfig from "./src/firebase/config";
import firebase from "firebase/app";
import "firebase/auth";

/* const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase), // redux binding for firebase
    reduxFirestore(firebase) // redux bindings for firestore
  )
); */

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

const middlewares = [thunk.withExtraArgument(getFirebase)];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: "#0275d8",
  $fontFamily: "nunito-bold",
  $padding: 24,
  $fontSize: 18,
});

export default function App() {
  return (
    <StoreProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Main />
      </ReactReduxFirebaseProvider>
    </StoreProvider>
  );
}
/* return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  ); */
