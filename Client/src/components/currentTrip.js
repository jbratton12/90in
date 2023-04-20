import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

export default function CurrentTrip() {
  const [currentTrip, setCurrentTrip] = useState("");

  useEffect(() => {
    // Fetch data from your database here
    fetch("http://192.168.0.198:3000/trips")
      .then((response) => response.json())
      .then((data) => {
        const currentDate = moment().format("DD/M/YYYY");
        const matchingTrip = data.find((trip) =>
          moment(currentDate, "DD/M/YYYY").isBetween(
            moment(trip.entrydate, "DD/M/YYYY"),
            moment(trip.exitdate, "DD/M/YYYY"),
            null,
            "[]"
          )
        );
        setCurrentTrip(matchingTrip); // Update state with the matching trip
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <View style={styles.container}>
      {currentTrip ? (
        <View>
          <Text style={styles.text}>Look at you having fun:</Text>
          <Text style={styles.text}>Trip Name: {currentTrip.country}</Text>
          <Text style={styles.text}>Entry Date: {currentTrip.entrydate}</Text>
          <Text style={styles.text}>Entry Date: {currentTrip.exitdate}</Text>
          <Text style={styles.text}>Days: {currentTrip.days}</Text>
        </View>
      ) : (
        <Text style={styles.text}>Maybe you deserve some time away</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
