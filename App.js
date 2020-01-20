import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [newTodoItem, setNewTodoItem] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const addTodoHandler = () => {
    setTodoItems(todoItems => [...todoItems, {id: Math.random().toString(), value: newTodoItem}]);
  };

  const todoInputHandler = (enteredText) => {
    setNewTodoItem(enteredText);
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
          title="add" 
        />
      </View>
      <FlatList 
        data={todoItems} 
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <View style={styles.todoItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingHorizontal: 10, 
    paddingVertical: 5,
    width: '82%',
  },
  todoItem: {
    backgroundColor: 'pink',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
});
