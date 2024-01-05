import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";
import { useNavigation } from "@react-navigation/native";

const VerifiedScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
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
