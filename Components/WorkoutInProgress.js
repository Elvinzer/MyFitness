import React, {Component, useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Image as ReactImage, Dimensions} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import MyTimer from './MyTimer'
import trainingsHistory from '../History/trainingsHistory'


const screen = Dimensions.get('window');
let compteurExercices = 0

export default class SeanceEnCours extends Component {

  constructor(props) {
      super(props);
      this.state = {
        setTimer : false,
        data : [],
        nbrExercicesTraining : 0,
        idsExercicesTraining : [],
      };
  }

  /* Fonction permettant de récupérer tous les exos correpondants au type de training indiqué en parametre (ex : "Pull")
   Cette meme fonction retourne un Array avec tous les exos */
  _getHistory(monTraining){
    console.log("_getHistory()")
    // On récupère trainingsHistory dans un tableau
     this.data = trainingsHistory
     let monTrainingFinal = []
     let nombreExerices = 0
     let idExercice = []

     // On parcourt tout le tableau
     for (let i = 0; i < this.data.length; i++) {
       // Si l'exercice appartient bien au type de training souhaité
       if (this.data[i].type_training == monTraining){
         // On récupère les exercices du training
         monTrainingFinal = monTrainingFinal.concat(this.data[i])

         // On récupère le nombre d'exercices du training
         nombreExerices += 1
         this.nbrExercicesTraining = nombreExerices

         // On récupère les ids des exercices
         idExercice = idExercice.concat(this.data[i].id)
         this.idsExercicesTraining = idExercice
       }
     }
     return monTrainingFinal
  }

  _startTraining(typeTraining){
      console.log("_startTraining() jozey")
      // On récupère tout ce qu'il y a savoir dans le carnet dentrainement
      const mesExos = this._getHistory(typeTraining)

      //console.log("nombre d'id : " + this.idsExercicesTraining[3])
      //console.log("nombre d'exo : " + this.nbrExercicesTraining)

      return this.data[this.idsExercicesTraining[compteurExercices]].exercice
      compteurExercices += 1
  }

  render() {
    const typeTraining = this.props.route.params.typeTraining;
    //this._startTraining(typeTraining);
    return (
    <View style={styles.seanceEnCours}>
        <Text style={styles.seanceEnCours_title}>Séance {typeTraining}</Text>
        <View style={styles.seanceEnCours_exerciceEnCoursEtSeries}>
            <Text style={styles.seanceEnCours_exerciceEnCoursEtSeries_nomDeLexerciceEnCours}>{this._startTraining(typeTraining)}</Text>

            <Text style={styles.seanceEnCours_exerciceEnCoursEtSeries_nombreDeSeriesPrevues}>Séries restantes :</Text>
        </View>

        <Text style={styles.seanceEnCours_repetitionsAExecuter}>Répétitions à exécuter</Text>
        <View style={styles.seanceEnCours_repAExecuter}>
            <Svg style={styles.seanceEnCours_repAExecuter_ellipse236e93943} preserveAspectRatio="none" viewBox="-0.75 -0.75 60.5 60.5" fill="rgba(187, 223, 255, 1)"><SvgPath d="M 29.5 0 C 45.79239654541016 0 59 13.20760154724121 59 29.5 C 59 45.79239654541016 45.79239654541016 59 29.5 59 C 13.20760154724121 59 0 45.79239654541016 0 29.5 C 0 13.20760154724121 13.20760154724121 0 29.5 0 Z"  /></Svg>
            <Text style={styles.seanceEnCours_repAExecuter_x12}>12</Text>
        </View>

        <View style={styles.monTimer}>
          <Text style={styles.seanceEnCours_tempsDeRecuperation}>Temps de récupération</Text>
          <MyTimer>
          </MyTimer>
        </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  "seanceEnCours": {
    flex: 1,
    flexDirection : 'column',
    opacity: 1,
    position: 'relative',
    backgroundColor: '#07121B',
    paddingTop : 8
  },
  "seanceEnCours_title": {
    borderBottomWidth : 1,
    borderBottomColor : 'white',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  "seanceEnCours_externalChrono": {
    opacity: 1,
    position: "absolute",
    width: 360,
    height: 637,
    top: 400,
  },
  "seanceEnCours_exerciceEnCoursEtSeries": {
    justifyContent : 'space-around',
    alignItems : 'center',
    textAlign : 'center',
    opacity: 1,
    backgroundColor: 'transparent',
  },
  seanceEnCours_exerciceEnCoursEtSeries_nomDeLexerciceEnCours: {
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(112, 112, 112, 1)",
    fontSize: 20,
    textAlign: 'center',
  },
  seanceEnCours_exerciceEnCoursEtSeries_nombreDeSeriesPrevues: {
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    textAlign: 'left',
  },
  "seanceEnCours_repetitionsAExecuter": {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding : 10,
  },
  "seanceEnCours_repAExecuter": {
    flexDirection : 'row',
    justifyContent : 'center',
    opacity: 1,
    backgroundColor: 'transparent',
  },
  "seanceEnCours_repAExecuter_ellipse236e93943": {
    opacity: 1,
    width: 59,
    height: 59,
  },
  "seanceEnCours_repAExecuter_x12": {
    opacity: 1,
    position : 'absolute',
    right : screen.width / 2.12,
    top : 13,
    color : "rgba(112, 112, 112, 1)",
    color: 'black',
    fontSize: 20,
  },
  "seanceEnCours_serieTerminee": {
    justifyContent : 'center',
    alignSelf : 'center',
    opacity: 1,
    backgroundColor: 'transparent',
    width: 209,
    height: 60,
    marginTop : 20,
    borderBottomWidth : 1,
    borderBottomColor : 'white',
  },
  "seanceEnCours_chrono": {
    position : 'relative',
    color : 'white',
    textAlign : 'center',
    top : 15,
  },
  "seanceEnCours_tempsDeRecuperation": {
    opacity: 1,
    position : 'relative',
    bottom : 12,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: 'white',
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "left",
    textAlign : 'center',
    marginTop  : 20,
    paddingBottom : 5,
  },
  "monTimer":{

  }
});
