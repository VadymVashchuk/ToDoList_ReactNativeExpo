import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Task } from "../models/types";
import Header from "../components/Header/Header";
import TaskList from "../components/TaskList/TaskList";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import EditingForm from "../components/EditingForm/EditingForm";


export default function MainScreen({ navigation }) {
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
  const [sortedTasks, setSortedTasks] = useState<Task[]>([])


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

  const changeItemStatus = (itemId) => {
    const taskUpd = tasks.find(i => i.id === itemId)
    taskUpd.status = !taskUpd.status
    setTasks([...tasks])
  }

  const deleteItem = (itemId) => {
    setTasks(tasks.filter(item => item.id !== itemId))
  }

  const cancelEditing = () => {
    setModalVisible('none')
    setEditInputValue('')
  }

  // СЛОЖНЕЙША ОПЕРАЦІЯ СОРТУВАННЯ МАСИВА. ПО ДВОМ ПОЛЯМ - СТАТУС І ПО АЛФАВІТУ ТЕКСТ. + тут useState щоб воно сортувало тільки тоді коли міняються дані в масиві
  useEffect(() => {
    setSortedTasks(tasks.sort(
      (a, b) =>
        Number(b.status < a.status) - Number(a.status < b.status) ||
        Number(b.body < a.body) - Number(a.body < b.body)
    ) || [])
  }, [tasks])

  return (
    <SafeAreaProvider>
      <ImageBackground source={{ uri: 'https://wallpaper-house.com/data/out/6/wallpaper2you_89087.jpg' }} resizeMode="cover" style={styles.image}>
        <StatusBar style="light" />
        <SafeAreaView style={styles.main}>
          <Header setModalVisible={setModalVisible} navigation={navigation} />
          <ScrollView>
            <TaskList tasks={tasks} deleteItem={deleteItem} setItOfEditingItem={setItOfEditingItem} setModalVisible={setModalVisible} setEditInputValue={setEditInputValue} changeItemStatus={changeItemStatus} />
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
