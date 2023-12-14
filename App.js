// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './screens/IndexScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from './context/BlogContex';
import ShowScreen from './screens/ShowScreen';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import EditScreen from './screens/EditScreen';
import { Feather } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog Uygulaması' }}>
          <Stack.Screen name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({// create ekranına yönlendirme

              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Create')}
                >
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              )

            })}
          />
          <Stack.Screen name="Create"
            component={CreateScreen}

          />


          <Stack.Screen name="Show"
            component={ShowScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Edit')}
                >
                  <Feather name="edit" size={24} color="black" />
                </TouchableOpacity>
              )
            })}

          />
          <Stack.Screen name="Edit"
            component={EditScreen}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
