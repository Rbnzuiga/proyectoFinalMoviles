import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const InfoPersonajes = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container2}>
                <Text>Info de personajes</Text>
            </View>
            <StatusBar backgroundColor="#434343" />
        </SafeAreaView>

    )
}
export default InfoPersonajes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    imagesize: {
        width: 150,
        height: 150,
    },
});