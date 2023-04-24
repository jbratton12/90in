import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import moment from "moment";
import { updateDB } from "../../../service.js";
import { useDispatch } from "react-redux";
import { updateTrip } from "../redux/tripsSlice.js";
moment.suppressDeprecationWarnings = true;

export default function TripView({ item, onDelete }) {
  const dispatch = useDispatch();

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

  // State for tracking edit form modal visibility and form data
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editedEntryDate, setEditedEntryDate] = useState(item.entrydate);
  const [editedExitDate, setEditedExitDate] = useState(item.exitdate);
  const [editedDays, setEditedDays] = useState(item.days);

  // Handler for opening edit form modal
  const handleEdit = () => {
    setIsEditModalVisible(true);
  };

  // Handler for closing edit form modal
  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
  };

  // Handler for updating trip with edited dates
  const handleUpdate = async () => {
    // Update trip with edited dates
    const { trip } = await updateDB(item._id, {
      entrydate: editedEntryDate,
      exitdate: editedExitDate,
      days: editedDays,
    });
    console.log(trip);
    dispatch(
      updateTrip({
        id: trip.id,
        entrydate: trip.entrydate,
        exitdate: trip.exitdate,
        days: trip.days,
      })
    );
    setIsEditModalVisible(false);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerText}>{item.country}</Text>
      <Text style={styles.text}>Entry Date: {item.entrydate}</Text>
      <Text style={styles.text}>Exit Date: {item.exitdate}</Text>
      <Text style={styles.text}>
        Duration: {days} {daysText}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={isEditModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseEditModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.miniContainer}>
            <Text style={styles.inputLabel}>Entry Date</Text>
            <TextInput
              style={styles.input}
              value={editedEntryDate}
              onChangeText={(text) => {
                setEditedEntryDate(text);
                // Update editedDays based on editedEntryDate and editedExitDate
                const newEntryDate = moment(text, "DD-MM-YYYY");
                const newDays = areDatesValid
                  ? exitDate.diff(newEntryDate, "days") + 1
                  : "Invalid Dates";
                setEditedDays(newDays);
              }}
            />
            <Text style={styles.inputLabel}>Exit Date</Text>
            <TextInput
              style={styles.input}
              value={editedExitDate}
              onChangeText={(text) => {
                setEditedExitDate(text);
                // Update editedDays based on editedEntryDate and editedExitDate
                const newExitDate = moment(text, "DD-MM-YYYY");
                const newDays = areDatesValid
                  ? newExitDate.diff(entryDate, "days") + 1
                  : "Invalid Dates";
                setEditedDays(newDays);
              }}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Cancel"
                onPress={handleCloseEditModal}
                color="red"
              />
              <Button title="Update" onPress={handleUpdate} />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 0,
    padding: 10,
    borderColor: "lightblue",
    borderWidth: 5,
    lineHeight: 1,
    borderRadius: 10,
    display: "flex",
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#4682b4",
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    marginRight: 10,
    alignSelf: "flex-end",
    borderRadius: 10,
    width: 100,
    textAlign: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  editButton: {
    backgroundColor: "#4682b4",
    padding: 10,
    marginTop: 10,
    alignSelf: "flex-end",
    borderRadius: 10,
    width: 100,
    textAlign: "center",
  },
  editButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  miniContainer: {
    backgroundColor: "#f0ffff",
    width: 300,
    borderRadius: 10,
  },
  formContainer: {
    width: "80%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  inputLabel: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    color: "#778899",
  },
  input: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  cancelButton: {
    padding: 8,
    marginRight: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
  cancelButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  saveButton: {
    padding: 8,
    backgroundColor: "#007bff",
    borderRadius: 4,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
