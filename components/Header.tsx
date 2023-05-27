import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'



const Header = ({ setModalVisible }) => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>TO DO LIST</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.addBtnWrapper}>
          <Button icon="plus" style={styles.addBtn} buttonColor='#00457E' mode="contained" onPress={() => setModalVisible('add')}><Text style={styles.btnText}>ADD TASK</Text></Button>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  titleWrapper: {
    minHeight: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f1f1f1'
  },
  headerContainer: {
    marginBottom: 10,
  },
  addBtnWrapper: {
    fontWeight: 'bold',
    color: 'black',
    width: 170,
  },
  addBtn: {
    padding: 0,
    margin: 0,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 14,
  }
})