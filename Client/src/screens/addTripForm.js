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
  SafeAreaView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function FormModal({ isVisible, onClose, onSubmit }) {
  const [tripName, setTripName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerField, setDatePickerField] = useState("");

  const handleDatePicker = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = `${selectedDate.getDate()}/${
        selectedDate.getMonth() + 1
      }/${selectedDate.getFullYear()}`;
      if (datePickerField === "fromDate") {
        setFromDate(formattedDate);
      } else if (datePickerField === "toDate") {
        setToDate(formattedDate);
      }
    }
  };

  const handleFormSubmit = () => {
    // Form validation logic
    // Check if all fields are filled
    if (
      tripName === "" ||
      fromDate === "" ||
      toDate === "" ||
      numberOfDays === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    // Create a new trip object
    const newTrip = {
      tripName,
      fromDate,
      toDate,
      numberOfDays: parseInt(numberOfDays),
    };
    onSubmit(newTrip);
    // Clear input fields after submitting
    setTripName("");
    setFromDate("");
    setToDate("");
    setNumberOfDays("");
    onClose();
  };

  const handleModalClose = () => {
    // Reset form input fields when modal is closed
    setTripName("");
    setFromDate("");
    setToDate("");
    setNumberOfDays("");
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
          placeholder="Trip Name"
          placeholderTextColor="gray"
          value={tripName}
          onChangeText={(text) => setTripName(text)}
        />
        <TouchableOpacity
          style={styles.datePickerField}
          onPress={() => {
            setShowDatePicker(true);
            setDatePickerField("fromDate");
          }}
        >
          <Text style={styles.datePickerLabel}>From Date:</Text>
          <Text style={styles.datePickerValue}>
            {fromDate || "Select date"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.datePickerField}
          onPress={() => {
            setShowDatePicker(true);
            setDatePickerField("toDate");
          }}
        >
          <Text style={styles.datePickerLabel}>To Date </Text>
          <Text style={styles.datePickerValue}>{toDate || "Select date"}</Text>
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
          value={numberOfDays}
          onChangeText={(text) => setNumberOfDays(text)}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleFormSubmit} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={handleModalClose} color="red" />
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
