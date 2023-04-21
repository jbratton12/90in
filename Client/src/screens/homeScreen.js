import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SummaryBar from "../components/summaryBar";
import CurrentTrip from "../components/currentTrip";

export default function HomeScreen() {
  // const [currentTrip, setCurrentTrip] = useState("");

  const [currentTrip, setCurrentTrip] = useState("");

  useEffect(() => console.log(currentTrip), [currentTrip]);

  return (
    <SafeAreaView>
      <Text style={styles.container}>NinetyIn</Text>
      <SummaryBar currentTrip={currentTrip} />
      <CurrentTrip currentTrip={currentTrip} setCurrentTrip={setCurrentTrip} />
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
