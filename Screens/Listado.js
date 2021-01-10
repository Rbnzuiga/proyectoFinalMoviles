import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dndContext } from '../Contexto/dndContext';
import { StatusBar } from 'expo-status-bar';


const Listado =({navigation})=>{

    const {setdndPersonaje, eliminar, PersonajesLista} = useContext(dndContext);

    return(
    <View style={styles.container}>
        <StatusBar backgroundColor = "#D32430"/>   

        <Header
            centerComponent={{ text: 'Personajes', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'add', color: '#fff', onPress:()=>{
                navigation.navigate('Formulario',{status:"add"})
                setdndPersonaje({
                    id: null,
                        nombre: "",
                        Raza: "",
                        Clase: "",
                        Edad: "",
                        Estatura: "",
                        DescripcionGeneral: ""
                 })   

            }}}
            containerStyle={{backgroundColor:'#D32430'}}
        />

<ScrollView>
        {
            PersonajesLista.length>0
            ?
            PersonajesLista.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{a.raza}</ListItem.Subtitle>

                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(a.id)}/>
                        <Ionicons name='md-create' size={30} color={'green'}  onPress={()=>{
                            setdndPersonaje({
                                id:a.id.toString(),
                                nombre:a.nombre,
                                Raza: a.Raza,
                                Clase:a.Clase,
                                Edad:a.Edad,
                                Estatura:a.Estatura,
                                DescripcionGeneral:a.DescripcionGeneral
                            })

                            navigation.navigate('Formulario',{status:"edit"})
                        }}/>

                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay personajes aun</Text>


        }


        </ScrollView>
    </View>)


}

export default Listado;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8D5B5',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});