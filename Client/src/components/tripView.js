import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

export default function TripView({ item }) {
  console.log(item);

  // Parse entrydate and exitdate into Moment objects
  const entryDate = moment(item.entrydate, "DD-MM-YYYY");
  const exitDate = moment(item.exitdate, "DD-MM-YYYY");

  // Check if entrydate and exitdate are valid
  const areDatesValid = entryDate.isValid() && exitDate.isValid();

  // Calculate days difference only if both dates are valid
  const days = areDatesValid
    ? exitDate.diff(entryDate, "days") + 1 // Adding 1 to include both entry and exit dates
    : "Invalid Dates";

  return (
    <View>
      <Text>Country: {item.country}</Text>
      <Text>Entry Date: {item.entrydate}</Text>
      <Text>Exit Date: {item.exitdate}</Text>
      <Text>Duration: {days} days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    margin: 10,
    padding: 10,
    borderColor: "blue",
    borderWidth: 2,
  },
});
