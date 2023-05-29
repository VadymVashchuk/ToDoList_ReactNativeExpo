import { Text, View } from 'react-native'
import React from "react";
import { Checkbox } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import { styles } from './styles'


const TaskList = ({ tasks, deleteItem, setItOfEditingItem, setModalVisible, setEditInputValue, changeItemStatus }) => {
  return (
    <View>
      {tasks.map(task => {
        return (
          <TaskItem key={task.id} task={task} deleteItem={deleteItem} setItOfEditingItem={setItOfEditingItem} setModalVisible={setModalVisible} setEditInputValue={setEditInputValue} changeItemStatus={changeItemStatus} />
        )
      })}
    </View>
  )
}

const TaskItem = ({ task, deleteItem, setItOfEditingItem, setModalVisible, setEditInputValue, changeItemStatus }) => {
  const startEditing = (idOfItem, bodyText) => {
    setItOfEditingItem(idOfItem)
    setModalVisible('edit')
    setEditInputValue(bodyText)
  }

  return (
    <View style={[styles.singleTaskContainer, task.status && styles.taskIsDone]}>
      <View style={styles.checkboxWrapper}>
        <Checkbox.Android
          color='#00457E'
          status={task.status ? 'checked' : 'unchecked'}
          onPress={() => {
            changeItemStatus(task.id)
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
