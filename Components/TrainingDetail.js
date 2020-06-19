// Components/TrainingDetail.js
import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import pushHistory from '../History/pushHistory'
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
    log.console("Lid du training selectionne :")
    log.console(idTest)
  }

  render() {
    const { historyTraining, startTraining } = this.props;
    return (
      <View>
        <Text style={styles.titre}>Détail du training {this.props.route.params.titreTrainings} : </Text>
        <Text style={styles.finDeTexte}>{this.props.route.params.trainingContenu}</Text>
        <Button  title='Débuter la séance !' onPress={() => this._startTraining(3)}/>
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
