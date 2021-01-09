import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container2}>RECETAS</Text>
      <StatusBar style="auto" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 20,
    justifyContent: 'center',
    marginTop: -600

  },
  container2: {

    fontSize: 40,


  },
  imagesize: {
    width: 500,
    height: 500,
},
});
