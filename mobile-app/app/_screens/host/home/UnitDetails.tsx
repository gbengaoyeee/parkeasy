import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Building } from "@/app/types";

interface RouteParams {
  building: Building;
  unit: string;
}
const UnitDetails = () => {
  const route = useRoute();
  const { building, unit } = route.params as RouteParams;
  return (
    <ScrollView className="p-5">
      <View className="bg-gray-200 p-3 rounded-lg">
        <Text className="text-xl font-bold">{building.building_name}</Text>
        <Text className="">{building.address}</Text>
        <Text className="">Unit {unit}</Text>
      </View>
    </ScrollView>
  );
};

export default UnitDetails;
