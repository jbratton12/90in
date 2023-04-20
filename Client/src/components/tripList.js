import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import TripView from "./tripView";
import { deleteFromDB } from "../../../service";

export default function TripList({ tripArr, setTrips }) {
  // Sort the tripArr by entryDate in ascending order
  const sortedTripArr = tripArr.sort((a, b) => {
    return new Date(a.entrydate) - new Date(b.entrydate);
  });

  const handleDelete = (trip) => {
    deleteFromDB(trip._id)
      .then(() => {
        //     // If deleteFromDB returns a successful response, update the state with the filtered tripArr
        const newList = tripArr.filter((item) => item._id !== trip._id);
        console.log(newList);
        setTrips(newList);
      })
      .catch((error) => {
        // If deleteFromDB encounters an error, display an alert
        alert("Error: " + error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedTripArr} // Use sortedTripArr instead of tripArr
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TripView item={item} styles={styles.trips} onDelete={handleDelete} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "teal",
    flex: 1,
    height: 100,
    margin: 10,
    padding: 10,
    width: 340,
    textAlign: "center",
  },
});
