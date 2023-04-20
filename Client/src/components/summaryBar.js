import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

export default function SummaryBar() {
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    // Fetch data from your database here
    fetch("http://192.168.0.198:3000/trips")
      .then((response) => response.json())
      .then((data) => {
        // Calculate total number of days from the retrieved data
        let totalDays = 90;
        data.forEach((trip) => {
          totalDays -= trip.days; // sum up all the days on each trip in the DB
        });
        setTotalDays(totalDays); // Update state with the calculated total number of days
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Text style={styles.container}>
      You're in! You have {totalDays} days remaing to travel in the Schengen
      Zone from {moment().format("DD/M/YYYY")}
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
