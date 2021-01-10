import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Ionicos from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import Formulario from '../Screens/Formulario';
import Consultas from '../Screens/Consultas';
import Listado from '../Screens/Listado';
import StackNav from './StackNav';

//const Tab = createBottomTabNavigator();



const Top = createMaterialTopTabNavigator();


export default function BottomTabNav() {
    return (
        <Top.Navigator
            initialRouteName="Listado"

            tabBarOptions={{
                activeTintColor: "#FFEFF4",
                inactiveTintColor: "#582D30",
                showLable: true,
                labelStyle: {
                    fontSize: 12
                },
                indicatorStyle: {
                    backgroundColor: 'transparent'
                 },
                style: {
                    paddingBottom: 5,
                    paddingTop: Constants.statusBarHeight,
                    backgroundColor: "#D32430"
                }
            }}
        >

            <Top.Screen
                name="Listado"
                component={StackNav}
                options={{
                    tabBarLabel: "Lista",
  
                }}
            />

            <Top.Screen
                name="Consultas"
                component={Consultas}
                options={{
                    tabBarLabel: "Personajes",
        
                }}
            />

        </Top.Navigator>


    )
}