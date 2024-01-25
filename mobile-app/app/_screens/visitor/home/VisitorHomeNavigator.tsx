import { View, Text } from 'react-native'
import React from 'react'

const VisitorHomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AssetsList" component={AssetsList} />
        <Stack.Screen
          name="BuildingUnitsList"
          component={BuildingUnitsList}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="UnitDetails"
          component={UnitDetails}
          options={{ headerShown: true, headerTitle: "Unit Details" }}
        />
        <Stack.Screen
          name="AddParkingSpotScreen"
          component={AddParkingSpotScreen}
          options={{ headerShown: true, headerTitle: "Add a Parking Spot" }}
        />
        <Stack.Screen
          name="ParkingLotList"
          component={ParkingLotList}
          options={{ headerShown: true, headerTitle: "Parking Lots" }}
        />
        <Stack.Screen
          name="ParkingSpotDetails"
          component={ParkingSpotDetails}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="CreateAListing"
          component={CreateAListing}
          options={{ headerShown: true, headerTitle: "Create a Parking Spot Listing" }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal", gestureEnabled: false }}>
        <Stack.Screen name="OnboardUser" component={OnboardUser} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default VisitorHomeNavigator