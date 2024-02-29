import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ApartmentUnit, Building } from "@/app/types";

interface RouteParams {
  building: Building;
  unit: ApartmentUnit;
}
const UnitDetails = () => {
  const route = useRoute();
  const { building, unit } = route.params as RouteParams;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ backgroundColor: "#E5E7EB", padding: 12, borderRadius: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{building.building_name}</Text>
          <Text>{building.address}</Text>
          <Text>Unit {unit.unit_number}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UnitDetails;
