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

  _displayDetailForTraining = (idTraining) => {
    const { trainingContenu } = this.props;
    console.log("log contenu :")
    console.log(trainingContenu)
    this.props.navigation.navigate("TrainingDetail", { idTraining: idTraining })

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
        </View>
      )
    }
  }

// Permet d'envoyer "valider" directement via le clavier du téléphone
  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Choix du training'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadTrainings()}
        />
        <Button title='Lets go baby' onPress={() => this._loadTrainingss()}/>
        <FlatList
          data={trainingList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <TrainingItem training={item} displayDetailForTraining={this._displayDetailForTraining}/>}
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
