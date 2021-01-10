import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AppInfo from '../Screens/AppInfo';
import InfoDnd from '../Screens/InfoDnd';
import links from '../Screens/links';
import HomeScreen from '../Screens/HomeScreen';
import { Text, View, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';



const drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (

        <drawer.Navigator
            initialRouteName="HomeScreen"

            drawerStyle={{
                backgroundColor: '#D32430',
                width: '60%'
            }}
            drawerContentOptions={{
                activeTintColor: "#FFEFF4",
                inactiveTintColor: "#582D30"
            }}
            drawerContent={(props) =>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 30 }}>
                        <Image style={styles.imagesize}
                            source={require('../assets/dndImagegood.png')}
                        />
                    </View>
                </DrawerContentScrollView>
            }
        >
            <drawer.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    drawerLabel: "Inicio",
                    drawerIcon: ({ color }) => (
                        <Ionicons name={"ios-home"} size={20} color={color} />
                    )
                }}
            />

            <drawer.Screen
                name="Información de la app"
                component={AppInfo}
                options={{
                    drawerLabel: "Introducción",
                    drawerIcon: ({ color }) => (
                        <Ionicons name={"ios-settings"} size={20} color={color} />
                    )
                }}
            />

            <drawer.Screen
                name="¿Que es D&D?"
                component={InfoDnd}
                options={{
                    drawerLabel: "¿Que es D&D?",
                    drawerIcon: ({ color }) => (
                        <Ionicons name={"ios-help"} size={20} color={color} />
                    )
                }}
            />

            <drawer.Screen
                name="Links"
                component={links}
                options={{
                    drawerLabel: "Links",
                    drawerIcon: ({ color }) => (
                        <Ionicons name={"ios-link"} size={20} color={color} />
                    )
                }}
            />

        </drawer.Navigator>
    )
}

const styles = StyleSheet.create({

    imagesize: {
        width: 190,
        height: 80
    }

});