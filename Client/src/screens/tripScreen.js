import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import TripList from "../components/tripList";
import { StatusBar } from "expo-status-bar";
import { fetchTrips } from "../../../service";
import { Button } from "react-native";
import FormModal from "./addTripForm";

export default function TripScreen() {
  //Set state
  const [tripArr, setTrips] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleFormSubmit = (inputValue) => {
    // Add the form input value to the listData state
    setTrips([...tripArr, inputValue]);
    setFormVisible(false);
  };

  const handleFormToggle = () => {
    setFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const getTrips = async () => {
      const tripsFromDatabase = await fetchTrips();
      setTrips(tripsFromDatabase);
    };
    getTrips();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>NinetyIn</Text>
      <TripList tripArr={tripArr} setTrips={setTrips} />
      <StatusBar style="auto" />
      <FormModal
        isVisible={isFormVisible}
        onClose={handleFormToggle}
        onSubmit={handleFormSubmit}
      />
      <Button
        title="Add Trip"
        onPress={handleFormToggle}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "red",
  },

  text: {
    // flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    margin: 10,
    width: 340,
  },
});
