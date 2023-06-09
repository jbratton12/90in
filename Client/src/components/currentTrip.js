import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import moment from "moment";
import { useSelector } from "react-redux";
import Map from "./map";
import OptionalMap from "./optionalMap";

export default function CurrentTrip() {
  const [matchingTrip, setMatchingTrip] = useState("");
  const trips = useSelector((state) => state.trips);

  useEffect(() => {
    const currentDate = moment().format("DD-MM-YYYY");
    setMatchingTrip(
      trips.find((trip) => {
        return moment(currentDate, "DD-MM-YYYY").isBetween(
          moment(trip.entrydate, "DD-MM-YYYY"),
          moment(trip.exitdate, "DD-MM-YYYY"),
          null,
          "[]"
        );
      })
    );
  }, [trips]);
  return (
    <>
      <View style={styles.container}>
        {matchingTrip ? (
          <View>
            <Text style={styles.text}>
              Look at you having fun in {matchingTrip.country} {"\uD83D\uDE0E"}{" "}
            </Text>
            <Text style={styles.text}>
              Entry Date: {matchingTrip.entrydate}
            </Text>
            <Text style={styles.text}>Exit Date: {matchingTrip.exitdate}</Text>
            <Text style={styles.text}>Total days: {matchingTrip.days}</Text>
            <View style={styles.map}>
              <OptionalMap matchingTrip={matchingTrip}></OptionalMap>
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.text}>
              Maybe you deserve some time away from Codeworks? {"\uD83C\uDFD6"}
            </Text>
            <View style={styles.map}>
              <Map></Map>
            </View>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "lightblue",
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: "center",
  },
  map: {
    flex: 4,
    height: 300,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "orange",
  },
});
