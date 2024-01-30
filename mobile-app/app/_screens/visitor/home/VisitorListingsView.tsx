import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
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
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { VisitorHomeStackParamList } from "./VisitorHomeNavigator";
import { AntDesign } from "@expo/vector-icons";

const VisitorListingsView = () => {
  const { showToast } = useToast();

  const [location, setLocation] = useState<{
    coords: { latitude: number; longitude: number };
  }>({
    coords: {
      latitude: 0,
      longitude: 0,
    },
  });

  const {
    data: listings,
    isFetching: listingLoading,
    refetch,
  } = useGetVisitorListings(location?.coords?.latitude, location?.coords?.longitude);

  const navigation = useNavigation<NavigationProp<VisitorHomeStackParamList>>();

  const { debounce } = useDebounce();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        showToast({ type: "error", message: "Please enable location access in settings" });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        coords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });
    })();
  }, []);

  useEffect(() => {
    if (location) {
      onRegionChangeDebounce();
    }
  }, [location?.coords]);

  const onRegionChangeDebounce = debounce(() => {
    refetch();
  }, 5000);

  const onRegionChangeComplete = (region: Region, details: Details) => {
    const newLoc = location;
    if (details.isGesture) {
      setLocation({
        coords: {
          latitude: region.latitude,
          longitude: region.longitude,
        },
      });
    }
  };
  return (
    <>
      <View className="flex-1">
        <MapView
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
        </MapView>
        <SafeAreaView>
          <View style={styles.whereToContainer}>
            <View style={styles.whereToInputContainer}>
              <Feather
                name="search"
                size={30}
                color={Colors.light["primary-3"]}
                style={styles.searchIcon}
              />
              <TextInput placeholder="Where are you going" style={styles.whereToInput} />
            </View>
            <TouchableOpacity style={styles.calendarIcon} onPress={() => navigation.navigate("SelectDate")}>
              <AntDesign
                name="calendar"
                size={30}
                color={Colors.light["primary-3"]}
                
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {listings && listings?.length > 0 && (
          <TouchableOpacity
            key={listings[0].id}
            style={{
              backgroundColor: "gray",
              margin: 10,
              padding: 10,
              borderRadius: 5,
              position: "absolute",
              width: 300,
              bottom: 10,
              left: 10,
            }}
            onPress={() => navigation.navigate("ListingDetails", { listing: listings[0] })}
          >
            <Text className="text-lg">{listings[0].title}</Text>
            <Text>
              {formatCurrency(Number(listings[0].price) / 100)}/{listings[0].type}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
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
});

export default VisitorListingsView;
