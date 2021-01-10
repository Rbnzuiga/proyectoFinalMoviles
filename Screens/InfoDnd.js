import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const InfoDnd = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container2}>
                <Text style={styles.textziseT}>¿Que es Dungeons & Dragons?</Text>
                <Text style={styles.textziseP}>
                    Dungeons & Dragons (en español Dragones y Mazmorras) 
                    es un juego de rol de fantasía heroica actualmente publicado 
                    por Wizards of the Coast. {"\n \n"}Originalmente derivado de juegos de 
                    tablero jugados con lápiz, papel y dados, la primera publicación 
                    de Dungeons & Dragons es bien conocida como el principio de los 
                    juegos de rol modernos.
                    
                </Text>
            </View>
        </SafeAreaView>

    )
}
export default InfoDnd;

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