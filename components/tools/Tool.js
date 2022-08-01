import { Text, View, StyleSheet, Image } from "react-native";

const Tool = ({ text, color, showImage }) => (
    <View style={styles.container}>
        <View style={[styles.box, color && { backgroundColor: color }]}>
            {showImage && (
                <Image
                    source={require("../../assets/calculator.png")}
                    style={styles.image}
                />
            )}
        </View>
        <Text style={styles.text}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: 65,
    },
    box: {
        width: 65,
        height: 65,
        borderRadius: 15,
        backgroundColor: "#324A60",
        marginBottom: 12,
        alignItems:"center",
        justifyContent:"center",
    },
    image: {
        width: 28,
        height: 38,
    },
    text: {
        color: "#D4DFEA",
        textAlign: "center",
        fontWeight:"500",
        lineHeight: 19,
    },
});

export default Tool;
