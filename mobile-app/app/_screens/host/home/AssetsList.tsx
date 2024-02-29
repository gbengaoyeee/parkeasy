import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "./HomeNavigator";
import { useUserContext } from "@/app/contexts/UserContext";
import Colors from "@/constants/Colors";

const AssetsList = () => {
  const { user } = useUserContext();
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const parkingSpots = user?.community_members?.map((member) => member.parking_spots)?.flat() || [];
  // const parkingSpots = [];

  if (!user) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Properties</Text>
        {user?.community_members?.map((member) => (
          <TouchableOpacity
            key={member.id}
            style={{ backgroundColor: "#E5E7EB", padding: 12, flexDirection: "row", justifyContent: "space-between" }}
            onPress={() => {
              navigation.navigate("BuildingUnitsList", { communityMember: member });
            }}
          >
            <Text>{member.building.building_name}</Text>
            <Text style={{ color: Colors.light["primary-3"] }}>
              {member.apartment_units && `${member.apartment_units.length} Unit ${member.apartment_units.length > 1 ? "s" : ""}`}
            </Text>
          </TouchableOpacity>
        ))}
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Parkings</Text>
        {parkingSpots.length > 0 ? (
          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 12, backgroundColor: "#E5E7EB" }}>
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
              <Text style={{ color: Colors.light["primary-3"]  }}>View all</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 12, backgroundColor: "#E5E7EB" }}>
            <Text>No Parking Spot</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddParkingSpotScreen", {
                  buildings: user.community_members?.map((member) => member.building),
                });
              }}
            >
              <Text style={{ color: Colors.light["primary-3"]  }}>+ Add</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Energy Meter Account</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 12, backgroundColor: "#E5E7EB" }}>
          <Text>You have no Energy Meter linked</Text>
          <TouchableOpacity>
            <Text style={{ color: Colors.light["primary-3"]  }}>coming soon</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssetsList;
