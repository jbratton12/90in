import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InspirationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = async (country) => {
    try {
      // Make API call to REST Countries API to retrieve country information
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country.name}`
      );
      const data = await response.json();

      // Update selected country and set modal visible with retrieved data
      setSelectedCountry(data[0]);
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching country information:", error);
    }
  };

  // Format number with commas as thousands separators
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Render country icons
  const renderCountryIcons = () => {
    const countries = [
      { name: "Austria", icon: "leaf-outline" },
      { name: "Belgium", icon: "bus-outline" },
      { name: "Croatia", icon: "thermometer-outline" },
      { name: "Czechia", icon: "heart-outline" },
      { name: "Denmark", icon: "battery-charging-outline" },
      { name: "Estonia", icon: "logo-skype" },
      { name: "Finland", icon: "subway-outline" },
      { name: "France", icon: "wine-outline" },
      { name: "Germany", icon: "beer-outline" },
      { name: "Greece", icon: "sunny-outline" },
      { name: "Hungary", icon: "airplane-outline" },
      { name: "Iceland", icon: "magnet-outline" },
      { name: "Italy", icon: "pizza-outline" },
      { name: "Latvia", icon: "rocket-outline" },
      { name: "Liechtenstein", icon: "bulb-outline" },
      { name: "Lithuania", icon: "cloudy-night-outline" },
      { name: "Luxembourg", icon: "car-sport-outline" },
      { name: "Malta", icon: "boat-outline" },
      { name: "The Netherlands", icon: "bicycle-outline" },
      { name: "Norway", icon: "infinite-outline" },
      { name: "Poland", icon: "hammer-outline" },
      { name: "Portugal", icon: "football-outline" },
      { name: "Slovakia", icon: "camera-outline" },
      { name: "Slovenia", icon: "earth-outline" },
      { name: "Spain", icon: "tennisball-outline" },
      { name: "Switzerland", icon: "cash-outline" },
    ];

    return countries.map((country, index) => (
      <TouchableOpacity
        key={index}
        style={styles.countryIconContainer}
        onPress={() => handleCountryClick(country)}
      >
        <Ionicons name={country.icon} size={40} color="black" />
        <Text style={styles.countryName}>{country.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.countryIconsContainer}>
        {renderCountryIcons()}
      </ScrollView>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {selectedCountry && (
            <View>
              <Text style={styles.modalCountryName}>
                {selectedCountry.name.common} {selectedCountry.flag}
              </Text>
              <Text style={styles.infofields}>
                Capital: {selectedCountry.capital}
              </Text>
              <Text style={styles.infofields}>
                Population: {formatNumberWithCommas(selectedCountry.population)}
              </Text>
              <Text style={styles.infofields}>
                Area: {formatNumberWithCommas(selectedCountry.area)} km²
              </Text>
              <Text style={styles.infofields}>
                Timezone: {selectedCountry.timezones}
              </Text>
              <Text style={styles.infofields}>
                Subregion: {selectedCountry.subregion}
              </Text>
              <Text style={styles.infofields}>
                Visited?{" "}
                {selectedCountry.visited ? (
                  <Ionicons name="checkmark-outline" size={30} color="green" />
                ) : (
                  <Ionicons name="close-outline" size={30} color="red" />
                )}
              </Text>
            </View>
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.planaTripButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Plan a trip!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  countryIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    width: 100,
  },
  countryIconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  countryName: {
    marginTop: 5,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalCountryName: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    width: 100,
  },
  modalCloseButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  infofields: {
    fontSize: 24,
    lineHeight: 50,
  },
  planaTripButton: {
    marginTop: 20,
    marginLeft: 30,
    padding: 10,
    backgroundColor: "#20b2aa",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default InspirationScreen;
