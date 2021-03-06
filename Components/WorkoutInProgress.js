import React, { Component, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Button , Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage, Dimensions } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import MyTimer from './MyTimer'
import trainingsHistory from '../History/trainingsHistory'


const screen = Dimensions.get('window');
let compteurExercices = 0
let compteurSerie = 1
let nombreSerie = 0

export default class SeanceEnCours extends Component {

  constructor(props) {
    super(props);
    this._nextSerie = this._nextSerie.bind(this)
    this.state = {
      setTimer: false,
      monTrainingHistory: [],
      nbrExercicesTraining: 0,
      idsExercicesTraining: [],
      nbrRepetitionsExercice: 0,
      nbrSeriesExercice : 0,
      monTrainingFinal: [],
      nbrSerieRestante : 0,
      compteurSeriee : 1,
      compteurExercices : 1,
      trainingNotComplete : true
    };

  }

  /* Fonction permettant de récupérer tous les exos correpondants au type de training indiqué en parametre (ex : "Pull")
   Cette meme fonction retourne un Array avec tous les exos */
  _getHistory(monTraining) {
    console.log("_getHistory()")
    // On récupère trainingsHistory dans un tableau
    this.monTrainingHistory = trainingsHistory
    let monTrainingFinal = []
    let nombreExerices = 0
    let idExercice = []

    // On parcourt tout le tableau
    for (let i = 0; i < this.monTrainingHistory.length; i++) {
      // Si l'exercice appartient bien au type de training souhaité
      if (this.monTrainingHistory[i].type_training == monTraining) {
        // On récupère les exercices du training
        monTrainingFinal = monTrainingFinal.concat(this.monTrainingHistory[i])

        // On récupère le nombre d'exercices du training
        nombreExerices += 1
        // On récupère les ids des exercices
        idExercice = idExercice.concat(this.monTrainingHistory[i].id)
        this.idsExercicesTraining = idExercice
      }
    }
    this.monTrainingFinal = monTrainingFinal
    this.nbrExercicesTraining = nombreExerices
    this.nbrSeriesExercice = this._getNbSeries(monTraining)
    nombreSerie = this.nbrSeriesExercice


    return monTrainingFinal
  }

  //Fonction permettant de récupérer le nom de l'exerice à effectuer
  _getSeance(typeTraining) {
    console.log("_getSeance()")
    // On récupère tout ce qu'il y a savoir dans le carnet dentrainement
    const mesExos = this._getHistory(typeTraining)

    // On verifie qu'on ne dépasse pas le nombre total d'exerice de la séance
    if(compteurExercices < this.nbrExercicesTraining){
      const monExo = this.monTrainingHistory[this.idsExercicesTraining[compteurExercices]].exercice
      return monExo
    }
    else return 'Training complete'
  }

  //Fonction permettant de récupérer le nombre de série d'un exercice
  _getNbSeries() {
    console.log("_getNbSeries()")
    // On récupère tout ce qu'il y a savoir dans le carnet dentrainement
    const mesExos = this.monTrainingFinal


    // On verifie qu'on ne dépasse pas le nombre total d'exerice de la séance
    if(compteurExercices < this.nbrExercicesTraining){
      // On récupère le nombre de séries de l'exercice à effectuer
      const nbSeries = this.monTrainingHistory[this.idsExercicesTraining[compteurExercices]].nbSeries
      this.nbrSeriesExercice = nbSeries
      return nbSeries
    }
    else return 0
  }

  //Fonction permettant de récupérer le nombre de série d'un exercice
  _getNbRepetitions() {
    console.log("_getNbRepetitions()")
    // On récupère tout ce qu'il y a savoir dans le carnet dentrainement
    const mesExos = this.monTrainingFinal
    this.nbrRepetitionsExercice = 0
    let prefixeSerie = 'serie'
    let nomSerieConcatenee = (prefixeSerie + compteurSerie).toString()


    // On verifie qu'on ne dépasse pas le nombre total d'exerice de la séance
    if(compteurExercices < this.nbrExercicesTraining){
      // On récupère le nombre de répétitions sur le numéro de serie donnée de l'exercice à effectuer
      this.nbrRepetitionsExercice = this.monTrainingHistory[this.idsExercicesTraining[compteurExercices]][nomSerieConcatenee]
      console.log("compteur exo fin de serie : " + compteurExercices)
      console.log("----------------------- END ----------------------------")
      return this.nbrRepetitionsExercice
    }
    else return 0
  }

  // Fonction permettant d'incrémenter pour passer au prochain exo
  _nextExercice() {
    compteurExercices += 1
  }

  _nextSerie() {
    var newSerie = parseInt(this.state.compteurSeriee,10) + 1
    this.setState({
              compteurSeriee: newSerie
        });
    if (this.state.compteurSeriee == this.nbrSeriesExercice){
      this._nextExercice()
      this.setState({
                compteurSeriee: 1
      });
    }
  };

  _getNbSeriesDone(){
    console.log("_getNbSeriesDone")

    const monNbSerie = this.state.compteurSeriee
    return monNbSerie
  }


  render() {
    const typeTraining = this.props.route.params.typeTraining;

    return (

      <View style={styles.seanceEnCours}>
        <Text style={styles.seanceEnCours_title}>Séance {typeTraining}</Text>
        <View style={styles.seanceEnCours_exerciceEnCoursEtSeries}>
          <Text style={styles.seanceEnCours_exerciceEnCoursEtSeries_nomDeLexerciceEnCours}>{this._getSeance(typeTraining)}</Text>

          <Text style={styles.seanceEnCours_exerciceEnCoursEtSeries_nombreDeSeriesPrevues}>Séries prévues : {this._getNbSeries()}</Text>
        </View>
        <Text style={styles.seanceEnCours_numeroSerie}>Série {this._getNbSeriesDone()}</Text>
        <Text style={styles.seanceEnCours_repetitionsAExecuter}>Répétitions à exécuter</Text>
        <View style={styles.seanceEnCours_repAExecuter}>
          <Svg style={styles.seanceEnCours_repAExecuter_ellipse236e93943} fill="rgba(187, 223, 255, 1)"><SvgPath d="M 29.5 0 C 45.79239654541016 0 59 13.20760154724121 59 29.5 C 59 45.79239654541016 45.79239654541016 59 29.5 59 C 13.20760154724121 59 0 45.79239654541016 0 29.5 C 0 13.20760154724121 13.20760154724121 0 29.5 0 Z" /></Svg>
          <Text style={styles.seanceEnCours_repAExecuter_x12}>{this._getNbRepetitions(typeTraining)}</Text>
        </View>

        <View style={styles.monTimer}>

          <Text style={styles.seanceEnCours_tempsDeRecuperation}>Temps de récupération</Text>
          <MyTimer nextSerie={this._nextSerie}>

          </MyTimer>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  "seanceEnCours": {
    flex: 1,
    flexDirection: 'column',
    opacity: 1,
    position: 'relative',
    backgroundColor: '#07121B',
    paddingTop: 8
  },
  "seanceEnCours_title": {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
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
  "seanceEnCours_numeroSerie": {
    position: 'relative',
    top: 6,
    fontSize: 20,
    textAlign: 'center',
    padding: 0,
    color: 'white',
  },
  "seanceEnCours_exerciceEnCoursEtSeries": {
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    opacity: 1,
    backgroundColor: 'transparent',
  },
  seanceEnCours_exerciceEnCoursEtSeries_nomDeLexerciceEnCours: {
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: '#B9AAFF',
    fontSize: 20,
    textAlign: 'center',
  },
  seanceEnCours_exerciceEnCoursEtSeries_nombreDeSeriesPrevues: {
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    textAlign: 'left',
    color: "#FF851B",
  },
  "seanceEnCours_repetitionsAExecuter": {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  "seanceEnCours_repAExecuter": {
    flexDirection: 'row',
    justifyContent: 'center',
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
    position: 'absolute',
    right: screen.width / 2.12,
    top: 13,
    color: "rgba(112, 112, 112, 1)",
    color: 'black',
    fontSize: 20,
  },
  "seanceEnCours_serieTerminee": {
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 1,
    backgroundColor: 'transparent',
    width: 209,
    height: 60,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  "seanceEnCours_chrono": {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    top: 15,
  },
  "seanceEnCours_tempsDeRecuperation": {
    opacity: 1,
    position: 'relative',
    bottom: 12,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: 'white',
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "left",
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 5,
  }
});
