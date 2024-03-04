import { StyleSheet } from "react-native";
import { colors } from "../styles/globalstyle";

export const styles = StyleSheet.create({
    ball: {
        width: 30,
        height: 30,
        backgroundColor: colors.cinza,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: colors.black,
    },

    container: {
        flexDirection: "row",
        paddingBottom: 30,
    },

    TouchOpacity: {
        paddingLeft: 30,
    },
})