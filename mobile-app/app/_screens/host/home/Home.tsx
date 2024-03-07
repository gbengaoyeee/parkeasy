import { View, ScrollView, RefreshControl, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import NotVerifiedScreen from "./NotVerifiedScreen";
import VerifiedScreen from "./VerifiedScreen";
import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/app/contexts/UserContext";

const Home = () => {
  const { user, refreshUser, isLoading } = useUserContext();
  const [refreshing, setRefreshing] = useState(false);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => refreshUser()} />}>
        <VerifiedScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
  safeAreaContainer: {
    flex: 1,
  },
  scrollView: {
    padding: 5,
  },
});

export default Home;
