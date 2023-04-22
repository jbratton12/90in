import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import SummaryBar from "../components/summaryBar";
import CurrentTrip from "../components/currentTrip";
import Map from "../components/map";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView>
        <Text style={styles.container}>90In </Text>
        <SummaryBar />
        <CurrentTrip />
      </SafeAreaView>
      <View style={styles.map}>
        <Map />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
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
  map: {
    flex: 1,
    height: 300, // specify the height of the map container
    marginHorizontal: 10, // specify horizontal margin as needed
    marginVertical: 10, // specify vertical margin as needed
    borderRadius: 10,
    overflow: "hidden", // hide overflow to prevent map from being cut off
  },
});
