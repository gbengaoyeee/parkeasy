import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./_auth/AuthNavigator";
import { useAuthContext } from "./contexts/AuthProvider";
import HomeNavigator from "./_screens/HomeNavigator";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

export default function MainNavigator() {
  // Add a Toast on screen.
  const { isLoggedIn, isLoading } = useAuthContext();
  return isLoggedIn ? <HomeNavigator /> : <AuthNavigator />;
}
