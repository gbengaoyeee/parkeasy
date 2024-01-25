import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VisitorHomeNavigator from "./home/VisitorHomeNavigator";
import VisitorMenuTab from "./menu/VisitorMenuTab";

const Tab = createBottomTabNavigator();
const VisitorTabController = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="VisitorHomeTab" component={VisitorHomeNavigator} />
      <Tab.Screen name="VisitorMenuTab" component={VisitorMenuTab} />
    </Tab.Navigator>
  );
};

export default VisitorTabController;
