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
    },
    text: {
        color: colors.white,
        fontSize: 20,
        paddingBottom: 150,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        flexDirection: "row",
    },
    butt: {
        paddingLeft: 10,
        paddingRight: 5,
    },
})