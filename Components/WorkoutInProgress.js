import React, {Component, useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SeanceEnCours extends Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }

  render() {

    return (
    <ScrollView style={styles.seanceEnCours}>
        <ReactImage  source={require('../assets/backgroundScreenPush.png')} style={styles.seanceEnCours_rectangle13} />
        <Text style={styles.seanceEnCours_seanceEnCours3f25edc1}>Séance en cours</Text>
        <View style={styles.seanceEnCours_exerciceEnCoursEtSeries}>
            <View style={styles.seanceEnCours_exerciceEnCoursEtSeries_rectangle7}></View>
            <Text data-layer="855ec44a-fe1a-4bd7-a374-638f61abff7e" style={styles.seanceEnCours_exerciceEnCoursEtSeries_nomDeLexerciceEnCours}>Nom de l'exercice en cours</Text>
            <Text data-layer="e6167737-9b9f-480b-9fbc-304f2ff967f2" style={styles.seanceEnCours_exerciceEnCoursEtSeries_nombreDeSeriesPrevues}>Nombre de séries prévues :</Text>
        </View>
        <Text data-layer="9e71ac1f-4285-493b-ba27-b371384ce8db" style={styles.seanceEnCours_repetitionsAExecuter}>Répétitions à exécuter</Text>
        <View data-layer="e80facf8-15ec-4fd8-acc3-ec39141ecf3f" style={styles.seanceEnCours_repAExecuter}>
            <Svg data-layer="3d40edf6-2557-4204-ac31-efdf846a4c09" style={styles.seanceEnCours_repAExecuter_ellipse236e93943} preserveAspectRatio="none" viewBox="-0.75 -0.75 60.5 60.5" fill="rgba(187, 223, 255, 1)"><SvgPath d="M 29.5 0 C 45.79239654541016 0 59 13.20760154724121 59 29.5 C 59 45.79239654541016 45.79239654541016 59 29.5 59 C 13.20760154724121 59 0 45.79239654541016 0 29.5 C 0 13.20760154724121 13.20760154724121 0 29.5 0 Z"  /></Svg>
            <Text data-layer="9d36dbee-22cf-4295-a4cd-9517d0fbde61" style={styles.seanceEnCours_repAExecuter_x12}>12</Text>
        </View>
        <View data-layer="8414aeb6-10b9-42e9-add1-a964b17bed35" style={styles.seanceEnCours_serieTerminee}>
            <View data-layer="6b0fa93b-11b6-482a-83bf-bd79b06e366a" style={styles.seanceEnCours_serieTerminee_rectangle8}></View>
            <Text data-layer="069f4990-69fe-4960-b850-d58a122bfbc6" style={styles.seanceEnCours_serieTerminee_jaiFiniMaSerie}>J'ai fini ma série</Text>
        </View>
        <Svg data-layer="3e0bd46e-bd28-4cd9-87ce-ee959c1d3e40" style={styles.seanceEnCours_ligne2} preserveAspectRatio="none" viewBox="0 -0.5 107 1" fill="transparent"><SvgPath d="M 0 0 L 107 0"  /></Svg>
        <View data-layer="64da125f-9196-4c13-b1f4-68863db4ce7b" style={styles.seanceEnCours_composant141}>
            <Svg data-layer="343f541d-7632-4640-ab8f-667eabfc8025" style={styles.seanceEnCours_composant141_ellipse2} preserveAspectRatio="none" viewBox="-0.75 -0.75 99.5 99.5" fill="rgba(187, 223, 255, 1)"><SvgPath d="M 49 0 C 76.06195068359375 0 98 21.93804931640625 98 49 C 98 76.06195068359375 76.06195068359375 98 49 98 C 21.93804931640625 98 0 76.06195068359375 0 49 C 0 21.93804931640625 21.93804931640625 0 49 0 Z"  /></Svg>
            <Text data-layer="6692eb1d-acef-4363-80d4-12df4ae81591" style={styles.seanceEnCours_composant141_x30}>30''</Text>
        </View>
        <Text data-layer="306d0fb3-a62a-43e9-a81e-6f5d6cdd9ebf" style={styles.seanceEnCours_tempsDeRecuperation}>Temps de récupération</Text>
        <Svg data-layer="55ccd5c5-fa57-481d-b622-d69d5b8d14f3" style={styles.seanceEnCours_ligne3} preserveAspectRatio="none" viewBox="0 -0.5 107 1" fill="transparent"><SvgPath d="M 0 0 L 107 0"  /></Svg>
        <ReactImage data-layer="202f1a4f-95bb-4697-8045-b87b11d2984f" source={require('../assets/x6346342297menuBarIconWhiteClipartPngDownload3.png')} style={styles.seanceEnCours_x6346342297menuBarIconWhiteClipartPngDownload3} />
    </ScrollView>
    );
  }
}

SeanceEnCours.propTypes = {

}

SeanceEnCours.defaultProps = {

}


const styles = StyleSheet.create({
  "seanceEnCours": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 360,
    "height": 637,
    "left": 0,
    "top": 0
  },
  "seanceEnCours_rectangle13": {
    "opacity": 1,
    "position": "relative",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 360,
    "height": 637,
    "left": 0,
    "top": 0
  },
  "seanceEnCours_seanceEnCours3f25edc1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",

    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 150,
    "height": 61,
    "left": 80,
    "top": 20
  },
  "seanceEnCours_exerciceEnCoursEtSeries": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 290,
    "height": 83,
    "left": 43,
    "top": 93
  },
  "seanceEnCours_exerciceEnCoursEtSeries_rectangle7": {
    "opacity": 0.699999988079071,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "left": 0,
    "top": 0
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 200,
    "height": 41,
    "left": 89,
    "top": 221
  },
  "seanceEnCours_repAExecuter": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 59,
    "height": 59,
    "left": 159,
    "top": 262
  },
  "seanceEnCours_repAExecuter_ellipse236e93943": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 59,
    "height": 59,
    "left": 0,
    "top": 0
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 28,
    "height": 29,
    "left": 16,
    "top": 15
  },
  "seanceEnCours_serieTerminee": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 209,
    "height": 60,
    "left": 84,
    "top": 350
  },
  "seanceEnCours_serieTerminee_rectangle8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(185, 255, 183, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 209,
    "height": 60,
    "left": 0,
    "top": 0
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 147,
    "height": 28,
    "left": 31,
    "top": 16
  },
  "seanceEnCours_ligne2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 107,
    "height": 1,
    "left": 135.5,
    "top": 204
  },
  "seanceEnCours_composant141": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 98,
    "height": 98,
    "left": 139,
    "top": 512
  },
  "seanceEnCours_composant141_ellipse2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 98,
    "height": 98,
    "left": 0,
    "top": 0
  },
  "seanceEnCours_composant141_x30": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 34,
    "fontWeight": "400",
    "fontStyle": "normal",

    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 209,
    "height": 41,
    "left": 85,
    "top": 455
  },
  "seanceEnCours_ligne3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 107,
    "height": 1,
    "left": 135.5,
    "top": 438
  },
  "seanceEnCours_x6346342297menuBarIconWhiteClipartPngDownload3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 35,
    "height": 33,
    "left": 12,
    "top": 19
  }
});
