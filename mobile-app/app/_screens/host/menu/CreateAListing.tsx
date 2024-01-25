import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateParkingListingValidation } from "@/app/lib/validation";
import { Dropdown } from "react-native-element-dropdown";
import { CommunityMembers, Listing_Type, ParkingSpot } from "@/app/types";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import useToast from "@/app/hooks/useToast";
import { z } from "zod";
import { useUserContext } from "@/app/contexts/UserContext";
import { useCreateParkingListing } from "@/app/lib/react-query/queryAndMutations";
import Loader from "@/components/shared/Loader";
import { HostMenuStackParamList } from "./HostMenuNavigator";
import { PRICE_LIMITS } from "@/app/constants";

interface RouteParams {
  communityMembers: CommunityMembers[];
}
const CreateAListing = () => {
  const navigation = useNavigation<NavigationProp<HostMenuStackParamList>>();
  const route = useRoute();
  const { communityMembers } = route.params as RouteParams;
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>([]);
  const { showToast, toast } = useToast();
  const { user, refreshUser } = useUserContext();
  const { isPending: isAdding, mutateAsync: handleCreateListing } = useCreateParkingListing();

  const form = useForm({
    resolver: zodResolver(CreateParkingListingValidation),
    defaultValues: {
      title: "",
      description: "",
      buildingId: "",
      parkingId: "",
      price: "",
      type: "",
    },
  });

  const watchedBuildingId = form.watch("buildingId");
  const watchedParkingType = form.watch("type");

  useEffect(() => {
    const pSpots = communityMembers.find(
      (member) => member.building.id === watchedBuildingId
    )?.parking_spots;
    setParkingSpots(pSpots || []);
  }, [watchedBuildingId]);

  const onSubmit = (values: any) => {
    if (!user) {
      console.error("CreateAListing: Account not found");
      showToast({
        type: "error",
        message: `Your account could not be found please contact support at ${process.env.EXPO_PUBLIC_SUPPORT_EMAIL}`,
      });
      return;
    }
    let data = values as z.infer<typeof CreateParkingListingValidation>;
    handleCreateListing({ userId: user.id, dto: data })
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
                      data={communityMembers.map((member) => {
                        const building = member.building;
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
            {watchedBuildingId && (
              <Controller
                control={form.control}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
                  return (
                    <>
                      <Text>Select a parking spot</Text>
                      <Dropdown
                        style={styles.dropdown}
                        data={parkingSpots.map((spot) => {
                          return {
                            label: spot.parking_spot_number,
                            value: spot.id,
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
                name="parkingId"
              />
            )}

            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View className="mb-3">
                  <Text>Parking spot type</Text>
                  <Dropdown
                    style={styles.dropdown}
                    data={Object.values(Listing_Type).map((type) => {
                      return {
                        label: type,
                        value: type,
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
              name="type"
            />
          </View>

          <View className="mb-3">
            <Text className="text-xl font-bold">Parking spot information</Text>
            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View className="mb-3">
                  <Text>Give your listing an enticing title</Text>
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={error?.message}
                  />
                </View>
              )}
              name="title"
            />

            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View className="mb-3">
                  <Text>Give your listing an eye catching description</Text>
                  <Input
                    multiline
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={error?.message}
                    className="h-32"
                  />
                </View>
              )}
              name="description"
            />
            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View className="mb-3">
                  <Text>Enter a price for your listing per {watchedParkingType}</Text>
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={error?.message}
                    keyboardType="decimal-pad"
                  />
                  {watchedParkingType && (
                    <Text>
                      Price limit per {watchedParkingType} is $
                      {PRICE_LIMITS[watchedParkingType as keyof typeof PRICE_LIMITS]}
                    </Text>
                  )}
                </View>
              )}
              name="price"
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

export default CreateAListing;
