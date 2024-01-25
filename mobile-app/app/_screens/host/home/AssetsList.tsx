import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "./HomeNavigator";
import { useUserContext } from "@/app/contexts/UserContext";

const AssetsList = () => {
  const { user } = useUserContext();
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const parkingSpots = user?.community_members?.map((member) => member.parking_spots)?.flat() || [];
  // const parkingSpots = [];

  if (!user) {
    return null;
  }

  return (
    <ScrollView className="p-5">
      <Text className="text-xl font-bold">My Properties</Text>
      {user?.community_members?.map((member) => (
        <TouchableOpacity
          key={member.id}
          className="bg-gray-200 p-3 flex-row justify-between"
          onPress={() => {
            navigation.navigate("BuildingUnitsList", { communityMember: member });
          }}
        >
          <Text>{member.building.building_name}</Text>
          <Text className="text-primary-3">
            {member.unit_numbers.length} {member.unit_numbers.length > 1 ? "Units" : "Unit"}
          </Text>
        </TouchableOpacity>
      ))}
      <Text className="text-xl font-bold">My Parkings</Text>
      {parkingSpots.length > 0 ? (
        <View className="flex-row justify-between p-3 bg-gray-200">
          <Text>
            {parkingSpots?.length} Parking Spot{parkingSpots?.length > 1 ? "s" : ""}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ParkingLotList", {
                communityMembers: user.community_members,
              });
            }}
          >
            <Text className="text-primary-3">View all</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex-row justify-between p-3 bg-gray-200">
          <Text>No Parking Spot</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddParkingSpotScreen", {
                buildings: user.community_members?.map((member) => member.building),
              });
            }}
          >
            <Text className="text-primary-3">+ Add</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text className="text-xl font-bold">My Energy Meter Account</Text>
      <View className="flex-row justify-between p-3 bg-gray-200">
        <Text>You have no Energy Meter linked</Text>
        <TouchableOpacity>
          <Text className="text-primary-3">+ Add</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AssetsList;
