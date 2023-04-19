import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TripView({ item }) {
  return (
    <View style={StyleSheet.container}>
      <Text>
        {item.country} {item.entrydate} + "-" {item.exitdate}{" "}
        {item.days + " days"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    margin: 10,
    padding: 10,
    borderColor: "blue",
    borderWidth: 2,
  },
});
