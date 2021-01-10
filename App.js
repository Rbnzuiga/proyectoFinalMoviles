
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
  

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
