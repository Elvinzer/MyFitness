import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SeancePull extends Component {

  constructor(props) {
      super(props);
      this.state = {
        sceance : "Pull",
      };
  }

  render() {
    const typeTraining = this.props.route.params.typeTraining;
    return (
    <ScrollView style={styles.seancePull}>
        <ReactImage source={require('../assets/backgroundScreenPush.png')} style={styles.  background_screen} />
        <Text style={styles.seancePull_seancePullLeg}>Séance Pull Leg</Text>
        <Svg style={styles.seancePull_polygone2} viewBox="-0.75 -0.75 23.5 17.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 10.99999904632568 0 L 22 16 L 0 16 Z"  /></Svg>
        <View style={styles.seancePull_composant13}>
          <View style={styles.seancePull_composant13_rectangle1}></View>
        </View>
        <Text style={styles.seancePull_historiquesDernieresSeances}>Historiques dernières séances</Text>

        <TouchableOpacity style={styles.seancePull_ellipse1} onPress={() => this.props.navigation.navigate("WorkoutInProgress", { typeTraining: typeTraining })}>
          <Svg style={styles.seancePull_ellipse1} viewBox="-0.75 -0.75 129.5 129.5" fill="rgba(185, 255, 183, 1)"><SvgPath d="M 64 0 C 99.34622192382813 0 128 28.65377807617188 128 64 C 128 99.34622192382813 99.34622192382813 128 64 128 C 28.65377807617188 128 0 99.34622192382813 0 64 C 0 28.65377807617188 28.65377807617188 0 64 0 Z"  /></Svg>
          <Text style={styles.seancePull_begin}>BEGIN</Text>
        </TouchableOpacity>

        <Svg style={styles.seancePull_ligne4} viewBox="0 -0.5 224 1" fill="transparent"><SvgPath d="M 0 0 L 224 0"  /></Svg>
    </ScrollView>
    );
  }
}

SeancePull.propTypes = {

}

SeancePull.defaultProps = {

}


const styles = StyleSheet.create({
  "seancePull": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "width": 359,
    "height": 639
  },
  "seancePull_chronoBeginPull": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 128,
    "height": 128,
    "left": 80,
    "top": 110
  },
  "  background_screen": {
    "opacity": 1,
    "position": "relative",
    "width": 360,
    "height": 640,
  },
  "seancePull_seancePullLeg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",

    "textAlign": "left",
    "width": 200,
    "height": 26,
    "left": 29,
    "top": 11
  },
  "seancePull_polygone2": {
    "opacity": 1,
    "position": "absolute",
    "width": 22,
    "height": 16,
    "left": 5.19,
    "top": 15.86
  },
  "seancePull_composant13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 314,
    "height": 189,
    "left": 23,
    "top": 378
  },
  "seancePull_composant13_rectangle1": {
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
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "width": 261,
    "height": 40,
    "left": 49,
    "top": 459
  },

  "seancePull_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "width": 128,
    "height": 128,
    "left": 124,
    "top": 110
  },
  "seancePull_begin": {
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
    "left": 158,
    "top": 157
  },

  "seancePull_ligne4": {
    "opacity": 1,
    "position": "absolute",
    "width": 224,
    "height": 1,
    "top": 47.5
  }
});
