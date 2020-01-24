import React, { useState, useRef, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card.js';
import NumberContainer from '../components/NumberContainer.js';
import Colors from '../constants/Colors.js';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rn = Math.floor(Math.random() * (max - min)) + min;
    if (rn === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rn;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || direction === 'greater' && currentGuess > props.userChoice) {
            Alert.alert("This is the taste of a liar!", "Giorno Giovanna!", [{ text: "N-nani?!", style: "cancel"}]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text>CPU guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button color={Colors.primary} onPress={nextGuessHandler.bind(this, 'lower')} title="lower" />
                </View>
                <View style={styles.button}>
                    <Button color={Colors.primary} onPress={nextGuessHandler.bind(this, 'greater')} title="greater" />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 80,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '80%',
    },
    screen: {
        alignItems: 'center',
        flex: 1,
        padding: 10,
    },
});

export default GameScreen;