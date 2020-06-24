// Components/TrainingDetail.js
import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import trainingsHistory from '../History/trainingsHistory'
import SeancePush from '../Components/SeancePush'
import SeancePullLeg from '../Components/SeancePullLeg'


class TrainingDetail extends React.Component {
  // Fonction de debug, ne sert à rien pour l'appli en elle meme
    _jeDebug(monParam){
      console.log("fonction de debug result :");
      console.log(monParam);
    }


  //FOnction permettant de naviguer sur la page SeancePush.js ou SeancePull.js en fonction du training cliqué
  _startTraining(typeTraining){
      if (typeTraining =="Push") {
        this.props.navigation.navigate("SeancePush", { typeTraining: typeTraining })
      }
      if (typeTraining =="Pull") {
        this.props.navigation.navigate("SeancePullLeg", { typeTraining: typeTraining })
      }
  }

  render() {
    return (
      <View>
        <Text style={styles.titre}>Détail du training {this.props.route.params.titreTrainings} : </Text>
        <Text style={styles.finDeTexte}>{this.props.route.params.trainingContenu}</Text>
        <FlatList
          data={trainingsHistory}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button  title='Débuter la séance !' onPress={() => this._startTraining(this.props.route.params.titreTrainings)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  titre:{
    paddingBottom : 20
  },
  finDeTexte:{
    paddingBottom : 20
  }
})

export default TrainingDetail
