import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import { useSelector } from "react-redux";

export default function CurrentTrip() {
  const [matchingTrip, setMatchingTrip] = useState();
  const trips = useSelector((state) => state.trips);

  // useEffect(() => console.log("trips in currentTrip : ", trips), [trips]);
  // useEffect(() => console.log(matchingTrip), [matchingTrip]);

  useEffect(() => {
    const currentDate = moment().format("DD-MM-YYYY");
    setMatchingTrip(
      trips.find((trip) => {
        return moment(currentDate, "DD-MM-YYYY").isBetween(
          moment(trip.entrydate, "DD-MM-YYYY"),
          moment(trip.exitdate, "DD-MM-YYYY"),
          null,
          "[]"
        );
      })
    );
  }, [trips]);
  return (
    <View style={styles.container}>
      {matchingTrip ? (
        <View>
          <Text style={styles.text}>Look at you having fun:</Text>
          <Text style={styles.text}>Trip Name: {matchingTrip.country}</Text>
          <Text style={styles.text}>Entry Date: {matchingTrip.entrydate}</Text>
          <Text style={styles.text}>Exit Date: {matchingTrip.exitdate}</Text>
          <Text style={styles.text}>Days: {matchingTrip.days}</Text>
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
    textAlign: "center",
  },
});
