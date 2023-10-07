import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Teste2 = () => {
  return (
    <View style = {styles.container}>
      <Text>Teste2</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Teste2