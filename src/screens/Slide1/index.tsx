import { ImageBackground, Text, View } from "react-native";
import { styleContainer, styleText, styleElementos } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide1({ setPageI }: IPagina) {
    const slide = require('../../assets/VasoPlanta1.png')
    
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View>
                    <Text style={styleText.textTitle}>Plant</Text>
                    <Text style={styles.text}>seu diário botânico pessoal</Text>
                </View>
            </View>
            
            <View style={styleContainer.containerButton}>
                <View style={styleElementos.butt}>
                    <ButtonSlide onPressI={() => setPageI(1)} />
                </View>
                <View style={styleElementos.butt}>
                    <ButtonSlide onPressI={() => setPageI(2)} />
                </View>
                <View style={styleElementos.butt}>
                    <ButtonSlide onPressI={() => setPageI(3)} />
                </View>
                <View style={styleElementos.butt}>
                    <ButtonSlide onPressI={() => setPageI(4)} />
                </View>
            </View>
        </ImageBackground>
    )
}