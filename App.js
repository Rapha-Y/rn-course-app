import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{paddingHorizontal: 20 , paddingVertical: 40}}>
      <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput placeholder="New to-do item" style={{borderBottomColor: 'black', borderWidth: 1, flex: 1, paddingHorizontal: 10, paddingVertical: 5}} />
        <Button style={{flex: 1}} title="add" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
