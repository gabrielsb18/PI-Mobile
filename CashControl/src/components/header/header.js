import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GoBack from '../GoBack/goBack'

const Header = ({title}) => {
  return (
    <View style = {style.boxHeader}>
    {/* /*botão de retornar*/}
    <GoBack/>
        <Text style = {style.headerText}>{title}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  
  boxHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',


    backgroundColor: '#9BF500',
    width: '100%',
    
    height: '10%',
    padding: 20,
    marginTop: 30,
  },

  headerText: {
    fontFamily: 'InterMedium',
    fontSize: 20,
    letterSpacing: -1,
    fontWeight: '500',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 90,
  }
})

export default Header;