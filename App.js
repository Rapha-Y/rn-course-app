import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="New to-do item" style={styles.textInput} />
        <Button style={styles.inputButton} title="add" />
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
