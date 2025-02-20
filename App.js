import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ShowSelectedPro from './Component/ShowSelectedPro';
import ListofProduct from './Component/ListofProduct';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ShowSelectedPro' component={ShowSelectedPro} options={{headerShown:false}}/>
        <Stack.Screen name='ListofProduct' component={ListofProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
