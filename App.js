// App.js
import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import Navigation from './Navigation/Navigation'



export default class App extends React.Component {

  render() {
    return (
          <Navigation></Navigation>
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
