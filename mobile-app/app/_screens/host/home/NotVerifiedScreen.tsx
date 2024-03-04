import { View, Text, FlatList, Linking } from "react-native";
import React from "react";
import Button from "@/components/shared/Button";
import { getVerificationLink } from "@/app/services/verification";
import useToast from "@/app/hooks/useToast";
import { useUserContext } from "@/app/contexts/UserContext";

const NotVerifiedScreen = () => {
  const { showToast } = useToast();
  const { user } = useUserContext();
  const featureList = [
    {
      title: "Property units, vehicles",
    },
    {
      title: "Parking spots",
    },
    {
      title: "Energy meter billings",
    },
  ];

  const openURL = async () => {
    if (user && user.phone_number) {
      getVerificationLink(user.phone_number)
        .then(async (link) => {
          const canOpen = await Linking.canOpenURL(link);
          if (canOpen) {
            Linking.openURL(link);
          } else {
            console.error("Cannot open URL");
          }
        })
        .catch((err) => {
          console.error(err.response.data.message);
          showToast({ type: "error", message: err.response.data.message });
        });
    }
  };
  return (
    <View>
      <Text>Welcome to Parkeasy</Text>
      <Text>To access to the following by verifying your identity</Text>
      {featureList.map((item, index) => (
        <Text key={index} className="text-gray-500 text-lg">
          {item.title}
        </Text>
      ))}
      <Button btnTitle="Get verified now" onPress={openURL}></Button>
    </View>
  );
};

export default NotVerifiedScreen;
