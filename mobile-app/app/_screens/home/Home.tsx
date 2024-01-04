import { View, Text, Linking, ScrollView, RefreshControl } from "react-native";
import React, { useState } from "react";
import Button from "@/components/shared/Button";
import { useAuthContext } from "../../contexts/AuthProvider";
import useUser from "../../hooks/useUser";
import { FlatList } from "react-native-gesture-handler";
import NotVerifiedScreen from "./NotVerifiedScreen";
import VerifiedScreen from "./VerifiedScreen";

const Home = () => {
  const { signOut } = useAuthContext();
  const { user, refreshUser } = useUser();
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View className="flex-1">
      <ScrollView
        className="p-5"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => refreshUser()} />}
      >
        {user?.verification_status !== "completed" ? (
          <NotVerifiedScreen />
        ) : (
          <VerifiedScreen />
        )}

        <Button className="bg-primary-1" onPress={signOut}>
          <Text className="text-white">Sign Out</Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default Home;
