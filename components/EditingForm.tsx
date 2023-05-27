import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper'

const EditingForm = ({ modalVisible, setModalVisible, addTask, editInputValue, setEditInputValue, cancelEditing, editTask }) => {

  let buttons;
  if (modalVisible === 'add') {
    buttons =
      <View style={styles.operationBtnsWrapper}>
        <Button style={styles.addNewTaskBtn} buttonColor='green' mode="contained" onPress={() => addTask(editInputValue)}><Text>ADD</Text></Button>
        <Button style={styles.addNewTaskBtn} buttonColor='red' mode="contained" onPress={cancelEditing}><Text>DEL</Text></Button>
      </View>
  } else if (modalVisible === 'edit') {
    buttons =
      <View style={styles.operationBtnsWrapper}>
        <Button style={styles.addNewTaskBtn} buttonColor='green' mode="contained" onPress={editTask}><Text>SAVE</Text></Button>
        <Button style={styles.addNewTaskBtn} buttonColor='red' mode="contained" onPress={cancelEditing}><Text>DEL</Text></Button>
      </View>
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Modal style={styles.editingFormWrapper}
          transparent={true}
          animationType="fade"
          visible={modalVisible === 'add' || modalVisible === 'edit' ? true : false}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalWindowContentWrapper}>
            <View style={styles.inputWrapper}>
              <TextInput
                mode="outlined"
                label="Task Description"
                value={editInputValue}
                onChangeText={text => setEditInputValue(text)}
              />
            </View>
            {buttons}

          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

// const ButtonsForAdding = () => {
//  return (
//   <View style={styles.operationBtnsWrapper}>
//   <Button style={styles.addNewTaskBtn} buttonColor='green' mode="contained" onPress={() => addTask(editInputValue)}><Text>ADD</Text></Button>
//   <Button style={styles.addNewTaskBtn} buttonColor='green' mode="contained" onPress={() => console.log('Pressed')}><Text>SAVE</Text></Button>
//   <Button style={styles.addNewTaskBtn} buttonColor='red' mode="contained" onPress={cancelEditing}><Text>DEL</Text></Button>
// </View>
//  )
// }

// const ButtonsForEditing = () => {
//  return (
//   <View style={styles.operationBtnsWrapper}>
//   <Button style={styles.addNewTaskBtn} buttonColor='green' mode="contained" onPress={() => addTask(editInputValue)}><Text>ADD</Text></Button>
//   <Button style={styles.addNewTaskBtn} buttonColor='green' mode="contained" onPress={() => console.log('Pressed')}><Text>SAVE</Text></Button>
//   <Button style={styles.addNewTaskBtn} buttonColor='red' mode="contained" onPress={cancelEditing}><Text>DEL</Text></Button>
// </View>
//  )
// }

export default EditingForm

const styles = StyleSheet.create({
  editingFormWrapper: {
    flex: 1,
  },
  modalWindowContentWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '90%',
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: 'white'
  },
  addNewTaskBtn: {
    borderRadius: 12,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 15,
  },
  operationBtnsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})