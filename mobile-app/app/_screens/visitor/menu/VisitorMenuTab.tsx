import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";
import { useAuthContext } from "@/app/contexts/AuthProvider";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppDispatch, RootState } from "@/app/_store/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleAppSection } from "@/app/_store/slices/appSectionSlice";

const VisitorMenuTab = () => {
  const { signOut } = useAuthContext();
  const dispatch: AppDispatch = useDispatch();
  const appSection = useSelector((state: RootState) => state.appSection.appSection);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Account</Text>
        <View style={styles.optionContainer}>
          <View style={styles.optionLeft}>
            <MaterialCommunityIcons name="account-circle-outline" size={20} color="black" />
            <Text>Edit profile</Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </View>
        <Button className="bg-primary-3 mt-5" onPress={() => dispatch(toggleAppSection())}>
          <Text className="text-white">Switch to Host</Text>
        </Button>
        <Button className="bg-primary-1" onPress={signOut}>
          <Text className="text-white">Sign Out</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    rowGap: 5,
  },
  headerTitle: {
    fontSize: 18,
    marginTop: 20,
    color: "#00000089",
  },
  optionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  optionLeft: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
  },
});

export default VisitorMenuTab;
