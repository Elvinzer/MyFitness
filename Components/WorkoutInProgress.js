import React, {Component, useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Image as ReactImage, Dimensions} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import MyTimer from './MyTimer'

const screen = Dimensions.get('window');

export default class SeanceEnCours extends Component {

  constructor(props) {
      super(props);
      this.state = {
        setTimer : false,
      };
  }

_setTimer(){
  setTimer= true;
    return <MyTimer></MyTimer>
}
  render() {
    const typeTraining = this.props.route.params.typeTraining;
    return (
    <View style={styles.seanceEnCours}>
        <Text style={styles.seanceEnCours_title}>Séance {typeTraining}</Text>
        <View style={styles.seanceEnCours_exerciceEnCoursEtSeries}>
            <Text style={styles.seanceEnCours_exerciceEnCoursEtSeries_nomDeLexerciceEnCours}>Nom de l'exercice en cours</Text>
            <Text style={styles.seanceEnCours_exerciceEnCoursEtSeries_nombreDeSeriesPrevues}>Nombre de séries prévues :</Text>
        </View>

        <Text style={styles.seanceEnCours_repetitionsAExecuter}>Répétitions à exécuter</Text>
        <View style={styles.seanceEnCours_repAExecuter}>
            <Svg style={styles.seanceEnCours_repAExecuter_ellipse236e93943} preserveAspectRatio="none" viewBox="-0.75 -0.75 60.5 60.5" fill="rgba(187, 223, 255, 1)"><SvgPath d="M 29.5 0 C 45.79239654541016 0 59 13.20760154724121 59 29.5 C 59 45.79239654541016 45.79239654541016 59 29.5 59 C 13.20760154724121 59 0 45.79239654541016 0 29.5 C 0 13.20760154724121 13.20760154724121 0 29.5 0 Z"  /></Svg>
            <Text style={styles.seanceEnCours_repAExecuter_x12}>12</Text>
        </View>



        <TouchableOpacity style={styles.seanceEnCours_serieTerminee} onPress={() => this.props.navigation.navigate("MyTimer")}>
            <View style={styles.seanceEnCours_serieTerminee_rectangle8}></View>
            <Text style={styles.seanceEnCours_serieTerminee_jaiFiniMaSerie}>J'ai fini ma série</Text>
        </TouchableOpacity>


        <Text style={styles.seanceEnCours_tempsDeRecuperation}>Temps de récupération</Text>
        <View>
            <Text style={styles.seanceEnCours_chrono}> ici un chrono </Text>
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
    position: "relative",
    backgroundColor: '#07121B',
    paddingTop : 8
  },
  "seanceEnCours_title": {
    flex : 0.07,
    borderBottomWidth : 1,
    borderBottomColor : 'white',
    color: 'white',
    fontSize: 20,
    textAlign: "center",
  },
  "seanceEnCours_externalChrono": {
    opacity: 1,
    position: "absolute",
    width: 360,
    height: 637,
    top: 400,
  },
  "seanceEnCours_exerciceEnCoursEtSeries": {
    flex : 0.15,
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
    flex: 0.06,
    color: 'white',
    fontSize: 20,
    textAlign: "center",
    padding : 10,
  },
  "seanceEnCours_repAExecuter": {
    flex : 0.11,
    flexDirection : 'row',
    justifyContent : 'center',
    opacity: 1,
    backgroundColor: "transparent",
  },
  "seanceEnCours_repAExecuter_ellipse236e93943": {
    opacity: 1,
    width: 59,
    height: 59,
  },
  "seanceEnCours_repAExecuter_x12": {
    "opacity": 1,
    position : 'absolute',
    right : screen.width / 2.12,
    top : 13,
    color : "rgba(112, 112, 112, 1)",
    "color": 'black',
    "fontSize": 20,
  },
  "seanceEnCours_serieTerminee": {
    flex : 0.12,
    justifyContent : "center",
    alignSelf : 'center',
    opacity: 1,
    backgroundColor: "transparent",
    width: 209,
    height: 60,
    marginTop : 20,
    borderBottomWidth : 1,
    borderBottomColor : 'white',
  },
  "seanceEnCours_serieTerminee_rectangle8": {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(185, 255, 183, 1)",
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    width: 209,
    height: 60,
  },
  "seanceEnCours_serieTerminee_jaiFiniMaSerie": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",

    "textAlign": "left",
    "width": 147,
    "height": 28,
    "left": 31,
    "top": 16
  },
  "seanceEnCours_ligne2": {
    "opacity": 1,
    "position": "absolute",
    "width": 107,
    "height": 1,
    "left": 135.5,
    "top": 204
  },
  "seanceEnCours_chrono": {
    position : 'relative',
    color : 'white',
    textAlign : 'center',
    top : 15,
    borderBottomWidth : 1,
    borderBottomColor : 'white',
  },
  "seanceEnCours_tempsDeRecuperation": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": 'white',
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    textAlign : 'center',
    marginTop  : 20
  }
});
