import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/shared/Input";
import { UpdateParkingListingValidation } from "@/app/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Listing, Listing_Type } from "@/app/types";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { useGetHostListings, useUpdateListing } from "@/app/lib/react-query/queryAndMutations";
import { z } from "zod";
import useToast from "@/app/hooks/useToast";
import { useUserContext } from "@/app/contexts/UserContext";
import { HostListingsStackParamList } from "./HostListingsNavigator";
import Loader from "@/components/shared/Loader";
import Button from "@/components/shared/Button";
import { Dropdown } from "react-native-element-dropdown";
import { PRICE_LIMITS } from "@/app/constants";

interface RouteParams {
  listing: Listing;
}
const EditListing = () => {
  const route = useRoute();
  const { listing } = route.params as RouteParams;
  const { isPending: isUpdating, mutateAsync: handleUpdateListing } = useUpdateListing();
  const { user } = useUserContext();
  const { isFetching: listingLoading, refetch: refetchListings } = useGetHostListings(user?.id ?? "");
  const { showToast, toast } = useToast();
  const navigation = useNavigation<NavigationProp<HostListingsStackParamList>>();

  const form = useForm({
    resolver: zodResolver(UpdateParkingListingValidation),
    defaultValues: {
      title: listing.title ?? "",
      description: listing.description ?? "",
      price: `${(listing.price ?? 0) / 100}`,
      type: listing.type,
    },
  });

  const watchedParkingType = form.watch("type");

  const onSubmit = (values: any) => {
    let data = values as z.infer<typeof UpdateParkingListingValidation>;
    handleUpdateListing({ listingId: listing.id, dto: data })
      .then((resp) => {
        toast.hide();
        setTimeout(() => {
          showToast({ type: "success", message: resp.message });
        }, 500);
        return refetchListings();
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
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }} keyboardVerticalOffset={100}>
          {isUpdating && (
            <View className="mb-3 items-center">
              <Loader />
            </View>
          )}
          <View className="mb-3">
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
                  <Input onBlur={onBlur} onChangeText={onChange} value={value} errors={error?.message} />
                </View>
              )}
              name="title"
            />

            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View className="mb-3">
                  <Text>Give your listing an eye catching description</Text>
                  <Input multiline onBlur={onBlur} onChangeText={onChange} value={value} errors={error?.message} className="h-32" />
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
                    onChangeText={(text) => {
                      if (/^\d*\.?\d{0,2}$/.test(text)) {
                        onChange(text);
                      }
                    }}
                    value={value}
                    errors={error?.message}
                    keyboardType="decimal-pad"
                  />
                  <Text>
                    Price limit per {watchedParkingType} is ${PRICE_LIMITS[watchedParkingType as keyof typeof PRICE_LIMITS]}
                  </Text>
                </View>
              )}
              name="price"
            />
          </View>

          <Button
            btnTitle="Next"
            disabled={isUpdating}
            className="mt-5"
            onPress={() => {
              // console.error(errors, isValid);
              form.handleSubmit(onSubmit)();
            }}
          >
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

export default EditListing;
