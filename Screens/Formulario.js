import React, { useContext } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import { dndContext } from '../Contexto/dndContext';
import Constants from 'expo-constants';
import firebase from '../Settings/ConfigFirebase';
import { StatusBar } from 'expo-status-bar';


export default function Formulario({ route, navigation }) {
    const { status } = route.params;

    const { dndPersonaje, PersonajesLista, setdndPersonaje, setLista } = useContext(dndContext);

    return (
        
        <View style={styles.container2}>
                <StatusBar backgroundColor = "#D32430"/>   

            <Header
            centerComponent={{ text: 'Personaje a crear', style: { color: '#fff', fontSize:20} }}
            leftComponent={{ icon: 'arrow-back', color: '#fff',   onPress:()=>{
                navigation.goBack();
            }}}
            containerStyle={{backgroundColor:'#D32430'}}
        />
        <View style={styles.container}>
            {/* <Text style={styles.header}>Personaje a crear</Text> */}
            

            <Formik
                initialValues={dndPersonaje}
                onSubmit={(values, { resetForm }) => {
                    firebase.database().ref('proyectofinaldnd/'+dndPersonaje.id).update(dndPersonaje).then(() => {
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
                        DescripcionGeneral: "",
                    })
                    navigation.goBack();
                }}
                     validate={(values) => {
                    setdndPersonaje(values)
                    console.log(dndPersonaje)
                }}

            >
                {
                    ({ handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values }) => (
                        <View>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('id')}
                                onBlur={handleBlur('id')}
                                placeholder='Id personaje'
                                value={values.id}
                                editable={status === "add" ? true : false}
                            />

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('nombre')}
                                onBlur={handleBlur('nombre')}
                                placeholder='Nombre del personaje'
                                value={values.nombre}
                            />

                            <View style={styles.picker}>
                                <Picker
                                    mode="dialog"
                                    style={{ height: 40, backgroundColor: 'white' }}
                                    selectedValue={values.Raza}
                                    onValueChange={(V) =>
                                        setFieldValue('Raza', V)
                                    }
                                >
                                    <Picker.Item color="gray" label="Raza" value="" />
                                    <Picker.Item color="black" label="Dracónico" value="Dracónico" />
                                    <Picker.Item color="black" label="Elfo" value="Elfo" />
                                    <Picker.Item color="black" label="Enano" value="Enano" />
                                    <Picker.Item color="black" label="Gnomo" value="Gnomo" />
                                    <Picker.Item color="black" label="Humano" value="Humano" />
                                    <Picker.Item color="black" label="Mediano" value="Mediano" />
                                    <Picker.Item color="black" label="Semiorco" value="Semiorco" />
                                    <Picker.Item color="black" label="Tiefling" value="Tiefling" />
                                    <Picker.Item color="black" label="Semielfo" value="Semielfo" />
                                </Picker>
                            </View>

                            <View style={styles.picker}>
                                <Picker
                                    mode="dialog"
                                    style={{ height: 40, backgroundColor: 'white' }}
                                    selectedValue={values.Clase}
                                    onValueChange={(V) =>
                                        setFieldValue('Clase', V)
                                    }
                                >
                                    <Picker.Item color="gray" label="Clase" value="" />
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

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('Edad')}
                                onBlur={handleBlur('Edad')}
                                placeholder='Edad (en años)'
                                value={values.Edad}
                            />
                            {errors.Edad && <Text style={styles.texterror}>{errors.Edad}</Text>}


                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('Estatura')}
                                onBlur={handleBlur('Estatura')}
                                placeholder='Estatura  (en metros)'
                                value={values.Estatura}
                            />
                            {errors.Estatura && <Text style={styles.texterror}>{errors.Estatura}</Text>}

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('DescripcionGeneral')}
                                onBlur={handleBlur('DescripcionGeneral')}
                                placeholder='DescripcionGeneral'
                                value={values.DescripcionGeneral}
                            />
                            {errors.DescripcionGeneral && <Text style={styles.texterror}>{errors.DescripcionGeneral}</Text>}

                            <View style={{ marginTop: 20 }}>
                                <Button
                                    buttonStyle={styles.buttons}
                                    onPress={handleSubmit}
                                    title="Enviar"
                                />

                                {
                                    status === "add"
                                    &&
                                    <Button
                                        buttonStyle={styles.buttons}
                                        onPress={handleReset}
                                        title="Limpiar"
                                    />

                                }
                            </View>

                        </View>


                    )

                }

            </Formik>

        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        marginTop: Constants.statusBarHeight,
        borderColor: '#F8D5B5',
        backgroundColor: '#F8D5B5'

    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F8D5B5'
    },
    texterror: {
        color: 'red'
    },
    textinput: {
        borderRadius: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        paddingLeft: 15,
        backgroundColor: 'white',
        elevation: 5,
    },
    buttons: {
        backgroundColor: 'gray',
        color: 'black',
        marginTop: 10,
        borderRadius: 10
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
    picker: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        overflow: 'hidden',
        elevation: 5,
    }

});
