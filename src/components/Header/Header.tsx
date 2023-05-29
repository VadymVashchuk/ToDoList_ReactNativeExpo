import { Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { styles } from './styles'

const Header = ({ setModalVisible, navigation }) => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>TO DO LIST</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.addBtnWrapper}>
          <Button icon="plus" style={styles.addBtn} buttonColor='#00457E' mode="contained" onPress={() => setModalVisible('add')}><Text style={styles.btnText}>ADD TASK</Text></Button>
        </View>
        <View style={styles.addBtnWrapper}>
          <Button icon="logout" style={styles.addBtn} buttonColor='#00457E' mode="contained" onPress={() => navigation.navigate('SignInPage')}><Text style={styles.btnText}>LOG OUT</Text></Button>
        </View>
      </View>
    </View>
  )
}

export default Header

