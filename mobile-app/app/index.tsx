import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContextProvider } from "./contexts/AuthProvider";
import MainNavigator from "./MainNavigator";
import QueryProvider from "./lib/QueryProvider";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <QueryProvider>
        <RootSiblingParent>
          <AuthContextProvider>
            <NavigationContainer independent>
              <MainNavigator />
            </NavigationContainer>
          </AuthContextProvider>
        </RootSiblingParent>
      </QueryProvider>

      <Toast />
    </>
  );
}

export default App;
