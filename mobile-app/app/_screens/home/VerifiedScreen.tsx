import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";

const VerifiedScreen = () => {
  return (
    <View>
      <Button className="bg-gray-200 h-[160px] w-[160px] p-5">
        <TouchableHighlight className="bg-black p-3 rounded-md">
          <Text className="text-white">View assets</Text>
        </TouchableHighlight>
      </Button>
    </View>
  );
};

export default VerifiedScreen;
