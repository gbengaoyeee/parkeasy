import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home/Home";
import AssetsList from "./home/AssetsList";
import BuildingUnitsList from "./home/BuildingUnitsList";
import UnitDetails from "./home/UnitDetails";
import { Building, CommunityMembers } from "../types";
import AddParkingSpotScreen from "./home/AddParkingSpotScreen";

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
  }
  // ... other screens
};

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
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
      <Stack.Screen name="AddParkingSpotScreen" component={AddParkingSpotScreen} options={{ headerShown: true, headerTitle: "Add a Parking Spot" }} />
    </Stack.Navigator>
  );
}
