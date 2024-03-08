import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../styles/globalstyle"

export const styles = StyleSheet.create({
    // FUNDOS
    fundo: {
        flex: 1,
        backgroundColor: colors.whiteBackground
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    containerButton: {
        flexDirection: "row",
        paddingBottom: 40,
    },
    quadroBranco: {
        backgroundColor: colors.whiteBackground,
        borderRadius: 25,
        width: 370,
        height: 235,
        paddingLeft: 5,
        paddingRight: 5,
    },
    quadroPreto: {
        backgroundColor: colors.black,
        width: 115,
        height: 165,
        borderRadius: 25,
    },
    paddingTodasButton: {
        justifyContent: "center",
        paddingTop: 15,
        paddingLeft: 25,
    },
    body: {
        flexDirection: "row",
        paddingTop: 5,
    },
    padding: {
        padding: 3,
    },

    //TEXTOS
    textTitle: {
        color: colors.white,
        fontSize: 75,
        fontFamily: 'Offside_400Regular',
    },
    textTitleBoard: {
        color: colors.white,
        fontSize: 21,
        textAlign: "center",
        fontFamily: 'OdorMeanChey_400Regular',
    },
    titleBoard: {
        color: colors.black,
        fontSize: 40,
        paddingRight: 10,
        fontFamily: 'OdorMeanChey_400Regular'
    },
    text: {
        color: colors.white,
        fontSize: 10,
        textAlign: "center",
    },
    todas: {
        color: colors.white,
        fontSize: 15,
    },
    subtitle: {
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'Inter_700Bold',
        paddingTop: 15,
    },
    
    //COMPONENTES
    butt: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    todasButton: {
        backgroundColor: colors.black,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 25,
        width: 80,
    },
    head: {
        flexDirection: "row",
        height: 50,
    },
    image: {
        paddingLeft: 40,
    }
})