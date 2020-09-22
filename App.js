import "react-native-gesture-handler";
import React from "react";
import Main from "./src/screens/Main";
import store from "./src/redux/store";
import { Provider as StoreProvider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import * as Font from "expo-font";
import { AppLoading } from "expo";

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: "#0275d8",
  $fontFamily: "nunito-bold",
  $padding: 24,
  $fontSize: 18,
});

const loadFonts = () => {
  return Font.loadAsync({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-italic": require("./assets/fonts/Nunito-Italic.ttf"),
  });
};

export default function App() {
  console.disableYellowBox = true;
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  if (fontsLoaded) {
    return (
      <StoreProvider store={store}>
        <Main />
      </StoreProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
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
