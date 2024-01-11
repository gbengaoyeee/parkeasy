import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home/Home";
import AssetsList from "./home/AssetsList";
import BuildingUnitsList from "./home/BuildingUnitsList";
import UnitDetails from "./home/UnitDetails";
import { Building, CommunityMembers, ParkingSpot, User } from "../types";
import AddParkingSpotScreen from "./home/AddParkingSpotScreen";
import ParkingLotList from "./home/ParkingLotList";
import ParkingSpotDetails from "./home/ParkingSpotDetails";
import OnboardUser from "./onboarding/OnboardUser";

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  Home: undefined; // No parameters expected to navigate to home
  AssetsList: undefined;
  BuildingUnitsList: { communityMember: CommunityMembers };
  UnitDetails: {
    building: Building;
    unit: string;
  };
  AddParkingSpotScreen: {
    buildings: Building[];
  };
  ParkingLotList: {
    communityMembers: CommunityMembers[];
  };
  ParkingSpotDetails: {
    parkingSpot: ParkingSpot;
  };
  OnboardUser: {
    user: User;
  }
  // ... other screens
};

export default function HomeNavigator() {
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
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal", gestureEnabled: false }}>
        <Stack.Screen name="OnboardUser" component={OnboardUser} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
