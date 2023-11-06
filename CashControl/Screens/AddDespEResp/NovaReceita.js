import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { Button } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DatePickerInput } from 'react-native-paper-dates';

const NovaReceita = () => {
  const [inputDate, setInputDate] = React.useState(undefined)

  return (
    <View style={style.container}>
      <View style={style.input}>
      <TextInput
        style={style.input}
        mode="outlined"
        keyboardType="phone-pad"
        Value={Text}
        label="Valor "/>
      </View>

      <View style={style.input}>
      <TextInput
        style={style.input}
        mode="outlined"
        Value={Text}
        label="Descrição"/>
      </View>

      <View style={style.input}>
      <TextInput
        style={style.input}
        mode="outlined"
        Value={Text}
        label="Data"/>
      </View>
      
      </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    backgroundColor: "#f7f7f7",
  },

  input: {
    marginBottom: 10,
  },
});

export default NovaReceita;
