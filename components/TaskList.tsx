import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from "react";
import { Checkbox } from 'react-native-paper';
import { IconButton } from 'react-native-paper';


const TaskList = ({ tasks, deleteItem, setItOfEditingItem, setModalVisible, setEditInputValue }) => {
  return (
    <View>
      {tasks.map(task => {
        return (
          <TaskItem key={task.id} task={task} deleteItem={deleteItem} setItOfEditingItem={setItOfEditingItem} setModalVisible={setModalVisible} setEditInputValue={setEditInputValue} />
        )
      })}
    </View>
  )
}

const TaskItem = ({ task, deleteItem, setItOfEditingItem, setModalVisible, setEditInputValue }) => {
  const [checked, setChecked] = React.useState(false);

  const startEditing = (idOfItem, bodyText) => {
    setItOfEditingItem(idOfItem)
    setModalVisible('edit')
    setEditInputValue(bodyText)
  }


  return (
    <View style={styles.singleTaskContainer}>
      <View style={styles.checkboxWrapper}>
        <Checkbox.Android
          color='#00457E'
          status={task.status ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textEl}>{task.body}</Text>
      </View>
      <View style={styles.btnsWrapper}>
        <IconButton
          style={{ margin: 0, left: 10 }}
          icon="pencil"
          size={28}
          iconColor='#00457E'
          onPress={() => startEditing(task.id, task.body)}
        />
        <IconButton
          style={{ margin: 0, left: 8 }}
          icon="delete"
          size={28}
          iconColor='#00457E'
          onPress={() => deleteItem(task.id)}
        />
      </View>
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
  singleTaskContainer: {
    minHeight: 80,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(253, 253, 253, 0.6)',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  checkboxWrapper: {
    flex: 1,
  },
  textWrapper: {
    flex: 6,
    right: 5
  },
  textEl: {
    textAlign: 'center',
    fontSize: 20,
    width: '90%',
  },
  btnsWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
})
