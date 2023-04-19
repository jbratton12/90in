import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeScreen from "./homeScreen";
import tripScreen from "./tripScreen";

const Tab = createBottomTabNavigator();

export default function tabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={homeScreen} />
      <Tab.Screen name="Trips" component={tripScreen} />
    </Tab.Navigator>
  );
}
