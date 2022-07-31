import { Text, StyleSheet, Pressable, View} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const LessonButton = ({ text = "ButtonText", onPress, checked }) => {
    let icon;
    switch (text) {
        case "Article":
            icon = <FontAwesome5 name="newspaper" size={20} color="white" />;
            break;
        case "Quiz":
            icon = <FontAwesome5 name="pencil-alt" size={20} color="white" />;
            break;
        case "Matching Game":
            icon = <FontAwesome5 name="gamepad" size={20} color="white" />;
            break;
        case "Tool":
            icon = <FontAwesome5 name="tools" size={20} color="white" />;
            break;
        default:
            icon = (
                <FontAwesome5 name="question-circle" size={20} color="white" />
            );
            break;
    }
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? "#122533" : "transparent",
                },
                styles.container,
            ]}
            onPress={onPress}>
            <View style={styles.leftContainer}>
                {icon}
                <Text style={styles.text}>{text}</Text>
            </View>
            {checked ? <FontAwesome5 name="check" size={20} color="#228D23" /> : <FontAwesome5 name="angle-right" size={20} color="#B6C5D4" />}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 360,
        borderWidth: 2,
        borderColor: "#324A60",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",

    },
    leftContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    text: {
        color: "white",
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginLeft: 16,
    },
});

export default LessonButton;
