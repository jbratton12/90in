import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

export default function SummaryBar() {
  const [totalDays, setTotalDays] = useState(0);
  const [isIn, setIsIn] = useState(false); // Add state to track if user is in or out

  useEffect(() => {
    // Fetch data from the database
    fetch("http://192.168.0.198:3000/trips")
      .then((response) => response.json())
      .then((data) => {
        // Calculate total number of days from the retrieved data
        let totalDays = 90;
        data.forEach((trip) => {
          totalDays -= trip.days; // sum up all the days on each trip in the DB
        });
        setTotalDays(totalDays); // Update state with the calculated total number of days

        // Check if today's date is within a current trip
        const currentDate = moment().format("DD-MM-YYYY");
        const isInTrip = data.some((trip) =>
          moment(currentDate).isBetween(trip.entrydate, trip.exitdate, null, [])
        );
        setIsIn(isInTrip);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Text style={styles.container}>
      {isIn ? "You're out!" : "You're in!"} You have {totalDays} days remaining
      to travel in the Schengen Zone from {moment().format("DD/M/YYYY")}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
});
