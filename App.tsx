import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native"
import { Slide1 } from "./src/screens/Slide1"
import { Slide2 } from "./src/screens/Slide2"
import { Dispatch, SetStateAction, useState } from "react"
import { Slide3 } from "./src/screens/Slide3"
import { Slide4 } from "./src/screens/Slide4"

export interface IPagina {
  setPageI: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page, setPage] = useState(1)
  return (
    <>
      <Slide2 setPageI={setPage} />
    </>
  )
}
