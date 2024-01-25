import { Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { Building, CommunityMembers } from "@/app/types";
import { HomeStackParamList } from "./HomeNavigator";

interface RouteParams {
  communityMembers: CommunityMembers[];
}
const ParkingLotList = () => {
  const route = useRoute();
  const { communityMembers } = route.params as RouteParams;
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddParkingSpotScreen", {
              buildings: communityMembers.map((member) => member.building),
            });
          }}
        >
          <Text className="text-primary-3">+ Add</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <FlatList
      className="p-5"
      data={communityMembers}
      renderItem={({ item: communityMember }) => (
        <>
          <Text className="text-lg font-bold">{communityMember.building.building_name}</Text>
          <FlatList
            data={communityMember.parking_spots}
            renderItem={({ item: parkingSpot }) => (
              <TouchableOpacity
                className="bg-gray-200 p-3 flex-row justify-between mb-2 rounded-md"
                onPress={() => {
                  navigation.navigate("ParkingSpotDetails", { parkingSpot });
                }}
              >
                <Text>{parkingSpot.parking_spot_number}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    />
  );
};

export default ParkingLotList;
