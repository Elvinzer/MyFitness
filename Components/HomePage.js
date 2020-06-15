// Components/HomePage.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Ceci est la home page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default HomePage
