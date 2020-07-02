import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import SoundPlayer from 'react-native-sound-player'

const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

export default function MyTimer() {
  // On definie ici le temps du compte à rebours en seconde
  const howLong = 30;

  const [remainingSecs, setRemainingSecs] = useState(howLong);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);

  //const workout = this.props;

  // On bascule le chrono comme inactif
  toggle = () => {
    setIsActive(!isActive);
  }

  reset = () => {
    setRemainingSecs(howLong);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    // On verifie que le compte à rebours n'est pas terminé
    if(remainingSecs == 0){
      clearInterval(interval);
      setIsActive(false);
    }
    // Si nous ne sommes pas encore à 0, on décrémente le chrono
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs - 1);
      }, 1000);

    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
      <TouchableOpacity onPress={this.toggle} style={styles.button}>
          <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Repos'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.reset} style={[styles.button, styles.buttonReset]}>
          <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      borderWidth: 10,
      borderColor: '#B9AAFF',
      width: screen.width / 4,
      height: screen.width / 4,
      borderRadius: screen.width / 4,
      alignItems: 'center',
      justifyContent: 'center'
  },
  buttonText: {
      fontSize: 16,
      color: '#B9AAFF'
  },
  timerText: {
      color: '#fff',
      fontSize: 38,
      marginBottom: 20
  },
  buttonReset: {
      marginTop: 20,
      borderColor: "#FF851B"
  },
  buttonTextReset: {
    color: "#FF851B"
  }
});
