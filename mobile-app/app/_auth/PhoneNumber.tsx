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
} from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import { useNavigation } from "@react-navigation/native";
import Loader from "@/components/shared/Loader";

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
    navigation.navigate("OTPCode", { phoneNumber: data.phoneNumber });
  };
  
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className="flex-1 items-center justify-center px-5">
        <View className="w-full">
          <Text>Enter your phone number</Text>
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
                <Input
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errors={errors?.phoneNumber?.message}
                />
              </>
            )}
            name="phoneNumber"
          />

          <Button className="mt-5" onPress={handleSubmit(onSubmit)}>
            <Text className="text-white">Next</Text>
          </Button>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default PhoneNumber;
