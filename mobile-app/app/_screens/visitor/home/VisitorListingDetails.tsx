import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useGetCheckoutDetails, } from "@/app/lib/react-query/queryAndMutations";
import { useStripe } from "@stripe/stripe-react-native";
import { Listing } from "@/app/types";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { VisitorHomeStackParamList } from "./VisitorHomeNavigator";
import moment from "moment";
import { createDateWithTime } from "@/app/utils/reusable";
import Button from "@/components/shared/Button";
import Loader from "@/components/shared/Loader";
import useToast from "@/app/hooks/useToast";

interface RouteParams {
  listing: Listing;
  tripDates: {
    startDate: Date;
    endDate: Date;
    startTime: number;
    endTime: number;
  };
}

const VisitorListingDetails = () => {
  const DATE_FORMAT = "ddd, MMM D [at] h:mm A";
  const route = useRoute();
  const { listing, tripDates } = route.params as RouteParams;
  const navigation = useNavigation<NavigationProp<VisitorHomeStackParamList>>();
  const { showToast } = useToast();
  const {
    refetch: getCheckoutDetails,
    data: checkoutDetails,
    isFetching,
  } = useGetCheckoutDetails(
    listing.id,
    createDateWithTime(
      moment(tripDates.startDate).format("YYYY-MM-DD"),
      tripDates.startTime
    ).getTime(),
    createDateWithTime(moment(tripDates.endDate).format("YYYY-MM-DD"), tripDates.endTime).getTime()
  );

  const goToCheckout = () => {
    getCheckoutDetails().then((res) => {
      if (!res.data) {
        showToast({ type: "error", message: "Error getting checkout details" });
        return;
      }
      navigation.navigate("VisitorCheckout", {
        checkoutDetails: {...res.data, listing},
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {isFetching && (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      )}
      <ScrollView>
        <Text>{listing.title}</Text>
        <Text>BOOKING DATES</Text>
        <View>
          <View>
            <Text>
              {moment(
                createDateWithTime(
                  moment(tripDates.startDate).format("YYYY-MM-DD"),
                  tripDates.startTime
                )
              ).format(DATE_FORMAT)}
            </Text>
          </View>
          <View>
            <Text>
              {moment(
                createDateWithTime(
                  moment(tripDates.endDate).format("YYYY-MM-DD"),
                  tripDates.endTime
                )
              ).format(DATE_FORMAT)}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Button
        style={styles.continueButton}
        onPress={() => {
          goToCheckout();
        }}
      >
        <Text style={{ color: "white" }}>Continue</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    height: "100%",
  },

  loaderContainer: {
    marginBottom: 3,
    alignItems: "center",
  },

  continueButton: {
    position: "absolute",
    bottom: 2,
  },
});
export default VisitorListingDetails;
