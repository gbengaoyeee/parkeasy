import * as React from "react";
import { View, Text } from "react-native";
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

const Stack = createNativeStackNavigator();

const persistor = persistStore(store);

function App() {
  return (
    <>
      <QueryProvider>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <RootSiblingParent>
              <AuthContextProvider>
                <UserContextProvider>
                  <NavigationContainer independent>
                    <MainNavigator />
                  </NavigationContainer>
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
