// App.js
import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

// Import des Components customs
import Search from './Components/Search'
import TrainingDetail from './Components/TrainingDetail'
import SeancePush from './Components/SeancePush'
import SeancePullLeg from './Components/SeancePullLeg'
import WorkoutInProgress from './Components/WorkoutInProgress'
import MyTimer from './Components/MyTimer'

import HomePage from './Components/HomePage'
import Notifications from './Components/Notifications'
import LoginPage from './Components/LoginPage'
// Import de la "navigation"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import du moduble permettant d'utiliser le menu de coté 'Hamburger'
import { createDrawerNavigator } from '@react-navigation/drawer';
// On initialise les constantes de menu cliquable
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// On crée le menu déroulant "Hamburger"
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
              <Stack.Screen
                name="SeancePush"
                component={SeancePush}
                options={{ title: 'Début de séance' }}
              />
              <Stack.Screen
                name="SeancePullLeg"
                component={SeancePullLeg}
                options={{ title: 'Début de séance Pull Leg' }}
              />
              <Stack.Screen
                name="WorkoutInProgress"
                component={WorkoutInProgress}
                options={{ title: 'Séance en cours' }}
              />
              <Stack.Screen
                name="MyTimer"
                component={MyTimer}
                options={{ title: 'My Timer' }}
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
