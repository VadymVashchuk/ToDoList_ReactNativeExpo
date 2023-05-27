import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Task } from "./models/types";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import EditingForm from "./components/EditingForm";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: Math.random().toString().substring(7), body: 'Do some stuff', status: false },
    { id: Math.random().toString().substring(7), body: 'Do something else', status: true },
    { id: Math.random().toString().substring(7), body: 'Finish toDoList', status: false },
    { id: Math.random().toString().substring(7), body: 'Learn react-native', status: false },
    { id: Math.random().toString().substring(7), body: 'dsfdfsdfasfaafdgasdgsgagasgsgagsdgasgaggsggadagdgdasdg', status: false },
    { id: Math.random().toString().substring(7), body: 'dsfdfsdfasfaafdgasdgsgagasgsgagsdgasgaggsggadagdgdasdg', status: false },
  ]);

  const [modalVisible, setModalVisible] = useState('none');
  const [editInputValue, setEditInputValue] = useState("");
  const [itOfEditingItem, setItOfEditingItem] = useState("");



  const addTask = (taskBody) => {
    const newTask = {
      id: Math.random().toString().substring(7),
      body: taskBody,
      status: false
    }
    setTasks([...tasks, newTask])
    cancelEditing()
  }

  const editTask = () => {
    const taskEditing = tasks.find(i => i.id === itOfEditingItem);
    taskEditing.body = editInputValue;
    setTasks([...tasks])
    cancelEditing()
  }

  const changeItemStatus = () => {

  }

  const deleteItem = (itemId) => {
    setTasks(tasks.filter(item => item.id !== itemId))
  }

  const cancelEditing = () => {
    setModalVisible('none')
    setEditInputValue('')
  }



  return (
    <SafeAreaProvider>
      <ImageBackground source={{ uri: 'https://wallpaper-house.com/data/out/6/wallpaper2you_89087.jpg' }} resizeMode="cover" style={styles.image}>
        <StatusBar style="light" />
        <SafeAreaView style={styles.main}>
          <Header setModalVisible={setModalVisible} />
          <ScrollView>
            <TaskList tasks={tasks} deleteItem={deleteItem} setItOfEditingItem={setItOfEditingItem} setModalVisible={setModalVisible} setEditInputValue={setEditInputValue} />
            <EditingForm modalVisible={modalVisible} setModalVisible={setModalVisible} addTask={addTask} editInputValue={editInputValue} setEditInputValue={setEditInputValue} cancelEditing={cancelEditing} editTask={editTask} />
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 10,
  }
});
