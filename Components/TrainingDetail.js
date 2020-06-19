// Components/TrainingDetail.js
import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import trainingsHistory from '../History/trainingsHistory'
import SeancePush from '../Components/SeancePush'
import SeancePullLeg from '../Components/SeancePullLeg'


class TrainingDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false, // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    }
  }

  //FOnction permettant de naviguer sur la page SeancePush.js en envoyant l'id du training associé
  _startTraining(idTest){
    this.props.navigation.navigate("SeancePush", { idTest: idTest })
  }

  render() {
    const { historyTraining, startTraining } = this.props;
    console.log();
    console.log(historyTraining);
    return (
      <View>
        <Text style={styles.titre}>Détail du training {this.props.route.params.titreTrainings} : </Text>
        <Text style={styles.finDeTexte}>{this.props.route.params.trainingContenu}</Text>
        <FlatList
          data={trainingsHistory}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button  title='Débuter la séance !' onPress={() => this._startTraining(trainingsHistory.id)}/>
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
