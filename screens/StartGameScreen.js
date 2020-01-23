import React, { useState } from 'react';
import { Alert, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, Button } from 'react-native';

import Card from '../components/Card.js';
import Colors from '../constants/Colors.js';
import Input from '../components/Input.js';
import NumberContainer from '../components/NumberContainer.js';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{ onPress: resetInputHandler, style: 'destructive', text: 'Okay' }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You chose</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button color={Colors.primary} title="Start game!"/>
            </Card>
        );
    }

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
                            <Button color={Colors.secondary} onPress={resetInputHandler} title="Reset" />
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.primary} onPress={confirmInputHandler} title="Confirm" />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
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
    summaryContainer: {
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        marginTop: 10,
    },
});

export default StartGameScreen;