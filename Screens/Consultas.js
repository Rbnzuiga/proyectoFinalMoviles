import { Formik } from 'formik';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { dndContext } from '../Contexto/dndContext';
import Constants from 'expo-constants';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';



export default function Formulario({ navigation }) {

    const { dndPersonaje, PersonajesLista, setdndPersonaje, setLista, } = useContext(dndContext);
    <StatusBar backgroundColor = "#D32430"/>   

    return (
        <View style={styles.containerHead}>

            <Header
                centerComponent={{ text: 'Personajes creados', style: { color: '#fff', fontSize: 20 } }}
                containerStyle={{ backgroundColor: '#D32430' }}
            />

            <Formik
                initialValues={dndPersonaje}
                onSubmit={({ resetForm }) => {
                    firebase.database().ref('proyectofinaldnd/' + dndPersonaje.id).update(dndPersonaje).then(() => {
                        alert("Enviado")
                    })
                    const temporal = PersonajesLista.filter(Lic => Lic.id != dndPersonaje.id);
                    // alert('Enviado')
                    setLista([...temporal, dndPersonaje]);
                    resetForm({
                        id: "",
                        nombre: "",
                        Raza: "",
                        Clase: "",
                        Edad: "",
                        Estatura: "",
                        DescripcionGeneral: ""
                    })
                    //console.log(Lista)
                    navigation.goBack();
                }}

            >
                {
                    ({ handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values }) => (

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{ height: 40, backgroundColor: 'white' }}
                                selectedValue={values.Raza}
                                onValueChange={(V) =>
                                    setFieldValue('Clase', V)
                                }
                            >
                                <Picker.Item color="gray" label="Tipo de clase" value="" />
                                <Picker.Item color="black" label="Bárbaro" value="Bárbaro" />
                                <Picker.Item color="black" label="Bardo" value="Bardo" />
                                <Picker.Item color="black" label="Brujo" value="Brujo" />
                                <Picker.Item color="black" label="Explorador" value="Explorador" />
                                <Picker.Item color="black" label="Clérigo" value="Clérigo" />
                                <Picker.Item color="black" label="Druida" value="Druida" />
                                <Picker.Item color="black" label="Mago" value="Mago" />
                                <Picker.Item color="black" label="Guerrero" value="Guerrero" />
                                <Picker.Item color="black" label="Hechicero" value="Hechicero" />
                                <Picker.Item color="black" label="Paladín" value="Paladín" />

                                <Picker.Item color="black" label="Monje" value="Monje" />
                                <Picker.Item color="black" label="Pícaro" value="Pícaro" />
                            </Picker>
                        </View>
                    )
                }

            </Formik>

            <ScrollView>
                {

                    PersonajesLista.length > 0
                        ?
                        PersonajesLista.map((a, i) => (
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>{a.nombre}</ListItem.Title>
                                    <ListItem.Subtitle>{a.Raza}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{a.Clase}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{a.Edad + ' años'}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{a.Estatura + ' metros'}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{a.DescripcionGeneral}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                        :
                        <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 20 }}>No hay personajes que mostrar</Text>

                }
            </ScrollView>



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 20,
        marginTop: Constants.statusBarHeight

    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40
    },
    picker: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        overflow: 'hidden',
        elevation: 5,
    },

    containerHead: {
        backgroundColor: '#F8D5B5',
        flex: 1,
    },

});