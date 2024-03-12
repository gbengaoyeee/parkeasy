import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Unmatched, Redirect, useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";
import { AuthNavigatorParamList } from "./_auth/AuthNavigator";

export default () => {
  const param = useGlobalSearchParams<{ unmatched: string[] }>();
  console.log(param);
  const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
//   useEffect(() => {
//     if (isFirebaseCallback(param.unmatched)) {
//       navigation.navigate("PhoneNumber");
//     }
//   }, [param]);
//   if (isFirebaseCallback(param.unmatched)) {
//       return <Redirect href="/_auth/PhoneNumber" />;
//   }

  return <Unmatched />;
};

const isFirebaseCallback = (unmatched: string[] | undefined) => {
  return unmatched?.length === 2 && unmatched[0] === "firebaseauth" && unmatched[1] === "link";
};
