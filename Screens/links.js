import { View, Text, Button, StyleSheet, Linking , Image } from 'react-native';
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';


const links = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container2}>
            <Text style={styles.textziseT}>                   
            ¿Quieres mas informacion sobre D&D?
            </Text>
            <Text style={styles.textziseP}>
                Si te quedaste con las ganas de aprender mas 
                para la creacion de tu personaje ideal, visita los siguientes links: {"\n \n \n" }

        <Text style={styles.textzisePL} onPress={ ()=> Linking.openURL('https://https://dnd.wizards.com/.com') } >Pagina oficial del juego D&D</Text> {"\n \n"}
        <Text style={styles.textzisePL} onPress={ ()=> Linking.openURL('https://www.dndbeyond.com/sources/basic-rules') } >Explicacion de las reglas basicas</Text>
      
            </Text>
        </View>

    </SafeAreaView>

    )
}
export default links;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignItems: 'flex-start',
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
            
            },

            textzisePL:{
                fontSize: 20,
                textAlign: 'justify',
                padding: 40,
                textDecorationLine: 'underline'
                
                }
});