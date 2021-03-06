import "react-native-gesture-handler";
import store from "../redux/store";
import { decode, encode } from "base-64";
import { firebase } from "../firebase/config";
import TabNavigator from "../Routes/TabNavigator";
import React, { useEffect, useState } from "react";
import { Provider as StoreProvider, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
//import { setUser } from "./src/redux/actions/userActions";
//import { useDispatch } from "react-redux";

// Firebase won't work without this.
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

//export const UserContext = React.createContext({});

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    //console.log(usersRef);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        //dispatch(setUser(user)); wont work/ctx error
        console.log(user.email);
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            //setUser(userData);
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
          <TabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
