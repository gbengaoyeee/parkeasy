import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "@/app/contexts/UserContext";
import Input from "@/components/shared/Input";

const VerifiedScreen = () => {
  const navigation = useNavigation();
  const { user, refreshUser, isLoading } = useUserContext();
  return (
    <View>
      <Text className="text-3xl font-bold">Welcome{user && ` ${user?.first_name}`}!</Text>
      <Input />
      <TextInput />
      <Button
        btnTitle="View assets"
        className=" h-[160px] w-[160px] p-5"
        onPress={() => {
          // @ts-ignore
          navigation.navigate("AssetsList");
        }}
      >

      </Button>
    </View>
  );
};

export default VerifiedScreen;
