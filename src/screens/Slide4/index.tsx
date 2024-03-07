import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { styleContainer, colors } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide4({setPageI}:IPagina) {
    const slide = require('../../assets/VasoPlanta4.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Plant</Text>
                <Text style={styles.text}>seu diário botânico pessoal</Text>
                <View style={styles.containerButton}>
                    <ButtonSlide style={styles.butt} onPressI={() => setPageI(1)} />
                    <ButtonSlide style={styles.butt} onPressI={() => setPageI(2)} />
                    <ButtonSlide style={styles.butt} onPressI={() => setPageI(3)} />
                    <ButtonSlide style={styles.butt} onPressI={() => setPageI(4)} />
                </View>
            </View>
        </ImageBackground>
    )
}