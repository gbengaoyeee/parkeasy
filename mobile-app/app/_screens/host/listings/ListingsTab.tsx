import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useUserContext } from "@/app/contexts/UserContext";
import { useGetAccountLink, useGetHostListings } from "@/app/lib/react-query/queryAndMutations";
import Loader from "@/components/shared/Loader";
import { Link, NavigationProp, useNavigation } from "@react-navigation/native";
import { HostListingsStackParamList } from "./HostListingsNavigator";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const ListingsTab = () => {
  const { user, isLoading: userLoading } = useUserContext();
  const {
    data: listings,
    isFetching: listingLoading,
    refetch,
  } = useGetHostListings(user?.id ?? "");
  const navigation = useNavigation<NavigationProp<HostListingsStackParamList>>();
  const {refetch: getAccountLink, isPending: isGettingAccountLink} = useGetAccountLink(user?.id ?? "");

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
          <Text style={{ color: Colors.light["primary-3"] }}>+ Add</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleFinishMoreActions = () => {
    getAccountLink()
    .then((res) => {
      if (!res.data) {
        Alert.alert("Error", "Failed to get account link");
        return;
      }
      res.data.url && Linking.openURL(res.data.url)
    })
  }

  if (userLoading || listingLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader />
      </View>
    );
  }
  if (!listings) {
    return (
      <View style={styles.loaderContainer}>
        <Text>No listings found</Text>
      </View>
    );
  }

  if (!user?.stripe_account) {
    return (
      <View style={styles.actionLinkBtn}>
        <TouchableOpacity onPress={() => navigation.navigate("EnableHosting")} >
          <Text style={styles.actionLinkBtnText}>Setup your account to add listings</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if((user.stripe_account as any)["requirements"]["disabled_reason"]) {
    return (
      <View style={styles.actionLinkBtn}>
        <TouchableOpacity onPress={handleFinishMoreActions} >
          <Text style={styles.actionLinkBtnText}>You need to finish more actions</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{padding: 20}}>
        <Text style={styles.headerTitle}>
          {listings.length} {listings.length > 1 ? "Listings" : "Listing"}
        </Text>

        {listings.map((listing) => (
          <TouchableOpacity
            key={listing.id}
            style={styles.listingContainer}
            onPress={() => navigation.navigate("ListingDetails", { listing })}
          >
            <Text style={{fontSize: 18}}>{listing.title}</Text>
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

  actionLinkBtn: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  actionLinkBtnText: {
    fontSize: 18,
    color: Colors.light["primary-3"],
  },

  listingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    borderRadius: 8,
    padding: 15,
    backgroundColor: "rgb(229 231 235)",
  },

  loaderContainer: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
});
export default ListingsTab;
