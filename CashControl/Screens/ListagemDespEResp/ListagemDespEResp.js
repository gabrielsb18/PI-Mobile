import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../src/components/Header/Header'

const ListagemDespEResp = () => {

  return (
    <View style = {style.container}>
      <Header title="Categoria"/>
      <View style = {style.Text}>
        <Text>ListagemDespEResp</Text>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    Text: {
      justifyContent: 'center',
      flex:1
    }
})
export default ListagemDespEResp