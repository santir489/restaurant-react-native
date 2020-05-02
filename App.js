import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultShowScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultShow" component={ResultShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
