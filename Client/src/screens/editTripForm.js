// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
//   TextInput,
//   Button,
// } from "react-native";

// export default function editModal () {

// // State for tracking edit form modal visibility and form data
// const [isEditModalVisible, setIsEditModalVisible] = useState(false);
// const [editedEntryDate, setEditedEntryDate] = useState(item.entrydate);
// const [editedExitDate, setEditedExitDate] = useState(item.exitdate);

// // Handler for opening edit form modal
// const handleEdit = () => {
//   setIsEditModalVisible(true);
// };

// // Handler for closing edit form modal
// const handleCloseEditModal = () => {
//   setIsEditModalVisible(false);
// };

// // Handler for updating trip with edited dates
// const handleUpdate = () => {
//   // Update trip with edited dates
//   item.entrydate = editedEntryDate;
//   item.exitdate = editedExitDate;
//   setIsEditModalVisible(false);
// };

// return (

//     <Modal
//         visible={isEditModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={handleCloseEditModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.miniContainer}>
//             <Text style={styles.inputLabel}>Entry Date</Text>
//             <TextInput
//               style={styles.input}
//               value={editedEntryDate}
//               onChangeText={setEditedEntryDate}
//             />
//             <Text style={styles.inputLabel}>Exit Date</Text>
//             <TextInput
//               style={styles.input}
//               value={editedExitDate}
//               onChangeText={setEditedExitDate}
//             />
//             <View style={styles.buttonContainer}>
//               <Button
//                 title="Cancel"
//                 onPress={handleCloseEditModal}
//                 color="red"
//               />
//               <Button title="Update" onPress={handleUpdate} />
//             </View>
//           </View>
//         </View>
//       </Modal>
// )

// }
