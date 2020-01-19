import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [newTodoItem, setTodoItem] = useState('');

  const addTodoHandler = () => {
    console.log(newTodoItem);
  };

  const todoInputHandler = (enteredText) => {
    setTodoItem(enteredText);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={todoInputHandler} 
          placeholder="New to-do item" 
          style={styles.textInput} 
          value={newTodoItem}
        />
        <Button 
          onPress={addTodoHandler} 
          style={styles.inputButton} 
          title="add" 
        />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputButton: {
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  screen: {
    paddingHorizontal: 20, 
    paddingVertical: 40,
  },
  textInput: {
    borderBottomColor: 'black', 
    borderWidth: 1, 
    flex: 1, 
    paddingHorizontal: 10, 
    paddingVertical: 5,
  },
});
