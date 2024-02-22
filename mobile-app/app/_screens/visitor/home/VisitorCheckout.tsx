import { View, Text, SafeAreaView, ScrollView, StyleSheet, Alert } from "react-native";
import React from "react";
import { CheckoutDetails } from "@/app/services/payment";
import { useRoute } from "@react-navigation/native";
import { formatCurrency } from "@/app/utils/formatter";
import Button from "@/components/shared/Button";
import { usePaymentIntent } from "@/app/lib/react-query/queryAndMutations";
import { useStripe } from "@stripe/stripe-react-native";
import { useUserContext } from "@/app/contexts/UserContext";

interface RouteParams {
  checkoutDetails: CheckoutDetails;
}

const VisitorCheckout = () => {
  const route = useRoute();
  const { checkoutDetails } = route.params as RouteParams;
  const { mutateAsync: createPaymentIntent, isPending: isPaymentIntentPending } =
    usePaymentIntent();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const { user } = useUserContext();

  const onCheckOut = () => {
    // 1. Create a payment intent
    createPaymentIntent({
      amount: checkoutDetails.totalAmount,
      customerId: user?.stripe_customer_id || "",
      listingId: checkoutDetails.listing.id
    })
      .then((res) => {
        // 2. Initialize the Payment sheet
        return initPaymentSheet({
          paymentIntentClientSecret: res.client_secret,
          merchantDisplayName: "Parkeasy, Inc.",
          applePay: {
            merchantCountryCode: "US",
          },
          googlePay: {
            merchantCountryCode: "US",
            currencyCode: "USD",
          },
        });
      })
      .then((res) => {
        if (res.error) {
          Alert.alert("Error", res.error.message);
          return;
        }
        // 3. Present the Payment Sheet from Stripe
        return presentPaymentSheet();
      })
      .then((res) => {
        if (!res) {
          throw new Error("Could not display payment sheet");
        }
        if (res.error) {
          Alert.alert("Error", res.error.message);
          return;
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
