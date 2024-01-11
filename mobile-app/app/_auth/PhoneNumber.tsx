import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
  Touchable,
  StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import { TextInput, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import { useNavigation } from "@react-navigation/native";
import CountryPicker, { Country } from "react-native-country-picker-modal";

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

  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    //@ts-ignore
    navigation.navigate("OTPCode", {
      phoneNumber: `+${country.callingCode[0]}${data.phoneNumber}`,
    });
  };
  const [country, setCountry] = useState<Country>({
    callingCode: ["971"],
    cca2: "AE",
    currency: ["AED"],
    flag: "flag-ae",
    name: "United Arab Emirates",
    region: "Asia",
    subregion: "Western Asia",
  });

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
              <Text className="font-bold text-lg">Enter your phone number</Text>
              <View>
                <View
                  style={styles.phoneInputContainer}
                  className="border-gray-300 rounded-md border"
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
                  <Text className="text-red">{errors.phoneNumber.message}</Text>
                )}
              </View>
            </>
          )}
          name="phoneNumber"
        />

        <Button onPress={handleSubmit(onSubmit)}>
          <Text className="text-white">Next</Text>
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
  },
  phoneInput: {
    flexGrow: 1,
  },
});
export default PhoneNumber;
