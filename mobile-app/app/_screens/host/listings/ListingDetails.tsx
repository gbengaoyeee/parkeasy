import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Listing } from "@/app/types";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { HostListingsStackParamList } from "./HostListingsNavigator";

interface RouteParams {
  listing: Listing;
}

const ListingDetails = () => {
  const route = useRoute();
  const { listing } = route.params as RouteParams;

  const navigation = useNavigation<NavigationProp<HostListingsStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("EditListing", { listing })}>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="p-5">
        <View style={styles.container}>
          <View style={styles.listingItemContainer}>
            <View className="flex-row justify-between">
              <Text style={styles.listingItemTitle}>Title</Text>
            </View>
            <Text>{listing.title}</Text>
          </View>
          <View style={styles.listingItemContainer}>
            <View className="flex-row justify-between">
              <Text style={styles.listingItemTitle}>Description</Text>
            </View>
            <Text>{listing.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    rowGap: 15,
  },
  listingItemContainer: {
    backgroundColor: "#ffffff",
    padding: 15,
  },
  listingItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ListingDetails;
