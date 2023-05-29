import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";



const SignInPage = ({ navigation }) => {


  return (
    <SafeAreaProvider>
      <ImageBackground source={{ uri: 'https://wallpaper-house.com/data/out/6/wallpaper2you_89087.jpg' }} resizeMode="cover" style={styles.image}>
        <StatusBar style="light" />
        <SafeAreaView style={styles.main}>
          <View >
            <Button buttonColor='#00457E' mode="contained" onPress={() => navigation.navigate('MainScreen')}><Text >SIGN IN</Text></Button>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  )
}

export default SignInPage

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 10,
  }
});