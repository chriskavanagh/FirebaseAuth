import React from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import NavHeader from "../components/NavHeader";

const Stack = createStackNavigator();

export default function AuthStack({ navigation }) {
  /* const openMenu = () => {
    navigation.toggleDrawer();
  }; */
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "#f96332" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
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
