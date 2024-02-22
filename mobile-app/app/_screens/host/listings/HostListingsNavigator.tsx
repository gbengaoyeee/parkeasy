import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsTab from "./ListingsTab";
import CreateAListing from "../menu/CreateAListing";
import { CommunityMembers, Listing } from "@/app/types";
import ListingDetails from "./ListingDetails";
import EditListing from "./EditListing";
import EnableHosting from "./EnableHosting";

const Stack = createNativeStackNavigator();

export type HostListingsStackParamList = {
  Listings: undefined; // No parameters expected to navigate to home
  CreateAListing: {
    communityMembers: CommunityMembers[];
  };
  ListingDetails: {
    listing: Listing;
  };
  EditListing: {
    listing: Listing;
  }
  EnableHosting: undefined
  // ... other screens
};

const HostListingsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Listings" screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen
          name="Listings"
          component={ListingsTab}
          options={{ headerShown: true, headerTitle: "" }}
        />
        <Stack.Screen
          name="CreateAListing"
          component={CreateAListing}
          options={{ headerShown: true, headerTitle: "Create a Parking Spot Listing" }}
        />
        <Stack.Screen
          name="ListingDetails"
          component={ListingDetails}
          options={{ headerShown: true, headerTitle: "" }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal", }}>
        <Stack.Screen name="EditListing" component={EditListing} options={{ headerShown: false }} />
        <Stack.Screen name="EnableHosting" component={EnableHosting} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HostListingsNavigator;
