import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons, Octicons} from '@expo/vector-icons'

import Home from '../../Screens/Home/Home';
import Teste1 from '../../Screens/Home/Teste1';
import Teste2 from '../../Screens/Home/Teste2';

const Tab = createBottomTabNavigator();

export default function RouterTab() {
  
  return (
    <Tab.Navigator 
      screenOptions = {{tabBarStyle: {
        backgroundColor: '#f7f7f7',
        borderTopColor: 'transparent',
        elevation: 0,}, /*Borda Do criado pelo meu navigator*/
        tabBarActiveTintColor: '#9BF500',/*Cor do meu botão ao estar selecionado*/
        }}>

        <Tab.Screen name = "Home"
          component = {Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => <Octicons name = "home" color={color} size={30}/>,
            tabBarLabel: "•",
          }}/>

        <Tab.Screen name = "page1"
          component = {Teste1}
          options = {{
            tabBarIcon: ({ color, size}) => <Octicons name = "history" color={color} size={25}/>,
            tabBarLabel: "•"
          }}/>

        <Tab.Screen name = "page2"
          component = {Teste2}
          options = {{
            tabBarIcon: ({ color, size}) => <Ionicons name="notifications-outline" size={30} color= {color}/>,
            tabBarLabel: "•"
          }}/>

    </Tab.Navigator>
  )
}