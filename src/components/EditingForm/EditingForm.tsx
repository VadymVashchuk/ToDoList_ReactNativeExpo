import { Modal, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper'
import { styles } from './styles'

const EditingForm = ({ modalVisible, setModalVisible, addTask, editInputValue, setEditInputValue, cancelEditing, editTask }) => {

  let buttons;
  if (modalVisible === 'add') {
    buttons =
      <View style={styles.operationBtnsWrapper}>
        <Button style={styles.addNewTaskBtn} buttonColor='green' mode="contained" onPress={() => addTask(editInputValue)}><Text>ADD</Text></Button>
        <Button style={styles.addNewTaskBtn} buttonColor='red' mode="contained" onPress={cancelEditing}><Text>CANCEL</Text></Button>
      </View>
  } else if (modalVisible === 'edit') {
    buttons =
      <View style={styles.operationBtnsWrapper}>
        <Button style={styles.addNewTaskBtn} buttonColor='green' mode="contained" onPress={editTask}><Text>SAVE</Text></Button>
        <Button style={styles.addNewTaskBtn} buttonColor='red' mode="contained" onPress={cancelEditing}><Text>CANCEL</Text></Button>
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
              {buttons}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default EditingForm

