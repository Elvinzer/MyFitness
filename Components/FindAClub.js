// Components/FindAClub.js

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { Map, GoogleApiWrapper } from 'google-maps-react';

class FindAClub extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Ceci est la page GPS</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default FindAClub
