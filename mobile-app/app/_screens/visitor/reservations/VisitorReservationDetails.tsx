import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Linking, Platform } from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { VisitorReservationsStackParamList } from "./VisitorReservationsNavigator";
import { AntDesign } from "@expo/vector-icons";
import { Reservation } from "@/app/types";
import moment from "moment";
import { formatCurrency } from "@/app/utils/formatter";
import MapView, { Marker } from "react-native-maps";

interface RouteParams {
  reservation: Reservation;
}

const VisitorReservationDetails = () => {
  const route = useRoute();
  const { reservation } = route.params as RouteParams;
  const navigation = useNavigation<NavigationProp<VisitorReservationsStackParamList>>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeIcon}>
          <AntDesign name="close" size={15} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const openInMaps = (lat: number, lng: number, label?: string | null) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    // const lab = label ? label : `${lat},${lng}`;
    // const url = Platform.select({
    //   ios: "maps:" + lat + "," + lng + "?q=" + label,
    //   android: "geo:" + lat + "," + lng + "?q=" + label,
    // });
    if (!url) return;
    Linking.openURL(url);
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Reservation details</Text>

        <View style={styles.timeContainer}>
          <View>
            <Text style={styles.subHeader}>Start time</Text>
            <Text>{moment(reservation?.start_date).format("MMM. DD, YYYY h:mm A")}</Text>
          </View>
          <View style={styles.verticalLine} />
          <View>
            <Text style={styles.subHeader}>End time</Text>
            <Text>{moment(reservation?.end_date).format("MMM. DD, YYYY h:mm A")}</Text>
          </View>
        </View>

        <Text style={styles.subHeader}>Payment info</Text>
        <View style={styles.paymentInfoContainer}>
          <Text style={{ ...styles.subHeader, marginBottom: 25 }}>Total cost:</Text>
          <Text>{reservation.charge && formatCurrency((reservation.charge as any)["amount_captured"] / 100)}</Text>
        </View>

        <Text style={styles.subHeader}>Location</Text>
        <View style={styles.paymentInfoContainer}>
          <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <MapView
              onPress={() => {
                console.log("map pressed");
                openInMaps(
                    reservation.listing?.parking_spot?.building.lat || 0, 
                    reservation.listing?.parking_spot?.building.lng || 0, 
                    reservation.listing?.parking_spot?.building.building_name);
              }}
              style={styles.map}
              // provider={PROVIDER_GOOGLE}
              region={{
                latitude: reservation.listing?.parking_spot?.building.lat || 0,
                longitude: reservation.listing?.parking_spot?.building.lng || 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              zoomEnabled={false}
              scrollEnabled={false}
              rotateEnabled={false}
            >
              <Marker
                coordinate={{
                  latitude: Number(reservation.listing?.parking_spot?.building.lat),
                  longitude: Number(reservation.listing?.parking_spot?.building.lng),
                }}
              />
            </MapView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    width: "100%",
    borderRadius: 10,
  },
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    padding: 15,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
  },
  subHeader: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 15,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  verticalLine: {
    width: 1,
    height: "100%",
    backgroundColor: "#00000032",
  },
  paymentInfoContainer: {
    flexDirection: "row",
    columnGap: 10,
  },
  closeIcon: {
    borderWidth: 1,
    borderColor: "#00000032",
    borderRadius: 50,
    padding: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 2.27,
  },
});

export default VisitorReservationDetails;
