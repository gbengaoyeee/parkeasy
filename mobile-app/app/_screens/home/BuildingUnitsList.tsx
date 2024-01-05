import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { CommunityMembers } from "@/app/types";
import { HomeStackParamList } from "../HomeNavigator";

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
      data={communityMember.unit_numbers}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="bg-gray-200 p-3 flex-row justify-between"
          onPress={() => {
            navigation.navigate("UnitDetails", { building: communityMember.building, unit: item });
          }}
        >
          {/* <Text>{member.building.building_name}</Text> */}
          <Text className="text-primary-3">Unit {item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default BuildingUnitsList;
