import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Image as ReactImage, Dimensions} from 'react-native';
import {Svg, Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

const screen = Dimensions.get('window');

export default class SeancePull extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isLoading : false,
        test : false,
        sceance : "Pull"
      };
  }

  render() {
    const typeTraining = this.props.route.params.typeTraining;

    return (
    <View style={styles.seancePull}>
        <Text style={styles.seancePull_seancePullBiceps}>Séance Pull Leg</Text>
        <View style={styles.seancePull_composant12}>
            <View style={styles.seancePull_composant12_rectangle1}></View>
        </View>
        <Text style={styles.seancePull_historiquesDernieresSeances}>Historiques dernières séances</Text>
        <TouchableOpacity style={styles.seancePull_chronoBeginPull} onPress={() => this.props.navigation.navigate("WorkoutInProgress", { typeTraining: typeTraining })}>
            <Svg style={styles.seancePull_chronoBeginPull_ellipse1} preserveAspectRatio="none" viewBox="-0.75 -0.75 129.5 129.5" fill="rgba(185, 255, 183, 1)"><SvgPath d="M 64 0 C 99.34622192382813 0 128 28.65377807617188 128 64 C 128 99.34622192382813 99.34622192382813 128 64 128 C 28.65377807617188 128 0 99.34622192382813 0 64 C 0 28.65377807617188 28.65377807617188 0 64 0 Z"  /></Svg>
            <Text style={styles.seancePull_chronoBeginPull_begin}>BEGIN</Text>
        </TouchableOpacity>
        <Svg style={styles.triangle_titre} preserveAspectRatio="none" viewBox="-0.75 -0.75 23.5 17.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 10.99999904632568 0 L 22 16 L 0 16 Z"  /></Svg>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  "seancePull": {
    "opacity": 1,
    "position": "relative",
    backgroundColor: '#07121B',
    "paddingLeft": 0,
    "width": 360,
    "height": 600,
  },
  "seancePull_backgroundScreenPull": {
    "opacity": 1,
    "position": "relative",
    "width": 361,
    "height": 600,
  },
  "seancePull_seancePullBiceps": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 282,
    "height": 45,
    "left": 50,
    "top": 11
  },
  "seancePull_composant12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 314,
    "height": 189,
    "left": 23,
    "top": 351
  },
  "seancePull_composant12_rectangle1": {
    "opacity": 1,
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
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 314,
    "height": 189,
  },
  "seancePull_historiquesDernieresSeances": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 261,
    "height": 27,
    "left": 43,
    "top": 424
  },
  "seancePull_chronoBeginPull": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    width: screen.width / 2,
    height: screen.width / 2,
    right: screen.width / 5.5,
    top: screen.width / 3,
  },
  "seancePull_chronoBeginPull_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "width": 128,
    "height": 128,
  },
  "seancePull_chronoBeginPull_begin": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",

    "textAlign": "left",
    "width": 59,
    "height": 35,
    "left": 35,
    "top": 47
  },
  "seancePull_ligne4": {
    "opacity": 1,
    "position": "absolute",
    "width": 256,
    "height": 1,
    "top": 47.5
  },
  "triangle_titre": {
    "opacity": 1,
    "position": "absolute",
    "width": 22,
    "height": 16,
    "left": 15,
    "top": 15.86
  }
});
