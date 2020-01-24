import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import GameScreen from './screens/GameScreen.js';
import Header from './components/Header.js';
import StartGameScreen from './screens/StartGameScreen.js';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  };

  return (
    <View style={styles.screen}>
      <Header title={'Guess a number!'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});