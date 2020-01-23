import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, Button } from 'react-native';

import Card from '../components/Card.js';
import Colors from '../constants/Colors.js';
import Input from '../components/Input.js';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer}> 
                    <Text>Select a number</Text>
                    <Input 
                        autoCorrect={false} 
                        blurOnSubmit 
                        keyboardType="number-pad" 
                        maxLength={2} 
                        onChangeText={numberInputHandler}
                        style={styles.input} 
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color={Colors.secondary} onPress={() => {}} title="Reset" />
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.primary} onPress={() => {}} title="Confirm" />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 80,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: '100%',
    },
    input: {
        textAlign: 'center',
        width: 50,
    },
    inputContainer: {
        alignItems: 'center',
        width: '80%',
    },
    screen: {
        alignItems: 'center',
        padding: 10,
        flex: 1,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        marginTop: 10,
    },
});

export default StartGameScreen;