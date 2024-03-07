import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { styleContainer, colors } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide2({setPageI}:IPagina) {
    const slide = require('../../assets/VasoPlanta2.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Plant</Text>

                <View style={styles.quadroBranco}>
                    {/* <div style={styles.head}> */}
                        <Text style={styles.titleBoard}>Minhas plantas</Text>
                        <View style={styles.todasButton}>
                            <Text style={styles.todas}>TODAS</Text>
                        </View>
                    {/* </div> */}

                    <View style={styles.quadroPreto}>

                    </View>
                    <View style={styles.quadroPreto}>
                        
                    </View>
                    <View style={styles.quadroPreto}>
                        
                    </View>
                </View>

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