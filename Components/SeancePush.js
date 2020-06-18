import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {Svg, Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SeancePush extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isLoading : false,
        test : false
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
    <ScrollView data-layer="88a2e7ff-26bd-49a8-919e-b096694a0980" style={styles.seancePush}>
        <ReactImage data-layer="cb7f9766-e118-40d7-8ebb-736b8421734b" source={require('../assets/backgroundScreenPush.png')} style={styles.seancePush_backgroundScreenPush} />
        <Text data-layer="1bd16f22-00be-496a-bac0-9e319c1979ef" style={styles.seancePush_seancePushBiceps}>Séance push biceps
</Text>
        <View data-layer="b2e59d69-50f8-499c-8ec8-dbfa6c4c4ac3" style={styles.seancePush_composant12}>
            <View data-layer="408cb1fa-871d-471a-8ced-ef29d220113d" style={styles.seancePush_composant12_rectangle1}></View>
        </View>
        <Text data-layer="97a1833b-5aad-43fd-9680-b58a7c18f3b9" style={styles.seancePush_historiquesDernieresSeances}>Historiques dernières séances</Text>
        <View data-layer="e747ad91-6778-44ec-92d2-02da5e3bf4e0" style={styles.seancePush_chronoBeginPush}>
            <Svg data-layer="0e47af0e-66f3-48d5-a261-7635ee74c866" style={styles.seancePush_chronoBeginPush_ellipse1} preserveAspectRatio="none" viewBox="-0.75 -0.75 129.5 129.5" fill="rgba(185, 255, 183, 1)"><SvgPath d="M 64 0 C 99.34622192382813 0 128 28.65377807617188 128 64 C 128 99.34622192382813 99.34622192382813 128 64 128 C 28.65377807617188 128 0 99.34622192382813 0 64 C 0 28.65377807617188 28.65377807617188 0 64 0 Z"  /></Svg>
            <Text data-layer="a14cf0c7-de8e-46b5-8502-71faa4ebd8de" style={styles.seancePush_chronoBeginPush_begin}>BEGIN</Text>
        </View>
        <Svg data-layer="d2ffc224-72ff-4bb3-90ec-d90e42c0a75f" style={styles.seancePush_ligne4} preserveAspectRatio="none" viewBox="0 -0.5 256 1" fill="transparent"><SvgPath d="M 0 0 L 256 0"  /></Svg>
        <Svg data-layer="80c5dbaa-d2cb-42f3-95b3-eac2b289208b" style={styles.seancePush_polygone2} preserveAspectRatio="none" viewBox="-0.75 -0.75 23.5 17.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 10.99999904632568 0 L 22 16 L 0 16 Z"  /></Svg>
    </ScrollView>
    );
  }
}

SeancePush.propTypes = {

}

SeancePush.defaultProps = {

}


const styles = StyleSheet.create({
  "seancePush": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "paddingLeft": 0,
    "width": 360,
    "height": 637,
  },
  "seancePush_backgroundScreenPush": {
    "opacity": 1,
    "position": "relative",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 361,
    "height": 640,
    "left": 0,
    "top": 0
  },
  "seancePush_seancePushBiceps": {
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
    "left": 32,
    "top": 6
  },
  "seancePush_composant12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 314,
    "height": 189,
    "left": 23,
    "top": 351
  },
  "seancePush_composant12_rectangle1": {
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
  "seancePush_historiquesDernieresSeances": {
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
  "seancePush_chronoBeginPush": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 128,
    "height": 128,
    "left": 116,
    "top": 131
  },
  "seancePush_chronoBeginPush_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "width": 128,
    "height": 128,
    "left": 0,
    "top": 0
  },
  "seancePush_chronoBeginPush_begin": {
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
  "seancePush_ligne4": {
    "opacity": 1,
    "position": "absolute",
    "width": 256,
    "height": 1,
    "top": 47.5
  },
  "seancePush_polygone2": {
    "opacity": 1,
    "position": "absolute",
    "width": 22,
    "height": 16,
    "left": 5.19,
    "top": 15.86
  }
});
