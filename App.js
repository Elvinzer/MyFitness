// App.js
//import Navigation from './Navigation/Navigation'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './Components/Search'
import TrainingDetail from './Components/TrainingDetail'

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ title: 'Selection du training' }}
          />
          <Stack.Screen
            name="TrainingDetail"
            component={TrainingDetail}
            options={{ title: 'Détail du training' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
