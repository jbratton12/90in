import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Client/src/screens/BottomTabsNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "./Client/src/redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
import LoginScreen from "./Client/src/screens/loginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
