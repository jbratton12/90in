import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import SummaryBar from "../components/summaryBar";
import CurrentTrip from "../components/currentTrip";
import Map from "../components/map";
import SpinningGlobe from "../components/spinning globe";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView>
        <Text style={styles.container}>90In </Text>
        <SummaryBar />
        <CurrentTrip />
      </SafeAreaView>
      <Map />
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#483d8b",
  },
});
