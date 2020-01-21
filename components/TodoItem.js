import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TodoItem = props => {
    return (
        <View style={styles.todoItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
    },
});

export default TodoItem;