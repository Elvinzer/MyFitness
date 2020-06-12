// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import TrainingItem from './TrainingItem'
import trainingList from '../Helpers/trainingList'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      isLoading: false, // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
      trainings: []
    }
  }

  _loadTrainings() {
      this.setState({ isLoading: true }) // Lancement du chargement
          this.setState({
             trainings: dataTrainings.results,
             isLoading: false
           })
  }

// Fonction permettant d'afficher le petit rond de témoin de chargement des datas
  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }

// Permet d'envoyer "valider" directement via le clavier du téléphone
  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  _displayDetailForTraining = (idTraining) => {
      console.log("Display film with id " + idTraining)
      this.props.navigation.navigate("TrainingDetail", { id: idTraining })
      return 0
  }

  render() {
    console.log(this.state.isLoading)
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Choix du training'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadTrainings()}
        />
        <Button title='Lets go baby' onPress={() => this._loadTrainings()}/>
        <FlatList
          data={trainingList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <TrainingItem training={item}/>}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search
