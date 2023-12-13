import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContex'
import { Feather } from '@expo/vector-icons';


export default function IndexScreen() {
  //dışarıya açtıklarımızı çekmek için 
  const { state, addBlogPost ,deleteBlogPost } = useContext(Context)

  return (
    <View>
      {/* <Text>IndexScreen</Text> */}
      <Button title='Ekle'
        onPress={addBlogPost}
      />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id} // her bir datanın birbirinden farklı olduğunu belirtmek için,
        renderItem={({ item }) => { // Bastırmak için 
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} </Text>
              <TouchableOpacity // delete işlemeri için
                onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" size={24} color="black" />
              </TouchableOpacity>

            </View>
          )
        }}

      />
    </View>
  )
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingHorizontal: 1, //yatay arasını açma
    paddingVertical: 20, //dikey arasını açma
    borderColor: 'gray',
  },
  title: {
    fontSize: 24,
  },

})