import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { postTrip } from "../../../service";
import moment from "moment";
moment.suppressDeprecationWarnings = true;

// const schengenCountries = [
//   "Austria",
//   "Belgium",
//   "Croatia",
//   "Czech Republic",
//   "Denmark",
//   "Estonia",
//   "Finland",
//   "France",
//   "Germany",
//   "Greece",
//   "Hungary",
//   "Iceland",
//   "Italy",
//   "Latvia",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Malta",
//   "Netherlands",
//   "Norway",
//   "Poland",
//   "Portugal",
//   "Slovakia",
//   "Slovenia",
//   "Spain",
//   "Sweden",
//   "Switzerland",
// ];

export default function FormModal({ isVisible, onClose, onSubmit }) {
  const [country, setCountry] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerField, setDatePickerField] = useState("");

  const handleDatePicker = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = `${selectedDate.getDate()}/${
        selectedDate.getMonth() + 1
      }/${selectedDate.getFullYear()}`;
      if (datePickerField === "entryDate") {
        setEntryDate(formattedDate);
      } else if (datePickerField === "exitDate") {
        setExitDate(formattedDate);
      }
    }
  };

  const handleFormSubmit = async () => {
    // Check if all fields are filled
    if (country === "" || entryDate === "" || exitDate === "") {
      alert("Please fill in all fields");
      return;
    }

    // Logic for calculating the number of days on a trip correctly

    const startDate = moment(entryDate, "DD-MM-YYYY");
    const endDate = moment(exitDate, "DD-MM-YYYY");

    const areDatesValid = startDate.isValid() && endDate.isValid();

    const days = areDatesValid
      ? endDate.diff(startDate, "days") + 1 // Adding 1 to include both entry and exit dates
      : "Invalid Dates";

    // Create a new trip object
    const newTrip = {
      country,
      entryDate,
      exitDate,
      days,
    };

    try {
      // Send POST request to server to create new trip
      const createdTrip = await postTrip(newTrip);

      // Call the onSubmit callback with the newly created trip
      onSubmit(createdTrip);
      // Clear input fields after submitting
      setCountry("");
      setEntryDate("");
      setExitDate("");
      onClose();
    } catch (error) {
      // Handle error if POST request fails
      console.error("Failed to create trip:", error);
      alert("Failed to create trip. Please try again.");
    }
  };

  const handleModalClose = (onClose) => {
    // Reset form input fields when modal is closed
    setCountry("");
    setEntryDate("");
    setExitDate("");
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={handleModalClose}
    >
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>Add Trip</Text>
        <TextInput
          style={styles.input}
          placeholder="Country"
          placeholderTextColor="gray"
          value={country}
          onChangeText={(text) => setCountry(text)}
        />
        <TouchableOpacity
          style={styles.datePickerField}
          onPress={() => {
            setShowDatePicker(true);
            setDatePickerField("entryDate");
          }}
        >
          <Text style={styles.datePickerLabel}>From Date:</Text>
          <Text style={styles.datePickerValue}>
            {entryDate || "Select date"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.datePickerField}
          onPress={() => {
            setShowDatePicker(true);
            setDatePickerField("exitDate");
          }}
        >
          <Text style={styles.datePickerLabel}>To Date </Text>
          <Text style={styles.datePickerValue}>
            {exitDate || "Select date"}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDatePicker}
          />
        )}
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={() => handleFormSubmit()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            onPress={() => handleModalClose(onClose)}
            color="red"
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  datePickerField: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginVertical: 8,
    height: 40,
  },
  datePickerLabel: {
    flex: 1,
    marginRight: 8,
    color: "gray",
  },
  datePickerValue: {
    flex: 2,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 16,
  },
});
