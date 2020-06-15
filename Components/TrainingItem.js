// Components/TrainingItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class TrainingItem extends React.Component {
  render() {

      const { training, displayDetailForTraining } = this.props;
      //console.log(this.props)
      return (
        <TouchableOpacity
          style={styles.main_container}
          onPress={() => displayDetailForTraining(training.id, training.title, training.overview)}>
          <Image
            style={styles.image}
            source={source={uri: training.poster_path}}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{training.title}</Text>
              <Text style={styles.vote_text}>{training.vote_average}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>{training.overview}</Text>
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>Sorti le {training.release_date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default TrainingItem
