import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";
import { useAuthContext } from "@/app/contexts/AuthProvider";

const MenuTab = () => {
  const { signOut } = useAuthContext();
  return (
    <View>
      <Button className="bg-primary-1" onPress={signOut}>
        <Text className="text-white">Sign Out</Text>
      </Button>
    </View>
  );
};

export default MenuTab;
