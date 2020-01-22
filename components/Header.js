import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: '#c46bae',
        height: 70,
        justifyContent: 'center',
        paddingTop: 20,
        width: '100%',
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
    },
});

export default Header;