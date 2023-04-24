import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import SummaryBar from "../components/summaryBar";
import CurrentTrip from "../components/currentTrip";
import Map from "../components/map";

export default function HomeScreen() {
  return (
    <>
      <ScrollView>
        <Image
          source={require("../assets/logo.png")}
          style={styles.image} // specify the styles for the image
          resizeMode="contain"
        />
        <SummaryBar />
        <CurrentTrip />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    margin: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#483d8b",
  },
  Imagecontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  map: {
    flex: 1,
    height: 300,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    overflow: "visible",
  },
  image: {
    width: "auto",
    height: 88,
    marginHorizontal: 0,
  },
});
