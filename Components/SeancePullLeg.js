import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SeancePull extends Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {

    return (
    <ScrollView data-layer="40c007c9-ac53-424c-83f5-e94d2de601df" style={styles.seancePull}>
        <ReactImage data-layer="4a3e41be-6f1d-49f5-b91d-27eb61d20374" source={require('../assets/backgroundScreenPush.png')} style={styles.seancePull_rectangle13} />
        <Text data-layer="18e56257-9a01-48a8-8977-f26405ef343c" style={styles.seancePull_seancePullLeg}>Séance Pull Leg</Text>
        <Svg data-layer="c7f5cbe4-c1d1-44f4-804a-79bea81427cc" style={styles.seancePull_polygone2} preserveAspectRatio="none" viewBox="-0.75 -0.75 23.5 17.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 10.99999904632568 0 L 22 16 L 0 16 Z"  /></Svg>
        <View data-layer="4291ebfc-025b-412f-b069-ad0ab7112ddb" style={styles.seancePull_composant13}>
            <View data-layer="1dfe73f6-52d2-42a1-b16e-4125256ed7b0" style={styles.seancePull_composant13_rectangle1}></View>
        </View>
        <Text data-layer="b0ee44be-695d-46d0-a663-6c2a5b6beb16" style={styles.seancePull_historiquesDernieresSeances}>Historiques dernières séances</Text>
        <Svg data-layer="51f159a7-6b7c-43e6-bb6e-8d685de152a8" style={styles.seancePull_ellipse1} preserveAspectRatio="none" viewBox="-0.75 -0.75 129.5 129.5" fill="rgba(185, 255, 183, 1)"><SvgPath d="M 64 0 C 99.34622192382813 0 128 28.65377807617188 128 64 C 128 99.34622192382813 99.34622192382813 128 64 128 C 28.65377807617188 128 0 99.34622192382813 0 64 C 0 28.65377807617188 28.65377807617188 0 64 0 Z"  /></Svg>
        <Text data-layer="9cb962d2-af87-48bf-972a-a54f8e1071dd" style={styles.seancePull_begin}>BEGIN</Text>
        <Svg data-layer="7346be3d-42f6-4283-a8a0-5ecea86e669b" style={styles.seancePull_ligne4} preserveAspectRatio="none" viewBox="0 -0.5 224 1" fill="transparent"><SvgPath d="M 0 0 L 224 0"  /></Svg>
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
  "seancePull_rectangle13": {
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
    "height": 27,
    "left": 49,
    "top": 459
  },
  "seancePull_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "width": 128,
    "height": 128,
    "left": 124,
    "top": 182
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
    "top": 229
  },
  "seancePull_ligne4": {
    "opacity": 1,
    "position": "absolute",
    "width": 224,
    "height": 1,
    "top": 47.5
  }
});
