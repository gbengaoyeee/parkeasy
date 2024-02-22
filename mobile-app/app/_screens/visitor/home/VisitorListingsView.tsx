import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGetVisitorListings } from "@/app/lib/react-query/queryAndMutations";
import Loader from "@/components/shared/Loader";
import { formatCurrency } from "@/app/utils/formatter";
import MapView, { Details, Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import * as Location from "expo-location";
import useToast from "@/app/hooks/useToast";
import { useDebounce } from "@/app/hooks/useDebounce";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { VisitorHomeStackParamList } from "./VisitorHomeNavigator";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";
import { createDateWithTime } from "@/app/utils/reusable";

interface RouteParams {
  locationData: GooglePlaceData;
  locationDetails: GooglePlaceDetail;
}

const VisitorListingsView = () => {
  const { showToast } = useToast();

  const route = useRoute();
  const { locationData, locationDetails } = route.params as RouteParams;
  const navigation = useNavigation<NavigationProp<VisitorHomeStackParamList>>();
  const [startDate, setStartDate] = useState<Date>(moment(new Date()).toDate());
  const [endDate, setEndDate] = useState<Date>(moment(new Date()).add(7, "days").toDate());
  const [startTime, setStartTime] = useState<number>(10);
  const [endTime, setEndTime] = useState<number>(18);

  // const [location, setLocation] = useState<{
  //   coords: { latitude: number; longitude: number };
  // }>({
  //   coords: {
  //     latitude: 0,
  //     longitude: 0,
  //   },
  // });

  const {
    data: listings,
    isFetching: listingLoading,
    refetch,
  } = useGetVisitorListings(
    locationDetails.geometry.location.lat,
    locationDetails.geometry.location.lng,
    createDateWithTime(moment(startDate).format("YYYY-MM-DD"), startTime).getTime(),
    createDateWithTime(moment(endDate).format("YYYY-MM-DD"), endTime).getTime()
  );

  const handleSelectDate = (startDate: Date, endDate: Date, startTime: number, endTime: number) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setStartTime(startTime);
    setEndTime(endTime);

    refetch();
  };

  const { debounce } = useDebounce();

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       showToast({ type: "error", message: "Please enable location access in settings" });
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation({
  //       coords: {
  //         latitude: location.coords.latitude,
  //         longitude: location.coords.longitude,
  //       },
  //     });
  //   })();
  // }, []);

  // useEffect(() => {
  //   if (location) {
  //     onRegionChangeDebounce();
  //   }
  // }, [location?.coords]);

  // const onRegionChangeDebounce = debounce(() => {
  //   refetch();
  // }, 5000);

  // const onRegionChangeComplete = (region: Region, details: Details) => {
  //   const newLoc = location;
  //   if (details.isGesture) {
  //     setLocation({
  //       coords: {
  //         latitude: region.latitude,
  //         longitude: region.longitude,
  //       },
  //     });
  //   }
  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <MapView
            style={styles.map}
            // provider={PROVIDER_GOOGLE}
            region={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onRegionChangeComplete={(region, _) => {
              onRegionChangeComplete(region, _);
            }}
            showsUserLocation
          >
            {listings?.map((listing) => (
              <Marker
                key={listing.id}
                coordinate={{
                  latitude: Number(listing.lat),
                  longitude: Number(listing.lng),
                }}
              />
            ))}
          </MapView> */}
      <View style={styles.whereToContainer}>
        <View style={styles.whereToInputContainer}>
          <Feather
            name="search"
            size={30}
            color={Colors.light["primary-3"]}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Where are you going"
            value={locationData.description}
            style={styles.whereToInput}
            onFocus={() => {
              navigation.goBack();
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.calendarIcon}
          onPress={() =>
            navigation.navigate("SelectDate", {
              startDate: moment(startDate).format("YYYY-MM-DD"),
              endDate: moment(endDate).format("YYYY-MM-DD"),
              startTime,
              endTime,
              onUpdate: handleSelectDate,
            })
          }
        >
          <AntDesign name="calendar" size={30} color={Colors.light["primary-3"]} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {listings?.map((listing) => (
          <Pressable
            key={listing.id}
            style={styles.listingItem}
            onPress={() =>
              navigation.navigate("ListingDetails", {
                listing,
                tripDates: { startDate, endDate, startTime, endTime },
              })
            }
          >
            <Text style={{ fontSize: 18 }}>{listing.title}</Text>
            <Text>
              {formatCurrency(Number(listing.price) / 100)}/{listing.type}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  whereToContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 50,
    marginHorizontal: 10,
    marginTop: 10,
  },
  whereToInputContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    columnGap: -5,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  whereToInput: {
    flexGrow: 1,
    height: 45,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  calendarIcon: {
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
  },
  listingItem: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 15,
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
});

export default VisitorListingsView;
