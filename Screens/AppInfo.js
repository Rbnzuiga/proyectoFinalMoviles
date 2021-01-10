import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const AppInfo = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container2}>
                <Text style={styles.textziseT}>                   
                ¡Bienvenido a la aplicacion para Almacenamiento de personajes D&D 5e!
                </Text>
                <Text style={styles.textziseP}>
                    Dentro de esta apliacion encontraras la informacion y la herramienta para la facil y rapida creacion
                    de tu personaje. {"\n \n"}Esta aplicacion pretende poder ofrecer lo sufucinete para un bosquejo rapido,
                    no definido del personaje en mente.
                </Text>
            </View>
        </SafeAreaView>

    )
}
export default AppInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    container2: {
        flex: 1,
        backgroundColor: '#F8D5B5',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    imagesize: {
        width: 150,
        height: 150,

    },

    textziseT:{
        fontSize: 30,
        textAlign: 'center'
        },

        textziseP:{
            fontSize: 20,
            textAlign: 'justify',
            padding: 40
            
            }
});