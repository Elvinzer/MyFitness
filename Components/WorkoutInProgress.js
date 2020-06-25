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

      };
  }

  render() {
    const typeTraining = this.props.route.params.typeTraining;
    console.log("seance en cours : " + typeTraining)
    return (
    <View style={styles.seanceEnCours}>
        <Text style={styles.seanceEnCours_title}>Séance en cours</Text>
        <View style={styles.seanceEnCours_exerciceEnCoursEtSeries}>
            <View style={styles.seanceEnCours_exerciceEnCoursEtSeries_rectangle}></View>
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

        <Svg style={styles.seanceEnCours_ligne2} preserveAspectRatio="none" viewBox="0 -0.5 107 1" fill="transparent"><SvgPath d="M 0 0 L 107 0"  /></Svg>
        <View style={styles.seanceEnCours_chrono}>
            <Svg style={styles.seanceEnCours_chrono_ellipse2} preserveAspectRatio="none" viewBox="-0.75 -0.75 99.5 99.5" fill="rgba(187, 223, 255, 1)"><SvgPath d="M 49 0 C 76.06195068359375 0 98 21.93804931640625 98 49 C 98 76.06195068359375 76.06195068359375 98 49 98 C 21.93804931640625 98 0 76.06195068359375 0 49 C 0 21.93804931640625 21.93804931640625 0 49 0 Z"  /></Svg>
            <Text style={styles.seanceEnCours_chrono_x30}>30''</Text>
        </View>

        

        <Text style={styles.seanceEnCours_tempsDeRecuperation}>Temps de récupération</Text>
        <Svg style={styles.seanceEnCours_ligne3} preserveAspectRatio="none" viewBox="0 -0.5 107 1" fill="transparent"><SvgPath d="M 0 0 L 107 0"  /></Svg>
        <ReactImage source={require('../assets/x6346342297menuBarIconWhiteClipartPngDownload3.png')} style={styles.seanceEnCours_x6346342297menuBarIconWhiteClipartPngDownload3} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  "seanceEnCours": {
    "opacity": 1,
    "position": "relative",
    backgroundColor: '#07121B',

    "width": 360,
    "height": 637,
  },
  "seanceEnCours_screen": {
    "opacity": 1,
    "position": "relative",
    "width": 360,
    "height": 637,
  },
  "seanceEnCours_externalChrono": {
    "opacity": 1,
    "position": "absolute",
    "width": 360,
    "height": 637,
    top: 400
  },
  "seanceEnCours_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 150,
    "height": 61,
    "left": 80,
    "top": 20
  },
  "seanceEnCours_exerciceEnCoursEtSeries": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 290,
    "height": 83,
    "left": 43,
    "top": 80
  },
  "seanceEnCours_exerciceEnCoursEtSeries_rectangle": {
    "opacity": 0.699999988079071,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 2,
    "borderTopRightRadius": 2,
    "borderBottomLeftRadius": 2,
    "borderBottomRightRadius": 2,
    "width": 290,
    "height": 76,
  },
  "seanceEnCours_exerciceEnCoursEtSeries_nomDeLexerciceEnCours": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 241,
    "height": 38,
    "left": 24,
    "top": 6
  },
  "seanceEnCours_exerciceEnCoursEtSeries_nombreDeSeriesPrevues": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 209,
    "height": 36,
    "left": 6,
    "top": 47
  },
  "seanceEnCours_repetitionsAExecuter": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 200,
    "height": 41,
    "left": 89,
    "top": 180
  },
  "seanceEnCours_repAExecuter": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 59,
    "height": 59,
    "left": 159,
    "top": 230
  },
  "seanceEnCours_repAExecuter_ellipse236e93943": {
    "opacity": 1,
    "position": "absolute",
    "width": 59,
    "height": 59,
  },
  "seanceEnCours_repAExecuter_x12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 28,
    "height": 29,
    "left": 16,
    "top": 15
  },
  "seanceEnCours_serieTerminee": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 209,
    "height": 60,
    "left": 84,
    "top": 315
  },
  "seanceEnCours_serieTerminee_rectangle8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(185, 255, 183, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "width": 209,
    "height": 60,
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
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 98,
    "height": 98,
    "left": 139,
    bottom: screen.height / 6.5,
  },
  "seanceEnCours_chrono_ellipse2": {
    "opacity": 1,
    "position": "absolute",
    "width": 98,
    "height": 98,
  },
  "seanceEnCours_chrono_x30": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 34,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 63,
    "height": 54,
    "left": 28,
    "top": 22
  },
  "seanceEnCours_tempsDeRecuperation": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 209,
    "height": 41,
    "left": 85,
    "top": 400
  },
  "seanceEnCours_ligne3": {
    "opacity": 1,
    "position": "absolute",
    "width": 107,
    "height": 1,
    "left": 135.5,
    "top": 438
  },
  "seanceEnCours_x6346342297menuBarIconWhiteClipartPngDownload3": {
    "opacity": 1,
    "position": "absolute",
    "width": 35,
    "height": 33,
    "left": 12,
    "top": 19
  }
});
