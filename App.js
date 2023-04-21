import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Client/src/screens/BottomTabsNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "./Client/src/redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

function StackScreen() {
  return <Stack.Navigator>{/* Add your stack screens here */}</Stack.Navigator>;
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
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
