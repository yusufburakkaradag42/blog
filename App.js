// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './screens/IndexScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from './context/BlogContex';
import ShowScreen from './screens/ShowScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog Uygulaması' }}>
          <Stack.Screen name="Index" 
          component={IndexScreen}

           />
          <Stack.Screen name="Create"
           component={CreateScreen}

            />
           <Stack.Screen name="Show"
           component={ShowScreen}

            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
