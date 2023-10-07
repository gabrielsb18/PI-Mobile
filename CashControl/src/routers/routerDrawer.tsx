import { createDrawerNavigator } from '@react-navigation/drawer';
import { Octicons } from '@expo/vector-icons'

import RouterTab from './routerTab';
import StackRoutes from './routerStackNav';


const Drawer = createDrawerNavigator();

export default function routerDrawer() {
  return (
    <Drawer.Navigator screenOptions={{title: ''}}>
        <Drawer.Screen
        name ='Feed'
        component ={RouterTab}
        options={{
            drawerIcon: ({color, size}) => <Octicons name = "home" color={color} size={size}/>,
            drawerLabel: 'Sair'
        }}/>
        
        {/* Acessando outra tela do meu app dentro do drawer */}
        <Drawer.Screen
        name ='Profile'
        component ={StackRoutes}
        options={{
            drawerIcon: ({color, size}) => <Octicons name = "home" color={color} size={size}/>,
            drawerLabel: 'Perfil'
        }}/>
    </Drawer.Navigator>
  )
}