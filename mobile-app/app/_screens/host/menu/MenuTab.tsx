import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";
import { useAuthContext } from "@/app/contexts/AuthProvider";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppDispatch, RootState } from "@/app/_store/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleAppSection } from "@/app/_store/slices/appSectionSlice";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useUserContext } from "@/app/contexts/UserContext";
import { HostMenuStackParamList } from "./HostMenuNavigator";

const MenuTab = () => {
  const navigation = useNavigation<NavigationProp<HostMenuStackParamList>>();
  const { signOut } = useAuthContext();
  const dispatch: AppDispatch = useDispatch();
  const { user } = useUserContext();
  const appSection = useSelector((state: RootState) => state.appSection.appSection);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Hosting</Text>
          <Button style={styles.optionContainer}>
            <View style={styles.optionLeft}>
              <AntDesign name="clockcircleo" size={20} color="black" />
              <Text>Reservations</Text>
            </View>
            <AntDesign name="right" size={15} color="black" />
          </Button>
          <Button
            style={styles.optionContainer}
            onPress={() =>
              navigation.navigate("CreateAListing", {
                communityMembers: user?.community_members ?? [],
              })
            }
          >
            <View style={styles.optionLeft}>
              <MaterialIcons name="local-parking" size={20} color="black" />
              <Text>Create new listing</Text>
            </View>
            <AntDesign name="right" size={15} color="black" />
          </Button>
          <Text style={styles.headerTitle}>Account</Text>
          <Button style={styles.optionContainer}>
            <View style={styles.optionLeft}>
              <MaterialCommunityIcons name="account-circle-outline" size={20} color="black" />
              <Text>Edit profile</Text>
            </View>
            <AntDesign name="right" size={15} color="black" />
          </Button>
          <Button btnTitle="Switch to Visitor" className="bg-primary-3 mt-5" onPress={() => dispatch(toggleAppSection())}/>
          <Button btnTitle="Sign Out" className="bg-primary-1" onPress={signOut}/>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default MenuTab;
