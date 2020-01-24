import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors.js';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.textDisplay}>
                <Text>The game is over!</Text>
                <Text>Number of rounds: {props.roundsNumber}</Text>
                <Text>Number was: {props.userNumber}</Text>
            </View>
            <View style={styles.button}>
                <Button color={Colors.primary} onPress={props.onRestart} title="New game" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 100,
    },
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    textDisplay: {
        margin: 20,
    },
});

export default GameOverScreen;