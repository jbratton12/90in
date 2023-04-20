import React from "react";
import { View, Text, StyleSheet, SafeAreaView, useState } from "react-native";
import SummaryBar from "../components/summaryBar";
import CurrentTrip from "../components/currentTrip";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.container}>NinetyIn</Text>
      <SummaryBar />
      <CurrentTrip />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    margin: 10,
  },
});
