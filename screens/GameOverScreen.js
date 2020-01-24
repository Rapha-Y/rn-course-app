import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The game is over!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

export default GameOverScreen;