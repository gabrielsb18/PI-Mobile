import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';



const RegularTextInput = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Descrição"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Data"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F7F7F7',
    height: 50,
    marginTop: 17,
    marginHorizontal: 16,
    padding: 15,
    borderRadius: 10,
    outlineColor: 'lightgray',
    outlineStyle: 'solid',
    outlineWidth: 1,
    fontFamily: 'Inter',
    fontSize: 14,
  },
});

export default RegularTextInput;