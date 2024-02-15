import { View, ScrollView, RefreshControl, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import NotVerifiedScreen from "./NotVerifiedScreen";
import VerifiedScreen from "./VerifiedScreen";
import Loader from "@/components/shared/Loader";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "./HomeNavigator";
import { useUserContext } from "@/app/contexts/UserContext";

const Home = () => {
  const { user, refreshUser, isLoading } = useUserContext();
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  useEffect(() => {
    if (user && user?.mobile_onboard_status !== "completed") {
      navigation.navigate("OnboardUser", { user });
    }
  }, [user, refreshUser]);

  if (isLoading) {
    return (
      <View className="flex-1 items-center p-8">
        <Loader />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="p-5"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => refreshUser()} />}
      >
        {user?.verification_status !== "completed" ? <NotVerifiedScreen /> : <VerifiedScreen />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
