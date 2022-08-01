import { Text, View, StyleSheet, Pressable } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const Flashcard = ({ frontText, backText, onPressRight, onPressLeft, disableLeft, disableRight }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed && styles.containerPressed,
                flipped && styles.containerFlipped,
            ]}
            onPress={() => setFlipped(!flipped)}>
            <View style={styles.header}>
                <Text style={styles.labelText}>
                    {flipped ? "Definition" : "Term"}
                </Text>
                <View style={styles.helpContainer}>
                    <Text style={styles.helpText}>Tap to flip card</Text>
                    <FontAwesome5 name="redo-alt" size={14} color="#D4DFEA" />
                </View>
            </View>
            <Text style={[styles.mainText, flipped && styles.mainTextFlipped]}>
                {flipped ? backText : frontText}
            </Text>
            <View style={styles.footer}>
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={[styles.button, disableLeft && styles.buttonDisabled]}
                        onPress={() => {
                            onPressLeft();
                            setFlipped(false);
                        }}>
                        <Entypo name="chevron-left" size={24} color="white" />
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={[styles.button, disableRight && styles.buttonDisabled]} onPress={() => {
                            onPressRight();
                            setFlipped(false);
                        }}>
                        <Entypo name="chevron-right" size={24} color="white" />
                    </Pressable>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "#324A60",
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 32,
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
    },
    containerPressed: {
    },
    containerFlipped: {
        backgroundColor: "#122533",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 32,
    },
    helpContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    labelText: {
        color: "#B6C5D4",
        fontWeight: "400",
        fontSize: 16,
        marginRight: 12,
    },
    helpText: {
        color: "#D4DFEA",
        fontWeight: "400",
        fontSize: 14,
        marginRight: 12,
    },
    mainText: {
        fontSize: 26,
        color: "white",
        fontWeight: "500",
        paddingHorizontal: 24,
    },
    mainTextFlipped: {
        fontSize: 22,
        fontWeight: "400",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
    },
    buttonContainer: {
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 16,
        flex: 1,
    },
    buttonDisabled:{
        backgroundColor: "transparent",
        borderColor:"#324A60",
        borderWidth: 1,
    },
    button: {
        borderRadius: 16,
        height: 55,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#324A60",
    },
});

export default Flashcard;
