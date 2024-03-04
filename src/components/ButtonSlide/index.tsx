import { styles } from "./styles";
import { Button, Pagina } from "../../screens/index";
import { View, Text, TouchableOpacity } from "react-native"

export function ButtonSlide() {
    return(
        <View style = {styles.container}>
        
            <View >
                <Pagina></Pagina>
            </View>

            <Button/>
        </View>
    )
}