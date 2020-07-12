import React from "react";
import Menu from "../screens/Menu";
import AddFood from "../screens/AddFood";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function FoodStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Add Food" component={AddFood} />
      {/* <Stack.Screen name="FoodList" component={FoodList} /> */}
    </Stack.Navigator>
  );
}
