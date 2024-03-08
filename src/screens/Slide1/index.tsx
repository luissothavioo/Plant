import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { styleContainer, colors } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide1({setPageI}:IPagina) {
    const slide = require('../../assets/VasoPlanta1.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textTitle}>Plant</Text>
                    <Text style={styles.text}>seu diário botânico pessoal</Text>
                </View>
            </View>
            <View style={styles.containerButton}>
                    <View style={styles.butt}>
                        <ButtonSlide style={styles.butt} onPressI={() => setPageI(1)} />
                    </View>
                    <View style={styles.butt}>
                        <ButtonSlide style={styles.butt} onPressI={() => setPageI(2)} />
                    </View>
                    <View style={styles.butt}>
                        <ButtonSlide style={styles.butt} onPressI={() => setPageI(3)} />
                    </View>
                    <View style={styles.butt}>
                        <ButtonSlide style={styles.butt} onPressI={() => setPageI(4)} />
                    </View>
                </View>
        </ImageBackground>
    )
}