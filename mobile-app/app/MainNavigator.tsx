import AuthNavigator from "./_auth/AuthNavigator";
import { useAuthContext } from "./contexts/AuthProvider";
import HostTabController from "./_screens/host/HostTabController";
import { Button, Platform, StyleSheet, View } from "react-native";
import Loader from "@/components/shared/Loader";
import { useSelector } from "react-redux";
import { RootState } from "./_store/store";
import VisitorTabController from "./_screens/visitor/VisitorTabController";
import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import * as Device from "expo-device";
import { storeNotificationToken } from "./services/user";
import { useUserContext } from "./contexts/UserContext";

export default function MainNavigator() {
  // Add a Toast on screen.
  const { isLoggedIn, isLoading } = useAuthContext();
  const appSection = useSelector((state: RootState) => state.appSection.appSection);
  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader />
      </View>
    );
  }
  return isLoggedIn ? (
    <>
      <AppContainer appSection={appSection} />
    </>
  ) : (
    <AuthNavigator />
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
const AppContainer = ({ appSection }: { appSection: "host" | "visitor" }) => {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>("");
  const [notification, setNotification] = useState<Notifications.Notification>();
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();
  const { user } = useUserContext();

  useEffect(() => {
    registerForPushNotificationsAsync().then(async (token) => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  useEffect(() => {
    const storeToken = async () => {
      if(user && expoPushToken) {
        storeNotificationToken(user.id, expoPushToken);
      }
    }
    storeToken();
  }, [user, expoPushToken]);

  const sendNotification = async () => {
    console.log("Sending push notification...");

    // notification message
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "My first push notification!",
      body: "This is my first push notification made with expo rn app",
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        host: "exp.host",
        accept: "application/json",
        "accept-encoding": "gzip, deflate",
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  return appSection === "host" ? <HostTabController /> : <VisitorTabController />;
};

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (await Notifications.getExpoPushTokenAsync({ projectId: process.env.EXPO_PUBLIC_PROJECT_ID })).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
