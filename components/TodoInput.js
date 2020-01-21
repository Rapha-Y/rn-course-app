import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, } from 'react-native';

const TodoInput = props => {
    const [enteredTodo, setNewTodoItem] = useState('');

    const todoInputHandler = (enteredText) => {
        setNewTodoItem(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                onChangeText={todoInputHandler} 
                placeholder="New to-do item" 
                style={styles.textInput} 
                value={enteredTodo}
            />
            <Button 
                onPress={props.onAddTodo.bind(this, enteredTodo)}
                title="add" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    textInput: {
        borderBottomColor: 'black', 
        borderWidth: 1,
        paddingHorizontal: 10, 
        paddingVertical: 5,
        width: '82%',
    },
});

export default TodoInput;