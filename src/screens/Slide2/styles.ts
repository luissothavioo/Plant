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
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        flexDirection: "row",
        //paddingTop: 200,
    },
    quadroBranco: {
        backgroundColor: colors.whiteBackground,
        borderRadius: 15,
        width: 370,
        padding: 5,
    },
    quadroPreto: {
        backgroundColor: colors.black,
    },

    //TEXTOS
    textTitle: {
        color: colors.white,
        fontSize: 75,
    },
    text: {
        color: colors.white,
        fontSize: 20,
        paddingBottom: 150,
    },
    titleBoard: {
        color: colors.black,
        fontSize: 45,
    },
    todas: {
        color: colors.white,
        fontSize: 20,
    },
    
    //COMPONENTES
    butt: {
        paddingLeft: 10,
        paddingRight: 5,
    },
    todasButton: {
        backgroundColor: colors.black,
        borderRadius: 20,
    },
    //head: {
    //    flexDirection: "row",
    //}

})