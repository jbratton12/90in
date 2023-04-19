import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SummaryBar from "../components/summaryBar";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.container}>NinetyIn</Text>
      <SummaryBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
  },
});
