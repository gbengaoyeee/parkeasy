import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VisitorHomeNavigator from "./home/VisitorHomeNavigator";
import VisitorMenuTab from "./menu/VisitorMenuTab";
import VisitorReservationsNavigator from "./reservations/VisitorReservationsNavigator";

const Tab = createBottomTabNavigator();

export type VisitorTabParamList = {
  VisitorHomeTab: undefined;
  VisitorReservationsTab: undefined;
  VisitorMenuTab: undefined;
  // ... other screens
};
const VisitorTabController = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,  }} >
      <Tab.Screen name="VisitorHomeTab" component={VisitorHomeNavigator} options={{title: "Home", tabBarIcon: () => <Text>Home</Text>}}/>
      <Tab.Screen name="VisitorReservationsTab" component={VisitorReservationsNavigator} />
      <Tab.Screen name="VisitorMenuTab" component={VisitorMenuTab} />
    </Tab.Navigator>
  );
};

export default VisitorTabController;
