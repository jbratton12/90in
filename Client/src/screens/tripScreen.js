import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import TripList from "../components/tripList";
import { StatusBar } from "expo-status-bar";
import { fetchTrips } from "../../../service";
import { Button } from "react-native";
import FormModal from "./addTripForm";
import { useDispatch, useSelector } from "react-redux";
import { setAllTrips, addTrip } from "../redux/tripsSlice";
import BackgroundImage from "../components/backgroundImages";

export default function TripScreen() {
  //Set state
  const dispatch = useDispatch();
  const tripArr = useSelector((state) => state.trips);

  const [isFormVisible, setFormVisible] = useState(false);

  const handleFormSubmit = (inputValue) => {
    // Add the form input value to the listData state
    dispatch(addTrip(inputValue));
    setFormVisible(false);
  };

  const handleFormToggle = () => {
    setFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const getTrips = async () => {
      const tripsFromDatabase = await fetchTrips();
      dispatch(setAllTrips(tripsFromDatabase));
    };
    getTrips();
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2507&q=80",
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  ];

  return (
    <SafeAreaView style={styles.container}>
      {tripArr.length === 0 ? (
        <>
          <Image
            source={require("../assets/logo.png")}
            style={styles.image} // specify the styles for the image
            resizeMode="contain"
          />
          <View style={styles.backgroundimage}>
            <BackgroundImage images={images} />
          </View>
        </>
      ) : (
        <Image
          source={require("../assets/logo.png")}
          style={styles.image} // specify the styles for the image
          resizeMode="contain"
        />
      )}
      <TripList tripArr={tripArr} />
      {/* <Map></Map> */}
      <StatusBar style={styles.StatusBar} />
      <FormModal
        isVisible={isFormVisible}
        onClose={handleFormToggle}
        onSubmit={handleFormSubmit}
      />
      <Button
        title="Add Trip"
        onPress={handleFormToggle}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    margin: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#483d8b",
    width: 355,
  },
  image: {
    width: 1000,
    height: 85,
  },
  backgroundimage: {
    flex: 100,
    // height: 1000,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
