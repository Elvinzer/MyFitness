// Components/TrainingDetail.js
import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import pushHistory from '../History/pushHistory'
import SeancePush from '../Components/SeancePush'


class TrainingDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false, // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    }
  }

  _startTraining(idTest){
    this.props.navigation.navigate("SeancePush", { idTest: idTest })
  }

  render() {
    const { historyTraining, startTraining } = this.props;
    console.log("on lance le log")
    console.log(this.props)
    return (
      <View>
        <Text style={styles.titre}>Détail du training {this.props.route.params.titreTrainings} : </Text>
        <Text style={styles.finDeTexte}>{this.props.route.params.trainingContenu}</Text>

        <Button  title='Débuter la séance !' onPress={() => this._startTraining(3)}/>
        <FlatList
          data={pushHistory}
          keyExtractor={(item) => item.id.toString()}
          //renderItem={({item}) => <SeancePush LastTraining={item} displayDetailForTraining={this._startTraining}/>}
        />
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
