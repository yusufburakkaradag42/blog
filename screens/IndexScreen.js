import { StyleSheet, Text, View , FlatList} from 'react-native'
import React ,{useContext} from 'react'
import BlogContext from '../context/BlogContex'

export default function IndexScreen() {
  const blogPosts = useContext(BlogContext)

  return (
    <View>
      {/* <Text>IndexScreen</Text> */}
      <FlatList
      data={blogPosts}
      keyExtractor={blogPost => blogPost.title} // her bir datanın birbirinden farklı olduğunu belirtmek için,
      renderItem={({item}) =>{ // Bastırmak için 
          return <Text>{item.title} </Text>
      }}
     
       />
    </View>
  )
}

const styles = StyleSheet.create({})