import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { VisitorTabParamList } from "../VisitorTabController";

const VisitorReservationsHome = () => {
  const navigation = useNavigation<NavigationProp<VisitorTabParamList>>();
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Reservations</Text>
          <Text style={styles.subHeader}>Upcoming Reservations</Text>
          <NoReservations seachAction={() => {navigation.navigate('VisitorHomeTab')}} type="upcoming" />
          <Text style={styles.subHeader}>Past Reservations</Text>
          <NoReservations seachAction={() => {}} type="past" />

          <View style={styles.reservationComponent}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Listing.title</Text>
            <Text>Hosted by host.name</Text>
            <Text>Aug. 18, 2022 - Aug. 20, 2022</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const NoReservations = ({ seachAction, type }: { seachAction: () => void; type: "upcoming" | "past" }) => {
  return (
    <View style={styles.noReservationsContainer}>
      <Text style={{ fontSize: 15, fontWeight: "600" }}>No Reservations made yet</Text>
      {type === "upcoming" && <Text style={{ textAlign: "center", marginVertical: 10 }}>Time to go to that event but you will need to park your car somewhere.</Text>}
      {type === "past" && <Text style={{ textAlign: "center", marginVertical: 10 }}>Your past reservations will appear here</Text>}
      {type === "upcoming" && <Button btnTitle="Start Searching..." onPress={seachAction}></Button>}
    </View>
  );
};



const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
  },
  subHeader: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 15,
  },
  noReservationsContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00000032",
    borderRadius: 10,
    padding: 20,
    marginBottom: 35,
  },
  reservationComponent: {
    display: "flex",
    rowGap: 2,
    borderWidth: 1,
    borderColor: "#00000032",
    borderRadius: 10,
    padding: 10,
    marginBottom: 35,
  },
});
export default VisitorReservationsHome;
