import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VisitorListingsView from './VisitorListingsView';
import { Listing } from '@/app/types';
import VisitorListingDetails from './VisitorListingDetails';
import SelectDate from './SelectDate';

const Stack = createNativeStackNavigator();

export type VisitorHomeStackParamList = {
  Listings: undefined; // No parameters expected to navigate to home
  ListingDetails: {
    listing: Listing;
  }
  SelectDate: undefined;
  // ... other screens
};

const VisitorHomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Listings" screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Listings" component={VisitorListingsView} />
        <Stack.Screen name="ListingDetails" component={VisitorListingDetails} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "fullScreenModal", gestureEnabled: false }}>
        <Stack.Screen name="SelectDate" component={SelectDate} options={{ headerShown: true }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default VisitorHomeNavigator