import AuthNavigator from "./_auth/AuthNavigator";
import { useAuthContext } from "./contexts/AuthProvider";
import HostTabController from "./_screens/host/HostTabController";
import { View } from "react-native";
import Loader from "@/components/shared/Loader";
import { useSelector } from "react-redux";
import { RootState } from "./_store/store";
import VisitorTabController from "./_screens/visitor/VisitorTabController";

export default function MainNavigator() {
  // Add a Toast on screen.
  const { isLoggedIn, isLoading } = useAuthContext();
  const appSection = useSelector((state: RootState) => state.appSection.appSection);
  if (isLoading) {
    return (
      <View className="flex-1 items-center p-8">
        <Loader />
      </View>
    );
  }
  return isLoggedIn ? (
    <>
      {appSection === "host" ? <HostTabController /> : <VisitorTabController />}
    </>
  ) : (
    <AuthNavigator />
  );
}
