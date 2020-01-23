import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors.js';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: Colors.secondary,
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: 'center',
        marginVertical: 10,
        padding: 10,
    },
    number: {
        color: Colors.secondary,
        fontSize: 22,
        textAlign: 'center',
        width: 30,
    },
});

export default NumberContainer;