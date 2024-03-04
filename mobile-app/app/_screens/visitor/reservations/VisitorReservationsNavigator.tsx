import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VisitorReservationsHome from "./VisitorReservationsHome";

import { Listing, Reservation } from "@/app/types";
import VisitorReservationDetails from "./VisitorReservationDetails";

const Stack = createNativeStackNavigator();

export type VisitorReservationsStackParamList = {
    VisitorReservationsHome: undefined;
    VisitorReservationDetails: {
        reservation: Reservation
    }
};

const VisitorReservationsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="VisitorReservationsHome" screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="VisitorReservationsHome" component={VisitorReservationsHome} />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "fullScreenModal",  }}>
        <Stack.Screen name="VisitorReservationDetails" component={VisitorReservationDetails} options={{ headerShown: true }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default VisitorReservationsNavigator;
