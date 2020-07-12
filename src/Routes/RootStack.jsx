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
    <Stack.Navigator initialRouteName="View Notes">
      <Stack.Screen name="View Notes" component={ViewNotes} />
      <Stack.Screen name="Add Notes" component={AddNotes} />
    </Stack.Navigator>
  );
}
