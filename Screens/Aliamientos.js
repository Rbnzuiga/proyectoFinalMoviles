import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Aliniamientos = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container2}>
    <ScrollView>
            <Text style={styles.textziseT}>{"\n"}Alineamientos{"\n"}</Text>
            <Text style={styles.textziseT}>Legal bueno</Text>
            <Text style={styles.textziseP}>
            Un personaje legal bueno actúa como una buena persona se espera que que actúe. Combina el compromiso a oponerse al mal con la disciplina de luchar incansablemente. Dice la verdad, mantiene su palabra, ayuda a quienes le necesiten, y alza la voz contra la injusticia. Un personaje Legal bueno odia ver a los culpables salir sin castigo. Legal bueno es el mejor alineamiento si buscas combinar honor y compasión.            </Text>
            <Text style={styles.textziseT}>Neutro bueno</Text>
            <Text style={styles.textziseP}>
            Un personaje neutral bueno hace lo mejor puede hacer una persona buena. Es devoto a ayudar a otros. Trabaja con los reyes y magistrados pero no se siente sujeto a ellos. Neutral bueno es el mejor alineamiento que puedes ser si buscas hacer lo que parece bueno sin preocuparse si esta a favor o en contra del orden.            </Text>
            <Text style={styles.textziseT}>Caotico bueno</Text>
            <Text style={styles.textziseP}>
            Un personaje caótico bueno actúa de acuerdo a lo que su consciencia le dice sin importar lo que otros esperan de él. Hace su propio camino, pero es amable y benevolente. Cree en el bien y el derecho, pero no recurre a las leyes o las regulaciones. Odia cuando la gente intimida a otros y les dice que hacer. Sigue lo que considera moral, que si bien pueda ser bueno, no necesariamente está de acuerdo con la sociedad. Caótico bueno es el mejor alineamiento que puedes ser si buscas combinar un buen corazón con un espíritu libre. </Text>
            <Text style={styles.textziseT}>Legal neutro</Text>
            <Text style={styles.textziseP}>
            Un personaje legal neutral actúa según la ley, tradición o el código personal dice. El orden y la organización son lo más importante. Puede cree en el orden personal y vivir según un código personal o puede creer en el orden para todos y favorecer un gobierno fuerte y organizado. Legal Neutral es el mejor alineamiento que puedes ser si buscas parecer de fiar y honorable sin tender al fanatismo.               </Text>
            <Text style={styles.textziseT}>Neutral</Text>
            <Text style={styles.textziseP}>
            Un personaje neutral hace lo que le parece ser una buena idea. No se siente comprometido hacia el bien o el mal, lo legal o lo caótico. La mayoría de los personajes neutrales muestran una falta de convicción. Ellos piensan que el bien es mejor que el mal, después de todo, es mejor tener buenos vecinos a malos. Aun así, no se sienten comprometidos a realizar el bien de una forma abstracta o universal. Algunos personajes neutrales, por el otro lado, se sienten adheridos filosóficamente a la neutralidad. Ven que el bien, el mal, la ley y el caos como prejuicios y extremos peligrosos. Creen que la neutralidad es el camino más balanceado al final del camino. Neutral es el mejor alineamiento que puedes ser si buscas actúar de forma natural, sin prejuicio o compulsión alguna.                    </Text>
            <Text style={styles.textziseT}>Caotico neutral</Text>
            <Text style={styles.textziseP}>
            Un personaje caótico neutral sigue lo que siente. Es un individualista. Valora su propia libertad y pero no pelea por proteger la libertad de otros. Evita la autoridad, las restricciones y se opone a la tradición. Un personaje caótico neutral no busca destruir organizaciones como si fuera una campaña de anarquía. Si lo hiciese, lo haría estando motivado por el bien(liberar a otros) o el mal (hacer sufrir a quienes son diferentes a él). Un personaje caótico neutral puede ser impredecible, pero su comportamiento no necesariamente es en base al azar. No necesariamente saltaría un puente sólo porque “tradicionalmente” debe cruzarse. Caótico Neutral es el mejor alineamiento que puedes ser si buscas representar la verdadera libertad ya sea de la sociedad o los dictámenes del bien y el mal.            </Text>
            <Text style={styles.textziseT}>Legal malo</Text>
            <Text style={styles.textziseP}>
            Un villano legal malo tome todo aquello que este dentro de los limites de su código de conducta. Le importan la tradición, lealtad y y el orden, pero no la libertad, dignidad o la vida. Sigue las reglas del juego pero sin piedad o compasión. Algunos villanos legal malignos tienen tabús particulares, como no matar a sangre fría (pero a la vez deja que sus secuaces se encarguen de ello). Se imaginan que estas restricciones auto impuestas los colocan en una posición superior al de los villanos comunes y corrientes. Algunos villanos legales malos se comprometen al mal como si fueran un cruzado. Les gusta esparcir el mal como un fin en sí mismo o bien como parte de un deber. Se suele asociar lo diabólico con el legal mal, porque el diablo es lo que se considera la representación misma de este alineamiento. Legal malo es el alineamiento más peligroso porque representa el mal metódico, intencional y frecuentemente planeado.            </Text>
            <Text style={styles.textziseT}>Neutral malo</Text>
            <Text style={styles.textziseP}>
            Un villano neutral malo hace lo que puede para salirse con la suya. Vive sólo para sí mismo, tan simple como eso. No derrama lágrimas por aquellos que mata, ya sean por dinero, deporte o conveniencia. No siente amor por el orden ni tampoco por la obediencia a las leyes, tradiciones, o códigos que le permitan ser ser mejor o más noble. Por el otro lado, tampoco tiene la naturaleza incansable o el amor al conflicto que muestran los villanos caótico malo. Algunos villanos “neutral malo” siguen al mal como un ideal, realizando el mal por su propio bien. Mas a menudo, estos villanos están dentro de las sociedades secretas o siguen dioses malignos. Neutral malo es un alineamiento peligroso porque representa al mal puro sin honor ni tampoco sin variación alguna.                 </Text>
            <Text style={styles.textziseT}>Caotico malo</Text>
            <Text style={styles.textziseP}>
            Un personaje caótico malo hace lo que su ambición, odio y sed de destrucción lo llevan a hacer. Es un vicioso de alto temperamento, arbitrariamente violento e impredecible. Afortunadamente sus planes no suelen estar bien estructurados, y cualquier grupo que se une o forma están muy mal organizados. Normalmente la gente “caótico malo” sólo trabajan juntos por la fuerza y su líder dura sólo mientras él pueda mantenerse vivo. Caótico malo a veces es llamado “demoníaco” porque los demonios son los representantes de “caótico malo” Caótico malo es el alineamiento mas peligroso porque representa la destrucción de no solo lo que es bello y vivo sino también del orden del cual la belleza y la vida dependen.            </Text>

            </ScrollView>
        </View>
  
    </SafeAreaView>

    )
}
export default Aliniamientos;

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