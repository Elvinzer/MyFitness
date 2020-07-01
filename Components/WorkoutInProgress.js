import React, {Component, useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Image as ReactImage, Dimensions} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import MyTimer from './MyTimer'
import TrainingsHistory from '../History/TrainingsHistory'

const screen = Dimensions.get('window');

export default class SeanceEnCours extends Component {

  constructor(props) {
      super(props);
      this.state = {
        setTimer : false,
        data : [],
      };
  }

  _getHistory(){
     this.setState({ data: trainingsHistory.results })
  }

  render() {
    const typeTraining = this.props.route.params.typeTraining;

    return (
    <View style={styles.seanceEnCours}>
        <Text style={styles.seanceEnCours_title}>Séance {typeTraining}</Text>
        <View style={styles.seanceEnCours_exerciceEnCoursEtSeries}>
            <Text style={styles.seanceEnCours_exerciceEnCoursEtSeries_nomDeLexerciceEnCours}>Nom de l'exercice en cours</Text>
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
