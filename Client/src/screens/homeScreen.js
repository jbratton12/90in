import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SummaryBar from "../components/summaryBar";
import CurrentTrip from "../components/currentTrip";
import Map from "../components/map";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView>
        <Text style={styles.container}>NinetyIn</Text>
        <SummaryBar />
        <CurrentTrip />
      </SafeAreaView>
      <Map></Map>
    </>
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
