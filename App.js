import "react-native-gesture-handler";
import store from "./src/redux/store";
import NoteStack from "./src/Routes/NoteStack";
import { firebase } from "./src/firebase/config";
import React, { useEffect, useState } from "react";
import { Provider as StoreProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
//import { createStore, applyMiddleware } from "redux";
//import thunkMiddleware from "redux-thunk";
//import rootReducer from "./src/redux/reducers/rootReducer";

/* const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    storeEnhancers(applyMiddleware(thunkMiddleware))
  );
} */

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    //console.log(usersRef);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer>
          <NoteStack />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );

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
}
