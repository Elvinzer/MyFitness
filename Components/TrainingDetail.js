// Components/TrainingDetail.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class TrainingDetail extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Détail du training</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default TrainingDetail
