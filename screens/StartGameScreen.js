import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import Card from '../components/Card.js';
import Colors from "../constants/Colors.js";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={styles.inputContainer}> 
                <Text>Select a number</Text>
                <TextInput />
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