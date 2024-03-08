import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../styles/globalstyle"

export const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: colors.whiteBackground
    },
    textTitle: {
        color: colors.white,
        fontSize: 75,
        fontFamily: 'Offside_400Regular',
        textAlign: "center",
    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontFamily: 'Inter_700Bold',
        paddingBottom: 150,
        textAlign: "center",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    containerButton: {
        flexDirection: "row",
        paddingBottom: 40,
    },
    butt: {
        paddingLeft: 20,
        paddingRight: 20,
    },
})