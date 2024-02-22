import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { VisitorHomeStackParamList } from "./VisitorHomeNavigator";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import useToast from "@/app/hooks/useToast";
import * as Location from "expo-location";
import { useUserContext } from "@/app/contexts/UserContext";

const VisitorHomePage = () => {
  const navigation = useNavigation<NavigationProp<VisitorHomeStackParamList>>();
  const [showSearchLocation, setShowSearchLocation] = useState(false);
  const { user, refreshUser, isLoading } = useUserContext();
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    if (
      (user && user?.mobile_onboard_status !== "completed") ||
      user?.stripe_customer_id === null
    ) {
      console.log("user", user.mobile_onboard_status, user?.stripe_customer_id);
      navigation.navigate("OnboardUser", { user });
    }
  }, [user]);

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          console.error("Permission to access location was denied");
          return;
        }

        // let location = await Location.getCurrentPositionAsync({
        //   accuracy: Platform.OS == "android" ? Location.Accuracy.Low : Location.Accuracy.Lowest,
        // });
      } catch (error) {
        console.error("Error requesting location permission:", error);
      }
    };

    getLocation();
  }, []);
  return (
    <>
      {showSearchLocation ? (
        <SearchLocationPage navigation={navigation} setShowSearchLocation={setShowSearchLocation} />
      ) : (
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => refreshUser()} />
          }
        >
          <SafeAreaView style={styles.container}>
            <View style={styles.heroSection}>
              <Pressable
                style={styles.whereToInputContainer}
                onPress={() => setShowSearchLocation(true)}
              >
                <Feather
                  name="search"
                  size={24}
                  color={Colors.light["primary-3"]}
                  style={styles.searchIcon}
                />
                <Text style={styles.placeholder}>Where are you going?</Text>
              </Pressable>
            </View>
            <Text style={styles.findYourParking}>Find your parking</Text>
            <View style={styles.featuresSection}>
              <View style={styles.feature}>
                <FontAwesome5 name="headset" size={24} color={Colors.light["primary-3"]} />
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureTextTitle}>We&#39;ve got you covered</Text>
                  <Text style={styles.featureText}>
                    Never circle the block again! Our service ensures you&#39;ll land a prime spot
                    any time, day or night. Park with ease, 24/7 - because your peace of mind
                    shouldn't have a curfew.
                  </Text>
                </View>
              </View>
              <View style={styles.feature}>
                <MaterialIcons name="local-parking" size={20} color={Colors.light["primary-3"]} />
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureTextTitle}>Unlimited selections</Text>
                  <Text style={styles.featureText}>
                    Wave goodbye to parking woes! With our unlimited parking solutions, you’re
                    guaranteed a spot whenever you need one, no matter where your travels take you.
                    Park without limits, 24/7 – endless spots await you!
                  </Text>
                </View>
              </View>
              <View style={styles.feature}>
                <AntDesign name="Safety" size={24} color={Colors.light["primary-3"]} />
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureTextTitle}>We&#39;ve got you covered</Text>
                  <Text style={styles.featureText}>
                    Park with confidence, leave with peace of mind. Our secure parking solutions
                    offer vigilant 24/7 monitoring to safeguard your vehicle around the clock. Rest
                    easy knowing your ride is always in safe hands with us.
                  </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      )}
    </>
  );
};

const SearchLocationPage = ({
  navigation,
  setShowSearchLocation,
}: {
  navigation: NavigationProp<VisitorHomeStackParamList>;
  setShowSearchLocation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const insets = useSafeAreaInsets();
  const { showToast } = useToast();

  return (
    <View style={{ marginTop: insets.top, ...styles.searchLocationContainer }}>
      <View>
        <TouchableOpacity
          onPress={() => {
            setShowSearchLocation(false);
          }}
        >
          <AntDesign name="close" size={24} color={Colors.light["primary-3"]} />
        </TouchableOpacity>

        <View style={styles.searchLocationContainer}>
          <GooglePlacesAutocomplete
            fetchDetails={true}
            placeholder="Search"
            disableScroll={true}
            textInputProps={{ autoFocus: true }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              if (!details) {
                showToast({ type: "error", message: "Please select a location" });
                return;
              }

              navigation.navigate("Listings", {
                locationData: data,
                locationDetails: details,
              });
            }}
            query={{
              key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
              language: "en",
            }}
            onFail={(error) => {
              console.error(error);
            }}
          />
        </View>
      </View>
      <Text>SearchLocationPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  searchLocationContainer: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
  locationInput: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  container: {
    flex: 1,
    marginTop: 30,
    width: "100%",
  },
  heroSection: {
    flexGrow: 1,
    height: 300,
  },
  findYourParking: {
    fontSize: 24,
    textAlign: "center",
  },
  featuresSection: {
    paddingHorizontal: 20,
  },
  feature: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  featureTextContainer: {
    marginHorizontal: 20,
    marginRight: 70,
  },
  featureTextTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  featureText: {
    fontSize: 15,
    fontWeight: "400",
  },
  whereToInputContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    columnGap: -5,
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    marginHorizontal: 30,
    paddingVertical: 7,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  placeholder: {
    color: "#00000089",
  },
});

export default VisitorHomePage;
