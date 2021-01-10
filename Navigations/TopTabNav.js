import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Aliniamientos from '../Screens/Aliamientos';
import Razas from '../Screens/Razas';
import Clases from '../Screens/Clases';
import DrawerNav from './DrawerNav';
import Constants from 'expo-constants';

const Top = createMaterialTopTabNavigator();

export default function BottomTabNav() {
    return (
        <Top.Navigator
            initialRouteName="Razas"

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
                name="Razas"
                component={Razas}
                options={{
                    tabBarLabel: "Razas",
                }}
            />

            <Top.Screen
                name="Clases"
                component={Clases}
                options={{
                    tabBarLabel: "Clases",
                }}
            />

            <Top.Screen
                name="Aliniamientos"
                component={Aliniamientos}
                options={{
                    tabBarLabel: "Alineamientos",
                }}
            />

        </Top.Navigator>


    )
}