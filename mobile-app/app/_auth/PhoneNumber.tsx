import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import CountryPicker, { Country } from "react-native-country-picker-modal";
import { ApplicationVerifier, signInWithPhoneNumber } from "firebase/auth";
import { AuthNavigatorParamList } from "./AuthNavigator";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { FIREBASE_APP, FIREBASE_AUTH } from "@/firebaseConfig";

const PhoneNumber = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
  });

  const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
  const recaptchaVerifier = useRef<FirebaseRecaptchaVerifierModal>(null);

  const onSubmit = (data: any) => {
    if (!recaptchaVerifier.current) return;
    signInWithPhoneNumber(
      FIREBASE_AUTH,
      `+${country.callingCode[0]}${data.phoneNumber}`,
      recaptchaVerifier.current
    ).then((confirmationResult) => {
      navigation.navigate("OTPCode", {
        confirmationResult,
        phoneNumber: `+${country.callingCode[0]}${data.phoneNumber}`,
      });
    });
  };
  const [country, setCountry] = useState<Country>({
    callingCode: ["1"],
    cca2: "US",
    currency: ["USD"],
    flag: "flag-us",
    name: "United States",
    region: "Americas",
    subregion: "North America",
  });
  // {
  //   callingCode: ["971"],
  //   cca2: "AE",
  //   currency: ["AED"],
  //   flag: "flag-ae",
  //   name: "United Arab Emirates",
  //   region: "Asia",
  //   subregion: "Western Asia",
  // }

  const onSelect = (country: Country) => {
    setCountry(country);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <SafeAreaView style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={FIREBASE_APP.options}
        />
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "This is required.",
            },
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message: "Please enter a valid phone number",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Enter your phone number</Text>
              <View>
                <View
                  style={styles.phoneInputContainer}
                  // className="border-gray-300 rounded-md border"
                >
                  <CountryPicker
                    containerButtonStyle={{
                      marginRight: -10,
                      marginLeft: -5,
                    }}
                    countryCode={country.cca2}
                    withFlag
                    withFilter
                    onSelect={onSelect}
                  />
                  <Text>+{country.callingCode[0]}</Text>
                  <Input
                    containerStyle="border-l"
                    placeholder="1234567890"
                    keyboardType="number-pad"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={errors?.phoneNumber?.message}
                  />
                </View>
                {errors.phoneNumber && (
                  <Text style={{ color: "red" }}>{errors.phoneNumber.message}</Text>
                )}
              </View>
            </>
          )}
          name="phoneNumber"
        />

        <Button onPress={handleSubmit(onSubmit)}>
          <Text style={{ color: "white" }}>Next</Text>
        </Button>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    minHeight: 200,
    rowGap: 45,
    paddingHorizontal: 10,
  },
  phoneInputContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    columnGap: 5,
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 1,
  },
  phoneInput: {
    flexGrow: 1,
  },
});
export default PhoneNumber;
