import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button onPress={() => {}} title="Reset" />
                    <Button onPress={() => {}} title="Confirm" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        marginVertical: 5,
    },
});

export default StartGameScreen;