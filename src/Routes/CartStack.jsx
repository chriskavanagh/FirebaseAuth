import React from "react";
import Cart from "../screens/Cart";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function FoodStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
