import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContex'

export default function ShowScreen() {
  const {state}=  useContext(Context)
  return (
    <View>
      <Text>ShowScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({



})