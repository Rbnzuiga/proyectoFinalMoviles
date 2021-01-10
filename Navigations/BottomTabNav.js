import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicos from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import Aliniamientos from '../Screens/Aliamientos';
import Razas from '../Screens/Razas';
import Clases from '../Screens/Clases';
import DrawerNav from './DrawerNav';
import InfoPersonajes from '../Screens/InfoPersonajes';
import TopTabNav from './TopTabNav';
import TopTabNavPers from './TopTabNavPers';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"

            tabBarOptions={{
                activeTintColor: "#FFEFF4",
                inactiveTintColor: "#582D30",
                showLable: true,
                labelStyle: {
                    fontSize: 12
                },
                style: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    backgroundColor: "#D32430"
                }
            }}
        >

            <Tab.Screen
                name="HomeScreen"
                component={DrawerNav}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"ios-home"} size={20} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="InfoPersonajes"
                component={TopTabNav}
                options={{
                    tabBarLabel: "Información",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"md-help"} size={20} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="CreacionPersonajes"
                component={TopTabNavPers}
                options={{
                    tabBarLabel: "Crear",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"md-create"} size={20} color={color} />
                    )
                }}
            />



        </Tab.Navigator>


    )
}