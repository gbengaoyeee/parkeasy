import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { ParkingSpot } from "@/app/types";
import { HomeStackParamList } from "./HomeNavigator";

interface RouteParams {
  parkingSpot: ParkingSpot;
}
const ParkingSpotDetails = () => {
  const route = useRoute();
  const { parkingSpot } = route.params as RouteParams;

  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: parkingSpot.parking_spot_number,
    });
  }, [navigation]);
  return (
    <View className="p-5">
      <Text>Spot Information</Text>
      <View className="bg-gray-200 p-3 flex-row justify-between mb-3">
        <Text>Parking floor number</Text>
        <Text>{parkingSpot.parking_level}</Text>
      </View>
      <View className="bg-gray-200 p-3 flex-row justify-between mb-3">
        <Text>Parking spot number</Text>
        <Text>{parkingSpot.parking_spot_number}</Text>
      </View>
      <View className="bg-gray-200 p-3 flex-row justify-between mb-3">
        <Text>QR code</Text>
      </View>
      <Image source={{ uri: parkingSpot?.qr_code?.image_url ?? "" }} style={styles.qrCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCode: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default ParkingSpotDetails;
