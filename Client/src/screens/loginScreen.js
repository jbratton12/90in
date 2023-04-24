// import React, { useState } from "react";
// import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

// Didnt end up implementing this code in the end

// const LoginScreen = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // Function to handle login button press
//   const handleLoginPress = () => {
//     // Perform validation for username and password
//     if (username === "" || password === "") {
//       Alert.alert("Error", "Please enter username and password.");
//     } else {
//       if (username === "james" && password === "password") {
//         // If login is successful, call the onLogin callback passed as prop
//         onLogin();
//       } else {
//         // If login is unsuccessful, show error message
//         Alert.alert("Error", "Invalid username or password.");
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={(text) => setUsername(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLoginPress} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 16,
//   },
//   input: {
//     width: "100%",
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     marginBottom: 16,
//   },
// });

// export default LoginScreen;
