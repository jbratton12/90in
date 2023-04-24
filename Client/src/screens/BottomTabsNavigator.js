import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeScreen from "./homeScreen";
import tripScreen from "./tripScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function tabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={homeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"} // Use the "home" icon when the tab is focused, and "home-outline" when it's not focused
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={tripScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "airplane" : "airplane-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
