import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import MenuTab from "./menu/MenuTab";

const Tab = createBottomTabNavigator();

const TabController = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="MenuTab" component={MenuTab} />
    </Tab.Navigator>
  );
};

export default TabController;
