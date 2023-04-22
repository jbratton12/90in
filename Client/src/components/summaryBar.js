import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
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

  return (
    <Text style={styles.container}>
      {isIn ? "You're in!" : "You're out!"} You have {totalDays} days remaining
      to travel in the Schengen Zone from {moment().format("DD/MM/YYYY")}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
});
