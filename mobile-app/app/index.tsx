import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContextProvider } from "./contexts/AuthProvider";
import MainNavigator from "./MainNavigator";
import QueryProvider from "./lib/react-query/QueryProvider";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-toast-message";
import { UserContextProvider } from "./contexts/UserContext";
import { Provider } from "react-redux";
import store from "./_store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Loader from "@/components/shared/Loader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StripeProvider } from "@stripe/stripe-react-native";

const Stack = createNativeStackNavigator();

const persistor = persistStore(store);

function App() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <QueryProvider>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <RootSiblingParent>
              <AuthContextProvider>
                <UserContextProvider>
                  <View style={{ flex: 1, marginTop: -insets.top }}>
                    <StripeProvider
                      publishableKey={process.env.EXPO_STRIPE_PUBLISHABLE_KEY ?? ""}
                      urlScheme="your-url-scheme"
                      merchantIdentifier="merchant.com.parkeasy"
                    >
                      <NavigationContainer independent>
                        <MainNavigator />
                      </NavigationContainer>
                    </StripeProvider>
                  </View>
                </UserContextProvider>
              </AuthContextProvider>
            </RootSiblingParent>

            <Toast />
          </PersistGate>
        </Provider>
      </QueryProvider>
    </>
  );
}

export default App;
