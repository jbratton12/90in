import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Client/src/screens/BottomTabsNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function StackScreen() {
  return <Stack.Navigator>{/* Add your stack screens here */}</Stack.Navigator>;
}

export default function App() {
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
});
