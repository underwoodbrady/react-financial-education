import { useState } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons'; 


const Goals = ({ i = 0, label, complete = false }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <Pressable
            onPress={() => setIsChecked(!isChecked)}
            style={[styles.container, isChecked && {backgroundColor:"#122533"}]}>
            <View style={styles.textContainer}>
                <Text style={styles.numberText}>{i}.</Text>
                <Text style={styles.labelText}>{label}</Text>
            </View>
            <View style={styles.checkbox}>
                {isChecked && <View style={styles.checked}></View>}
				{isChecked &&<Entypo name="check" size={16} color="white" />}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "#324A60",
        borderRadius: 16,
        padding: 16,
        width: 360,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textContainer: {
        flexDirection: "row",
        overflow: "hidden",
    },
    numberText: {
        color: "white",
        fontWeight: "600",
        marginRight: 12,
    },
    labelText: {
        color: "white",
    },
    checkbox: {
        width: 16,
        height: 16,
        alignSelf: "center",
        borderRadius: 4,
        backgroundColor: "#324A60",
    },
    checked: {
        position: "absolute",
        width: 16,
        height: 16,
        borderRadius: 4,
    },
});

export default Goals;
