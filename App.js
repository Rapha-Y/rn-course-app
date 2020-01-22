import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header.js';
import StartGameGame from './screens/StartGameScreen.js'; 
import StartGameScreen from './screens/StartGameScreen.js';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={'Guess a number!'} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});