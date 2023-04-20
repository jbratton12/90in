import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import { deleteFromDB } from "../../../service";

export default function TripView({ item, onDelete }) {
  // Parse entrydate and exitdate into Moment objects
  const entryDate = moment(item.entrydate, "DD-MM-YYYY");
  const exitDate = moment(item.exitdate, "DD-MM-YYYY");

  // Check if entrydate and exitdate are valid
  const areDatesValid = entryDate.isValid() && exitDate.isValid();

  // Calculate days difference only if both dates are valid
  const days = areDatesValid
    ? exitDate.diff(entryDate, "days") + 1 // Adding 1 to include both entry and exit dates
    : "Invalid Dates";

  // Modify the "days" variable to "day" if value is 1
  const daysText = days === 1 ? "day" : "days";

  const handleDelete = () => {
    onDelete(item); // Call the onDelete prop with the item object
  };

  //  Delete Trip from the list

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.text}>Country: {item.country}</Text>
      <Text style={styles.text}>Entry Date: {item.entrydate}</Text>
      <Text style={styles.text}>Exit Date: {item.exitdate}</Text>
      <Text style={styles.text}>
        Duration: {days} {daysText}
      </Text>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    margin: 10,
    padding: 10,
    borderColor: "pink",
    borderWidth: 2,
    lineHeight: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 24, // Increase this value to adjust line height
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
