// App.js
import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

import Search from './Components/Search'
import TrainingDetail from './Components/TrainingDetail'
import HomePage from './Components/HomePage'
import Notifications from './Components/Notifications'
import LoginPage from './Components/LoginPage'



import { NavigationContainer } from '@react-navigation/native';

// Import du moduble permettant d'utiliser le menu de coté 'Hamburger'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function MenuDeroulant(){
  return (
    <Drawer.Navigator initialRouteName="Search">
      <Drawer.Screen name="Accueil" component={Search} />
      <Drawer.Screen name="Page Home" component={HomePage}/>
      <Drawer.Screen name="Notifications" component={Notifications}/>
      <Drawer.Screen name="Login" component={LoginPage}/>
    </Drawer.Navigator>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animationEnabled: false }}>
          <Stack.Screen
            name="Home"
            component={MenuDeroulant}
            options={{ title: 'Accueil' }}
          />
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

const styles = StyleSheet.create({
  menu_deroulant: {
  backgroundColor: 'red'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  }
})
