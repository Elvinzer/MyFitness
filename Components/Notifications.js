// Components/Notifications.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Notifications extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Ceci est la page de notifications</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default Notifications
