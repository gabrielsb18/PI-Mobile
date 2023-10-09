import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../Screens/Login/Login'
import Cadastro from '../../Screens/Cadastro/Cadastro';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
        name ='Login'
        component ={Login}
        options={{
          //Bloqueia o gesto para o drawer na tela de login
          //gestureEnabled: false
        }}/> 
    </Stack.Navigator>
  )
}