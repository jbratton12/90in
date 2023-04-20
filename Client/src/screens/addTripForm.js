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
import DateTimePicker from "@react-native-community/datetimepicker";
import { postTrip } from "../../../service";

export default function FormModal({ isVisible, onClose, onSubmit }) {
  const [country, setCountry] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [days, setDays] = useState("");
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
    // Form validation logic
    // Check if all fields are filled
    if (country === "" || entryDate === "" || exitDate === "" || days === "") {
      alert("Please fill in all fields");
      return;
    }
    // Create a new trip object
    const newTrip = {
      country,
      entryDate,
      exitDate,
      days: parseInt(days),
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
      setDays("");
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
    setDays("");
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
        <TextInput
          style={styles.input}
          placeholder="Number of Days"
          placeholderTextColor="gray"
          value={days}
          onChangeText={(text) => setDays(text)}
          keyboardType="numeric"
        />
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
