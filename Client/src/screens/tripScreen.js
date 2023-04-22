import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import TripList from "../components/tripList";
import { StatusBar } from "expo-status-bar";
import { fetchTrips } from "../../../service";
import { Button } from "react-native";
import FormModal from "./addTripForm";
import { useDispatch, useSelector } from "react-redux";
import { setAllTrips, addTrip } from "../redux/tripsSlice";
import Map from "../components/map";

export default function TripScreen() {
  //Set state
  const dispatch = useDispatch();
  const tripArr = useSelector((state) => state.trips);

  const [isFormVisible, setFormVisible] = useState(false);

  const handleFormSubmit = (inputValue) => {
    // Add the form input value to the listData state
    dispatch(addTrip(inputValue));
    setFormVisible(false);
  };

  const handleFormToggle = () => {
    setFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const getTrips = async () => {
      const tripsFromDatabase = await fetchTrips();
      dispatch(setAllTrips(tripsFromDatabase));
    };
    getTrips();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>90In</Text>
      <TripList tripArr={tripArr} />
      {/* <Map></Map> */}
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
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    margin: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#483d8b",
    width: 355,
  },
});
