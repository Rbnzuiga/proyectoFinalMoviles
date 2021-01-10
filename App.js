import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.container2}>RECETAS</Text>
    <StatusBar style="auto" />


    </View>
  );
=======
import { Component } from 'react';
import {StyleSheet} from 'react-native';
import DndProv from './Contexto/dndContext';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNav from './Navigations/BottomTabNav';
import DrawerNav from './Navigations/DrawerNav';
import { SafeAreaView } from 'react-native'

export default function App(){
  return(

    
<SafeAreaView style = {{flex:1}}>   


    <DndProv>

      
      <NavigationContainer>
        <BottomTabNav/>
        <StatusBar backgroundColor = "#D32430"/>   
      </NavigationContainer>
    </DndProv>
 
  </SafeAreaView>
  )
  
>>>>>>> a768dfc968866f5ae303c32adc2f3941a7d3b505
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
