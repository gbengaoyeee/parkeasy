import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import AssetsList from "./AssetsList";
import BuildingUnitsList from "./BuildingUnitsList";
import { ApartmentUnit, Building, CommunityMembers, ParkingSpot, User } from "../../../types";
import AddParkingSpotScreen from "./AddParkingSpotScreen";
import ParkingLotList from "./ParkingLotList";
import ParkingSpotDetails from "./ParkingSpotDetails";
import OnboardUser from "../../visitor/onboarding/OnboardUser";
import UnitDetails from "./UnitDetails";
import CreateAListing from "../menu/CreateAListing";

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  Home: undefined; // No parameters expected to navigate to home
  AssetsList: undefined;
  BuildingUnitsList: { communityMember: CommunityMembers };
  UnitDetails: {
    building: Building;
    unit: ApartmentUnit;
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
  CreateAListing: {
    communityMembers: CommunityMembers[];
  };
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
        <Stack.Screen
          name="CreateAListing"
          component={CreateAListing}
          options={{ headerShown: true, headerTitle: "Create a Parking Spot Listing" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
