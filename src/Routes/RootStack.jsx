import React from "react";
import AddNotes from "../screens/AddNotes";
import ViewNotes from "../screens/ViewNotes";
import RegistrationScreen from "../screens/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AuthStack({ navigation }) {
  /* const openMenu = () => {
    navigation.toggleDrawer();
  }; */
  return (
    <Stack.Navigator initialRouteName="ViewNotes">
      <Stack.Screen name="ViewNotes" component={ViewNotes} />
      <Stack.Screen name="AddNotes" component={AddNotes} />
    </Stack.Navigator>
  );
}
