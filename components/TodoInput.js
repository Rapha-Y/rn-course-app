import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View, } from 'react-native';

const TodoInput = props => {
    const [enteredTodo, setEnteredTodo] = useState('');

    const todoInputHandler = (enteredText) => {
        setEnteredTodo(enteredText);
    };

    const addTodoHandler = () => {
        props.onAddTodo(enteredTodo);
        setEnteredTodo('');
    };

    return (
        <Modal animationType="slide" visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={todoInputHandler} 
                    placeholder="New to-do item" 
                    style={styles.textInput} 
                    value={enteredTodo}
                />
                <View style={styles.buttonContainer}>
                    <Button color="red" onPress={props.onCancel} title="cancel" />
                    <Button 
                        onPress={addTodoHandler}
                        title="add" 
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '82%',
    },
    inputContainer: {
        alignItems: 'center', 
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        borderBottomColor: 'black', 
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10, 
        paddingVertical: 5,
        width: '82%',
    },
});

export default TodoInput;