import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { styleContainer, colors } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide2({ setPageI }: IPagina) {
    const slide = require('../../assets/VasoPlanta2.png')
    const rosa = require('../../assets/rosa.png')
    const suculenta = require('../../assets/suculenta.png')
    const girassol = require('../../assets/girassol.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Plant</Text>
                    <View style={styles.quadroBranco}>
                        <View style={styles.head}>
                            <Text style={styles.titleBoard}>Minhas plantas</Text>
                            <View style={styles.paddingTodasButton}>
                                <View style={styles.todasButton}>
                                    <Text style={styles.todas}>TODAS</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.body}>
                            <View style={styles.quadroPreto}>
                                <View style={styles.image}>
                                    <Image source={rosa} />
                                </View>
                                <Text style={styles.textTitleBoard}>Rosa</Text>
                                <Text style={styles.text}>uma das flores mais populares do mundo</Text>
                            </View>
                            <View style={styles.padding} />
                            <View style={styles.quadroPreto}>
                                <View style={styles.image}>
                                    <Image source={suculenta} />
                                </View>
                                <Text style={styles.textTitleBoard}>Suculenta</Text>
                                <Text style={styles.text}>armazena água em quantidades maiores</Text>
                            </View>
                            <View style={styles.padding} />
                            <View style={styles.quadroPreto}>
                                <View style={styles.image}>
                                    <Image source={girassol} />
                                </View>
                                <Text style={styles.textTitleBoard}>Girassol</Text>
                                <Text style={styles.text}>nome derivado do formato de sua inflorescência</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.subtitle}>gerencie suas plantas de forma simples</Text>
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