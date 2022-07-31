import { Text, Image, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

const InputBox = ({placeholder, secureTextEntry}) => {
    const [text, onChangeText] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder}
                placeholderTextColor={"#B6C5D4"}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {},
    label: {
        color: "white",
    },
    input:{
        width:300,
        height:50,
        color:"white",
        borderWidth: 2,
        paddingVertical:16,
        paddingLeft:16,
        fontSize:16,
        borderColor:"#324A60",
        borderRadius:8,
    },
});

export default InputBox;
