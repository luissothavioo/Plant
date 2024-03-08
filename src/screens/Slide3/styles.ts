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
        paddingBottom: 40,
    },
    quadroBranco: {
        backgroundColor: colors.whiteBackground,
        borderRadius: 25,
        width: 370,
        height: 350,
        padding: 5,
    },
    quadroPreto: {
        backgroundColor: colors.black,
        width: 165,
        height: 250,
        borderRadius: 25,
    },
    body: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 5,
    },
    padding: {
        padding: 3,
    },
    paddingTodasButton: {
        justifyContent: "center",
    },

    //TEXTOS
    textTitle: {
        color: colors.white,
        fontSize: 75,
        fontFamily: 'Offside_400Regular',
    },
    titleBoard: {
        color: colors.black,
        fontSize: 40,
        paddingRight: 10,
        fontFamily: 'OdorMeanChey_400Regular'
    },
    textTitleBoard: {
        color: colors.white,
        fontSize: 21,
        textAlign: "center",
        fontFamily: 'OdorMeanChey_400Regular',
    },
    text: {
        color: colors.white,
        fontSize: 10,
        textAlign: "center",
    },
    todas: {
        color: colors.white,
        fontSize: 20,
    },
    subtitle: {
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'Inter_700Bold',
        paddingTop: 15,
    },
    campoPesquisar: {
        paddingLeft: 5,
        paddingTop: 2,
    },
    
    //COMPONENTES
    butt: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    head: {
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,
    },
    head2: {
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
    },
    todasButton: {
        backgroundColor: colors.black,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: 70,
    },
    image: {
        alignItems: "center",
    },
    pesquisar: {
        width: 200,
        height: 20,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: colors.cinza,
        borderColor: colors.black,
    },
    icone: {
        paddingRight: 5,
        paddingLeft: 5,
    }

})