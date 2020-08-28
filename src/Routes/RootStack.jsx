import React from "react";
//import AddNotes from "../screens/AddNotes";
//import ViewNotes from "../screens/ViewNotes";
import HomePage from "../screens/Home";
import NavHeader from "../components/NavHeader";
import { createStackNavigator } from "@react-navigation/stack";
//import RegistrationScreen from "../screens/RegistrationScreen";

const Stack = createStackNavigator();

export default function AuthStack({ navigation }) {
  /* const openMenu = () => {
    navigation.toggleDrawer();
  }; */
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#f96332" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
