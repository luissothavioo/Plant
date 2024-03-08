import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { styleContainer, colors } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide3({ setPageI }: IPagina) {
    const slide = require('../../assets/VasoPlanta3.png')
    const cacto = require('../../assets/cacto.png')
    const espada = require('../../assets/espada.png')
    const filtro = require('../../assets/filtro.png')
    const lupa = require('../../assets/lupa.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Plant</Text>
                <View style={styles.quadroBranco}>
                    <View style={styles.head}>
                        <Text style={styles.titleBoard}>Descubra</Text>
                        <View style={styles.head2}>
                            <View style={styles.icone}>
                                <Image source={filtro}/>
                            </View>
                            <View style={styles.pesquisar}>
                                <Text style={styles.campoPesquisar}>Digite a planta</Text>
                            </View>
                            <View style={styles.icone}>
                                <Image source={lupa}/>
                            </View>
                        </View>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.quadroPreto}>
                            <View style={styles.image}>
                                <Image source={cacto} />
                            </View>
                            <Text style={styles.textTitleBoard}>Cacto</Text>
                        </View>
                        <View style={styles.padding} />
                        <View style={styles.quadroPreto}>
                            <View style={styles.image}>
                                <Image source={espada} />
                            </View>
                            <Text style={styles.textTitleBoard}>Espada</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitle}>descubra novas belezas para desabrochar sua vida</Text>
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