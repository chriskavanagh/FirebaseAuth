import React from "react";
import AuthStack from "./AuthStack";
import RootStack from "./RootStack";
import FoodStack from "./FoodStack";
import CartStack from "./CartStack";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="ViewNotes"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#DCDCDC" }}
      tabBarOptions={{
        labelPosition: "below-icon",
        activeBackgroundColor: "#f0edf6",
      }}
    >
      <Tab.Screen
        name="Notes"
        component={RootStack}
        options={{
          tabBarLabel: "Notes",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={AuthStack}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-call" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Food"
        component={FoodStack}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-restaurant" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-cart" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
