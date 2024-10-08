import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";




export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0)',
        width: "100%"
    },
    Title: {
        fontFamily: 'Nunito',
        fontSize: 18,
        fontWeight: "bold",
        alignItems: 'center',
        color: colors.BLACK,
        marginBottom: 24,
        height: 65,
        width: 300,
        textAlign: 'center',
        marginHorizontal: 10,
        marginVertical: 30,
    },
    Image: {
        width: 200,
        height: 300,
        borderRadius: 20
    }
})