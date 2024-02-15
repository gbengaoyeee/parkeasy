import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VisitorListingsView from "./VisitorListingsView";
import { Listing } from "@/app/types";
import VisitorListingDetails from "./VisitorListingDetails";
import SelectDate from "./SelectDate";
import VisitorHomePage from "./VisitorHomePage";
import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";

const Stack = createNativeStackNavigator();

export type VisitorHomeStackParamList = {
  Home: undefined;
  Listings: {
    locationData: GooglePlaceData;
    locationDetails: GooglePlaceDetail;
  };
  ListingDetails: {
    listing: Listing;
  };
  SelectDate: {
    startDate: string | null;
    endDate: string | null;
    startTime: number;
    endTime: number;
    onUpdate: (startDate: Date, endDate: Date, startTime: number, endTime: number) => void;
  };
  // ... other screens
};

const VisitorHomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={VisitorHomePage} />
        <Stack.Screen name="Listings" component={VisitorListingsView} />
        <Stack.Screen name="ListingDetails" component={VisitorListingDetails} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "fullScreenModal", gestureEnabled: false }}>
        <Stack.Screen name="SelectDate" component={SelectDate} options={{ headerShown: true }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default VisitorHomeNavigator;
