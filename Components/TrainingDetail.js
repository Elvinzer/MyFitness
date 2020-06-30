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
      <View style={styles.main_container}>
        <Text style={styles.titre}>Détail du training {this.props.route.params.titreTrainings} : </Text>
        <Text style={styles.texteDescription}>{this.props.route.params.trainingContenu}</Text>
        <FlatList
          data={trainingsHistory}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.boutonDebuter}>
          <Button title='Débuter la séance !' onPress={() => this._startTraining(this.props.route.params.titreTrainings)}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 0.7,
    flexDirection : 'column',
    alignItems : 'center'
  },
  titre:{
    flex: 0.2,
    flexDirection : 'row',
    textAlign : 'center',
    fontSize : 18,
    borderBottomWidth : 1,
    borderBottomColor : 'grey',
    paddingTop : 15
  },
  texteDescription:{
    textAlign: 'center',
    marginTop : 20,
    fontSize : 16,
  },
  boutonDebuter:{
    flex : 1,

  }
})

export default TrainingDetail
