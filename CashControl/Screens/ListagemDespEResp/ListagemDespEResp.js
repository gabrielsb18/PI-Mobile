import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Receitas from "../Transactions/Receitas";
import Despesas from "../Transactions/Despesas";

const TabGroup = createMaterialTopTabNavigator();

const ListagemDespEResp = () => {
    return (
    <TabGroup.Navigator tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#000',
        labelStyle: {fontSize: 15},
        style: {backgroundColor: '#9BF500'
        }}}>
        <TabGroup.Screen name="Receitas" component={Receitas}/>
        <TabGroup.Screen name="Despesas" component={Despesas} />
    </TabGroup.Navigator>
    );
};

export default ListagemDespEResp;