import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VisitorReservationsHome from "./VisitorReservationsHome";

const Stack = createNativeStackNavigator();

export type VisitorReservationsStackParamList = {
    VisitorReservationsHome: undefined;
};

const VisitorReservationsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="VisitorReservationsHome" screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="VisitorReservationsHome" component={VisitorReservationsHome} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default VisitorReservationsNavigator;
