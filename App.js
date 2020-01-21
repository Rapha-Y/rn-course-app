import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TodoInput from './components/TodoInput.js';
import TodoItem from './components/TodoItem.js';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoHandler = todoTitle => {
    setTodoItems(todoItems => [...todoItems, {id: Math.random().toString(), value: todoTitle}]);
  };

  const removeTodoHandler = todoId => {
    setTodoItems(todoItems => {
      return todoItems.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <View style={styles.screen}>
      <TodoInput onAddTodo={addTodoHandler} />
      <FlatList 
        data={todoItems} 
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <TodoItem id={itemData.item.id} onDelete={removeTodoHandler} title={itemData.item.value} />
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20, 
    paddingVertical: 40,
  },
});
