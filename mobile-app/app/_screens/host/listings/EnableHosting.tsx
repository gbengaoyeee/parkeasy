import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { HostListingsStackParamList } from "./HostListingsNavigator";
import { AntDesign, Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Button from "@/components/shared/Button";
import { useEnableHosting } from "@/app/lib/react-query/queryAndMutations";
import { useUserContext } from "@/app/contexts/UserContext";
import useToast from "@/app/hooks/useToast";
import Loader from "@/components/shared/Loader";

const EnableHosting = () => {
  const navigation = useNavigation<NavigationProp<HostListingsStackParamList>>();
  const { mutateAsync: enableHosting, isPending: isEnablingHosting } = useEnableHosting();
  const { user, setUser } = useUserContext();
  const { showToast } = useToast();

  const handleEnableHosting = async () => {
    if (!user) {
      showToast({
        type: "error",
        message: "You must be logged in to enable hosting.",
      });
      return;
    }
    enableHosting({
      userId: user?.id,
    }).then((user) => {
      setUser(user);
      navigation.goBack();
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      {isEnablingHosting && (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      )}
      <Text style={styles.enableHosting}>Enable hosting</Text>
      <View style={styles.featuresSection}>
        <View style={styles.feature}>
          <FontAwesome5 name="headset" size={24} color={Colors.light["primary-3"]} />
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTextTitle}>Enable hosting</Text>
            <Text style={styles.featureText}>Activate your hosting ability with just a click.</Text>
          </View>
        </View>
        <View style={styles.feature}>
          <MaterialIcons name="local-parking" size={20} color={Colors.light["primary-3"]} />
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTextTitle}>Create your listings</Text>
            <Text style={styles.featureText}>Showcase your parking spot with photos and details. Set your price and availability to match your preferences.</Text>
          </View>
        </View>
        <View style={styles.feature}>
          <AntDesign name="Safety" size={24} color={Colors.light["primary-3"]} />
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTextTitle}>Receive Bookings & Earn</Text>
            <Text style={styles.featureText}>Watch your earnings grow with the number of bookings you receive.</Text>
          </View>
        </View>
      </View>
      <Button btnTitle="Continue" style={styles.continueButton} onPress={handleEnableHosting}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    margin: 15,
  },
  enableHosting: {
    fontSize: 24,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 15,
  },
  featuresSection: {
    // paddingHorizontal: 20,
  },
  feature: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  featureTextContainer: {
    marginHorizontal: 20,
    marginRight: 70,
  },
  featureTextTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  featureText: {
    fontSize: 15,
    fontWeight: "400",
  },
  continueButton: {
    position: "absolute",
    bottom: 25,
    width: "95%",
    alignSelf: "center",
  },

  loaderContainer: {
    marginTop: 20,
    alignItems: "center",
    padding: 8,
  },
});

export default EnableHosting;
