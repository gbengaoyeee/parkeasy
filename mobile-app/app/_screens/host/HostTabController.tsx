import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./home/HomeNavigator";
import MenuTab from "./menu/MenuTab";
import HostMenuNavigator from "./menu/HostMenuNavigator";
import HostListingsNavigator from "./listings/HostListingsNavigator";

const Tab = createBottomTabNavigator();

const HostTabController = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="ListingsTab" component={HostListingsNavigator} />
      <Tab.Screen name="MenuTab" component={HostMenuNavigator} />
    </Tab.Navigator>
  );
};

export default HostTabController;
