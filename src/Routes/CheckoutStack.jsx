import React from "react";
import Checkout from "../screens/Checkout";
import NavHeader from "../components/NavHeader";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function FoodStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Checkout"
      screenOptions={{
        headerStyle: { backgroundColor: "#f96332" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }}
      />

      {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
    </Stack.Navigator>
  );
}
