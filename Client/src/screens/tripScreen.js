import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import TripList from "../components/tripList";
import { StatusBar } from "expo-status-bar";
import { fetchTrips } from "../../../service";

export default function TripScreen() {
  //Set state
  const [tripArr, setTrips] = useState([]);

  useEffect(() => {
    const getTrips = async () => {
      const tripsFromDatabase = await fetchTrips();
      setTrips(tripsFromDatabase);
    };
    getTrips();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TripList tripArr={tripArr} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 100,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    // margin: 10,
  },
});
