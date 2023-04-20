import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import TripView from "./tripView";

export default function TripList({ tripArr }) {
  console.log(tripArr);
  return (
    <View style={styles.container}>
      <FlatList
        data={tripArr}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TripView item={item} styles={styles.trips} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    flex: 1,
    height: 100,
    margin: 10,
    padding: 10,
    width: 300,
    textAlign: "center",
  },

  trips: {
    backgroundColor: "red",
  },
});
