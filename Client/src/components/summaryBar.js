import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import moment from "moment";
import { useSelector } from "react-redux";

export default function SummaryBar() {
  const [totalDays, setTotalDays] = useState("");
  const [isIn, setIsIn] = useState(false); // Add state to track if user is in or out
  const trips = useSelector((state) => state.trips);

  useEffect(() => {
    // Fetch data from the database
    let totalDays = trips.reduce((acc, trip) => {
      return acc - trip.days; // sum up all the days on each trip in the DB
    }, 90);

    // Calculate total number of days from the retrieved data
    setTotalDays(totalDays); // Update state with the calculated total number of days

    // Check if today's date is within a current trip
    const currentDate = moment().format("DD-MM-YYYY");
    const isInTrip = trips.some((trip) => {
      return moment(currentDate, "DD-MM-YYYY").isBetween(
        moment(trip.entrydate, "DD-MM-YYYY"),
        moment(trip.exitdate, "DD-MM-YYYY"),
        null,
        []
      );
    });
    setIsIn(isInTrip);
  }, [trips]);

  // Show an alert when totalDays reaches 0
  useEffect(() => {
    if (totalDays <= 0) {
      Alert.alert(
        "Alert",
        "You've run out of days! Put that passport away for now"
      );
    }
  }, [totalDays]);

  return (
    <Text style={styles.container}>
      {isIn ? "You're in!" : "You're out!"} You have{" "}
      <Text style={styles.boldText}>{totalDays >= 0 ? totalDays : 0}</Text>{" "}
      <Text style={styles.boldText}>days</Text> remaining to travel in the
      Schengen Zone from{" "}
      <Text style={styles.boldText}>{moment().format("DD/MM/YYYY")}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    // borderWidth: 5,
    borderColor: "lightblue",
    fontSize: 20,
  },
  boldText: {
    fontWeight: "bold",
    color: "#4682b4",
  },
});
