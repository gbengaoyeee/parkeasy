import AuthNavigator from "./_auth/AuthNavigator";
import { useAuthContext } from "./contexts/AuthProvider";
import TabController from "./_screens/TabController";
import { View } from "react-native";
import Loader from "@/components/shared/Loader";

export default function MainNavigator() {
  // Add a Toast on screen.
  const { isLoggedIn, isLoading } = useAuthContext();
  if(isLoading) {
    return <View className="flex-1 items-center p-8">
      <Loader />
    </View>
  }
  return isLoggedIn ? <TabController /> : <AuthNavigator />;
}
