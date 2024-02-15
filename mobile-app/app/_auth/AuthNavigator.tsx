import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneNumber from "./PhoneNumber";
import OTPCode from "./OTPCode";
import { ConfirmationResult } from "firebase/auth";

const Stack = createNativeStackNavigator();

export type AuthNavigatorParamList = {
  PhoneNumber: undefined;
  OTPCode: {
    confirmationResult: ConfirmationResult;
    phoneNumber: string;
  };
  // ... other screens
};

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="PhoneNumber" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="OTPCode" component={OTPCode} />
    </Stack.Navigator>
  );
}
