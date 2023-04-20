import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TripView({ item }) {
  console.log(item);
  const entryDate = new Date(item.entrydate);
  console.log(entryDate);
  const exitDate = new Date(item.exitdate);
  console.log(exitDate);
  const timeDifference = exitDate.getTime() - entryDate.getTime();
  console.log(timeDifference);
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const days = daysDifference + 1; // Adding 1 to include both entry and exit dates

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
