// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { fetchTrips } from "./service";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Client/src/screens/BottomTabsNavigator";

export default function App() {
  //Set state
  // const [tripArr, setTrips] = useState([]);

  // useEffect(() => {
  //   const getTrips = async () => {
  //     const tripsFromDatabase = await fetchTrips();
  //     setTrips(tripsFromDatabase);
  //   };

  //   getTrips();
  // }, []);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    // margin: 10,
  },

  header: {
    backgroundColor: "red",
  },
});
