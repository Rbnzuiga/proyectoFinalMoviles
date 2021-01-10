import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';



const Inicio = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.container2} >
                <Image style={styles.imagesize }
                    source={require('../assets/dndImagegood.png')}
                />
                <Text style= {styles.textzise}>Almacenamiento de personajes para D&D 5e</Text>
            </View>
        </View>

    )
}
export default Inicio;

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
        width: 400,
        height: 190
    },

    textzise:{
        fontSize: 30,
        textAlign: 'center'
        }
});