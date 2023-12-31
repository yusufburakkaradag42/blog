import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContex'

export default function ShowScreen({route}) {
  const {state}=  useContext(Context);
  console.log(route.params.id) // showscreen giden id değeri görmek için 
  const blogPost = state.find((blogPost)=> blogPost.id === route.params.id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})