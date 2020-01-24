import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import GameOverScreen from './screens/GameOverScreen.js';
import GameScreen from './screens/GameScreen.js';
import Header from './components/Header.js';
import StartGameScreen from './screens/StartGameScreen.js';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen onGameOver={gameOverHandler} userChoice={userNumber} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen onRestart={configureNewGameHandler} userNumber={userNumber} roundsNumber={guessRounds} />
  }

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