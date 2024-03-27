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
import { AuthNavigatorParamList } from "./AuthNavigator";
import { signIn, confirmSignIn, signUp, getCurrentUser, confirmSignUp, autoSignIn, signOut } from 'aws-amplify/auth';

const PhoneNumber = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      email: "",
      otp: "",
    },
  });

  const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();

  useEffect(() => {
    getCurrentUser().then((user) => {
      console.log(user);
    }).catch((error) => {
      console.log(error);
    })
  },[] );

  const onSubmit = (data: any) => {
    signIn({
      username: data.email,
      password: 'TEST_PASSWORD',
      options: {
        authFlowType: 'CUSTOM_WITH_SRP'
      }
    })
    .then((output) => {
      console.log(output);
    })
    .catch((error) => {
      console.log(error);
      console.log('trying to sign up');
      signUp({
        username: data.email,
        password: 'TEST_PASSWORD',
        options: {
          userAttributes: {
            email: data.email,
          },
          autoSignIn: {
            enabled: true,
          }
        }
      })
      .then((output) => {
        console.log(output);
      })
      .catch((error) => {
        console.log('Error signing up:', error);
      })
    })
    // navigation.navigate("OTPCode", {
    //   phoneNumber: `+${country.callingCode[0]}${data.phoneNumber}`,
    // });
  };

  const confirmSignInWithCode = async (confirmationCode: string) => {
    try {
      await confirmSignIn({
        challengeResponse: confirmationCode,
      })
    } catch (error) {
      console.log(error);
    }

  }

  const confirmCode = async (email: string, confirmationCode: string) => {
    try {
      const { isSignUpComplete, nextStep, } = await confirmSignUp({
        username: email,
        confirmationCode,
      });
      const {isSignedIn} = await autoSignIn();
      console.log('isSignUpComplete', isSignUpComplete);
      console.log('isSignedIn', isSignedIn); 
      console.log('nextStep', nextStep);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
  const logOut = async () => {
    await signOut();
  }
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
        <Controller
          control={control}
          name="email"
          rules={{
            required: {
              value: true,
              message: "email is required.",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <View>
                <Input keyboardType="email-address" placeholder="Email" onChangeText={onChange} errors={errors?.email?.message}/>
              </View>
            </>
          )}
        />
        <Controller
          control={control}
          name="otp"
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <View>
                <Input keyboardType="numeric" placeholder="OTP" onChangeText={onChange}/>
              </View>
            </>
          )}
        />

        <Button btnTitle="Next" onPress={handleSubmit(onSubmit)}>
        </Button> 
        <Button btnTitle="confirm code sign-in" onPress={() => confirmSignInWithCode(getValues().otp)}>
        </Button>
        <Button btnTitle="confirm code signup" onPress={() => confirmCode(getValues().email, getValues().otp)}>
        </Button>
        <Button btnTitle="Log out" onPress={logOut}>
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
