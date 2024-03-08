import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { styleContainer, colors } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide4({ setPageI }: IPagina) {
    const slide = require('../../assets/VasoPlanta4.png')
    const margarida = require('../../assets/margarida.png')
    const vasinho = require('../../assets/vasinho.png')
    const terra = require('../../assets/terra.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Plant</Text>
                <View style={styles.quadroBranco}>
                    <View style={styles.head}>
                        <Text style={styles.titleBoard}>Margarida</Text>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.quadroPreto}>
                            <View style={styles.area}>
                                <Text style={styles.textTitleBoard}>Nome científico</Text>
                                <Text style={styles.text}>Leucanthemum vulgare</Text>
                            </View>
                            <View style={styles.area}>
                                <Text style={styles.textTitleBoard}>Classificação superior</Text>
                                <Text style={styles.text}>Leucanthemum</Text>
                            </View>
                            <View style={styles.area}>
                                <Text style={styles.textTitleBoard}>Família</Text>
                                <Text style={styles.text}>Asteraceae</Text>
                            </View>
                            <View style={styles.area}>
                                <Text style={styles.textTitleBoard}>Ordem</Text>
                                <Text style={styles.text}>Asterales</Text>
                            </View>
                            <View style={styles.area}>
                                <Text style={styles.textTitleBoard}>Reino</Text>
                                <Text style={styles.text}>Plantae</Text>
                            </View>

                            <View style={styles.area}>
                                <Text style={styles.textTitleBoard}>Cuidados</Text>
                                <Text style={styles.text}>• raios de sol ao menos em uma parte do dia;</Text>
                                <Text style={styles.text}>• não gosta muito de frio;</Text>
                                <Text style={styles.text}>• rega: ao menos uma vez ao dia moderadamente;</Text>
                            </View>
                            <View style={styles.body}>
                                <Image source={vasinho}/>
                                <Image source={terra}/>
                            </View>
                        </View>
                        
                        <View style={styles.image}>
                            <Image source={margarida} />
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitle}>veja as informações para melhor enraizar sua planta</Text>
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