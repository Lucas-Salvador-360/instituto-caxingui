import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"
import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle"
import { useState } from "react"
import { router } from "expo-router"

export const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return(
        <View
            style={styles.container}
        >
            <Text style = {styles.title}>
                
            </Text>
            <InputWithTitle
                setText={setEmail}
                title="E-mail:"
            />
            <InputWithTitle
                setText={setSenha}
                title="Senha:"
            />
            <ButtonCustom
                titleButton="LOGIN"
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 300,
                    width: 100, 
                    height: 40
                }}
                styleText={{
                    color: colors.PRIMARY
                }}
                handleClick={() => router.navigate("/(app)/home/home")}
            />
            <ButtonCustom
                titleButton="esqueci minha senha"
                styleContainer={{
                    backgroundColor: colors.PRIMARY,
                    position: "absolute",
                    bottom: 370,
                    width: 400, 
                    height: 40
                }}
                styleText={{
                    color: colors.WHITE
                }}
            />
        </View>
    )
}