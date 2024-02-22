import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VisitorListingsView from "./VisitorListingsView";
import { Listing, User } from "@/app/types";
import VisitorListingDetails from "./VisitorListingDetails";
import SelectDate from "./SelectDate";
import VisitorHomePage from "./VisitorHomePage";
import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";
import VisitorCheckout from "./VisitorCheckout";
import OnboardUser from "../onboarding/OnboardUser";
import { CheckoutDetails } from "@/app/services/payment";

const Stack = createNativeStackNavigator();

export type VisitorHomeStackParamList = {
  Home: undefined;
  Listings: {
    locationData: GooglePlaceData;
    locationDetails: GooglePlaceDetail;
  };
  ListingDetails: {
    listing: Listing;
    tripDates: {
      startDate: Date;
      endDate: Date;
      startTime: number;
      endTime: number;
    };
  };
  SelectDate: {
    startDate: string | null;
    endDate: string | null;
    startTime: number;
    endTime: number;
    onUpdate: (startDate: Date, endDate: Date, startTime: number, endTime: number) => void;
  };
  VisitorCheckout: {
    checkoutDetails: CheckoutDetails;
  };
  OnboardUser: {
    user: User;
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
        <Stack.Screen name="VisitorCheckout" component={VisitorCheckout} options={{ headerShown: true, headerTitle: "Checkout" }} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "fullScreenModal", gestureEnabled: false }}>
        <Stack.Screen name="SelectDate" component={SelectDate} options={{ headerShown: true }} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal", gestureEnabled: false }}>
        <Stack.Screen name="OnboardUser" component={OnboardUser} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default VisitorHomeNavigator;
