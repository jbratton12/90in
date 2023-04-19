import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SummaryBar() {
  return (
    <Text style={styles.container}>
      {/* {" "} */}
      You're in! 88 days left from 18/04/2023
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    // flex: 1,
  },
});
