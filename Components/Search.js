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
      trainings: [],
      testText : []
    }
  }

  _displayDetailForTraining = (idTraining, titreTrainings, trainingContenu) => {
    //console.log("log contenu :")
    // On envoie tout dans la page "TrainingDetail"
    this.props.navigation.navigate("TrainingDetail", { idTraining: idTraining , titreTrainings: titreTrainings, trainingContenu: trainingContenu })

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
        <Text style={styles.title}>Selection du training</Text>
        <FlatList
          tyle={styles.container_trainings}
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
    alignContent : 'center',
  },
  title:{
    flex: 0.25,
    fontWeight: 'bold',
    fontSize : 22,
    textAlign: 'center',
    alignSelf: "center",
    justifyContent: 'center'
  },
  container_trainings:{
    flex: 1,
  }
})

export default Search
