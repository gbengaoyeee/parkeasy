import { View, Text, KeyboardAvoidingView, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation, useRoute } from "@react-navigation/native";
import { useCreateUser, useFinishPhoneVerification, useStartPhoneVerification } from "../lib/react-query/queryAndMutations";
import Toast from "react-native-toast-message";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { useAuthContext } from "../contexts/AuthProvider";
import LinkButton from "@/components/shared/LinkButton";
import TouchOpacity from "@/components/shared/TouchOpacity";
import OTPInput from "@/components/shared/OTPInput";
import useToast from "../hooks/useToast";
import { AppwriteException } from "appwrite";
import { ConfirmationResult } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseConfig";

interface RouteParams {
  confirmationResult: ConfirmationResult;
  phoneNumber: string;
}
const OTPCode = () => {
  const route = useRoute();
  const { signOut } = useAuthContext();
  const [otpCodeValues, setOtpCodeValues] = useState(Array(6).fill(""));
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      otpcode: "",
    },
  });
  const { showToast } = useToast();
  const { isPending: isSendingCode, mutateAsync: startVerification } = useStartPhoneVerification();
  const { isPending: isSubmittingCode, mutateAsync: finishVerification } = useFinishPhoneVerification();
  const { isPending: isCreatingUser, mutateAsync: createUser } = useCreateUser();
  const [sessionId, setSessionId] = useState("");

  const { confirmationResult, phoneNumber } = route.params as RouteParams;

  useEffect(() => {
    // if (phoneNumber) {
    //   handleResend();
    // }
  }, []);

  const onSubmit = (data: any) => {
    if (confirmationResult) {
      finishVerification({
        otpcode: otpCodeValues.join(""),
        confirmResult: confirmationResult,
        phone: phoneNumber,
        userRoles: ["owner", "visitor"],
      })
        .then((resp) => {})
        .catch((error) => {
          if (error.response.data.statusCode === 404) {
            createUser({
              phone: phoneNumber,
              userRoles: ["owner", "visitor"],
            }).catch((error) => {
              console.error("Could not create user");
              showToast({ type: "error", message: error.response.data.message });
              signOut();
              return;
            });
            return;
          } else {
            console.error('Could not get and create user')
            showToast({ type: "error", message: error.response.data.message });
            signOut();
          }
        });
    }
  };
  const handleResend = async () => {
    // startVerification(phoneNumber)
    //   .then((resp) => {
    //     setSessionId(resp.userId);
    //     showToast({
    //       type: "success",
    //       title: "Code sent",
    //       message: `We sent a code to ${phoneNumber}`,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     showToast({ type: "error", message: error.message });
    //   });
  };
  return (
    <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <SafeAreaView className="flex-1 items-center mt-10">
        <View className="w-full px-5">
          <Text className="text-center font-bold text-lg mb-5">Enter OTP code</Text>

          <View className="mb-5">
            <Text className="text-center font-bold ">We have sent a one time code to {phoneNumber} </Text>

            <LinkButton className="flex items-center" to={{ screen: "PhoneNumber" }}>
              Enter another number
            </LinkButton>
          </View>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "This is required.",
              },
              minLength: {
                value: 6,
                message: "Please enter a valid code",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <OTPInput
                  length={6}
                  value={otpCodeValues}
                  onChange={(e) => {
                    setOtpCodeValues(e);
                    onChange(e.join(""));
                  }}
                />
              </>
            )}
            name="otpcode"
          />

          <Button disabled={getValues().otpcode.length < 6 || isSendingCode || isSubmittingCode} className="mt-5" onPress={handleSubmit(onSubmit)}>
            <Text className="text-white">Confirm</Text>
          </Button>
          <View className="flex-row items-center justify-center mt-5">
            <Text className="mr-1">Didn't receive the code?</Text>
            <TouchOpacity onPress={handleResend}>Resend</TouchOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OTPCode;
