import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect } from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "./HomeNavigator";
import { Building, Parking_Spot_Type } from "@/app/types";
import { Controller, Form, useForm } from "react-hook-form";
import { Dropdown } from "react-native-element-dropdown";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddParkingValidation } from "@/app/lib/validation";
import { z } from "zod";
import useToast from "@/app/hooks/useToast";
import { useAddParkingSpot } from "@/app/lib/react-query/queryAndMutations";
import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/app/contexts/UserContext";

interface RouteParams {
  buildings: Building[];
}
const AddParkingSpotScreen = () => {
  const route = useRoute();
  const { buildings } = route.params as RouteParams;
  const { user, refreshUser } = useUserContext();

  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const form = useForm({
    resolver: zodResolver(AddParkingValidation),
    defaultValues: {
      buildingId: "",
      spotLevel: "",
      spotNumber: "",
      spotType: "",
      parkingInstructions: "",
    },
  });

  const { isPending: isAdding, mutateAsync: handleAddSpot } = useAddParkingSpot();

  const { showToast, toast } = useToast();

  const onSubmit = (values: any) => {
    if (!user) {
      console.error("AddParkingSpotScreen: Account not found");
      showToast({
        type: "error",
        message: `Your account could not be found please contact support at ${process.env.EXPO_PUBLIC_SUPPORT_EMAIL}`,
      });
      return;
    }
    let data = values as z.infer<typeof AddParkingValidation>;
    handleAddSpot({ userId: user.id, dto: data })
      .then((resp) => {
        toast.hide();
        setTimeout(() => {
          showToast({ type: "success", message: resp.message });
        }, 500);
        return refreshUser();
      })
      .then(() => navigation.goBack())
      .catch((error) => {
        console.error(error.response.data.message);
        showToast({ type: "error", message: error.response.data.message });
      });
  };

  if (!user) {
    return null;
  }
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="p-5">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={100}
        >
          {isAdding && (
            <View className="mb-3 items-center">
              <Loader />
            </View>
          )}
          <View className="mb-3">
            <Text className="text-xl font-bold">Select a building</Text>
            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
                return (
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
                      onBlur={onBlur}
                      onChange={(item) => {
                        onChange(item.value);
                      }}
                    />
                    {error && <Text className="text-error">{error.message}</Text>}
                  </>
                );
              }}
              name="buildingId"
            />
          </View>

          <View className="mb-3">
            <Text className="text-xl font-bold">Parking spot information</Text>
            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View className="mb-3">
                  <Text>Parking floor level</Text>
                  <Input
                    placeholder="Enter your parking floor level"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={error?.message}
                  />
                </View>
              )}
              name="spotLevel"
            />

            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View className="mb-3">
                  <Text>Parking spot number</Text>
                  <Input
                    placeholder="Enter your parking spot number"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={error?.message}
                  />
                </View>
              )}
              name="spotNumber"
            />

            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View className="mb-3">
                  <Text>Parking spot type</Text>
                  <Dropdown
                    style={styles.dropdown}
                    data={Object.values(Parking_Spot_Type).map((spotType) => {
                      return {
                        label: spotType,
                        value: spotType,
                      };
                    })}
                    labelField="label"
                    valueField="value"
                    value={value}
                    onChange={(item) => {
                      onChange(item.value);
                    }}
                  />
                  {error && <Text className="text-error">{error.message}</Text>}
                </View>
              )}
              name="spotType"
            />

            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View className="mb-3">
                  <Text>Location instructions</Text>
                  <Input
                    placeholder="Enter parking instructions"
                    multiline
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={error?.message}
                    className="h-32"
                  />
                </View>
              )}
              name="parkingInstructions"
            />
          </View>

          <Button
            disabled={isAdding}
            className="mt-5"
            onPress={() => {
              // console.error(errors, isValid);
              form.handleSubmit(onSubmit)();
            }}
          >
            <Text className="text-white">Next</Text>
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: 5,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default AddParkingSpotScreen;
