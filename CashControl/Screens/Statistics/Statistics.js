import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useFonts} from 'expo-font';
import React from 'react'
import GoBack from '../../src/components/GoBack/goBack';

const Statistics = () => {

    const [fontsLoaded] = useFonts({
        InterRegular:require('../../assets/Fonts/InterRegular.ttf'),
        InterMedium:require('../../assets/Fonts/InterMedium.ttf'),
        InterBold:require('../../assets/Fonts/InterBold.ttf'),
        InterLight:require('../../assets/Fonts/InterLight.ttf')
    
        });
    
       if (!fontsLoaded) {
        return null;
      }

      
  return (
    <View style = {style.container}>

        <View style = {style.boxHeader}>
            <GoBack/>
            <Text style ={{fontFamily: 'InterMedium', fontSize: 20, letterSpacing: -1., fontWeight: 500, alignItems: 'center', position: 'absolute', marginLeft: 90}}>Histórico</Text>
        </View>

        <View style = {style.textTitle}>
            <Text style ={{fontFamily: 'InterLight', fontSize: 18, letterSpacing: -1}}>Gastos do mês</Text>
            <Text style ={{fontFamily: 'InterBold', fontSize: 32, letterSpacing: -1}}>R$ 840,90</Text>
        </View>

    </View>
  )
}

const style = StyleSheet.create ({

    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textTitle: {
        justifyContent: 'row',
        alignItems: 'center',
        padding: 30
    },

    boxHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        backgroundColor: '#9BF500',
        width: 450,
        padding: 10,
        marginTop:30
    }
})

export default Statistics;