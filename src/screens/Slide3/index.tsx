import { ImageBackground, Text, View, StyleSheet } from "react-native"; //AQUI TAMBÉM COLOCA OS COMPONENTES
import { styleContainer, colors } from "../../styles/globalstyle"
import { styles } from "./styles"
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide3() {
    const slide = require('../../assets/VasoPlanta1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Plant</Text>
                <Text style={styles.text}>se</Text>
            </View>

        </ImageBackground>
    )
}