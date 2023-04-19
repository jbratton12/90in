import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Trip({ trip }) {
  return (
    <View style={StyleSheet.container}>
      <Text>
        {trip.country} {trip.days}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffdd0",
    margin: 10,
    padding: 10,
    borderColor: "blue",
    borderWidth: 2,
  },
});
