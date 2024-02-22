import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateUserValidation } from "@/app/lib/validation";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { z } from "zod";
import { useUpdateUser } from "@/app/lib/react-query/queryAndMutations";
import Loader from "@/components/shared/Loader";
import { User } from "@/app/types";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import useToast from "@/app/hooks/useToast";
import { HomeStackParamList } from "../../host/home/HomeNavigator";
import { useUserContext } from "@/app/contexts/UserContext";

interface RouteParams {
  user: User;
}

const OnboardUser = () => {
  const form = useForm({
    resolver: zodResolver(UpdateUserValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const route = useRoute();
  const { user } = route.params as RouteParams;
  const { showToast, toast } = useToast();
  const { refreshUser } = useUserContext();

  const { isPending: isUpdating, mutateAsync: handleUpdateUser } = useUpdateUser();

  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const onSubmit = (values: any) => {
    let data = values as z.infer<typeof UpdateUserValidation>;
    handleUpdateUser({
      userId: user.id,
      dto: data,
      extra: { mobileOnboardStatus: "completed", createStripeCustomer: true },
    })
      .then((resp) => {
        toast.hide();
        setTimeout(() => {
          showToast({ type: "success", message: "Your profile has been updated" });
        }, 500);
        return refreshUser();
      })
      .then((re) => navigation.goBack())
      .catch((error) => {
        console.error(error.response.data.message);
        showToast({ type: "error", message: error.response.data.message });
      });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 5 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={100}
        >
          {isUpdating && (
            <View style={styles.loaderContainer}>
              <Loader />
            </View>
          )}

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 20, lineHeight: 28, fontWeight: "700" }}>
              Please enter your information
            </Text>
            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View style={{ marginBottom: 12 }}>
                  <Text>First name</Text>
                  <Input
                    placeholder="John"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={error?.message}
                  />
                </View>
              )}
              name="firstName"
            />

            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View style={{ marginBottom: 12 }}>
                  <Text>Last name</Text>
                  <Input
                    placeholder="Doe"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={error?.message}
                  />
                </View>
              )}
              name="lastName"
            />

            <Controller
              control={form.control}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View style={{ marginBottom: 12 }}>
                  <Text>Email</Text>
                  <Input
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="email-address"
                    errors={error?.message}
                  />
                </View>
              )}
              name="email"
            />
          </View>

          <Button
            disabled={isUpdating}
            style={{ marginBottom: 20 }}
            onPress={() => {
              form.handleSubmit(onSubmit)();
            }}
          >
            <Text style={{ color: "white" }}>Next</Text>
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    marginBottom: 3,
    alignItems: "center",
  },
  safeAreaContainer: {
    flex: 1,
  },
  scrollView: {
    padding: 5,
  },
});

export default OnboardUser;
