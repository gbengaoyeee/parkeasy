import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { usePaymentIntent } from '@/app/lib/react-query/queryAndMutations'
import { useStripe } from '@stripe/stripe-react-native'

const VisitorListingDetails = () => {
  const {mutateAsync: createPaymentIntent, isPending: isPaymentIntentPending} = usePaymentIntent()
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  // useEffect(() => {
  //   onCheckOut()

  // }, [])

  const onCheckOut = () => {
    // 1. Create a payment intent
    createPaymentIntent()
    .then(res => {
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
      })
    })
    .then(res => {
      if(res.error) {
        Alert.alert("Error", res.error.message)
        return
      }
      // 3. Present the Payment Sheet from Stripe
      return presentPaymentSheet()
    })
    .then(res => {
      if(!res) {
        throw new Error("Could not display payment sheet")
      }
      if(res.error) {
        Alert.alert("Error", res.error.message)
        return
      }
    })
    .catch(err => {
      Alert.alert("Error", err.message)
      console.log("ERROR", err)
    })
    
    
    // 4. If payment ok -> create the order
  }
  return (
    <SafeAreaView>
      <Text>VisitorListingDetails</Text>
    </SafeAreaView>
  )
}

export default VisitorListingDetails