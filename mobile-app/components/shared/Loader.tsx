import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import LoadingDots from "react-native-loading-dots";

const Loader = () => {
  return (
    <View style={styles.dotsWrapper}>
      <LoadingDots bounceHeight={3} size={5} colors={["#DD7230", "#854D27", "#F4C95D", "#2E1F27"]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dotsWrapper: {
    width: 40,
  },
});

export default Loader;
