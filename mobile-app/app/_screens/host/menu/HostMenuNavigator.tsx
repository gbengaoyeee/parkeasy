import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuTab from "./MenuTab";
import CreateAListing from "./CreateAListing";
import { CommunityMembers } from "@/app/types";

const Stack = createNativeStackNavigator();

export type HostMenuStackParamList = {
  Menu: undefined; // No parameters expected to navigate to home
  CreateAListing: {
    communityMembers: CommunityMembers[];
  };
  // ... other screens
};

const HostMenuNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Menu" component={MenuTab}/>
        <Stack.Screen
          name="CreateAListing"
          component={CreateAListing}
          options={{ headerShown: true, headerTitle: "Create a Parking Spot Listing" }}
        />
      </Stack.Group>
      {/* <Stack.Group screenOptions={{ presentation: "modal", gestureEnabled: false }}>
            <Stack.Screen name="OnboardUser" component={OnboardUser} options={{ headerShown: false }} />
          </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default HostMenuNavigator;
