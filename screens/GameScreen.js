import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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

    return (
        <View style={styles.screen}>
            <Text>CPU guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button color={Colors.primary} onPress={() => {}} title="lower" />
                <Button color={Colors.primary} onPress={() => {}} title="greater" />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
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