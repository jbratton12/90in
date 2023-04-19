import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./Client/src/components/header";
import { useState, useEffect } from "react";
import { fetchTrips } from "./service";
import TripList from "./Client/src/components/tripList";

export default function App() {
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
      <Text>NinetyIn</Text>
      <TripList tripArr={tripArr} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
  },
});
