import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "@/app/contexts/UserContext";

const VerifiedScreen = () => {
  const navigation = useNavigation();
  const { user, refreshUser, isLoading } = useUserContext();
  return (
    <View>
      <Text className="text-3xl font-bold">Welcome{user && ` ${user?.first_name}`}!</Text>
      <Button
        className="bg-gray-200 h-[160px] w-[160px] p-5"
        onPress={() => {
          // @ts-ignore
          navigation.navigate("AssetsList");
        }}
      >
        <Text className="text-white bg-black p-3 rounded-md">View assets</Text>
      </Button>
    </View>
  );
};

export default VerifiedScreen;
