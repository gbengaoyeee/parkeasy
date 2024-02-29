import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { CommunityMembers } from "@/app/types";
import { HomeStackParamList } from "./HomeNavigator";
import Colors from "@/constants/Colors";

interface RouteParams {
  communityMember: CommunityMembers;
}
const BuildingUnitsList = () => {
  const route = useRoute();
  const { communityMember } = route.params as RouteParams;

  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: communityMember.building.building_name,
    });
  }, [navigation]);

  return (
    <FlatList
      data={communityMember.apartment_units}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ backgroundColor: "#E5E7EB", padding: 12, flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => {
            navigation.navigate("UnitDetails", { building: communityMember.building, unit: item });
          }}
        >
          {/* <Text>{member.building.building_name}</Text> */}
          <Text style={{ color: Colors.light["primary-3"] }}>Unit {item.unit_number}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default BuildingUnitsList;
