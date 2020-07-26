import "react-native-gesture-handler";
import React from "react";
import Main from "./src/screens/Main";
import store from "./src/redux/store";
import { Provider as StoreProvider } from "react-redux";

export default function App() {
  return (
    <StoreProvider store={store}>
      <Main />
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
