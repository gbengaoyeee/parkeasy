import { View, Text, SafeAreaView, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { VisitorTabParamList } from "../VisitorTabController";
import { useGetVisitorReservations } from "@/app/lib/react-query/queryAndMutations";
import { useUserContext } from "@/app/contexts/UserContext";
import Loader from "@/components/shared/Loader";
import { Reservation } from "@/app/types";
import moment from "moment";
import { VisitorReservationsStackParamList } from "./VisitorReservationsNavigator";

const VisitorReservationsHome = () => {
  const navigation = useNavigation<NavigationProp<VisitorTabParamList>>();
  const { user: visitor } = useUserContext();
  const { data: reservations, isFetching, refetch } = useGetVisitorReservations(visitor?.id);
  const visitorReservationsNavigation = useNavigation<NavigationProp<VisitorReservationsStackParamList>>();

  if (!reservations) {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>Server error</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handlePresentModal = (reservation: Reservation) => {
    console.log("present modal");
    if (reservation) {
      visitorReservationsNavigation.navigate("VisitorReservationDetails", { reservation });
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Reservations</Text>
        {isFetching ? (
          <Loader />
        ) : (
          <ScrollView>
            {reservations?.currentReservations.length > 0 && (
              <>
                <Text style={styles.subHeader}>Current Reservations</Text>
                {reservations?.currentReservations.map((reservation) => (
                  <TouchableOpacity
                    onPress={() => {
                      handlePresentModal(reservation);
                    }}
                  >
                    <ReservationItem key={reservation.id} reservation={reservation} />
                  </TouchableOpacity>
                ))}
              </>
            )}
            <Text style={styles.subHeader}>Upcoming Reservations</Text>
            {reservations?.upcomingReservations.length > 0 ? (
              reservations?.upcomingReservations.map((reservation) => (
                <TouchableOpacity
                  onPress={() => {
                    handlePresentModal(reservation);
                  }}
                >
                  <ReservationItem key={reservation.id} reservation={reservation} />
                </TouchableOpacity>
              ))
            ) : (
              <NoReservations
                seachAction={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "VisitorHomeTab" }],
                  })
                }}
                type="upcoming"
              />
            )}

            <Text style={styles.subHeader}>Past Reservations</Text>
            {reservations?.pastReservations.length > 0 ? (
              reservations?.pastReservations.map((reservation) => (
                <TouchableOpacity
                  onPress={() => {
                    handlePresentModal(reservation);
                  }}
                >
                  <ReservationItem key={reservation.id} reservation={reservation} />
                </TouchableOpacity>
              ))
            ) : (
              <NoReservations seachAction={() => {}} type="past" />
            )}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const NoReservations = ({ seachAction, type }: { seachAction: () => void; type: "upcoming" | "current" | "past" }) => {
  return (
    <View style={styles.noReservationsContainer}>
      <Text style={{ fontSize: 15, fontWeight: "600" }}>No Reservations made yet</Text>
      {type === "upcoming" && <Text style={{ textAlign: "center", marginVertical: 10 }}>Time to go to that event but you will need to park your car somewhere.</Text>}
      {type === "past" && <Text style={{ textAlign: "center", marginVertical: 10 }}>Your past reservations will appear here</Text>}
      {type === "upcoming" && <Button btnTitle="Start Searching..." onPress={seachAction}></Button>}
    </View>
  );
};

const ReservationItem = ({ reservation }: { reservation: Reservation }) => {
  const { listing, host, ...rest } = reservation;
  return (
    <View style={styles.reservationComponent}>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{listing?.title}</Text>
      <Text>Hosted by {host?.first_name}</Text>
      <Text>
        {moment(rest?.start_date).format("MMM. DD, YYYY")} - {moment(rest?.end_date).format("MMM. DD, YYYY")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    padding: 15,
    flex: 1,
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
