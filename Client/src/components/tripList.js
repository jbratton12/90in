import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import TripView from "./tripView";

export default function TripList({ tripArr }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tripArr}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <TripView item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    flex: 3,
  },
});
