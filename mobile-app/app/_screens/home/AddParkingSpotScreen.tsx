import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../HomeNavigator";
import { Building } from "@/app/types";
import { Controller, useForm } from "react-hook-form";
import { Dropdown } from "react-native-element-dropdown";

interface RouteParams {
  buildings: Building[];
}
const AddParkingSpotScreen = () => {
  const route = useRoute();
  const { buildings } = route.params as RouteParams;

  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      buildingId: "",
    },
  });
  return (
    <ScrollView className="p-5">
      <Text className="text-xl font-bold">Select a building</Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: "This is required.",
          },
          pattern: {
            value: /^\+?[1-9]\d{1,14}$/,
            message: "Please enter a valid phone number",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Dropdown
              style={styles.dropdown}
              data={buildings.map((building) => {
                return {
                  label: building.building_name,
                  value: building.id,
                };
              })}
              labelField="label"
              valueField="value"
              value={value}
              onChange={onChange}
            />
          </>
        )}
        name="buildingId"
      />

      <Text className="text-xl font-bold">Parking spot information</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    // height: 50,
    paddingVertical: 5,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default AddParkingSpotScreen;
