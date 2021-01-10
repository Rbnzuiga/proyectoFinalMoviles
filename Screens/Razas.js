import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Razas = ({ navigation, route }) => {
    return (
    
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container2}>
    <ScrollView>
            <Text style={styles.textziseT}>{"\n"}Razas{"\n"}</Text>
            <Text style={styles.textziseT}>Dracónico</Text>
            <Text style={styles.textziseP}>
            Tu herencia dracónida se manifiesta en una
             serie de rasgos que compartes con otros 
             dracónidos. Los dracónidos tienden hacia los 
             extremos en la guerra cósmica entre el bien y 
             el mal. La mayoría son buenos, pero los que se ponen 
             de lado del mal pueden ser terriblemente malignos.
            </Text>
            <Text style={styles.textziseT}>Elfo</Text>
            <Text style={styles.textziseP}>
            Los elfos circulan libremente por las tierras de los humanos, 
            donde siempre son bienvenidos pero nunca se encuentran como 
            en casa. Son gentes conocidas por su poesía, baile, canto, saber
             y artes mágicas, y gustan de las cosas cuya belleza sea natural y sencilla.
            </Text>
            <Text style={styles.textziseT}>Enano</Text>
            <Text style={styles.textziseP}>
            Los enanos son conocidos por su habilidad en el arte de la guerra, su gran resistencia a los castigos, su conocimiento de los secretos de la tierra, su dedicación al trabajo y su capacidad para beber cerveza. Los enanos son gente poco dada a las risas o las bromas, y suelen mostrarse recelosos con los desconocidos; sin embargo, se comportan de forma generosa con los que se ganan su confianza.
            </Text>
            <Text style={styles.textziseT}>Gnomo</Text>
            <Text style={styles.textziseP}>
            Los gnomos son bienvenidos en todas partes como técnicos, alquimistas e inventores, pero muchos de ellos prefieren quedarse entre los suyos aunque sus habilidades estén muy demandadas. Viven en cómodas madrigueras excavadas bajo colinas onduladas y frondosas. Aunque en estos lugares abundan los animales, ir de caza es una pésima idea.
            </Text>
            <Text style={styles.textziseT}>Humano</Text>
            <Text style={styles.textziseP}>
            En los registros de la mayoría de los mundos, los humanos son la más joven de las razas comunes. Han llegado comparativa- mente tarde al mundo y sus vidas son más cortas que las de enanos, elfos y dragones. Y quizá sea precisamente por estas breves existencias por lo que los humanos aspiran a conseguir tanto como sean capaces en los años que se les han concedido.
            </Text>
            <Text style={styles.textziseT}>Mediano</Text>
            <Text style={styles.textziseP}>
            Tu personaje mediano tiene unos cuantos rasgos en común con el resto de medianos.

La mayoría de los medianos son neutrales buenos. Como norma general, tienen buen corazón y son amables, odian ver a otros sufrir y no toleran la opresión. También son pacíficos y tradicionales, tienen una fuerte tendencia a apoyar a su comunidad y nunca renuncian a la comodidad de sus costumbres.
            </Text>
            <Text style={styles.textziseT}>Semiorco</Text>
            <Text style={styles.textziseP}>
            Tu personaje semiorco tiene ciertos rasgos que derivan 
            de su ancestro orco. Los semiorcos heredan la tendencia
             hacia el caos de sus progenitores orcos y no están muy 
             inclinados hacia el bien. Los semiorcos que se crían entre
              orcos y que permanecen entre ellos suelen ser malignos.
            </Text>
            <Text style={styles.textziseT}>Tiefling</Text>
            <Text style={styles.textziseP}>
            Puede que los tieflings no tengan una tendencia innata hacia el mal, pero muchos de ellos acaban ahí. Maligna o no, una fuerza externa inclina a muchos tieflings hacia un alineamiento caótico.
            </Text>
            <Text style={styles.textziseT}>Semielfo</Text>
            <Text style={styles.textziseP}>
            Tu personaje semielfo tiene algunas cracterísticas en común con los elfos y otras que son únicas para los semielfos.

Los semielfos comparten la inclinación caótica de su herencia élfica. Valoran tanto la libertad personal como la expresión de la creatividad y no demuestran ni amor por los líderes ni deseo de tener seguidores. Les irritan las reglas, se ofenden ante las exigencias de los demás y a veces son poco fiables o, al menos, impredecibles.
            </Text>
            </ScrollView>
        </View>
  
    </SafeAreaView>

    )
}
export default Razas;

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