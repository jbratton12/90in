import React from "react";
import { View, Image, StyleSheet } from "react-native";

const StaticGlobe = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/globe.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default StaticGlobe;
