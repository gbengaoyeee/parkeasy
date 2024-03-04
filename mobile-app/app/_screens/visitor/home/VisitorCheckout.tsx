import { View, Text, SafeAreaView, ScrollView, StyleSheet, Alert } from "react-native";
import React from "react";
import { CheckoutDetails } from "@/app/services/payment";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { formatCurrency } from "@/app/utils/formatter";
import Button from "@/components/shared/Button";
import { useCreateReservation, useDeleteReservation, usePaymentIntent, useUpdateReservation } from "@/app/lib/react-query/queryAndMutations";
import { useStripe } from "@stripe/stripe-react-native";
import { useUserContext } from "@/app/contexts/UserContext";
import { createDateWithTime } from "@/app/utils/reusable";
import moment from "moment";
import { VisitorTabParamList } from "../VisitorTabController";

interface RouteParams {
  checkoutDetails: CheckoutDetails;
  tripDates: {
    startDate: Date;
    endDate: Date;
    startTime: number;
    endTime: number;
  };
}

const VisitorCheckout = () => {
  const route = useRoute();
  const { checkoutDetails, tripDates } = route.params as RouteParams;
  const { mutateAsync: createPaymentIntent, isPending: isPaymentIntentPending } = usePaymentIntent();
  const { mutateAsync: createReservation } = useCreateReservation();
  const { mutateAsync: updateReservation } = useUpdateReservation();
  const { mutateAsync: deleteReservation } = useDeleteReservation();
  const { user } = useUserContext();
  const navigation = useNavigation<NavigationProp<VisitorTabParamList>>();

  
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const onCheckOut = () => {
    if (!user) {
      Alert.alert("Error", `Could not find user. Please contact support at ${process.env.EXPO_PUBLIC_SUPPORT_EMAIL}`);
      return;
    }
    // 1. Create a payment intent
    createPaymentIntent({
      amount: checkoutDetails.totalAmount,
      customerId: user?.stripe_customer_id || "",
      listingId: checkoutDetails.listing.id,
    })
      .then(async (res) => {
        // 2. Initialize the Payment sheet
        const paymentSheet = await initPaymentSheet({
          paymentIntentClientSecret: res.client_secret,
          merchantDisplayName: "Parkeasy, Inc.",
          applePay: {
            merchantCountryCode: "US",
          },
          googlePay: {
            merchantCountryCode: "US",
            currencyCode: "USD",
          },
          returnURL: "stripe-redirect://stripe-redirect",
        })

        return {
          paymentSheet,
          paymentIntent: res
        };
      })
      .then(async (res) => {
        if (!res) {
          throw new Error("Could not display payment sheet");
        }

        if (res.paymentSheet.error) {
          Alert.alert("Error", res.paymentSheet.error.message);
          return;
        }

        if(!res.paymentIntent) {
          throw new Error("Could not create payment intent");
        }

        const reservation = await createReservation({
          dto: {
            listingId: checkoutDetails.listing.id,
            hostId: checkoutDetails.listing.host_id,
            parkingSpotId: checkoutDetails.listing.parking_id,
            visitorId: user.id,
            totalPrice: checkoutDetails.totalPrice,
            totalFees: checkoutDetails.totalFees,
            paymentIntentId: res.paymentIntent.id,
            startDate: createDateWithTime(moment(tripDates.startDate).format("YYYY-MM-DD"), tripDates.startTime).getTime(),
            endDate: createDateWithTime(moment(tripDates.endDate).format("YYYY-MM-DD"), tripDates.endTime).getTime(),
          },
        });

        const paymentSheetPresented = await presentPaymentSheet({timeout:60000});

        console.log("paymentSheetPresented", paymentSheetPresented);
        // 3. Present the Payment Sheet from Stripe
        return {
          reservation,
          paymentSheetPresented
        };
      })
      .then(async (res) => {
        if (!res) {
          throw new Error("Could not display payment sheet");
        }
        if(res.paymentSheetPresented.error){
          if(res.reservation){
            await deleteReservation(res.reservation.id);
          }
          Alert.alert("Error", res.paymentSheetPresented.error.message);
          return
        }
        console.log("Payment successful");
        if (res.reservation) {
          await updateReservation({
            reservationId: res.reservation.id,
            dto: {
              status: 'confirmed'
            },
          });
          
          navigation.reset({
            index: 0,
            routes: [{ name: "VisitorHomeTab" }],
          })

          navigation.navigate('VisitorReservationsTab')
        }
      })
      .catch((err) => {
        Alert.alert("Error", err.response.data.message);
        console.log("ERROR", err.response.data);
      });

    // 4. If payment ok -> create the order
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.priceContainer}>
          <View style={styles.priceRow}>
            <Text>{checkoutDetails.differenceInDays} days</Text>
            <Text>{formatCurrency(checkoutDetails.totalPrice / 100)}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Fees</Text>
            <Text>{formatCurrency(checkoutDetails.totalFees / 100)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.priceRow}>
            <Text>Total</Text>
            <Text>{formatCurrency(checkoutDetails.totalAmount / 100)}</Text>
          </View>
        </View>
      </ScrollView>
      <Button
        style={styles.continueButton}
        onPress={() => {
          onCheckOut();
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
  },
  priceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    margin: 15,
    rowGap: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
  },
  priceRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  continueButton: {
    position: "absolute",
    bottom: 2,
    width: "95%",
    alignSelf: "center",
  },
});

export default VisitorCheckout;
