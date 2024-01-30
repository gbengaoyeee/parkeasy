import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useUserContext } from "@/app/contexts/UserContext";
import { useGetHostListings } from "@/app/lib/react-query/queryAndMutations";
import Loader from "@/components/shared/Loader";
import { Link, NavigationProp, useNavigation } from "@react-navigation/native";
import { HostListingsStackParamList } from "./HostListingsNavigator";
import { AntDesign } from "@expo/vector-icons";

const ListingsTab = () => {
  const { user, isLoading: userLoading } = useUserContext();
  const {
    data: listings,
    isFetching: listingLoading,
    refetch,
  } = useGetHostListings(user?.id ?? "");
  const navigation = useNavigation<NavigationProp<HostListingsStackParamList>>();

  useEffect(() => {
    refetch();
  }, [user]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateAListing", {
              communityMembers: user?.community_members ?? [],
            });
          }}
        >
          <Text className="text-primary-3">+ Add</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  if (userLoading || listingLoading) {
    return (
      <View className="flex-1 items-center p-8">
        <Loader />
      </View>
    );
  }
  if (!listings) {
    return (
      <View className="flex-1 items-center p-8">
        <Text>No listings found</Text>
      </View>
    );
  }
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="p-5">
        <Text style={styles.headerTitle}>
          {listings.length} {listings.length > 1 ? "Listings" : "Listing"}
        </Text>

        {listings.map((listing) => (
          <TouchableOpacity
            key={listing.id}
            className="bg-gray-200 p-3 flex-row justify-between items-center mb-3 rounded-lg"
            onPress={() => navigation.navigate("ListingDetails", { listing })}
          >
            <Text className="text-lg">{listing.title}</Text>
            <AntDesign name="right" size={15} color="black" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
  },
});
export default ListingsTab;
