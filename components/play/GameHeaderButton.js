import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";

const GameHeaderButton = ({ onPress, text, color }) => (
    <Pressable style={styles.container} onPress={onPress}>
        <View
            style={[styles.leftContainer, color && { backgroundColor: color }]}>
            {text === "Leaderboards" ? (
                <Image
                    source={require("../../assets/medals.png")}
                    style={{ width: 38, height: 25 }}
                />
            ) : (
                <Image
                    source={require("../../assets/think-emoji.png")}
                    style={{ width: 28, height: 28 }}
                />
            )}
        </View>
        <View style={styles.rightContainer}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#324A60",
        width: 165, //Change this to be dynamic
        height: 45,
        borderRadius: 16,
        alignItems: "center",
    },
    leftContainer: {
        width: 50,
        backgroundColor: "#6F63FF",
        height: "100%",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    rightContainer: {
        flex: 1,
    },
    text: {
        color: "white",
        fontWeight: "500",
        fontSize: 14,
        textAlign: "center",
    },
});

export default GameHeaderButton;
