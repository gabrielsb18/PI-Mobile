import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Teste1 = () => {
  return (
    <View style = {styles.container}>
      <Text>Teste1</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Teste1