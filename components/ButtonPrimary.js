import { Text, View, StyleSheet, Pressable } from "react-native";

const ButtonPrimary = ({text, onPress}) => (
    <Pressable style={({ pressed })=>[styles.container, pressed && styles.buttonPressed]} onPress={onPress}>
        <Text style={styles.text}>Get Started</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        paddingVertical:16,
        paddingHorizontal:72,
        borderRadius:12,
    },
    buttonPressed:{
        backgroundColor:"#69ABE6",
    },
    text:{
        color:'#0A1E2D',
        fontSize:20,
        fontWeight:"500",
    },

});

export default ButtonPrimary;
