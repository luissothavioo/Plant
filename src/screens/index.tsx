import { styles } from "./styles";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";
import { Slide4 } from "./Slide4";
import { View, TouchableOpacity } from "react-native"
import { useState } from "react";

let Pagina = Slide1
export function Button() {
    const [page, setPage] = useState(1)
    switch (page) {
        case 1:
            Pagina = Slide1
            break;
        case 2:
            Pagina = Slide2
            break;
        case 3:
            Pagina = Slide3
            break;
        case 4:
            Pagina = Slide4
            break;
        default:
            Pagina = Slide1
            break;
    }
    return (
        <View style={styles.container}>
            {<View>
                <TouchableOpacity style={styles.ball} onPress={() => {
                    setPage(1)
                }
                } ></TouchableOpacity>

                <TouchableOpacity style={styles.ball} onPress={() => {
                    setPage(2)
                }
                } ></TouchableOpacity>

                <TouchableOpacity style={styles.ball} onPress={() => {
                    setPage(3)
                }
                } ></TouchableOpacity>

                <TouchableOpacity style={styles.ball} onPress={() => {
                    setPage(4)
                }
                } ></TouchableOpacity>
            </View>}
        </View>
    )
}