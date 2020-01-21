import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.todoItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
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